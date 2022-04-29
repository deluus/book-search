const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: ID
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }
    input BookInput {
        bookId: ID
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
        users: [User]
        # user(username: String!): User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(authors: [String], description: String, title: String, bookId: String, image: String, link: String): User
        removeBook(bookId: String): User
        # saveBook(bookData: BookInput!): User
        # deleteBook(bookId: ID!): User
    }
`;

module.exports = typeDefs; 