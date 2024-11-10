import supertest from 'supertest'
import dotenv from 'dotenv'

dotenv.config()

const request = supertest(process.env.URL)

export const postLogin = async (body) => {
  const response = await request.post('/login').send(body).accept('application/json')

  return response
}
