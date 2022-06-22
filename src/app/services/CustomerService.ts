import { CustomerModel } from '../models/Customer'
import ICustomer from '../models/Interfaces/ICustomer'
import BaseService from './BaseService'

export default class CustomerService extends BaseService<ICustomer> {
	constructor() {
		super(CustomerModel)
	}
}
