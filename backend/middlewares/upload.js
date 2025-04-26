const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Setup storage engine
const uploadsPath = path.join(__dirname, '..', 'assets', 'uploads');

// Create uploads folder if not exist
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsPath); // ✅ Corrected path
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage });

module.exports = upload;
