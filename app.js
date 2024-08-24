import express from 'express';
import bodyParser from 'body-parser';
import connect from './config/dbConnection.js';
import dotenv from 'dotenv';
import productRoutes from "./routes/product.js"
dotenv.config();
const app = express();


//DB Connection 
connect();

//Middlewares
app.use(bodyParser.json());

app.use('/api/products' , productRoutes )


//Server starts here
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});