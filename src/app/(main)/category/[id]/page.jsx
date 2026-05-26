import LeftSideBarPage from '@/components/homepage/news/leftsidebar';
import NewsCardPage from '@/components/homepage/news/newscard';
import RightSideBarPage from '@/components/homepage/news/rightsidebar';
import { getcategories, getNewsBycategoryId } from '@/lib/data';
import React from 'react';



const NewsCategoryPage = async ({ params }) => {

    const { id } = await params;
    console.log(id, "params");

    const categories = await getcategories();
    const news = await getNewsBycategoryId(id);

    return <div className="container mx-auto grid grid-cols-12 gap-4 my-[76px]">

        <div className="col-span-3">
            <LeftSideBarPage categories={categories} activeId={id} />
        </div>


        <div className="col-span-6">
            <h2 className='font-bold text-lg'>Dragon News Home</h2>
            <div className="space-y-4 mt-6">
                {news.length > 0 ? news.map((n) => {
                    return <NewsCardPage news={n} key={n._id}></NewsCardPage>
                }) : <p className='font-bold text-4xl text-center my-7'>No news found.</p>}
            </div>
        </div>


        <div className="col-span-3">
            <RightSideBarPage />
        </div>

    </div>;
};

export default NewsCategoryPage;