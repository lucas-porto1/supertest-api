import joi from 'joi'
import { expect } from 'chai'
import { postRegister } from '../support/endpoints/register.js'
import { registerRequestBody } from '../fixtures/requestBody/register.js'
import { registerSchema } from '../fixtures/responseBody/registerSchema.js'
import { definedUsers, missingEmail, missingPassword } from '../fixtures/responseBody/register.js'

describe('Register - Validations', function () {
  it('Register a user', async function () {
    const body = registerRequestBody(process.env.EMAIL, process.env.PASSWORD)
    const response = await postRegister(body)

    expect(response.statusCode).to.be.equal(200)
    joi.assert(response.body, registerSchema)
  })

  it('Register an invalid user', async function () {
    const body = registerRequestBody('lucas@test.com', 'test1')
    const response = await postRegister(body)

    expect(response.statusCode).to.be.equal(400)
    expect(response.body).to.deep.equal(definedUsers)
  })

  it('Register without email', async function () {
    const body = registerRequestBody(null, 'test1')
    const response = await postRegister(body)

    expect(response.statusCode).to.be.equal(400)
    expect(response.body).to.deep.equal(missingEmail)
  })

  it('Register without password', async function () {
    const body = registerRequestBody('lucas@test.com', null)
    const response = await postRegister(body)

    expect(response.statusCode).to.be.equal(400)
    expect(response.body).to.deep.equal(missingPassword)
  })
})
