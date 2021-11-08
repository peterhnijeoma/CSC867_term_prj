const db = require('../db');

const login = function(user,password){
    //console.log(user,password)
    db.any(`SELECT user_id FROM uno_user WHERE user_name = 'Peter' and allow_word = 'playuno'`)
      .then( results => {
          //response.json( results );
          console.log(results);
          return true;
      })
      .catch( error => {
          console.log( error );
          //response.json({ error });
          return false;
      })
      
    // if(user==="admin" && password==="admin")
    // {
    //     return true;
    // }
    // else
    // {
    //     return false;
    // }
}

module.exports=login;