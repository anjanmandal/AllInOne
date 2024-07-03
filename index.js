const express= require('express');
const app=express();

app.use("/",(req,res)=>{
    res.send("<h1>Hello world</h1>")
});
app.listen(8080,()=>{
    console.log('listening to port 8080..')
});