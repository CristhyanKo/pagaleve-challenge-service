import { model, Schema } from 'mongoose'
import mongooseAutoPopulate from 'mongoose-autopopulate'
import mongoosePaginate from 'mongoose-paginate-v2'
import ICustomer from './Interfaces/ICustomer'
import { t } from 'i18next'

const schema = new Schema<ICustomer>(
	{
		name: {
			type: String,
			required: [true, t('customer.name.required')],
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
			required: [true, t('customer.email.required')],
			unique: true,
		},
		phone: {
			type: String,
			required: [true, t('customer.phone.required')],
		},
	},
	{
		timestamps: true,
	}
)

schema.plugin(mongoosePaginate)
schema.plugin(mongooseAutoPopulate)

export const CustomerModel = model<ICustomer>('Customer', schema)
