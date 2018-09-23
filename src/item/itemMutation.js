const faker = require('faker');

const Item = require('./itemModel');

const itemMutation = {
    async createItem(parent, args, ctx, info) {
        let itemObj = {};
        const placementID = args.placementID;

        itemObj.ItemID = faker.random.number();
        itemObj.Code = faker.random.uuid();
        itemObj.Description = faker.lorem.sentence();
        placementID ? itemObj.placementID = placementID : '';

        let item = new Item(itemObj);
        await item.save();

        return item;
    },

    async deleteItem(parent, args, ctx, info) {
        const itemID = args.itemID;

        let deletedItem = await Item.findOneAndRemove({ItemID: itemID});

        if (!deletedItem) {
            throw new Error(`Item Not Found`)
        }
        return deletedItem;
    }
};

module.exports = { itemMutation };