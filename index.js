const express = require('express');
const conectarDB = require('./config/db')
const cors = require('cors')
//creamos el servidor

const app = express();
//Conectamos
app.use(cors());

conectarDB();

app.use(express.json());

app.use('/api/productos',require('./routes/producto'));


app.listen(4000, () => {

     console.log('Servidor esta Corriendo bien');
})