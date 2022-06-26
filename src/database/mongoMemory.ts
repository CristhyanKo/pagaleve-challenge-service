import { connect, connection } from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

const mongod = new MongoMemoryServer()

export const connectToDatabase = async () => {
	await mongod.start()
	const uri = await mongod.getUri()
	try {
		await connect(uri)
	} catch (error) {
		console.log('🔥 [DB] Error connecting to MongoDB Memory')
		console.log(error)
	}
}

export const closeConnectionDatabase = async () => {
	await connection.dropDatabase()
	await connection.close()
	await mongod.stop()
}

export const clearDatabase = async () => {
	const collections = await connection.collections

	for (const key in collections) {
		const collection = collections[key]
		await collection.deleteMany({})
	}
}
