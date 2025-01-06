const Document = require('../models/documentModel')

const document = async (req, res)=>{
    try{
    const{title,date} = req.body;

    const document = new Document({title,date});
    await document.save();

    req.status(201).json({
        message:'Document added!',
        document:{
            id:document._id,
            title:document.title,
            date:document.date
        },
    });
    }catch(error){
        console.log('document failed to upload', error);
        req.status(500).json({error:'server error'});
    }

};
module.exports = { document };
