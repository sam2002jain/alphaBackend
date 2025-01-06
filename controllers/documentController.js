const Document = require('../models/documentModel');

const addDocument = async (req, res) => {
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

module.exports = { addDocument };
