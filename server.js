const express = require('express');
const app = express();
app.use(express.json());

const productRoutes = require("./api/routes/productRoutes.js");
const userRoutes = require("./api/routes/userRoutes");
const picturesRoutes = require('./api/routes/picturesRoutes')

require('dotenv').config(); 

app.use("/api/v1/products",productRoutes);
app.use("/api/v1/pictures",picturesRoutes);
//app.use("/api/v1/users",userRoutes);

app.listen(5000,()=>console.log("Se levanto el server"));