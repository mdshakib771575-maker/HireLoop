
import { DashBoardSidebar } from '@/components/Dashboard/DashBoardSidebar';
import React from 'react';

const DashBoardLayout = ({children}) => {
    return (
        <div className='flex min-h-screen'>
          <DashBoardSidebar></DashBoardSidebar>
          <div className='flex-1'>{ children}</div>
        </div>
    );
};

export default DashBoardLayout;