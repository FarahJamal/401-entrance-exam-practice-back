'use strict';
const Users = require ('./DataBaseSchema');

function getFav(req,res) {
    
    let email = req.query.email;
    Users.find({email:email},function(err,data) {
        
        if (err) {
            console.log('hello from error get favorite');
        }else {

            res.send(data[0].Chars);
            console.log(data);
        }
    })
}

module.exports = getFav;