const express = require('express');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contact');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', contactRoutes);  // This is important!

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
