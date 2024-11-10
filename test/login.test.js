import joi from 'joi'
import { expect } from 'chai'
import { postLogin } from '../support/endpoints/login.js'
import { registerRequestBody } from '../fixtures/requestBody/register.js'
import { loginSchema } from '../fixtures/responseBody/loginSchema.js'

describe('Login - Validations', function () {
  it('Log in with a user', async function () {
    const body = registerRequestBody(process.env.EMAIL, process.env.PASSWORD)
    const response = await postLogin(body)

    expect(response.statusCode).to.be.equal(200)
    joi.assert(response.body, loginSchema)
  })
})
