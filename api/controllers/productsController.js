//const db = require('../data/products');
const fs = require('fs');
const path = require('path')

//const db = JSON.parse(fs.readFileSync('/Users/marioalejandroduran/Desktop/BootCamp/Sprint1/Proyecto-miEcommerce-3/api/data/products.json', 'utf8'));

const productsController = {
    'list': (req, res) => {
       try {
         const db = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data/products.json'), 'utf8'));
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
         const id  = req.params.id;
   
      try {  
         const db = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data/products.json'), 'utf8'));
         const dataToShow = db.find(elm => elm.id === Number(id));
   
         if (!dataToShow) {
            return res.status(404).json({
               msg: 'Not found detail'
            })
         }
         res.send(dataToShow)

      } catch (error) {
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
         let newProduct = {
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
      
         try {
            const db = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data/products.json'), 'utf8'));
            db.push(newProduct);
            res.send(newProduct);
            
         } catch (error) {
            console.log(error);
            res.status(500).json({
               msg: 'Server Error'
            });
         }      
      },
      'modify': (req, res) => {
         try{
            let product = db.filter(el => el.id == req.params.id)
            const db = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data/products.json'), 'utf8'));
            if(product){
               let data = req.body;
               data.id = req.params.id
               if(data.title) product[0].title = data.title ;
               if(data.price) product[0].price = data.price;
               if(data.description) product[0].description = data.description;
               if(data.image) product[0].image = data.image;
               if(data.gallery.length>0) product[0].gallery[0] = data.gallery
               if(data.category) product[0].category = data.category;
               if(data.mostwanted) product[0].mostwanted = data.mostwanted;
               if(data.stock) product[0].stock = data.stock;
               
               fs.writeFileSync('../data/products.json', JSON.stringify(db))
               res.status(200).json(product)
            }else{
               return res.status(404).json({
               msg: 'Not found'
            })
            }
         } catch (error) {
            res.status(500).json({
               msg: 'Error'
            });
         }
      },
       'actionSearch': (req, res) => {
         const { q } = req.query;
         
        try{
         let search = q.toLowerCase()
         const db = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data/products.json'), 'utf8'));
         let product = db.filter(p => {return p.title.toLowerCase().includes(search)
                                       || p.description.toLowerCase().includes(search)
                                       || p.category.toLowerCase().includes(search)})
          res.send(product)
          }catch (error) {
            console.log(error)
            res.status(500).json({
                msg: 'Error'
            });
          }  
       },
      'mostwanted': (req, res) => {
         const { mostwanted } = req.params;
         console.log(mostwanted)
         try {
         const db = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data/products.json'), 'utf8'));
         let products = db.filter(el => el.mostwanted == true)
         res.status(200).json(products);

         } catch (error) {
            console.log(error);
            res.status(500).json({
               msg: 'Server Error'
            });
         }
      },
      'categoryId':(req, res) => {
         const{category} = req.query
         try {
         let search = category.toLowerCase()
         const db = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data/products.json'), 'utf8'));
         let product = db.filter(p => {return p.category.toLowerCase().includes(search)})
          res.send(product)
         }catch (error) {
         console.log(error);
         res.status(500).json({
            msg: 'Server Error'
         });
      }
   },
   'deleted':(req,res)=>{
         const { id } = req.params;

         try {
            const db = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data/products.json'), 'utf8'));
            const newData = db.filter(el => el.id != Number(id));
            fs.writeFileSync('db.json', JSON.stringify(newData));
            // res.status(200).json({
            //    msg:'OK'
            // });
      
         } catch (error) {
            console.log(error);
            res.send('Error inesperado');
         }
   
      }
   }

      
    module.exports = productsController;