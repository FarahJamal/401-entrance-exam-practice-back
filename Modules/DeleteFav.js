'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


const Users =require ( './DataBaseSchema' );
function DeleteFav(req,res){

 try{   
    const id=req.params.index;
    const {email}=req.query;
    console.log(req.params.index)
Users.findOne({email:email},function(err,data){
    data.Chars.splice(id,0);
    console.log('this is the data',data.Chars.splice(id,1))
    data.save();
    console.log('data needed ',data)
    res.send(data);

     
}) 
 }
 catch(err){
     console.log('error')
 }
}

module.exports =DeleteFav;