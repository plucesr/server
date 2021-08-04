const Producto = require("../models/Producto");

exports.crerProducto= async(req, res) => {
    
    try{

        let producto;
        //Creamos el producto

        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')

    }


}

exports.obtenerProductos = async (req,res) => {

    try{

       const productos = await Producto.find();
       res.json(productos);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')

    }
}



exports.actualizarProductos = async (req, res) => {

    try{
        const { nombre, categoria, ubicacion, precio } = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto) {

            res.status(404).json({msg: 'No existe Producto'})
        }
        
        console.log (nombre);
        console.log('Antes:',producto);

        producto.nombre=nombre;
        producto.categoria=categoria;
        producto.ubicacion=ubicacion;
        producto.precio =precio;

        console.log('Despues:',producto);

        producto = await Producto.findOneAndUpdate({_id: req.params.id}, producto, {new: true })
        res.json(producto);
    } catch (error) {
          console.log(error);
        res.status(500).send(error) 

    }
}

exports.obtenerProducto = async (req, res) => {

    try{
        const { nombre, categoria, ubicacion, precio } = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto) {

            res.status(404).json({msg: 'No existe Producto'})
        }
        console.log ('Producto Encontrado');
        
        res.json(producto);
    } catch (error) {
          console.log(error);
        res.status(500).send(error) 

    }
}

exports.eliminarProductos = async (req, res) => {

    try{
        const { nombre, categoria, ubicacion, precio } = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto) {

            res.status(404).json({msg: 'No existe Producto'})
        }
        console.log ('Producto Encontrado');
        
       await Producto.findByIdAndRemove({_id: req.params.id})
       res.json({mdg:'Producto Eliminado...'})
    } catch (error) {
          console.log(error);
        res.status(500).send(error) 

    }
}