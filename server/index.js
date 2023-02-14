import express from 'express';
import * as dotenv from "dotenv";
import cors from 'cors';

import connectDB from './mongo/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost"
}));
app.use(express.json({limit: "50mb"}));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
    res.status(200).json({
        message: "Server Running : 5173..."
    })
})

const serverStart = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log("Server started on:  http://localhost:8080"))
    } catch (error) {
        console.log(error)
    }
}

serverStart();

