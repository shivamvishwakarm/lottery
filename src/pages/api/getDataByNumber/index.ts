import { NextApiRequest, NextApiResponse } from 'next';

import Lottery from "@/models/Lottery"; // Import your Mongoose model 
import connectDB from "@/lib/mongoose"; // Import your MongoDB connection
import dotenv from "dotenv";

dotenv.config();

connectDB(); // Connect to the MongoDB database




const submitHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const mobile = Number(req.query.mobile);
    console.log(mobile)

    try {
      const result = await Lottery.findOne({ mobileno: mobile });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default submitHandler;