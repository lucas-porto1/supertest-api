import joi from 'joi'

export const loginSchema = joi.object({
  token: joi.string().min(1).required()
})
