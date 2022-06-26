import InternalError from 'src/utils/InternalError'
import { connectToDatabase, closeConnectionDatabase, clearDatabase } from '../../database/mongoMemory'
import CustomerService from './CustomerService'
import IResult from './Interfaces/IResult'

beforeAll(async () => await connectToDatabase())
afterEach(async () => await clearDatabase())
afterAll(async () => await closeConnectionDatabase())

const customerService = new CustomerService()

describe('Create Customer', () => {
	it('should create a customer', async () => {
		const customerData = {
			name: 'Test test',
			email: 'teste@test.com',
			phone: '(99) 9 9999-9999',
		}

		const customer: IResult = await customerService.store(customerData)

		expect(customer.result.data).toHaveProperty('_id')
	})

	it('should not create a customer with same email', async () => {
		const customerData = {
			name: 'Test test',
			phone: '(99) 9 9999-9999',
		}

		try {
			await customerService.store(customerData)
		} catch (error: unknown) {
			const newError = error as InternalError
			expect(newError.message).toBe('Customer validation failed: email: Path `email` is required.')
		}
	})

	it('should not create a customer with same phone', async () => {
		const customerData = {
			name: 'Test test',
			email: 'test@test.com',
		}

		try {
			await customerService.store(customerData)
		} catch (error: unknown) {
			const newError = error as InternalError
			expect(newError.message).toBe('Customer validation failed: phone: Path `phone` is required.')
		}
	})

	it('should not create a customer with same name', async () => {
		const customerData = {
			email: 'test@test.com',
			phone: '(99) 9 9999-9999',
		}

		try {
			await customerService.store(customerData)
		} catch (error: unknown) {
			const newError = error as InternalError
			expect(newError.message).toBe('Customer validation failed: name: Path `name` is required.')
		}
	})
})
