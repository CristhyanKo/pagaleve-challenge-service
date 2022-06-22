import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import { connectToDatabase } from './database/mongo'
import routes from './routes'
import { app } from './config/app'
import { ErrorHandler } from './middlewares/errorHandler'

export class Server {
	public server: express.Application

	constructor() {
		this.server = express()

		this._database()
		this._middlewares()
		this._routes()
		this._errorsHandler()
	}

	private _database(): void {
		connectToDatabase()
	}

	private _middlewares(): void {
		this.server.use(express.json())
		this.server.use(express.urlencoded({ extended: true }))
		this.server.use(cors())
		this.server.options('*', cors)
		this.server.use(logger('dev'))
	}

	private _routes(): void {
		// this.server.use('/', (_, res) => {
		// 	res.status(200).json({ message: `Welcome to Pagaleve API, use the ${app.apiPrefix} to access the API` })
		// })
		this.server.use(app.apiPrefix, routes)
	}

	private _errorsHandler(): void {
		this.server.use(ErrorHandler)
	}
}
