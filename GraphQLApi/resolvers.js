const Query = require("./resolvers/query");
const Session = require("./resolvers/session");
const Mutation = require("./resolvers/mutation.js");

module.exports = {
    Query,
    Session,
    Mutation,
    Room: {
        EUROPA: 'Europa',
        SOL: 'Sol',
        SATURN: 'Saturn'
    },
    SessionOrError: {
        __resolveType(obj) {
            if(obj.code) {
                return 'Error'
            }
            return 'Session'
        }
    }
};