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
            res.status(500).json({msg:"Error server"});
        }
    },
    createUser:(req,res)=>{
        try {
            let {id,email="exaple@gmail.com",username="pepito",password="123",firtsname="Anonymous",lastname="Anonymous",profilepic="www.img.com"} = req.body;
            let newUser = {
                id,
                email,
                username,
                password,
                firtsname,
                lastname,
                profilepic
            };
            const bdUser = fs.readFileSync(path.join(__dirname,"/../","users.json"),"utf-8");
            let users = JSON.parse(bdUser);
            users.push(newUser);
            fs.writeFileSync(path.join(__dirname,"/../","users.json"),JSON.stringify(users));
            req.method!=="POST"?res.status(201).json(newUser):res.status(400).json({msg:"You need use POST method for create user"});
        } catch (error) {
            console.log(error);
            res.status(500).json({msg:"Error server"});
        }
        
    },
    modifyUser:(req,res)=>{
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = userController;