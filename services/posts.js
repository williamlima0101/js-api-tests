const fetch = require('node-fetch')

async function getPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
}

async function createPost(data) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        headers: {'Content-Type': 'application-json'},
        body: JSON.stringify(data)
    })
    return res.json()
}

module.exports = { getPost, createPost }