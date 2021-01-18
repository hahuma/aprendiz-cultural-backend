import { Router } from 'express'
import CreateCompany from '../controllers/Companies/Create'

const createCompany = new CreateCompany()

const routes = Router()

routes.post('/companies/create', createCompany.create)

export {routes as companiesRoutes}