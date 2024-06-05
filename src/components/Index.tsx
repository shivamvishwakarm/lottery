import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import LotteryResultCard from './LotteryResultCard';
import PrizeHeader from './PrizeHeader';

interface IndexProps {
    name: string;
    mobileno: string;
    ticket: string;
    date: string;
}

const Index: React.FC<IndexProps> = ({ name, mobileno, ticket, date }) => {
    return (
        <div>
            <Nav />
            <LotteryResultCard name={name} mobileno={mobileno} ticket={ticket} date={date} />
            <section className='bg-blue-100'>
                <PrizeHeader title="Bumper Prize: Rs. 1 CR" color="red" />
                <PrizeHeader title="1st Prize: Rs. 50 Lacs" color="blue" />
                <PrizeHeader title="2nd Prize: Rs. 25 Lacs" color="blue" />
                <PrizeHeader title="3rd Prize: Rs. 12 Lacs" color="blue" />
                <PrizeHeader title="4th Prize: Rs. 8 Lacs" color="blue" />
                <PrizeHeader title="Consolidated Prize: From Rs. 5000 to Rs. 8 Lacs" color="blue" />
            </section>
            <Footer />
        </div>
    );
};

export default Index;
