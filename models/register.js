const db = require('../db');

const register = function(gname, uname, pword){
    console.log("I am in model.resgister function") //"user name is: " + uname + "game name is: " + gname + "password is: " + pword)
    db.any(`INSERT INTO uno_user ("game_name", "user_name", "allow_word") VALUES ('${gname}', '${uname}', '${pword}')`)
      .then( _ => db.any(`SELECT "user_id", "user_name", "game_name" FROM uno_user where "user_name" = '${uname}'`))
      //.then( _ => db.any(`SELECT * FROM uno_user`))
      .then( results => {
          //response.json( results );
          console.log("in model.register; inserted user id is: ", results);
          //return true;
      })
      .catch( error => {
          console.log("in model.register; somethis is wrong - see below.")
          console.log( error );
          //response.json({ error });
          //return false;
      })
}

module.exports=register;