import { Router } from 'express'
import CreateUser from '../controllers/Users/Create'

const createUser = new CreateUser()

const routes = Router()

routes.post('/users/create', createUser.create)

export {routes as usersRoutes}