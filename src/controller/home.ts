import { Request, Response } from "express";

export const HomeController = (req: Request, res: Response): void => {
  res.status(200).json({ Hello: "Typescript" });
};
