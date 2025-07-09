const fetch = require('node-fetch')
const Ajv = require('ajv')

const ajv = new Ajv()

const schema = {
    type: "object",
    required: ["id", "name", "username", "email"],
    properties: {
        id: {type: "number"},
        name: {type: "string"},
        username: {type: "string"},
        email: {type: "string"}
    }
}

test('API response matches JSON schema', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const json = await response.json()

    const valid = ajv.validate(schema, json)

    if (!valid) {
        console.error(validate.errors)
    }

    console.log(json)

    expect(valid).toBe(true)
})