import { model, Schema } from 'mongoose'
import mongooseAutoPopulate from 'mongoose-autopopulate'
import mongoosePaginate from 'mongoose-paginate-v2'
import ICustomer from './Interfaces/ICustomer'

const schema = new Schema<ICustomer>(
	{
		name: {
			type: String,
			required: [true, 'O nome é obrigatório'],
			trim: true,
			minlength: 3,
			maxlength: 50,
		},

		userImage: {
			type: String,
			trim: true,
			maxlength: 255,
		},
		email: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

schema.plugin(mongoosePaginate)
schema.plugin(mongooseAutoPopulate)

export const CustomerModel = model<ICustomer>('Customer', schema)
