const nock = require("nock")
const { getUser } = require("../services/users")
const userSchema = require('../schemas/user.schema.json');
const validateSchema = require('../utils/schemaValidator');

describe('Mocked API with nock', () => {
    beforeAll(() => {
        nock("https://jsonplaceholder.typicode.com/users")
            .get('/users/123')
            .reply(200, {
                id: 123,
                name: 'Alice',
                email: 'alice@example.com'
            })
    })

    it('should return mocked user and match schema', async () => {
        const user = await getUser(123)
        const valid = validateSchema(user, userSchema)
        expect(valid).toBe(true)
    })


    afterAll(() => {
        nock.cleanAll()
    })

})


