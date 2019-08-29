const express =require("Express");
const app=express();

/*root handers */
app.get('/',(req,res)=>{

res.send("Hello"); 

});

app.listen(3000,()=>{
    console.log("Server Started");
})