const fs = require('fs');
const path = require('path')

const picturesController = {
    detail: (req, res) => {//picture segun id
        const id  = req.params.id;
        try {  
           const db = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data/pictures.json'), 'utf8'));
           const dataToShow = db.find(elm => elm.id_pic === Number(id));
     
           if (!dataToShow) {
              return res.status(404).json({
                 msg: 'Not found'
              })
           }
           res.send(dataToShow)
  
        }catch (error) {
           res.status(500).json({
           msg: 'Server Error'
           })
        }  
},
create: (req, res) => {//agregar una nueva imagen a la bd
      
   let { id_pic, url = "",description= ""} = req.body;

   if (!id_pic||!url) {
      return res.status(400)({
         msg: 'Bad Request'
      });
   }
   let newProduct = {
      id_pic,
      url,
      description,
      }
   try {
      const db = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data/products.json'), 'utf8'));
      db.push(newProduct);
      fs.writeFileSync(path.resolve(__dirname,'../data/products.json'), JSON.stringify(db))
      res.status(200).json(newProduct)
         
   } catch (error) {
      console.log(error);
      res.status(500).json({
      msg: 'Server Error'
      });
   }      
},
modify: (req, res) => {
   const id  = req.params.id;
try{
   const db = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data/pictures.json'), 'utf8'));
   let product = db.filter(el => el.id_pic == id)
   if(product){
      let data = req.body;
      data.id_pic = req.params.id
      if(data.url) product[0].title = data.title ;
      if(data.description) product[0].description = data.description;

      fs.writeFileSync(path.resolve(__dirname,'../data/pictures.json'), JSON.stringify(db))
      res.status(200).json(data)
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
deleted:(req,res)=>{
   const { id } = req.params;

   try {
      const db = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data/pictures.json'), 'utf8'));
      const newData = db.filter(el => el.id_pic != Number(id));
      fs.writeFileSync(path.resolve(__dirname,'../data/pictures.json'), JSON.stringify(newData));
      return res.status(200).json(newData)
   
   } catch (error) {
      res.status(500).json({
         msg: 'Error'
      });
   }
   },
   picturesProduct:(req, res) => {
      console.log('entro a picturesProduct')
        try {
         let data = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data/products.json'), 'utf8'));
         //products/id/pictures 
         if(req.params.id){
            const{id} = req.params
            const dataToShow = data.find(elm => elm.id === Number(id));
              return res.status(200).json(dataToShow["gallery"]) 
         }
          if(req.query.product){
         //busqueda por ?product=id
              const{product} = req.query
              const dataToShow = data.find(elm => elm.id === Number(product));
              return res.status(200).json(dataToShow["gallery"]) 
          }
        } catch (error) {
           res.status(500).json({
              msg: 'Server Error'
           });
        }
       }
}
module.exports = picturesController;
