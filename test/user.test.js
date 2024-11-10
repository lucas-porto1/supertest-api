import joi from 'joi'
import { expect } from 'chai'
import { getUser } from '../support/endpoints/user.js'
import { userSchema } from '../fixtures/responseBody/userSchema.js'
import { generateRandomNumber } from '../support/helpers/utility.js'

describe('User - Validations', function () {
  it('Get all users', async function () {
    const response = await getUser('')

    expect(response.statusCode).to.be.equal(200)
    joi.assert(response.body, userSchema)
  })

  it('Get single user', async function () {
    const randomId = generateRandomNumber(1, 10)
    const response = await getUser(randomId)

    expect(response.statusCode).to.be.equal(200)
    joi.assert(response.body, userSchema)
  })

  it('Get invalid user', async function () {
    const response = await getUser(999999)

    expect(response.statusCode).to.be.equal(404)
  })
})
