const db = require('../db.js');
const sha256 = require('js-sha256');

const postNewUser = (req, res) => {
    let {name, email, password, confirmPassword} = req.body;
    if( password == confirmPassword){
        let findCurrentUser = 'SELECT * FROM users WHERE email = $1';
        let value = [email];
        db.query(findCurrentUser, value, (err, result)=>{
            if(err){
                console.log(err)
            }
            if(result.rows.length < 1){
                let insertNewUser = 'INSERT INTO users (user_name, email, password) VALUES ($1, $2, $3) RETURNING *'
                let insertedValue = [name, email, sha256(password)]
                db.query(insertNewUser, insertedValue, (err, result)=>{
                    if(err){
                        console.log(err)
                    }else{
                        res.cookie('user_id', result.rows[0].id);
                        res.json({result: result.rows[0], message: 'successfully created user', loginStatus: true});
                    }
                })
            }else{
                res.json({message: 'email exist', loginStatus: false});
                console.log('email exist');

            }
        })
    }else{
        res.json({message: 'password does not match', loginStatus: false});
        console.log('password not match');
    }
}

module.exports = {
    postNewUser
};