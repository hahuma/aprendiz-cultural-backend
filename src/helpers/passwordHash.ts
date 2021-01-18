import bcrypt from 'bcryptjs'
import { IUser } from '../models/User'

const generateHash = async (unhashedPassword: IUser['password']) =>
  await bcrypt.hash(unhashedPassword, 15)

const comparePasswordHash = async (
  password: IUser['password'],
  hashedPassword: IUser['password']
) => await bcrypt.compare(password, hashedPassword)


export {
    generateHash,
    comparePasswordHash
}