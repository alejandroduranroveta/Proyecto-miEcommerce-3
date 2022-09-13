const express = require('express');
const app = express();
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require('./routes/cartRoutes')

app.use(express.json());
require('dotenv').config();

const PORT = process.env.PORT;

// app.use("/api/v1/products",productRoutes);
// app.use("/api/v1/users",userRoutes);
app.use("/api/v1/carts",cartRoutes)

app.listen(PORT,()=>console.log("Se levanto el server en " + PORT));

