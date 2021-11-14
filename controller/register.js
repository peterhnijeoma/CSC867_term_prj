const model_register = require('../models/register');
//const db = require('../db');

const register = function(gname, uname, pword){
    console.log("I am in controller::resgister function") //"user name is: " + uname + "game name is: " + gname + "password is: " + pword)
    let reg_return = model_register(gname, uname, pword);
    
    if (reg_return) {
        console.log("I am in controller.resgister function - all good.")
        return true;
    }
    else
    {
        console.log("I am in controller.resgister function - some issue.")
        return false;
    }
    // db.any(`INSERT INTO uno_user ("game_name", "user_name", "allow_word") VALUES ('${gname}', '${uname}', '${pword}')`)
    //   .then( _ => db.any(`SELECT "user_id", "user_name", "game_name" FROM uno_user where "user_name" = '${uname}'`))
    //   //.then( _ => db.any(`SELECT * FROM uno_user`))
    //   .then( results => {
    //       //response.json( results );
    //       console.log("in controller.register; inserted user id is: ", results);
    //       //return true;
    //   })
    //   .catch( error => {
    //       console.log("in controller.register; somethis is wrong - see below.")
    //       console.log( error );
    //       //response.json({ error });
    //       //return false;
    //   })
}

module.exports=register;
