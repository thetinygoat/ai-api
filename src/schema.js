const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        uid: ID!
        name: String
        email: String
        apikey: String
        resources: [Resource]!
    }

    type Resource {
        rid: ID!
        name: String!
        description: String
    }

    type Query {
        user(email: String!): User
    }
    type Mutation {
        login(email: String!, password: String): String
    }
`;

module.exports = typeDefs;
