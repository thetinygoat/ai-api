const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String
        email: String
        password: String
        apikey: String
    }
    type Resource {
        id: ID!
        type: String
        name: String
    }
    type Query {
        user: User
        resource: Resource
    }
`;

module.exports = typeDefs;
