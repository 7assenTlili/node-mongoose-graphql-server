const Item = require('./itemModel');

const itemQuery = {
    async items() {
        const result = await Item.find().populate('placement');
        return result;
    },

    async item(parent, args, ctx, info) {
        if (args.ItemID) {
            const result = await Item.findOne({'ItemID': args.ItemID})
                .populate('placement');
            return result.toObject();
        } else if(args.Code) {
            const result = await Item.findOne({'Code': args.Code})
                .populate('placement');
            return result.toObject();
        }
    }
};

module.exports = { itemQuery };