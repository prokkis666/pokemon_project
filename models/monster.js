var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MonsterSchema = new Schema(
  {
  	number: {type: Number, required: false, min: 1, max: 151},
    name: {type: String, required: true, min: 1, max: 30},
	type: [{type: Schema.ObjectId, ref: 'Type'}]
  }
  );


// Virtual for type's URL
MonsterSchema
.virtual('url')
.get(function () {
  return '/catalog/type/' + this._id;
});

//Export model
module.exports = mongoose.model('Monster', MonsterSchema);