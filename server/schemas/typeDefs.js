// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    input BookInput {
        bookAuthorsArray: [String!]!
        description: String!
        title: String!
        bookId: String!
        image: String!
        link: String!
    }
    type Book {
        bookId: Int!
        authors: [String!]!
        description: String!
        title: String!
        image: String!
        link: String!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int!
        savedBooks: [Book]!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: BookInput!): User
        removeBook(bookId: String!): User
    }


`;

// export the typeDefs
module.exports = typeDefs;