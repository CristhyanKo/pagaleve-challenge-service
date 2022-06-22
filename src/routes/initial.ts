import express from 'express'
import InitialController from '../app/controllers/InitialController'

const router = express.Router()
const controller = new InitialController()

router.get('/', (req, res) => controller.example(req, res))

export default router
