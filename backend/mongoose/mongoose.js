const mongoose=require("mongoose")
const connnectdb=(url)=>mongoose.connect(url)
    .then(()=>console.log("mongoose is connected................."))
    .catch((error)=>console.log(error))

module.exports=connnectdb