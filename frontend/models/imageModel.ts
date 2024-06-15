import mongoose, { Document, Schema } from 'mongoose';

interface IImage extends Document {
    url: string;
    imageName: string;
    caption?: string;
    createdAt: Date;
    updatedAt: Date;
}

const imageSchema = new Schema<IImage>({
    imageName: { type: String },
    url: {
        type: String,
        required: [true, "Valid image url is required"]
    },
    caption: { type: String },
}, {
    timestamps: true
})


const Image = mongoose.models.Image || mongoose.model<IImage>("Image", imageSchema)

export default Image