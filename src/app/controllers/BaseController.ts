import { Request, Response } from 'express'
import { ChangeLanguage } from '../../utils/ChangeLanguage'
import BaseService from '../services/BaseService'

export default class BaseController<ModelType> {
	constructor(public service: BaseService<ModelType>) {
		this.service = service
	}

	public async store(req: Request, res: Response): Promise<Response> {
		ChangeLanguage(<string>req.headers.locale)
		const result = await this.service.store(req.body)
		return res.json(result)
	}

	public async update(req: Request, res: Response): Promise<Response> {
		ChangeLanguage(<string>req.headers.locale)
		const id = req.query.id || req.params.id
		const result = await this.service.update(<string>id, req.body)
		return res.json(result)
	}

	public async get(req: Request, res: Response): Promise<Response> {
		ChangeLanguage(<string>req.headers.locale)
		const result = await this.service.get(req.body)
		return res.json(result)
	}

	public async getAll(req: Request, res: Response): Promise<Response> {
		ChangeLanguage(<string>req.headers.locale)
		const result = await this.service.getAll()
		return res.json(result)
	}

	public async getAllWithPaginate(req: Request, res: Response): Promise<Response> {
		ChangeLanguage(<string>req.headers.locale)
		const page = req.query.page || req.params.page || 1
		const limit = req.query.limit || req.params.limit || 30

		const result = await this.service.getAllWithPaginate(<number>page, <number>limit)
		return res.json(result)
	}

	public async delete(req: Request, res: Response): Promise<Response> {
		ChangeLanguage(<string>req.headers.locale)
		const id = req.query.id || req.params.id

		const result = await this.service.delete(<string>id)
		return res.json(result)
	}
}
