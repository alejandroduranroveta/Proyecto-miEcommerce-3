const express = require('express');
const app = express();
const productRoutes = require("./api/routes/productRoutes.js");
const userRoutes = require("./api/routes/userRoutes");
app.use(express.json());
require('dotenv').config(); 
app.use("/api/v1/products",productRoutes);
app.use("/api/v1/users",userRoutes);

app.listen(process.env.PORT,()=> console.log("Se levanto el server"));