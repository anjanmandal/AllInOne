const express= require('express');
const app=express();

const viewRouter=require("./routes/auth-routes");

app.set("view engine","ejs")

app.use("/",viewRouter)
app.listen(8080,()=>{
    console.log('listening to port 8080..')
});