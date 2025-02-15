import express from 'express'
import { connectToDB } from './lib/db.js';
import auth from './routes/auth.route.js';
import rest from './routes/restaurant.route.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();


const PORT = process.env.PORT || 500;

app.use('/api/auth', auth);
app.use('/api/rest', rest);

app.listen(PORT, () => {
    // connectToDB();
    console.log(`server is running on : http://localhost:${PORT}`);
});