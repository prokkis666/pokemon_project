var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TypeSchema = new Schema(
  {
    type: {type: String, required: true, min: 1, max: 30},
  }
  );


// Virtual for type's URL
TypeSchema
.virtual('url')
.get(function () {
  return '/catalog/type/' + this._id;
});

//Export model
module.exports = mongoose.model('Type', TypeSchema);