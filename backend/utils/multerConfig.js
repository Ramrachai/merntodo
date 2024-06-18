const fs = require("fs")
const multer = require("multer")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = 'uploads'
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath)
        }
        cb(null, uploadPath)
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
    const status = allowedTypes.includes(file.mimetype)
    if (status) {
        return cb(null, true)
    } else {
        return cb(new Error("Error: Only Images allowed"))
    }
}


const upload = multer({ storage: storage, fileFilter: fileFilter, limits: { fileSize: 4 * 1024 * 1024 } })

module.exports = upload

