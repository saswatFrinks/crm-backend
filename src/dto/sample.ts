import * as Joi from 'joi'
import BaseDTO from './base'

class SampleDTO extends BaseDTO {
  readonly date: string
  readonly belt: string
  readonly shift: number

  private readonly schema = Joi.object().keys({
    date: Joi.date().required(),
    belt: Joi.string().alphanum(),
    shift: Joi.number().min(1).max(10),
  })

  constructor(json: object) {
    super(json)
    const { error } = this.schema.validate(json)
    if (error) {
      throw error
    }
  }
}

export default SampleDTO
