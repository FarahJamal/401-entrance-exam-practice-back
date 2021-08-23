'use strict';
const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/exam', { useNewUrlParser: true, useUnifiedTopology: true });
//mongodb+srv://exam:<password>@cluster0.rpjcy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://exam:exam@cluster0.x7plr.mongodb.net/exam?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
const myFavChar = new mongoose.Schema({
    name: String,
    house: String,
    image: String
});



const userSchema = new mongoose.Schema({
    email: String,
    Chars: [myFavChar],
   
});

const Users = mongoose.model('users', userSchema);
function weekSeeds() {


    const user1 = new Users({
        email: 'farahsarese@gmail.com',
     Chars:[]
    })
    user1.save();


    const user2 = new Users({
        email: 'shkokany98@gmail.com',
        Chars:[]

    })
    user2.save();

}






weekSeeds();


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected!');
});
module.exports = Users;