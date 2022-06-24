import { connect, connection } from 'mongoose'

export const connectToDatabase = async () => {
	try {
		await connect(<string>process.env.MONGO_DB_URI, { autoIndex: true })
	} catch (error) {
		console.log('🔥 [DB] Error connecting to MongoDB')
		console.log(error)
	}
}

export const closeConnectionDatabase = async () => {
	await connection.close()
}
