import { GraphQLServer } from "graphql-yoga"

//location
//bio

//Type definitions
const typeDefs = `
    type Query {
        id: ID!
        name: String!
        age: Int!
        employed: Boolean!
        gpa: Float
    }
`

//Resolvers
const resolvers = {
    Query: {
       id () {
        return "abc123"
       },
       name() {
        return "blyat"
       },
       age() {
        return 100
       },
       employed() {
        return false
       },
       gpa() {
        return null
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