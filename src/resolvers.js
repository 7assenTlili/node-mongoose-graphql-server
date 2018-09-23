const { placementQuery } = require('./placement/placementQuery');
const { placementMutation } = require('./placement/placementMutation');
const { placementResolver } = require('./placement/placementResolver');
const { itemQuery } = require('./item/itemQuery');
const { itemMutation } = require('./item/itemMutation');
const { itemResolver } = require('./item/itemResolver');

module.exports = {
    Query: {
        ...placementQuery,
        ...itemQuery
    },
    Mutation: {
        ...placementMutation,
        ...itemMutation
    },
    Placement: {
        ...placementResolver
    },
    Item: {
        ...itemResolver
    }
};
