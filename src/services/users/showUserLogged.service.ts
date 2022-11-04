import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";

const showUserLoggedService = async (id: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const userFound = await userRepository.findOne({
    where: {
      id
    },
  });

  if (!userFound) {
    throw new AppError("User not found!");
  }

  return userFound;
};

export default showUserLoggedService;