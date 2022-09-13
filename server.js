const express = require('express');
const app = express();
app.use(express.json());
const productRoutes = require("./api/routes/productRoutes.js");
const userRoutes = require("./api/routes/userRoutes");
const cartsRoutes = require("./api/routes/cartRoutes");

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');


require('dotenv').config(); 
const PORT = process.env.PORT;

app.use("/api/v1/products",productRoutes);
app.use("/api/v1/users",userRoutes);
app.use('/api/v1/carts', cartsRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(PORT,()=>console.log(`Corriendo servidor en el puerto ${PORT}`));