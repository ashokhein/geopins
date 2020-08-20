const { gql } = require("apollo-server")

module.exports = gql`
    type User {
        _id: ID
        name: String
        email: String
        picture: String
    }

    type Pin @cacheControl(maxAge: 4000) {
        _id: ID
        createdAt: String
        title: String
        content: String
        image: String
        latitude: Float
        longitude: Float
        author: User
        comments: [Comment]
    }

    input CreateInputPin {
        title: String
        content: String
        image: String
        latitude: Float
        longitude: Float
    }

    type Comment {
        text: String
        createdAt: String
        author: User
    }

    type Query {
        me: User
        getPins: [Pin!]
    }

    type Mutation {
        createPin(input: CreateInputPin!) : Pin
        deletePin(pinId: ID!): Pin
        createComment(pinId: ID!, text: String!) : Pin!
    }

    type Subscription {
        pinAdded: Pin
        pinDeleted: Pin
        pinUpdated: Pin
    }
`
