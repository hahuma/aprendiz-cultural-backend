import { Request, Response } from 'express'
import Jobs from '../../models/Jobs'

export default class CreateJob {
  async create(req: Request, res: Response) {
    const { jobName, jobDescription, requirements, jobType, salary } = req.body

    const job = await Jobs.create({
      jobName,
      jobDescription,
      requirements,
      jobType,
      salary,
    })

    return res.json(job)
  }
}
