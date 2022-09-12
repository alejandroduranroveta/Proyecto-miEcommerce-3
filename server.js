const express = require('express');
const app = expres.app();
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");


app.use("/api/v1/products",productRoutes);
app.use("/api/v1/users",userRoutes);
