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
}];

const posts = [{
    id: "1",
    title: "how are you",
    body: "none",
    published: true
}, {
    id: "2",
    title: "helloworld",
    body: "yes",
    published: false
},
 {
    id: "3",
    title: "yellow",
    body: "",
    published: false
 }]

//Type definitions
const typeDefs = `
    type Query {
        users(query: String): [User!]!
        me: User!
        posts(query: String): [Post!]!
    
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
            if (!args.query) {
                return users;
            }
            return users.filter( (user) => {
                return user.name.toLowerCase().includes(args.query.toLowerCase())
            })
        },
        posts(parent, args, ctx, info) {
            if (!args.query) {
                return posts;
            }
            return posts.filter( (post) => {
                const isTitleMath = post.title.toLowerCase().includes(args.query.toLowerCase());
                const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
                return isTitleMath || isBodyMatch;
            })
        },
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