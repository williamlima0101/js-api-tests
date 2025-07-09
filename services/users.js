const fetch = require('node-fetch')

async function getUser(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (!response.ok)
        throw new Error(`Failed to fetch user ${id}`)
    return await response.json()
}

async function getAllUsers() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    return res.json()
}

module.exports = { getUser, getAllUsers }