const {gql} = require('apollo-server');

module.exports = gql`
type Query {
    # sessions: [Session],
    sessions(id: ID
    title: String
    description: String
    startsAt: String
    endsAt: String
    room: Room
    day: String
    format: String
    track: String
    level: String): [Session]
    sessionsById(id:ID): SessionOrError
    speakers: [Speaker]
    speakerById(id: ID): Speaker
}

type Mutation {
    toggleFavoriteSession(id: ID): Session
    addNewSession(session:SessionInput): Session
}

type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
}

type Error {
    code: String
    message: String
    token: String
}

union SessionOrError = Session | Error

input SessionInput {
    title: String
    description: String
    startsAt: String
    endsAt: String
    room: Room
    day: String
    format: String
    track: String
    level: String
    favorite: Boolean
}

enum Room {
    EUROPA
    SOL
    SATURN
}

type Session {
    id: ID!
    title: String
    description: String
    startsAt: String
    endsAt: String
    room: Room
    day: String
    format: String
    track: String
    @deprecated(
        reason: "Too many sessions do not fit into a single track, we will be migrating"
    )
    level: String
    favorite: Boolean
    speakers: [Speaker]
}
`