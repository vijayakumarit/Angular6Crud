// AdUnit.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let AdUnit = new Schema({
  unit_name: {
    type: String
  },
  unit_price: {
    type: Number
  },
  unit_address:{
 type:String

}
},

{
    collection: 'adunits'
});

module.exports = mongoose.model('AdUnit', AdUnit);