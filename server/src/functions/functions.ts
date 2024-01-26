import { Request, Response } from "express";
import { NameController } from "../controller/nameController";

const nameController = new NameController();

export const getAllNames = (req: Request, res: Response) => {
  try {
    const names = nameController.getNames();
    res.status(200).send(names);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const addName = (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    let avatarData = '';
    if (!name) {
        throw new Error("Name is required");
    }

    const uploadedFiles = (req.files as { [fieldname: string]: Express.Multer.File[] } | undefined) && (req.files as unknown as { [fieldname: string]: Express.Multer.File[] })['avatar'];

    if (uploadedFiles && uploadedFiles.length > 0) {
        const uploadedFile: Express.Multer.File = uploadedFiles[0];
        avatarData = uploadedFile.buffer.toString('base64');
    }

    const success = nameController.addName(name, avatarData);
    res.status(201).json({ message: "Name added successfully" });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
