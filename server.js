const express = require('express');
const app = express();
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
app.use(express.json());
require('dotenv').config(); 

// app.use("/api/v1/products",productRoutes);
app.use("/api/v1/users",userRoutes);

app.listen(process.env.PORT,()=>console.log("Se levanto el server"));