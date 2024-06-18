const multer = require("multer");

const multerErrorHandler = (err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(400).json({ message: 'File too large. Maximum size allowed is 4MB.' });
            }
            return res.status(400).json({ message: err.message });
        } else if (err.message === "Error: Only Images allowed") {
            return res.status(400).json({ message: "Only JPEG, JPG, PNG, or GIF files are allowed." });
        } else {
            return res.status(500).json({ message: "Error uploading file" });
        }
    }
    next();
};

module.exports = multerErrorHandler;
