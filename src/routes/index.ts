import express from 'express'

const server = express()
const endPoints = ['customer']

console.log('🟡 [ROUTER] Mapping endpoints...')

endPoints.forEach(async (endPoint) => {
	try {
		await import(`./${endPoint}`).then((module) => {
			server.use(`/${endPoint}`, module.default)
		})
		console.log(`🟢 [ROUTER] Endpoint "${endPoint}" mapped`)
	} catch {
		console.log(`🔥 [ROUTER] Endpoint ${endPoint} not found`)
	}
})

export default server
