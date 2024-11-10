import supertest from 'supertest'
import dotenv from 'dotenv'

dotenv.config()

const request = supertest(process.env.URL)

export const postRegister = async (body) => {
  const response = await request.post('/register').send(body).accept('application/json')

  return response
}
