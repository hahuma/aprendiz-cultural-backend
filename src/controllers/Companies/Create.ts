import { Request, Response } from 'express'
import Company from '../../models/Companies'

import { generateHash } from '../../helpers/passwordHash'

export default class CreateCompany {
  async create(req: Request, res: Response) {
    const {
      name,
      email,
      description,
      password,
      cnpj,
      whatsapp,
      linkedIn,
      facebook,
    } = req.body

    const hashedPassword = generateHash(password)
    const company = await Company.create({
      name,
      email,
      description,
      hashedPassword,
      cnpj,
      whatsapp,
      linkedIn,
      facebook,
    })

    return res.json(company)
  }
}
