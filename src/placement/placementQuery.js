const Placement = require('./placementModel');

const placementQuery = {
    async placements() {
        const result = await Placement.find();
        return result;
    },

    async placement(parent, args, ctx, info) {
        const result = await Placement.findOne({'id': args.id}).populate('vacancy');
        return result.toObject();
    }
};

module.exports = { placementQuery };