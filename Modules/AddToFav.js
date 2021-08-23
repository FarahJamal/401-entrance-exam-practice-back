  
const Users = require( './DataBaseSchema' );
function AddToFav ( req,res ){
  const {name,house,image,email} = req.body;
  console.log(image);
  Users.find( {email:email},( err,data )=>{
    if( err ){
      res.send( 'error from backEnd side Post Method ' );
      console.log( 'hello from post function' );
    }
    else {
      data[0].Chars.push( {
      name:name,
      house:house,
      image:image
      } );
      data[0].save();
      res.send( data[0].Chars );
      console.log( data );
    }
  } );
}
module.exports = AddToFav;