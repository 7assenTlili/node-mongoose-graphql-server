const faker = require('faker');

const Placement = require('./placementModel');

const placementMutation = {
    async createPlacement(parent, args, ctx, info) {
        let placementObj = {};
        const placementID = args.placementID;

        placementObj.id = placementID;
        placementObj.clientBillRate = faker.finance.amount();
        placementObj.payRate = faker.finance.amount();

        let placement = new Placement(placementObj);
        await placement.save();

        return placement;
    },

    async deletePlacement(parent, args, ctx, info) {
        const placementID = args.placementID;

        let deletedPlacement = await Placement.findOneAndRemove({id: placementID});

        if (!deletedPlacement) {
            throw new Error(`Placement Not Found`)
        }
        return deletedPlacement;
    }
};

module.exports = { placementMutation };