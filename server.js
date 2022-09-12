const express = require('express');
const productsRoutes = require('./routes/productsRoutes')
const app = express();










//Esto es para parsear el body que viene en formato JSON
//app.use(express.json());

//Aquí debajo van las Rutas a los endpoints
//Por ejemplo: '/api'
app.get('/', (req, res) => {
   res.send('<h1>Inicio</h1>');
});

app.use("/api/v1/products", productRoutes);

//Levantar servidor desde express
app.listen(3000, () => {
   console.log('Servidor corriendo en puerto 3000');
});




