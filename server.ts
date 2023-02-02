import helmet from 'helmet'
import compress from 'compression'
import express, { type Application } from 'express'
import { configEnv, logger } from '@configs/index'

class Server {
  readonly app!: Application
  readonly routerPrefix!: string

  private port!: string | number

  private static _instance: Server

  constructor() {
    if (Server._instance instanceof Server) {
      return Server._instance
    }
    this.app = express()
    this.routerPrefix = '/api/v1'
    this.config()
    this.middlewares()
    Server._instance = this
  }

  private config(): void {
    this.port = configEnv.PORT
  }

  private middlewares(): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(helmet.xssFilter())
    this.app.use(helmet.noSniff())
    this.app.use(helmet.hidePoweredBy())
    this.app.use(helmet.frameguard({ action: 'deny' }))
    this.app.use(compress())
    this.app.use(logger.express)
  }

  start(): void {
    if (configEnv.NODE_ENV !== 'test') {
      this.app.listen(this.port, () => {
        logger.access.info(`[*] Server running on port ${this.port}...`)
      })
    }
  }
}

export { Server }
