import { Request, Response } from "express";

export const HomeController = (req: Request, res: Response) => {
  res.status(200).json({ Hello: "Typescript" });
};
