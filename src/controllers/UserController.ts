import { Request, Response, NextFunction } from "express";
import { UserInterface } from "../interfaces/UserInterface";
import * as UserService from "../services/UserService";

class User {
  async get(_req: Request, res: Response, next: NextFunction) {
    try {
      const response = await UserService.findAll();
      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id: number = parseInt(req.params.id);
      const response = await UserService.findOne(id);

      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const body: UserInterface = req.body;

      const payload = {
        name: body.name,
        email: body.email,
        gender: body.gender,
      };
      await UserService.create(payload);

      return res.status(201).json({ msg: "User created" });
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id: number = parseInt(req.params.id);
      const body: UserInterface = req.body;
      const payload = {
        name: body.name,
        email: body.email,
        gender: body.gender,
      };

      await UserService.update(id, payload);

      return res.status(200).json({ msg: "User updated" });
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id: number = parseInt(req.params.id);

      await UserService.destroy(id);

      return res.status(200).json({ msg: "User deleted" });
    } catch (error) {
      return next(error);
    }
  }
}

export default User;
