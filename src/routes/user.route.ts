import { FastifyInstance } from 'fastify'
import { UserController } from '../controllers/user.controller'

export async function userRoute(
  app: FastifyInstance
) {

  app.post(
    '/users',
    UserController.create
  )

  app.get(
    '/users',
    UserController.getAll
  )

  app.get(
    '/users/:id',
    UserController.getById
  )

  app.put(
    '/users/:id',
    UserController.update
  )

  app.delete(
    '/users/:id',
    UserController.delete
  )
}