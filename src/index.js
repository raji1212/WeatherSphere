const express= require("express");
const app=express();
const port=9000;
const morgan=require('morgan');
const hbs=require('hbs');
const path=require('path');
console.log(path.join(__dirname));
const staticPath= path.join(__dirname,"../public");
app.use(express.static(staticPath));
const templates_path= path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials");
app.set("view engine","hbs");
app.set('views',templates_path);
hbs.registerPartials(partial_path);
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about.hbs");
});
app.get("/weather",(req,res)=>{
    res.render("weather.hbs");
});
app.get("*",(req,res)=>{
    res.render("404error.hbs",{
        errormsg:"I think we are living in the matrix!!"
    });
});
app.listen(port,()=>{
    console.log(`I am port no:${port}.I am listening!`);
})