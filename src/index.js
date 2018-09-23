const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost/graphql-api-new-arch';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const typeDefs = importSchema('./src/schema.graphql');
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log('Server is running on http://localhost:4000'));
