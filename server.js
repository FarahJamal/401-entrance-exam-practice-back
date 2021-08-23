'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const getUserSchema = require("./Modules/DataBaseSchema");
const AddToFav=require("./Modules/AddToFav")
const getFav=require("./Modules/getFav");
const DeleteFav = require("./Modules/DeleteFav")
const UpdateFav=require("./Modules/UpdateFav")
app.use(cors());
const PORT = process.env.PORT || 3001;
app.use(express.json());

const APIData=require('./Modules/getFromAPI');

app.get('/getAll',APIData);
app.get('/getFav',getFav);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
app.post('/add',AddToFav);
app.delete('/rmChar/:index',DeleteFav)
app.put('/updateChar/:index',UpdateFav)
