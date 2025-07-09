const { getUser, getAllUsers } = require("../services/users")
const { validateSchema } = require("../utils/schemaValidator")
const userSchema = require("../schemas/user.schema.json")

describe('GET /users/:id', () => {
    test('should match user schema', async () => {
        const user = await getUser(1)
        const { valid, errors } = validateSchema(user, userSchema)
        expect(valid).toBe(true)
        if (!valid)
            console.error(errors)
    })

    [1, 2, 3, 4, 5].forEach((id) => {
        test(`user ${id} should  match schema`, async () => {
            const user = await getUser(id)
            const { valid, errors } = validateSchema(user, userSchema)
            expect(valid).toBe(true)
            if (!valid)
                console.error(errors)
        })
    })

    test('should fail if schema is broken', async () => {
        const fakeUser = {name: 'John'}
        const { valid, errors } = validateSchema(fakeUser, userSchema)
        expect(valid).toBe(false)
        expect(errors).toBeDefined()
    })

    test('GET /users returns array of valid users', async () => {
        const users = await getAllUsers()
        users.forEach(user => {
            const { valid, errors } = validateSchema(user, userSchema)
            expect(valid).toBe(true)
            if (!valid) console.error(errors)
        })
    })

    test('GET /users:id with nonexistent ID returns empty object or error', async () => {
        const user = await getUser(9999)
        expect(user).toBeEqual({})
    })
})