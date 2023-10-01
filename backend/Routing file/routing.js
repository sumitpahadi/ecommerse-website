const routes=require("express").Router()
const data=require("../Usercontroller/data")
routes.get("/data",(req,res)=>{
    res.send(data)
})
module.exports=routes