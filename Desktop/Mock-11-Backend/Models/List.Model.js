const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  quantity: { type: Number, required: true },
  priority: { type: String, required: true },
  description: { type: String},
});

const ListModel = mongoose.model("ListMock11", ListSchema);

module.exports = { ListModel };
