import { Response } from "express";
import { db } from "./src/config/firebase";

type WineType = {
  name: string;
  color: string;
  millesime: string;
};

type Request = {
  body: WineType;
  params: { entryId: string };
};

const addWine = async (req: Request, res: Response) => {
  const { name, color, millesime } = req.body;
  try {
    const entry = db.collection("entries").doc();
    const wine = {
      id: entry.id,
      name,
      color,
      millesime,
    };

    entry.set(wine);

    res.status(200).send({
      status: "success",
      message: "entry added successfully",
      data: wine,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export { addWine };
