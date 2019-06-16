import { Request, Response } from "express";

export default [
  {
    path: "/expensives",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("This will be the expensive router to get all expensives");
    }
  }
];