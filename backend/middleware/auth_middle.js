const jwt=require("jsonwebtoken")
const secretkey="smnfksjfherjgherjg"
const userauth=(req,res,next)=>{

const bearer=req.headers["authorization"]
if (bearer===undefined) {
    return res.send({msg:"no tokken"})
    
}
const tokken=bearer.split(" ")[1];
if (tokken===undefined) {
    return res.send({ms:"user is not authorized user and there is no tooke"})
    
}
const verify=jwt.verify(tokken,secretkey)
if (verify) {
    next()
    
}
return res.send({msg:"not authorized for particular user"})

}


module.exports=userauth;