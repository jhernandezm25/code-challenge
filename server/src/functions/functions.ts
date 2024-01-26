import { Request, Response } from "express";
import { NameController } from "../controller/nameController";

const nameController = new NameController();

export const getAllNames = (req: Request, res: Response) => {
  try {
    const names = nameController.getNames();
    res.status(200).send(names);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const addName = (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const success = nameController.addName(name);
    res.status(201).json({ message: "Name added successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
