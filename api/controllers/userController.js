const fs = require('fs');
const path = require('path');
const userController = {
    list:(req,res)=>{
        try {
            const bdUser = fs.readFileSync(path.join(__dirname,"/../","users.json"),"utf-8");
            res.status(200).json(bdUser);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: "Error Database"
            });
        }
    },
    searchById:(req,res)=>{
        try {
            const bdUser = fs.readFileSync(path.join(__dirname,"/../","users.json"),"utf-8");
            let users = JSON.parse(bdUser);
            let user = products.find(e=>e.id===Number(req.params.id));
            user!==undefine?res.status(200).json(user):res.status(404).json({msg:"Not fund user"});
        } catch (error) {
            console.log(error);
            res.status(404).json({mg:"Not fund"});
        }
    }
}