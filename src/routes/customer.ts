import CustomerController from '../app/controllers/CustomerController'
import ICustomer from 'src/app/models/Interfaces/ICustomer'
import BaseRouter from './BaseRouter'

const controller = new CustomerController()
const router = new BaseRouter<ICustomer>(controller).init()

export default router
