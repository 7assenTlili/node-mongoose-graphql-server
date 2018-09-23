const placementResolver = {
    reportedMargin: (parent, args, ctx, info) => Math.abs(parent.clientBillRate - parent.payRate)
};

module.exports = {placementResolver};