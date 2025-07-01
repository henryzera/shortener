const Link = require('../models/Link')

let redirect = async (req, res) => {
    let title = req.params.title;
    try{
        let doc = await Link.findOne({title});
        console.log(doc);
        res.redirect(doc.url);
    }
    catch(error){
        res.send(error);
    }
}

module.exports = {redirect}