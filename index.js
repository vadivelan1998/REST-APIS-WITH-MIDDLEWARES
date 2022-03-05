const express=require("express")
const app=express()
// console.log(app)
app.get("/books",allBooks,(req,res)=>{
   res.send("All Books Fetching");
})
app.get("/books/:name",singleBook,(req,res)=>{
    return res.send({BookName:req.name})

})


function singleBook(req,res,next)
{
    req.name=req.params.name
    console.log(req)
    next()
}


function allBooks(req,res,next)
{
  console.log( "Fetching all books");
    next()

}


app.listen(5234,()=>{
    console.log("listening on port 5234")

})