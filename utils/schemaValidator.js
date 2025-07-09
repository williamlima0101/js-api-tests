const Ajv = require('ajv')
const ajv = new Ajv()

function validateSchema(data, schema) {
    const validate = ajv.compile(schema)
    const valid = validate(data)
    return { valid, errors: validate.errors }
}

module.exports = {validateSchema}
