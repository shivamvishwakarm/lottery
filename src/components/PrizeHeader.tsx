import React from 'react';
import LotteryCard from './LotteryCard';

interface PrizeHeaderProps {
    title: string;
    color: string;
}

const getColorClass = (color: string) => {
  const supportedColors = ['red', 'blue', 'green']; // Add more colors as needed
  if (supportedColors.includes(color)) {
    return `bg-${color}-700`;
  }
  return 'bg-red-700'; // Default color
};

const PrizeHeader: React.FC<PrizeHeaderProps> = ({ title, color }) => {
    const colorClass = getColorClass(color);
    return (
        <div className='flex flex-col mx-8 justify-center items-center'>
            <h1 className={`flex w-full mb-2 p-4 text-white rounded font-black text-2xl tracking-widest justify-center items-center ${colorClass}`}>
                {title}
            </h1>
            <div className='container flex flex-wrap justify-center items m-6'>
                <LotteryCard content={"KL-454-332"} />
                <LotteryCard content={"KL-649-281"} />
                <LotteryCard content={"KL-882-532"} />
                <LotteryCard content={"KL-882-535"} />
                <LotteryCard content={"KL-882-533"} />
              
            </div>
        </div>
    );
};

export default PrizeHeader;