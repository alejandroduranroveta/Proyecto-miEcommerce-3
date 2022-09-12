const db = require('../data/products');

const productsController = {
    'list': (req, res) => {
       try {
          res.status(200).json(db);
       } catch (error) {
          console.log(error);
          res.status(500).json({
             msg: 'Server Error'
          });
       }
 
      },
      'detail': (req, res) => {
         //Producto segun id
         const { id } = req.params;
   
      try {   
         const dataToShow = db.find(elm => elm.id === Number(id));
   
         if (!dataToShow) {
            return res.status(404).json({
               msg: 'Not found'
            })
         }
         res.send(dataToShow)
         res.status(200).json({
            msg: 'OK'
         })
         res.send(dataToShow);
      } catch (error) {
         
         console.log(error);
         res.status(500).json({
            msg: 'Server Error'
         })
      }
   
      },

      'create': (req, res) => {
         //agregar un nuevo producto a la bd
         let { id, title = "", price= 0,description= "",image= "",gallery = [{picture_id:1,picture_url:""}],category= 0,mostwanted,stock} = req.body;

         if (!id ||!title || !price|| !gallery[0].picture_id|| !gallery[0].picture_url ) {
            return res.send('Para crear el producto se necesitan mas datos');
         }
         let nuevoProducto = {
            id ,
            title,
            price,
            description,
            image,
            gallery,
            category,
            mostwanted,
            stock
         }
         console.log(nuevoProducto)
      
         try {
            db.push(nuevoProducto);
            res.send(nuevoProducto);
            res.status(200).json(db)({
               msg: 'Ok'
            })

         } catch (error) {
            console.log(error);
            res.status(500).json({
               msg: 'Server Error'
            });
         }      
      }
}
    module.exports = productsController;