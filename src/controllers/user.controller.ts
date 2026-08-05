import { FastifyReply, FastifyRequest } from 'fastify'

import {
  createUserSchema,
  updateUserSchema
} from '../schemas/user.schema'

import { UserService } from '../services/user.service'

export class UserController {

  static async create(
    request: FastifyRequest,
    reply: FastifyReply
  ) {

    const data =
      createUserSchema.parse(
        request.body
      )

    const user =
      await UserService.create(data)

    return reply
      .status(201)
      .send(user)
  }

  static async getAll() {

    return UserService.getAll()
  }

  static async getById(
    request: FastifyRequest<{
      Params: {
        id: string
      }
    }>
  ) {

    return UserService.getById(
      Number(request.params.id)
    )
  }

  static async update(
    request: FastifyRequest<{
      Params: {
        id: string
      }
    }>,
    reply: FastifyReply
  ) {

    const data =
      updateUserSchema.parse(
        request.body
      )

    const user =
      await UserService.update(
        Number(request.params.id),
        data
      )

    return reply.send(user)
  }

  static async delete(
    request: FastifyRequest<{
      Params: {
        id: string
      }
    }>
  ) {

    return UserService.delete(
      Number(request.params.id)
    )
  }
}