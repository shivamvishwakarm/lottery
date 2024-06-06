import React from "react";
import styles from './LotteryResultCard.module.css'; // Import the CSS module

interface LotteryResultCardProps {
  name: string;
  mobileno: string;
  ticket: string;
  winPrice: string;
  date: string;
}

const LotteryResultCard: React.FC<LotteryResultCardProps> = ({ name, winPrice, ticket, date }) => {
  let drawDate = new Date(date);
  let formattedDate = `${drawDate.getDate()}/${drawDate.getMonth() + 1}/${drawDate.getFullYear()}`;
  let capitalName = name.toUpperCase();

  return (
    <div 
    className="flex flex-col justify-center items-center mb-8 text-xl h-full tracking-widest mx-4 p-2"
    style={{ 
        backgroundImage: `linear-gradient(to right, rgba(192, 227, 238, 0.5), rgba(173,216,230,0.5)), url("https://thekeralalottery.in/images/bg1.svg")` 
      }}
    >
 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 font-bold text-blue-600">Kerala Lottery Results</h1>

      <div
        className="flex flex-col justify-center items-center bg-blue-700 my-6 rounded w-full md:w-1/2 h-auto text-white" >
        <h2 className=" text-2xl font-bold pt-8 ">Congratulations</h2>
        <h2 className={`my-2 text-yellow-400 text-4xl font-bold ${styles.blink}`}>{capitalName}
        </h2> {/* Apply the blink class here */}
        <p className="my-2 font-medium px-2">
          You Have won the 4th Prize for <span className="underline">Rs. {winPrice}/-</span> 
        </p>
        <p className="my-2 font-semibold">Ticket no: {ticket}</p>
        <p className="my-2 text-sky-400 text-semibold">Draw Date: {formattedDate}</p>

        <div className="flex flex-col justify-center items-center bg-yellow-400 w-full text-black">
          <p className="m-4 font-bold">Please contact</p>

          <div className="flex justify-between items-center w-full px-4 m-4 font-semibold ">
            <p>📞 Helpline: 7894561230 </p>

            <p>Whatsapp: 7894561230 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LotteryResultCard;