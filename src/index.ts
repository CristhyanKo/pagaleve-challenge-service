import { Server } from './server'
import { config } from 'dotenv'
import { closeConnectionDatabase } from './database/mongo'

const createServer = async () => {
	config()
	const PORT = process.env.PORT || 3001

	new Server().server.listen(PORT, () => {
		console.log('---------------------------------------')
		console.log(`✅ App listening on port: ${PORT}`)
		console.log('---------------------------------------')
	})

	process.on('SIGINT', () => {
		closeConnectionDatabase()
		console.log('----------------------------------')
		console.log('✅ App and Connection Database closed')
		console.log('----------------------------------')
	})
}

createServer()
