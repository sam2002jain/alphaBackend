const Document = require('../models/documentModel')

const document = async (req, res)=>{
    try{
    const{title} = req.body;

    const document = new Document({title});
    await document.save();

    res.status(201).json({
        message:'Document added!',
        document:{
            id:document._id,
            title:document.title,
        },
    });
    }catch(error){
        console.log('document failed to upload', error);
        res.status(500).json({error:'server error'});
    }

};
module.exports = { document };
