'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


const Users =require ( './DataBaseSchema' );

function UpdateFav( req,res){
    const index = req.params.index;
    const {name,house,image,email}=req.body;
    console.log('from update server',name)

    Users.findOne( {email:email},( err,data)=>{
        data.Chars.splice(index,1,{
            name : name,
            house : house,
            image:image
        })
        console.log('from update server',data.Chars)
        data.save();
        res.send(data);
    })
}

module.exports = UpdateFav;