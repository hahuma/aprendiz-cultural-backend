import { Schema, model, Document } from 'mongoose'

export interface IJob extends Document {
    jobName: string
    jobDescription: string
    requirements: string
    jobType: string
    salary: string
}

const jobsSchema = new Schema({
  jobName: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
})

export default model<IJob>('Job', jobsSchema)
