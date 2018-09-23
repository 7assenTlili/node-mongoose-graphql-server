<h1 align="center"><strong>Boilerplate for an Advanced GraphQL Server using GraphQL Modules</strong></h1>

<br />

![](https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg)

<div align="center"><strong>GraphQL server for Node.js and Mongoose</strong></div>
<div align="center">Advanced GraphQL server for Node.js and Mongoose - using GraphQL Modules.</div>

## Project Structure


| File name 　　　　　　　　　　　　　　| Description 　　　　　　　　<br><br>|
| :--  | :--         |
| `└── src ` (_directory_) | _Contains the source files for your GraphQL server_ |
| `　　├── index.js` | The entry point for your GraphQL server |
| `　　├── schema.graphql` | The **application main schema that imports models schema definitions** defining the API exposed to client applications  |
| `　　├── resolvers.js` | _Contains the implementation of the resolvers for the application schema_ |
| `　　└── item` (_directory_) | _Contains item model files_ |
| `　　　　└── item.grapghql` | The **GraphQL schema definition** of the item model  |
| `　　　　└── itemModel.js` | The **Mongoose schema definition** of the item collection  |
| `　　　　└── itemQuery.js` | The implementation of **Query resolvers** of item model  |
| `　　　　└── itemMutation.js` | The implementation of **Mutation resolvers** of item model  |
| `　　　　└── itemResolver.js` | The implementation of **filed resolvers** of item model  |
| `　　└── placement` (_directory_)  | _Contains placement model files_ |
| `　　　　└── placement.grapghql`    | The **GraphQL schema definition** of the placement model  |
| `　　　　└── placementModel.js`     | The **Mongoose schema definition** of the placement collection  |
| `　　　　└── placementQuery.js`     | The implementation of **Query resolvers** of placement model  |
| `　　　　└── placementMutation.js`  | The implementation of **Mutation resolvers** of placement model  |
| `　　　　└── placementResolver.js`  | The implementation of **filed resolvers** of placement model  |

## Coming Soon

Add subscription resolvers.

## Contributing

Your feedback is **very helpful**, please share your opinion and thoughts!
