import { Request, Response } from 'express'
import InitialService from '../services/InitialService'

export default class InitialController {
	private _service: InitialService

	constructor() {
		this._service = new InitialService()
	}

	public async example(req: Request, res: Response): Promise<Response> {
		const serviceExample = await this._service.initial()
		return res.json(serviceExample)
	}
}
