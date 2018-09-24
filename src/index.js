const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');

const {protectedMiddleware, placementMiddleware, globalMiddleware} = require('./middlewares');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost/graphql-api-new-arch';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const typeDefs = importSchema('./src/schema.graphql');
const resolvers = require('./resolvers');

//Middleware specific to placement resolver
const placementSpecificMiddleware = {
    Query: {
        placement: placementMiddleware
    }
};

//Middleware that 'protects' resolvers against unauthenticated users
const protectionMiddleware = {
    Query: {
        placements: protectedMiddleware,
        items: protectedMiddleware
    },
    Mutation: {
        createPlacement: protectedMiddleware,
        createItem: protectedMiddleware,
        deletePlacement: protectedMiddleware,
        deleteItem: protectedMiddleware,
    }
};

middlewares = [globalMiddleware, placementSpecificMiddleware, protectionMiddleware];

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    middlewares
});

server.start(() => console.log('Server is running on http://localhost:4000'));
