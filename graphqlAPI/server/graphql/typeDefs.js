const { gql } = require('apollo-server');

module.exports = gql`

type User {
    id: String
    name: String
    email: String
    password: String
    token: String
}

input RegisterInput {
    name: String
    email: String
    password: String
}

input LoginInput {
    email: String
    password: String
}

type Query {
    users: [User]
    user(id: ID!): User
}

type Mutation {
    registerUser(registerInput: RegisterInput): User
    loginUser(loginInput: LoginInput): User
}
`