const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PdfSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  file: {
    type: Buffer,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  }
}, {timestamps: true});

module.exports = mongoose.model("pdf", PdfSchema);
