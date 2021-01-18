import { Schema, model, Document } from 'mongoose'

export interface ICompany extends Document {
  name: string
  email: string
  description: string
  password: string
  cnpj: string
  whatsapp?: string
  linkedIn?: string
  facebook?: string
}

const companySchema = new Schema(
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
    cnpj: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    whatsapp: String,
    linkedIn: String,
    facebook: String,
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

export default model<ICompany>('Company', companySchema)
