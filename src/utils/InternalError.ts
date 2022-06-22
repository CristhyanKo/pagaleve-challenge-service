export default class InternalError extends Error {
	message: string
	statusCode?: number
	errors?: string | string[] | object | object[]

	constructor(message: string, name: string, statusCode?: number, errors?: string | string[] | object | object[] | undefined) {
		super(message)
		this.message = message
		this.statusCode = statusCode

		if (errors) {
			this.errors = errors
		}
	}
}
