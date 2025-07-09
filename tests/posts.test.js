const { getPost, createPost } = require("../services/posts")
const { validateSchema } = require("../utils/schemaValidator")
const postSchema = require("../schemas/post.schema.json")

describe('GET /posts/:id', () => {
    test('should match post schema', async () => {
        const post = await getPost(1)
        const { valid, errors } = validateSchema(post, postSchema)
        expect(valid).toBe(true)
        if (!valid)
            console.error(errors)
    })
})

describe('POST /posts', () => {
    test('should create a valid user', async () => {
        const newUser = {
            userId: 1,
            title: 'New user post',
            body: 'any content'
        }
        const created = await createPost(newUser)
        const { valid, errors } = validateSchema(created, postSchema)
        expect(valid).toBe(true)
        if (!valid)
            console.error(errors)
    })
})