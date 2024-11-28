import {Router} from "express";
const route=Router();

route.get("/fetchData",(req,res)=>{res.send("kuch nahi hai db mein")})



export default route;