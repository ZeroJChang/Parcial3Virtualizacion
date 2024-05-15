const express = require('express');
const app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Ruta para obtener la hora y el nombre
app.get('/info', (req, res) => {
  const nombre = "José De León";
  const hora = new Date().toLocaleTimeString();
  const data = {
    nombre: nombre,
    hora: hora,
    hello: "Hello-World!"
  };
  res.json(data);
});

// Puerto en el que escucha el servidor
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor API escuchando en el puerto ${PORT}`);
});
