import Login from '@/components/Login';
import connectDB from "@/lib/mongoose"; // Import your MongoDB connection
import dotenv from "dotenv";
import LotteryStatus from '@/models/LotteryStatus';


// find the status of the lottery means is lottery started or not
async function getStatus() {
  connectDB(); // Connect to the MongoDB database
  dotenv.config();
  const result = await LotteryStatus.find();
  return result[0].start;

}

function NotStarted() {
  return (
    <div className='flex flex-col justify-center items-center b'>

      <h1 className='text-2xl font-black	text-red-400'>Lottery is not started yet</h1>
      <p>Come back soon!</p>
      
    </div>
  );
}



export default async function Home() { 

    
// storing the status of the lottery in boolean 
  const status: boolean = await getStatus(); 




  return (
      <>
        {status ? (<Login />) : (<NotStarted/>)}

      </>
    );
}
