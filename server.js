const express = require('express');
const productRoutes = require('./api/routes/productRoutes.js');
const app = express()


//const userRoutes = require('./routes/userRoutes');


app.use("/api/v1/products",productRoutes);
//app.use("/api/v1/users",userRoutes);
