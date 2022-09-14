const express = require('express');
const app = express();
const productRoutes = require("./api/routes/productRoutes.js");
const userRoutes = require("./api/routes/userRoutes");
const cartsRoutes = require("./api/routes/cartRoutes");
const picturesRoutes = require('./api/routes/picturesRoutes');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');


require('dotenv').config(); 
app.use("/api/v1/products",productRoutes);
app.use("/api/v1/users",userRoutes);
app.use('/api/v1/carts', cartsRoutes);
app.use('/api/v1/pictures', picturesRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(process.env.PORT,()=> console.log("Se levanto el server"));