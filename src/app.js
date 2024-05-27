import 'dotenv/config.js'
import express from 'express';
import { connectDB } from './DB/config.js';
import allRoutes from './routes.js';
import syncDB from './DB/init.js';
const app = express();

app.use(express.json());

connectDB();

syncDB().then(()=>{
    console.log("DB Synced")
})

app.use(allRoutes);



app.listen(3000, () => {
    console.log("Server connected at port 3000");
})