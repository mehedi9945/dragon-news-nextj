import BreakingNews from '@/components/shared/breakingnews';
import Header from '../../components/shared/header';
import Navbar from '../../components/shared/navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <BreakingNews />
            <Navbar />

            {children}
        </>
    );
};

export default MainLayout;