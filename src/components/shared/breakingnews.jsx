import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {

    const news = [
        {
        _id: "1",
        title: "Breaking News: Major Event Unfolds in the City",
        },
        {
        _id: "2",
        title: "Breaking News: New Policy Announced by the Government",
        },
        {
        _id: "3",
        title: "Breaking News: Sports Team Wins Championship",
        }
    ]

    return (
        <div className='flex justify-between items-center bg-gray-200 px-2 py-4 container mx-auto'>

            <button className='btn bg-red-500 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={50}>
                {news.map((n) => {
                    return <span key={n._id}>{n.title}</span>
                })}
            </Marquee>
        </div>
    );
};

export default BreakingNews;