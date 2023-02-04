import { Router } from 'express'

import { HomeHttpHandler } from './http'

const router = Router()

const homeHttpHandler = new HomeHttpHandler()

router.route('/').get(homeHttpHandler.getHome)

export { router as homeRouter }
