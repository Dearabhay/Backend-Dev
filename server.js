const express = require('express');

const app = express();
app.use(express.json());
 
let user = []
//post - Create
app.post('/create', (req,res)=>{
    let body = req.body;
   
    user.push(body);
     res.send(user);
})
// get - Read
app.get('/',(req,res)=>{
    res.send(user);

});

//delete - Delete
 app.delete('/delete/:id',(req,res)=>{
    let {id} = req.params;    
    let userData =user.filter((val)=>
        val.id !== id
    );
    user = userData;
    res.send("delete successfully");   
 });
 //update - Update
app.put('/update/:id',(req,res)=>{
    let {id} = req.params;
    let {name} = req.body;
    let userUpdate = user.map((val)=>
        val.id === id ? {...val, name  } : val
    )
    res.send(userUpdate);
})

let port = 3000;
app.listen(port,()=>{
    console.log("Server is running on port",`${port}`);
});