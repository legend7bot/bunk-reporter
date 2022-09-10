import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './db.js';

const app = express();

connectDB();

//middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.listen(port, console.log(`Listening on port ${port}...`));
