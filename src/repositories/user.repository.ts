import { prisma } from '../config/prisma'
import { CreateUserDTO } from '../dtos/create-user.dto'
import { UpdateUserDTO } from '../dtos/update-user.dto'

export class UserRepository {

  static create(data: CreateUserDTO) {
    return prisma.user.create({
      data
    })
  }

  static findAll() {
    return prisma.user.findMany()
  }

  static findById(id: number) {
    return prisma.user.findUnique({
      where: { id }
    })
  }

  static update(
    id: number,
    data: UpdateUserDTO
  ) {
    return prisma.user.update({
      where: { id },
      data
    })
  }

  static delete(id: number) {
    return prisma.user.delete({
      where: { id }
    })
  }
}