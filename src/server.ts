import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import { connectToDatabase } from './database/mongo'
import routes from './routes'
import { app } from './config/app'
import { ErrorHandler } from './middlewares/errorHandler'
import i18next from 'i18next'
import i18nextBanckend from 'i18next-fs-backend'
import i18nMiddleware from 'i18next-http-middleware'

import en from './locales/en.json'
import ptBr from './locales/ptBr.json'

export class Server {
	public server: express.Application

	constructor() {
		this.server = express()

		this._database()
		this._internationalization()
		this._middlewares()
		this._routes()
		this._errorsHandler()
	}

	private _internationalization(): void {
		i18next
			.use(i18nextBanckend)
			.use(i18nMiddleware.LanguageDetector)
			.init({
				fallbackLng: 'ptBr',
				backend: {
					loadPath: 'src/locales/{{lng}}.json',
				},
				resources: {
					en: { translation: en },
					ptBr: { translation: ptBr },
				},
			})
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
		this.server.use(i18nMiddleware.handle(i18next))
	}

	private _routes(): void {
		this.server.use(app.apiPrefix, routes)
	}

	private _errorsHandler(): void {
		this.server.use(ErrorHandler)
	}
}
