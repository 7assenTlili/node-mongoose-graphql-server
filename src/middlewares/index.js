//Use this variable to simulate authentication
let isAuthed = false;

const placementMiddleware = async (resolve, root, args, context, info) => {
    console.log(`Middleware Before placement resolver`);
    const result = await resolve(root, args, context, info);
    console.log(`Middleware after placement resolver`);
    return result
};

const protectedMiddleware = async (resolve, root, args, context, info) => {
    if (isAuthed) {
        console.log(`Ok, you are authed you can use this route`);
        const result = await resolve(root, args, context, info);
        return result
    }
    throw Error(`You are not authorised to use this resolver`);
};

const globalMiddleware = async (resolve, root, args, context, info) => {
    console.log(`I run this line BEFORE every resolver`);
    const result = await resolve(root, args, context, info);
    console.log(`I run this line AFTER every resolver`);
    return result
};

module.exports = {
    placementMiddleware,
    protectedMiddleware,
    globalMiddleware
};