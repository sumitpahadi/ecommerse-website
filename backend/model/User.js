const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apiscehma = new Schema({
  ID: Number,
  Name: String,
  deatilname: String,
  Image: String,
  Saleprice: String,
  MRP: String,
  Rating: String,
  Availabeoffer1: String,
  Availabeoffer2: String,
  Availabeoffer3: String,
  Delivery: String,
  Warranty: String,
  quantity: Number,
  category: String,
  brandname:String
});

module.exports = mongoose.model("api", apiscehma);