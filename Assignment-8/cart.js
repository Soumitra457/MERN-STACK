const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;

app.get('/cart',(req,res)=>{
    const content = JSON.parse(fs.readFileSync("data.json"));
    let sum = 0;
    for(let i=0;i<content.length;i++){
        sum = sum + (content[i].price*content[i].quantity);
    }
    res.status(200).json({
        meassage:"Sending JSON",
        data:content,
        totalamount:sum
    });
})

app.get('/cart/:id',(req,res)=>{
    const id = req.params.id;
    const content = JSON.parse(fs.readFileSync("data.json"));
    const matchData = content.filter(item=>item.product_id == id);
    res.status(200).json({
        meassage:"Sending JSON",
        data:matchData
    }); 
})

app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})