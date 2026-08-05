import { CreateUserDTO } from '../dtos/create-user.dto'
import { UpdateUserDTO } from '../dtos/update-user.dto'
import { UserRepository } from '../repositories/user.repository'

export class UserService {

  static create(data: CreateUserDTO) {
    return UserRepository.create(data)
  }

  static getAll() {
    return UserRepository.findAll()
  }

  static getById(id: number) {
    return UserRepository.findById(id)
  }

  static update(
    id: number,
    data: UpdateUserDTO
  ) {
    return UserRepository.update(id, data)
  }

  static delete(id: number) {
    return UserRepository.delete(id)
  }
}