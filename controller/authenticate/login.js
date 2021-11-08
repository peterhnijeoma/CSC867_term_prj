const db = require('../../db');

const login = function(user,password){
    let data = [];
    console.log(user,password)
    db.any(`SELECT user_id FROM uno_user WHERE user_name = '${user}' and allow_word = '${password}'`)
      .then( results => {
          console.log("in controller.authenticate.login.result is: ",  results);
          data = results;
          console.log("data is:", data, "data length is: ", data.length);
          return data;
      })
      .catch( error => {
          console.log("in controller.authenticate.login - error occured - see below");
          console.log( error );
          //return false;
      })
    // if(user==="admin" && password==="admin")
    if (data.length > 0)
    {
        console.log("all is well - will return true");
        return true;
    }
    else
    {
        console.log("something is wrong - will return false");
        return false;
    }
}

module.exports=login;