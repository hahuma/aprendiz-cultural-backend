import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { MONGO_URL } from './config/globals'
import { usersRoutes } from './routes/users'
import { jobsRoutes } from './routes/jobs'
import { companiesRoutes } from './routes/companies'

class App {
  public readonly app
  constructor() {
    this.app = express()
    this._middlewares()
    this._database()
    this._routes()
  }

  private _middlewares() {
    this.app.use(express.json())
    this.app.use(cors())
  }

  private _database() {
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }

  private _routes() {
    this.app.use(usersRoutes)
    this.app.use(companiesRoutes)
    this.app.use(jobsRoutes)
  }
}

export default new App().app
