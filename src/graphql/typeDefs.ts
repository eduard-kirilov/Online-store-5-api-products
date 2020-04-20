/**
* Node, TS, Apollo, Auth, - Starter
* https://github.com/eduard-kirilov/node-ts-apollo-auth-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
export const typeDefs = `
  type User {
    _id: ID!
    email: String!
    password: String!
    createdAt: String!
    updatedAt: String!
  }
  type AuthData {
    _id: ID!
  }
  type CurrentUser {
    _id: ID!
    email: String!
    createdAt: String!
    updatedAt: String!
  }
  type Product {
    _id: ID,
    title: String,
    subtitle: String,
    url: String,
  }
  type Query {
    users: [User!]!
    currentUser: CurrentUser
    product(id: ID!): Product
    products(title: String): [Product]
  }
  type Mutation {
    addProduct(
      title: String,
      subtitle: String,
      url: String,
    ): Product
    upProduct(
      _id: ID!,
      title: String,
      subtitle: String,
      url: String,
    ): Product
    sortProduct(title: String): Product
    delProduct (_id: ID): Product
    signUp(email: String!, password: String!): AuthData!
    login(email: String!, password: String!): CurrentUser
    logout: Boolean
  }
`;