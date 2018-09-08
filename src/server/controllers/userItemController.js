const db = require('../db.js');

const viewCartItems = (req, res) => {
    let userItem = `SELECT item, img, price, user_name, user_id,                       item_id FROM items 
                    JOIN users_items
                    ON users_items.item_id = items.id
                    JOIN users
                    ON users_items.user_id = users.id
                    WHERE users.id = $1`
    let value = [req.cookies['user_id']];
    db.query(userItem, value, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
            res.json({result: result.rows});
        }
    })
}

const addingToCart = (req,res) => {
    let itemId = req.body.item_id;
    let userId = req.cookies['user_id'];
    let user_item = 'INSERT INTO users_items (user_id, item_id) VALUES ($1, $2) RETURNING *'
    let values = [userId, itemId];
    db.query(user_item, values, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.json({result: result.rows[0], loginStatus: true});
        }
    })
}

module.exports = {
    viewCartItems,
    addingToCart
};