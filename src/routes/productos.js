const express = require('express');
const router = express.Router();

const articulos = [
        {product: 'water', type: 'drinks', quantity: 10, unitPrice:1},
        {product: 'chicken wings', type: 'food', quantity: 3, unitPrice:5},
        {product: 'steak', type: 'food', quantity: 1, unitPrice: 9},
        {product: 'coffee', type: 'drinks', quantity: 4, unitPrice: 2},
        {product: 'wine bottle', type: 'drinks', quantity: 1, unitPrice: 7}
    ];


// RUTA DIRECTA SIN PARAMETROS
router.get('/', (req, res) => {
    res.json(articulos);
    console.log(res)
   if(res === undefined) {
       res.json({mensaje:"no se encontraron articulos"});
       console.log('No se encontro el producto');
    }
});    


// RUTA DIRECTA CON PARAMETRO producto(GET)
router.get('/:product', (req, res) => {
    const { product } = req.params;
    res.json(articulos.find( el => el.product === product));
   console.log(product)
   if(res === undefined) {
    res.json({mensaje:"no se encontraron articulos"});
    console.log('No se encontro el producto');
   }
});


module.exports = router; 