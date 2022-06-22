import { NextFunction, Request, Response } from 'express'
import InternalError from 'src/utils/InternalError'

export const ErrorHandler = (error: InternalError, req: Request, res: Response, next: NextFunction) => {
	if (error) {
		if (error.name === 'ValidationError' && error.errors) {
			error.message = 'Validation error: '
			Object.entries(error.errors).forEach(([key, value]) => {
				error.message += `${key}: ${value.message} `
			})

			console.log(`🔥 [ERROR] ${error.message}`)
			return res.status(500).json({ error: error.message })
		}

		if (error.name === 'SyntaxError') {
			console.log(`🔥 [ERROR] ${error.message}`)
			return res.status(500).json({ error: 'Invalid payload' })
		}
	}
}
