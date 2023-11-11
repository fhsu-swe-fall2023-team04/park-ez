import mongoose from 'mongoose';

const url = process.env.MONGO_URI as string;

const startDb = async () => {
    if (mongoose.connection.readyState === 0) {
        try {
            await mongoose.connect(url);
            console.log('Connected to Mongo DB');
        } catch (error) {
            console.error('Failed to connect to Mongo DB', error);
            process.exit(1); // Exit in case of connection failure
        }
    }
};

startDb(); // Establish the connection when the file is loaded

export default mongoose;
