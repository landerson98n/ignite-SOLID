import { response } from "express";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailAlreadyExists = this.usersRepository.findByEmail(email)
    if(!emailAlreadyExists){
      const user = this.usersRepository.create({email,name})
      return user
    }
    throw new Error("Email ja cadastrado")
  }
}

export { CreateUserUseCase };
