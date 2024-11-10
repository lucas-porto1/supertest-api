import supertest from 'supertest'
import dotenv from 'dotenv'

dotenv.config()

const request = supertest(process.env.URL)

export const getUser = async (id) => {
  const response = await request.get(`/users/${id}`)

  return response
}
