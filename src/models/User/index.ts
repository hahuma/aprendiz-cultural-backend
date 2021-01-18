import { Schema, model, Document } from 'mongoose'

export interface IUser extends Document {
  name: string
  email: string
  password: string
  telephone: string
  cpf: string
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    cpf: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    birth: {
      type: String,
      required: true
    },
    facebook: String,
    telephone: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
)

export default model<IUser>('User', userSchema)
