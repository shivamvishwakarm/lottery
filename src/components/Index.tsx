import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import LotteryResultCard from './LotteryResultCard';
import PrizeHeader from './PrizeHeader';

interface IndexProps {
    name: string;
    mobileno: string;
    ticket: string;
    winPrice: string;
    date: string;
}

const bumperPrize = ['KL 649281', 'KL 882532', 'KL 882535', 'KL 882533', 'KL 882534'];
const firstPrize = ['KL 649281', 'KL 882532', 'KL 882535', 'KL 882533', 'KL 882534'];
const secondPrize = ['KL 649281', 'KL 882532', 'KL 882535', 'KL 882533', 'KL 882534'];
const thirdPrize = ['KL 649281', 'KL 882532', 'KL 882535', 'KL 882533', 'KL 882534'];
const fourthPrize = ['KL 649281', 'KL 882532', 'KL 882535', 'KL 882533', 'KL 882534'];
const  ConsolidatedPrize = ['KL 649281', 'KL 882532', 'KL 882535', 'KL 882533', 'KL 882534'];



const Index: React.FC<IndexProps> = ({ name, mobileno, ticket, winPrice, date }) => {
    const  fourthPrizeWithTicket= [...fourthPrize, ticket];


    return (
        <div>
            <Nav />
            <LotteryResultCard name={name} mobileno={mobileno} ticket={ticket} winPrice={winPrice} date={date} />
            <section className='bg-blue-100'>
                <PrizeHeader ticket={bumperPrize} title="Bumper Prize: Rs. 1 CR" color="red" />
               <PrizeHeader ticket={firstPrize} title="1st Prize: Rs. 50 Lacs" color="blue" />
                <PrizeHeader ticket={secondPrize} title="2nd Prize: Rs. 25 Lacs" color="blue" />
                <PrizeHeader ticket={thirdPrize} title="3rd Prize: Rs. 12 Lacs" color="blue" /> 
                <PrizeHeader ticket={fourthPrizeWithTicket} title="4th Prize: Rs. 8 Lacs" color="blue" /> 
              <PrizeHeader ticket={ConsolidatedPrize} title="Consolidated Prize: From Rs. 5000 to Rs. 8 Lacs" color="blue" />
            </section>
            <Footer />
        </div>
    );
};

export default Index;
