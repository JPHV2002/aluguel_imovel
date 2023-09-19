import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import bcrypt from "bcrypt";

export class CreateUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersrepository: IUsersRepository) {
    this.usersRepository = usersrepository;
  }

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(data.password, salt);

    data.password = passwordHash;

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
