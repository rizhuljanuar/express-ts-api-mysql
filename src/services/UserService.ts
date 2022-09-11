import { UserInterface } from "../interfaces/UserInterface";
import UserModel from "../models/UserModel";

export const findAll = async (): Promise<UserInterface[]> => {
  const users: any = await UserModel.findAll();
  return users;
};

export const findOne = async (id: number): Promise<UserInterface> => {
  const users: any = await UserModel.findOne({
    where: {
      id,
    },
  });
  return users;
};

export const create = async (itemCreate: Omit<any, string>): Promise<void> => {
  await UserModel.create(itemCreate);
};

export const update = async (id: number, itemUpdate: Object): Promise<void> => {
  await UserModel.update(itemUpdate, {
    where: {
      id,
    },
  });
};

export const destroy = async (id: number): Promise<void> => {
  await UserModel.destroy({
    where: {
      id,
    },
  });
};
