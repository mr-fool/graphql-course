import { GraphQLServer } from "graphql-yoga"

//location
//bio

//Type definitions
const typeDefs = `
    type Query {
        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        isStock: Boolean!
    }
`

//Resolvers
const resolvers = {
    Query: {
        title() {
            return "trying"
        },
        price() {
            return 3.1
        },
        releaseYear() {
            return 3
        },
        rating() {
            return null
        },
        isStock() {
            return false
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