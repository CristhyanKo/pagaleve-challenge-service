import { Document } from 'mongoose'

export default interface ICustomer extends Document {
	name: string
	userImage?: string
	email: string
	phone: string
}
