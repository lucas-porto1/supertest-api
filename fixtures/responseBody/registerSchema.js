import joi from 'joi'

export const registerSchema = joi.object({
  id: joi.number().required(),
  token: joi.string().min(1).required()
})
