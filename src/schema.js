const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String
        email: String
        password: String
        apikey: String
    }

    type Query {
        user(email: String!): User
    }
`;

module.exports = typeDefs;
