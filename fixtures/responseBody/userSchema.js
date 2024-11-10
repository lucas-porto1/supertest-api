import joi from 'joi'

export const userSchema = joi
  .object({
    page: joi.number().integer(),
    per_page: joi.number().integer(),
    total: joi.number().integer(),
    total_pages: joi.number().integer(),

    data: joi
      .alternatives()
      .try(
        joi.object({
          id: joi.number().required(),
          email: joi.string().email().required(),
          first_name: joi.string().required(),
          last_name: joi.string().required(),
          avatar: joi.string().uri().required()
        }),
        joi.array().items(
          joi.object({
            id: joi.number().required(),
            email: joi.string().email().required(),
            first_name: joi.string().required(),
            last_name: joi.string().required(),
            avatar: joi.string().uri().required()
          })
        )
      )
      .required(),

    support: joi
      .object({
        url: joi.string().uri().required(),
        text: joi.string().required()
      })
      .required()
  })
  .when(joi.object({ data: joi.array() }).unknown(), {
    then: joi.object({
      page: joi.number().integer().required(),
      per_page: joi.number().integer().required(),
      total: joi.number().integer().required(),
      total_pages: joi.number().integer().required()
    })
  })
