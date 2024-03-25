import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrudComponent = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [formData, setFormData] = useState({
    query: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchSearchHistory();
  }, []);

  const fetchSearchHistory = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/search-history');
      if (response.status === 200) {
        setSearchHistory(response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/search-history', formData);
      if (response.status === 201) {
        setFormData({ query: '' });
        fetchSearchHistory();
      }
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  const handleEdit = async (id) => {
    const itemToEdit = searchHistory.find(item => item._id === id);
    setFormData({ query: itemToEdit.query });
    setEditId(id);
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/search-history/${editId}`, formData);
      if (response.status === 200) {
        setFormData({ query: '' });
        setIsEditing(false);
        setEditId(null);
        fetchSearchHistory();
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/search-history/${id}`);
      if (response.status === 200) {
        fetchSearchHistory();
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <h2>Search History</h2>
      <form onSubmit={isEditing ? handleUpdate : handleCreate}>
        <input
          type="text"
          name="query"
          value={formData.query}
          onChange={handleChange}
          placeholder="Enter search query"
        />
        <button type="submit">{isEditing ? 'Update' : 'Create'}</button>
        {isEditing && <button onClick={() => setIsEditing(false)}>Cancel</button>}
      </form>
      <ul>
        {searchHistory.map(item => (
          <li key={item._id}>
            {item.query}
            <button onClick={() => handleEdit(item._id)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudComponent;
