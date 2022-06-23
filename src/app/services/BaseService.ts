/* eslint-disable @typescript-eslint/ban-ts-comment */
import { t } from 'i18next'
import { FilterQuery, Model } from 'mongoose'

export default class BaseService<ModelType> {
	model: Model<ModelType>

	constructor(model: Model<ModelType>) {
		this.model = model
	}

	public async store(data: object): Promise<object> {
		const result = await this.model.create(data)

		return {
			result: {
				message: t('service.base.store'),
				data: result,
			},
		}
	}

	public async update(id: string, data: object): Promise<object> {
		const result = await this.model.findOneAndUpdate({ _id: id } as FilterQuery<ModelType>, data, { new: true })

		return {
			result: {
				message: t('service.base.update'),
				data: result,
			},
		}
	}

	public async get(filter: object): Promise<object> {
		const result = await this.model.findOne(filter)

		return {
			result: {
				data: result || {},
			},
		}
	}

	public async getAll(): Promise<object> {
		const result = await this.model.find()

		return {
			result: {
				data: result,
			},
		}
	}

	public async getAllWithPaginate(page: number, limit: number): Promise<object> {
		// @ts-ignore
		const result = await this.model.paginate({}, { page: page || 1, limit: limit || 30, sort: 'createdAt' })

		return {
			result: {
				data: result,
			},
		}
	}

	public async delete(id: string): Promise<object> {
		// @ts-ignore
		const result = await this.model.findOneAndDelete({ _id: id })

		return {
			result: {
				message: t('service.base.delete'),
				data: result,
			},
		}
	}
}
