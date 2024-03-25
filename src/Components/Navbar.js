import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editQuery, setEditQuery] = useState('');

  useEffect(() => {
    fetchSearchHistory();
  }, []);

  const fetchSearchHistory = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/search-history');
      if (response.ok) {
        const data = await response.json();
        setSearchHistory(data);
      } else {
        throw new Error('Failed to fetch search history');
      }
    } catch (error) {
      console.error('Error fetching search history:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/search-history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: searchQuery }),
      });
      if (response.ok) {
        console.log('Search data saved successfully');
        fetchSearchHistory(); // Fetch updated search history
      } else {
        throw new Error('Failed to save search data');
      }
    } catch (error) {
      console.error('Error saving search data:', error);
    }
  };

  const handleEdit = (id, query) => {
    setEditingId(id);
    setEditQuery(query);
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/search-history/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: editQuery }),
      });
      if (response.ok) {
        console.log('Search data updated successfully');
        fetchSearchHistory(); // Fetch updated search history
        setEditingId(null);
        setEditQuery('');
      } else {
        throw new Error('Failed to update search data');
      }
    } catch (error) {
      console.error('Error updating search data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/search-history/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Search data deleted successfully');
        fetchSearchHistory(); // Fetch updated search history
      } else {
        throw new Error('Failed to delete search data');
      }
    } catch (error) {
      console.error('Error deleting search data:', error);
    }
  };

  return (
    <div className="navbar">
      <h1 className="logo">Pokedex</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Pokemon.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="search-history">
        <h2>Search History</h2>
        <ul>
          {searchHistory.map((item) => (
            <li key={item._id}>
              {editingId === item._id ? (
                <>
                  <input
                    type="text"
                    value={editQuery}
                    onChange={(e) => setEditQuery(e.target.value)}
                  />
                  <button onClick={() => handleUpdate(item._id)}>Update</button>
                </>
              ) : (
                <>
                  {item.query}
                  <button onClick={() => handleEdit(item._id, item.query)}>Edit</button>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
