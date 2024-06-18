const Image = require("../models/imageModel")


exports.addImage = async (req, res) => {
    try {
        let files = req.files;
        let { caption } = req.body;
        if (!files) {
            return res.status(400).json({ message: "Please upload a file" });
        }

        const baseURL = `${req.protocol}://${req.get('host')}`;

        const imageDocs = files.map((file) => ({
            originalname: file.originalname,
            filename: file.filename,
            path: `${baseURL}/${file.path}`,
            size: file.size,
            caption
        }));

        const savedImages = await Image.insertMany(imageDocs)
        let message = `${savedImages.length} Images uploaded successfully`

        return res.status(200).json({ message, success: true, savedImages });
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false });
    }
};


exports.getAllImages = async (req, res) => {
    try {
        let images = await Image.find()
        let totalImages = images.length
        return res.status(200).json({ message: "images fetched successfully", success: true, totalImages, images })

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "images fetch failed", success: false })

    }
}
exports.getOneImage = async (req, res) => {
    try {
        let { id } = req.params
        let image = await Image.findById(id)
        if (!image) {
            return res.status(404).json({ message: "Image not found", success: false })
        }
        return res.status(200).json({ message: "Image fetched successfully", success: true })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Error while fetching image with id: " + id })
    }
}

exports.deleteImage = async (req, res) => {
    try {
        let { id } = req.params
        let deletedImage = await Image.findByIdAndDelete(id)
        if (!deletedImage) {
            return res.status(404).json({ message: "Image not found", success: false })
        }
        return res.json({ message: "Image deleted successfully", sucees: true, deletedImage })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Image deleting failed", success: false })
    }
}