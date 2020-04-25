const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        uid: ID!
        name: String
        email: String
        apikey: String
    }

    type Query {
        user(email: String!): User
    }
`;

module.exports = typeDefs;
