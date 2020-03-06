import { GraphQLServer } from "graphql-yoga"

//location
//bio

//Type definitions
const typeDefs = `
    type Query {
        greeting(name: String, position: String): String!
        me: User!
        post: Post!
        add(a: Float!, b: Float!): Float!
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
        greeting(parent, args, ctx, info) {
            if (args.name && args.position){
                return `Hello, ${args.name}!! You are my favorite ${args.position}`
            }
            else {
                return "Hello";
            }

        },
        add(parent, args, ctx, info) {
            return args.a + args.b
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