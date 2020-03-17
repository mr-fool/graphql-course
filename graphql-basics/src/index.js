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
    id: "10",
    title: "how are you",
    body: "none",
    published: true,
    author: "1"
}, {
    id: "11",
    title: "helloworld",
    body: "yes",
    published: false,
    author: "1"
},
 {
    id: "12",
    title: "yellow",
    body: "",
    published: false,
    author: "2"
 }]

//Type definitions
const typeDefs = `
    type Query {
        users(query: String): [User!]!
        posts(query: String): [Post!]!
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
        author: User!
        
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
        },
        post() {
            return {
                id: "092",
                title: "Graph 101",
                body: '',
                published: false
            }
        },
        Post: {
            author(parents, args, ctx, info) {
               return users.find( (user) => {
                    return user.id === parents.author
               })
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