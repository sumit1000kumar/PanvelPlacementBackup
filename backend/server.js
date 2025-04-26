//   const express = require('express');
//   const connectDB = require('./config/db');
//   const contactRoutes = require('./routes/contact');
//   const cors = require('cors');
//   const path = require('path');
//   const app = express();
//   require('dotenv').config();

//   // Connect to MongoDB
//   connectDB();

//   // Middleware
 
//   app.use(express.json());
//   app.use(cors({ origin: ["http://localhost:5500", "http://127.0.0.1:5500","http://localhost:5000","http://127.0.0.1:5501","https://panvel-placement-backend.onrender.com","https://meetsumit.xyz"], credentials: true }));
//   app.use(express.static(path.join(__dirname, '..')));

// // Serve static files
// app.use('/assets', express.static(path.join(__dirname, '..', 'assets'))); 
//  // Serve assets from the correct location
// app.use('/assets/uploads', express.static(path.join(__dirname, '..', 'assets', 'uploads')));

//   // app.use('/assets/uploads', express.static(path.join(__dirname, 'assets/uploads')));
//   // Admin job routes
//   const adminJobRoutes = require('./routes/admin-jobRoutes');
//   app.use('/admin-jobs', adminJobRoutes);

//   const jobRoutes = require('./routes/jobRoutes');
//   app.use('/api', jobRoutes);  // now /api/jobs will work

//   const applyRoutes = require('./routes/applyRoutes');
//   app.use('/', applyRoutes); // This makes POST /apply work without the /api prefix
//   // This mounts POST /api/apply


//   // API Routes (contact)
//   app.use('/api', contactRoutes);  // This is for other API routes



//   app.get('/admin/dashboard', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'admin-dashboard.html'));  // Adjust path if necessary
//   });
  
  

// const candidatesRoutes = require('./routes/candidatesRoutes');
// app.use('/candidates', candidatesRoutes);


// const adminRoutes = require('./routes/adminRoutes');
// app.use('/admin', adminRoutes);
//  // This will handle POST /admin/login


//  app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   // Example login check
//   if (username === 'admin' && password === 'secure123') {
//     res.json({ success: true });
//   } else {
//     res.json({ success: false, message: 'Invalid username or password' });
//   }
// });

//   // Start the server
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//   });

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "http://localhost:5000",
    "http://127.0.0.1:5501",
    "https://panvel-placement-backend.onrender.com",
    "https://meetsumit.xyz"
  ],
  credentials: true
}));

// Serve static files
app.use(express.static(path.join(__dirname, '..')));
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));
app.use('/assets/uploads', express.static(path.join(__dirname, '..', 'assets', 'uploads')));

// Routes

// Admin job routes
const adminJobRoutes = require('./routes/admin-jobRoutes');
app.use('/admin-jobs', adminJobRoutes);

// Public job routes
const jobRoutes = require('./routes/jobRoutes');
app.use('/api', jobRoutes);

// Apply routes
const applyRoutes = require('./routes/applyRoutes');
app.use('/api', applyRoutes); // ✅ Corrected to /api/apply

// Contact form routes
const contactRoutes = require('./routes/contact');
app.use('/api', contactRoutes);

// Candidates routes
const candidatesRoutes = require('./routes/candidatesRoutes');
app.use('/candidates', candidatesRoutes);

// Admin authentication routes
const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);

// Simple login route (Optional — looks like for testing)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'secure123') {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Invalid username or password' });
  }
});

// Admin dashboard (HTML page)
app.get('/admin/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'admin-dashboard.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
