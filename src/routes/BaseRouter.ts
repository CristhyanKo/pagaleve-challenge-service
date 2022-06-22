import { Router } from 'express'
import BaseController from 'src/app/controllers/BaseController'

export default class BaseRouter<ModelType> {
	router: Router
	_controller: BaseController<ModelType>

	constructor(_controller: BaseController<ModelType>) {
		this.router = Router()
		this._controller = _controller
	}

	public init(): Router {
		this.router.post('/store', (req, res, next) => this._controller.store(req, res).catch(next))
		this.router.post('/update', (req, res, next) => this._controller.update(req, res).catch(next))
		this.router.post('/update/:id', (req, res, next) => this._controller.update(req, res).catch(next))
		this.router.delete('/delete', (req, res, next) => this._controller.delete(req, res).catch(next))
		this.router.delete('/delete/:id', (req, res, next) => this._controller.delete(req, res).catch(next))
		this.router.get('/get', (req, res, next) => this._controller.get(req, res).catch(next))
		this.router.get('/getAll', (req, res, next) => this._controller.getAll(req, res).catch(next))
		this.router.get('/getAllWithPaginate', (req, res, next) => this._controller.getAllWithPaginate(req, res).catch(next))
		this.router.get('/getAllWithPaginate/:page/:limit', (req, res, next) => this._controller.getAllWithPaginate(req, res).catch(next))

		return this.router
	}
}
