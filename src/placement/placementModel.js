var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlacementSchema = new Schema(
    {
        id: Number,
        clientBillRate: Number,
        payRate: Number,
        reportedMargin: Number
    },
    {
        collection: 'placement'
    }
);

//Export model
module.exports = mongoose.model('Placement', PlacementSchema);