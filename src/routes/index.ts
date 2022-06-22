import express from 'express'

const server = express()
const endPoints = ['initial']

console.log('🟡 [ROUTER] Mapping endpoints...')

endPoints.forEach(async (endPoint) => {
	try {
		await import(`./${endPoint}`).then((module) => {
			server.use(`/${endPoint}`, module.default)
		})
	} catch {
		console.log(`🔥 [ROUTER] Endpoint ${endPoint} not found`)
	} finally {
		console.log(`🟢 [ROUTER] Endpoint "${endPoint}" mapped`)
	}
})

export default server
