import { Request, Response, NextFunction } from "express";
import user from "../models/UserModel";

interface bodyType {
  name: String;
  email: String;
  gender: String;
}

class User {
  async get(_req: Request, res: Response, next: NextFunction) {
    try {
      const response = await user.findAll();
      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const response = await user.findOne({
        where: {
          id,
        },
      });

      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const body: bodyType = req.body;
      const payload = {
        name: body.name,
        email: body.email,
        gender: body.gender,
      };
      await user.create(payload);

      return res.status(201).json({ msg: "User created" });
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const body: bodyType = req.body;
      const payload = {
        name: body.name,
        email: body.email,
        gender: body.gender,
      };

      await user.update(payload, {
        where: {
          id,
        },
      });

      return res.status(200).json({ msg: "User updated" });
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      await user.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({ msg: "User deleted" });
    } catch (error) {
      return next(error);
    }
  }
}

export default User;
