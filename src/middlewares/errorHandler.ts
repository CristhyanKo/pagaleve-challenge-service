import { NextFunction, Request, Response } from 'express'
import { t } from 'i18next'
import { ChangeLanguage } from '../utils/ChangeLanguage'
import InternalError from 'src/utils/InternalError'

export const ErrorHandler = (error: InternalError, req: Request, res: Response, next: NextFunction) => {
	ChangeLanguage(<string>req.headers.locale)
	if (error) {
		if (error.name === 'ValidationError' && error.errors) {
			error.message = t('error.validation')
			Object.entries(error.errors).forEach(([_, value]) => {
				error.message += `${value.message} `
			})

			console.log(`🔥 [ERROR] ${error.message}`)
			return res.status(500).json({ error: error.message })
		}

		if (error.name === 'SyntaxError') {
			console.log(`🔥 [ERROR] ${error.message}`)
			return res.status(500).json({ error: t('error.payload') })
		}
	}
}
