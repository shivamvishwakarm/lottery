import { NextApiRequest, NextApiResponse } from 'next';

import LotteryStatus from "@/models/LotteryStatus"; // Import your Mongoose model 
import connectDB from "@/lib/mongoose"; // Import your MongoDB connection
import dotenv from "dotenv";

dotenv.config();

connectDB(); // Connect to the MongoDB database

const submitHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'GET'){
      try {
        const status = await LotteryStatus.findOne(); // Get the lottery status
        res.status(200).json(status); // Send the status as a response
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the lottery status' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  
  export default submitHandler;