import { Request, Response, NextFunction } from "express";

function handleError(
  err: TypeError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  res.status(500).json({
    status: err.name,
    message: err.message,
    data: null,
  });
}

export default handleError;
