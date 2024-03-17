// src/models/Document.js
import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  _id: { type: String },
  data: Object,
});

const Document = mongoose.model("Document", documentSchema);

export default Document;
