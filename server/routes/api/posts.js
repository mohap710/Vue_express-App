import express from "express";
import { MongoClient } from "mongodb"
import con from "../../db/config.js"

const router = express.Router()

// Get post
    router.get("/",(req,res)=>{
      con.query(`SELECT * FROM posts`,(err,result)=>{
         res.send({status:true,data:result})
      })
       
    })
// Add posts
    router.post("/add",(req,res)=>{ 
      con.query(`CALL insertPost("${req.body.content}")`,(err,result)=>{
        if(err)res.send(err);
        else{
          res.send({status:true,message:"Row has been inserted successfully"})
          } 
        })
    })

// Delete posts
    router.delete("/delete?:id",(req,res)=>{ 
      con.query(`CALL DeletePost("${req.query.id}")`,(err,result)=>{
        if(result.affectedRows)
          res.send({message:`post with the id of ${req.query.id} has been Deleted successfully`})
        else{
          res.send({message:`no post with the id of ${req.query.id}`}) 
        } 
        })
    })
export default router;
// const uri = "mongodb+srv://root:<password>@cluster0.pdvfl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });