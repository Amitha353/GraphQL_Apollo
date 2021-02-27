const {ApolloServer, gql, ApolloError } = require('apollo-server');
const SessionAPI = require('./datasources/sessions');
const SpeakerAPI = require('./datasources/speakers');

const typeDefs = require("./schema.js");

const resolvers = require("./resolvers.js");

const dataSources = () => ({
    sessionAPI: new SessionAPI(),
    speakerAPI: new SpeakerAPI()
});

const server = new ApolloServer({
    typeDefs, 
    resolvers, 
    dataSources,
    debug: false,
    formatError: (err) => {
        if(err.extensions.code == 'INTERNAL_SERVER_ERROR') {
            return new ApolloError("We are having some trouble", "ERROR", {token: "uniquetoken"});
        }
        return err;
    }
    // introspection: true,
    // playground: true
});

server
    .listen({port: process.env.PORT || 4000})
    .then(({ url }) => {
        console.log(`graphQL running at ${url}`);
    });

/**
 * Schema Types in GraphQL:
 * 1. Int
 * 2. Float
 * 3. String
 * 4. Boolean
 * 5. ID
 * 6. Enum
 * 7. Object
 */