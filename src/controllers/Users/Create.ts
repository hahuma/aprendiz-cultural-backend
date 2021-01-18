import { Request, Response } from 'express'
import User from '../../models/User'

import { generateHash } from '../../helpers/passwordHash'

export default class CreateUser {
  async create(req: Request, res: Response) {
    const { name, email, password, whatsapp } = req.body

    const hashedPassword = generateHash(password)
    const user = await User.create({
      name,
      email,
      hashedPassword,
      whatsapp
    })

    return res.json(user)
  }
}
