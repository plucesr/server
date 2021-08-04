// Rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
// api//productos

router.post('/',productoController.crerProducto);
router.get('/',productoController.obtenerProductos);
router.put('/:id',productoController.actualizarProductos);
router.get('/:id',productoController.obtenerProducto); 
router.delete('/:id',productoController.eliminarProductos);

module.exports = router;