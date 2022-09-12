const express = require('express');
const productRoutes = require('./api/routes/productRoutes.js');
const app = express()
app.use(express.json())


//const userRoutes = require('./routes/userRoutes');


app.use("/api/v1/products",productRoutes);
//app.use("/api/v1/users",userRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
 });