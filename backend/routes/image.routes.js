const { addImage, getAllImages, getOneImage, deleteImage } = require('../controllers/imageController')
const uploads = require("../utils/multerConfig")
const multerErrorHandler = require('../utils/multerErrorHandler')

const router = require('express').Router()

router.post('/', uploads.array('images', 10), multerErrorHandler, addImage)
router.get("/", getAllImages)
router.get("/:id", getOneImage)
router.delete("/:id", deleteImage)

module.exports = router