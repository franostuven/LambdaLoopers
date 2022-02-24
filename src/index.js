const express = require('express');
const cors = require('cors');
const app = express();
// cors setting
app.use(cors());
// ************************* 
//-----------------------------------------

// Settings servidor
app.set('port',  process.env.PORT ||  3000);  //process..... es para que tome el pueteo del servidor, sino toma 3000

// Middlewares 
app.use(express.json());   //convierte los modulo de json cuando los reciba

// Routes (rutas para que se lleguen desde la web) al hacer el require y no usar rutas, toma la raiz /
app.use(require('./routes/productos'));

// Starting the server
app.listen(app.get('port'), ()=> {
    console.log('Serven on port', app.get('port'))
}) ;

