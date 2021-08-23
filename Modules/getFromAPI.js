//http://hp-api.herokuapp.com/api/characters

'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios=require('axios');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;
app.use(express.json());
async function getData(req, res) {

axios
.get('http://hp-api.herokuapp.com/api/characters')
.then(results=>{
    res.send(Data(results.data));
})
.catch(err=>{
    console.log('sorry smth wrong happened');
})

const Data=(dataObj)=>{
const dataArr=[];
dataObj.map((e)=>{
    const name=e.name
    const house=e.house
    const image=e.image
    
    dataArr.push(new HPData(name,house,image))

})
return(dataArr)
}

class HPData{
    constructor(name,house,image){
        this.name=name,
        this.house=house,
        this.image=image
        }
}
}




module.exports = getData;

