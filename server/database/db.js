import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URL = process.env.DB_URL;

const Connection = () => {

    const MONGODB_URI = URL;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;