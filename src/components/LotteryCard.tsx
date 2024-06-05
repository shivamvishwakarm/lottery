import React from 'react';

interface LotteryCardProps {
    // Define your component props here
    content: string;
}

const LotteryCard: React.FC<LotteryCardProps> = ({content}) => {
    // Implement your component logic here

    return (
        <div className='border-2 w-fit p-1 m-2 tracking-widest bg-white rounded-lg items-center justify-center'>
            <p>{content}</p>
        </div>
    );
};

export default LotteryCard;