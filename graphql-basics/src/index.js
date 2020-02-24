import { GraphQLServer } from "graphql-yoga"

//location
//bio

//Type definitions
const typeDefs = `
    type Query {
        me: User!
    }
    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
`

//Resolvers
const resolvers = {
    Query: {
        me() {
            return {
                id: '1234',
                name: "cyka",
                email: "h@h.com",
                age: 28
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