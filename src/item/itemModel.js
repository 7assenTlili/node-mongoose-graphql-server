var mongoose = require('mongoose');
var Placement = require('./../placement/placementModel');

var Schema = mongoose.Schema;

var ItemSchema = new Schema(
    {
        ItemID: String,
        Code: String,
        Description: String,
        placementID: String
    },
    {
        collection: 'item',
        toObject: {virtuals:true},
        toJSON: {virtuals:true}
    }
);

ItemSchema.virtual('placement', {
    ref: 'Placement',
    localField: 'placementID',
    foreignField: 'id',
    justOne: true
});

module.exports = mongoose.model('Item', ItemSchema);