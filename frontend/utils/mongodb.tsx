import mongoose from 'mongoose';
const uri = process.env.MONGO_URI as string;

if (!uri) {
    throw new Error('Please define MONGO_URI variable inside .env.local file');
}

let isConnected = false;

const connectToDB = async () => {
    if (isConnected) {
        console.log('using existing db connection');
        return;
    }

    try {
        await mongoose.connect(uri, {
            dbName: 'nexttest',
        });
        isConnected = true;
        console.log('connected to mongodb');
    } catch (error) {
        console.log('mongodb connection error=', error);
        process.exit(1);
    }
};

export default connectToDB;
