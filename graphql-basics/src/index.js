import { GraphQLServer } from "graphql-yoga"

const users = [{
    id: '1',
    name: "test",
    email: "test@gmail.com",
    age: 100
}, {
    id: "2",
    name: "smith",
    email: "smith@gmail.com",
    age: 0
}, {
    id: "3",
    name: "mandy",
    email: "mandy@gmail.com"
}]

//Type definitions
const typeDefs = `
    type Query {
        users: [User!]!
        me: User!
        post: Post!
    }
    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }
`

//Resolvers
const resolvers = {
    Query: {
        users(parent, args, ctx, info) {
            return users;
        },
        me() {
            return {
                id: '1234',
                name: "cyka",
                email: "h@h.com",
                age: 28
            }
        },
        post() {
            return {
                id: "0",
                title: "test",
                body: '',
                published: false
            }

        }

    }

}
const server = new GraphQLServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})
server.start(() => {
    console.log("The server is up")
})