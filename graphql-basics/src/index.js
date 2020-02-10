import { GraphQLServer } from "graphql-yoga"

//location
//bio

//Type definitions
const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
    }
`

//Resolvers
const resolvers = {
    Query: {
        hello() {
            return "This is my first query"
        },
        name () {
            return "Picka"
        },
        location () {
            return "Stalingrad"
        },
        bio () {
            return "boy"
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