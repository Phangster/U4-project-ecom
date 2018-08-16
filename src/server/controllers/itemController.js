const db = require('../db.js');

const getItems = (req, res) => {
    let getAllItem = 'SELECT * FROM items';
    db.query(getAllItem, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
            res.json({result: result.rows, message: 'items sent'});
        }
    })
}
module.exports = {
    getItems
};