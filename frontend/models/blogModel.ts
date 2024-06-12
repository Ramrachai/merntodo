import mongoose, { Schema, Document, Model } from 'mongoose';

// Interface for TypeScript
interface IBlog extends Document {
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

// Define the schema with stricter validation rules
const blogSchema: Schema<IBlog> = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

// Add an index to the title field
blogSchema.index({ title: 1 });

// Model creation with proper naming convention
const BlogModel: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', blogSchema);

export default BlogModel;
