import { type NextFunction, type Request, type Response } from 'express'

class HomeHttpHandler {
  private static _instance: HomeHttpHandler

  constructor() {
    if (HomeHttpHandler._instance instanceof HomeHttpHandler) {
      return HomeHttpHandler._instance
    }
    HomeHttpHandler._instance = this
  }

  getHome(_req: Request, res: Response, next: NextFunction): void {
    try {
      res.status(200).json({
        ok: true,
        data: {
          message: 'Hello World!'
        }
      })
    } catch (error: unknown) {
      next(error)
    }
  }
}

export { HomeHttpHandler }
