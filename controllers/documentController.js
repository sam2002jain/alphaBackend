const Document = require('../models/documentModel');

const setDocument = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const newDocument = new Document({ title });
    await newDocument.save();

    res.status(201).json({
      message: 'Document added!',
      document: {
        id: newDocument._id,
        title: newDocument.title,
      },
    });
  } catch (error) {
    console.error('Document failed to upload:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const getDocument = async(req,res)=>{
  try{
    const documents = await Document.find();
    res.status(200).json(documents);
  }catch(error){
    res.status(500).json({error:'server error'})
  }
};

module.exports = { setDocument,getDocument };
