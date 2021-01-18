import { Router } from 'express'
import CreateJobs from '../controllers/Jobs/Create'

const createJobs = new CreateJobs()

const routes = Router()

routes.post('/jobs/create', createJobs.create)

export {routes as jobsRoutes}