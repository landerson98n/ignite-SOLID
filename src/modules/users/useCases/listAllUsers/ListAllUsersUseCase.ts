import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const adminUser = this.usersRepository.findById(user_id)
    if(adminUser){
      if(adminUser.admin){
        const users: User[] = this.usersRepository.list()
        return users
      }
      throw new Error("Usuario nao é um administrador")
    }
    throw new Error("Usuario nao existe")
   
   
  }
}

export { ListAllUsersUseCase };
