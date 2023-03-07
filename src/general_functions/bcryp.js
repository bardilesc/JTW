const bcrypt = require('bcrypt');
password_hash = {};

password_hash.compare = async (pass, hash) =>{
  return new Promise(function(resolve, reject) {
    bcrypt.compare(pass, hash, function(err, res) {
        if (err) {
             reject(err);
        } else {
             resolve(res);
        }
    });
  });  
}

password_hash.encrypt = async  (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

module.exports = password_hash;