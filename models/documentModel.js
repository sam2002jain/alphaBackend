const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const documentSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
});
module.exports = mongoose.model('Document',documentSchema);