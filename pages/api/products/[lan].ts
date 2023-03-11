import { NextApiRequest, NextApiResponse } from "next";
import { products } from "../db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { lan } = req.query;
  res.status(200).json(products[lan as string]);
}
