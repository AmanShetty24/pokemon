// Controllers/SearchController.js

const SearchHistory = require('../Models/SearchHistory');

exports.saveSearchQuery = async (req, res) => {
  try {
    const { query } = req.body;
    const searchHistory = new SearchHistory({ query });
    await searchHistory.save();
    res.status(201).json({ message: 'Search history saved successfully', data: searchHistory });
  } catch (error) {
    console.error('Error saving search history:', error);
    res.status(500).json({ error: 'An error occurred while saving search history' });
  }
};

exports.getSearchHistory = async (req, res) => {
  try {
    const searchHistory = await SearchHistory.find();
    res.status(200).json(searchHistory);
  } catch (error) {
    console.error('Error fetching search history:', error);
    res.status(500).json({ error: 'An error occurred while fetching search history' });
  }
};

exports.updateSearchQuery = async (req, res) => {
  try {
    const { id } = req.params;
    const { query } = req.body;
    const updatedHistory = await SearchHistory.findByIdAndUpdate(id, { query }, { new: true });
    res.status(200).json({ message: 'Search history updated successfully', data: updatedHistory });
  } catch (error) {
    console.error('Error updating search history:', error);
    res.status(500).json({ error: 'An error occurred while updating search history' });
  }
};

exports.deleteSearchQuery = async (req, res) => {
  try {
    const { id } = req.params;
    await SearchHistory.findByIdAndDelete(id);
    res.status(200).json({ message: 'Search history deleted successfully' });
  } catch (error) {
    console.error('Error deleting search history:', error);
    res.status(500).json({ error: 'An error occurred while deleting search history' });
  }
};
