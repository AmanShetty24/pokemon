// Routes/Searchroutes.js

const express = require('express');
const router = express.Router();
const searchController = require('../Controllers/SearchController');

router.post('/', searchController.saveSearchQuery);
router.get('/', searchController.getSearchHistory);
router.put('/:id', searchController.updateSearchQuery);
router.delete('/:id', searchController.deleteSearchQuery);

module.exports = router;
