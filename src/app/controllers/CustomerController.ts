import ICustomer from '../models/Interfaces/ICustomer'
import CustomerService from '../services/CustomerService'
import BaseController from './BaseController'

export default class CustomerController extends BaseController<ICustomer> {
	constructor() {
		super(new CustomerService())
	}
}
