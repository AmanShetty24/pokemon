const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const searchRoutes = require('./Routes/Searchroutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://adityagupta802624:aditya6366207377@cluster0.pbvrr8q.mongodb.net/pokemon_base', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api/search-history', searchRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
