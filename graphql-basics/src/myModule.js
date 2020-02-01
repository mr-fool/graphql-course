const message = "Some message from myModule.js"
const name = 'soyboi'

const getGreeting = (name) => {
    return `welcome to hell, bitch ${name}`;
}

const location = "meme"
export {
    message,
    name,
    location as default,
    getGreeting
}