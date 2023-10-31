'use client'
import React, { useState } from 'react';
import RectangleAtom from '../Atom/SummaryAnalytics';
import PieChart from '../Analytics';
import { FaBeer, FaUser,FaBell } from 'react-icons/fa';
import SideCol from '../components/SideCol';

import Link from 'next/link';




const Overview = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('Last week');
  
    const handlePeriodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedPeriod(event.target.value);
    };
    return (
      <div style={{ background: 'white'  }}>
              <SideCol/>

      <div className="flex justify-between mt-10 ml-80 style={{ background: 'white' }} overflow-hidden">
        <div className="flex flex-col">
  <h1 className="text-4xl font-bold text-black">Dashboard Overview</h1>
  <h2 className="text-2xl text-black-500 font-bold mt-4 text-black">
    Manage <span className="text-orange-500">SeraWazi</span>
  </h2>
  <h2 className="text-2xl mt-4 text-black">You are on top of things</h2>
  <div className="flex items-center mt-8">
  <label htmlFor="timePeriod" className="block text-2xl text-black-500 mb-1 mr-4 text-black">
    Game Analytics:
  </label>
  <select
    id="timePeriod"
    className="text-lg text-black-500 text-black border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 py-2 px-4"
    value={selectedPeriod}
    onChange={handlePeriodChange}
  >
    <option value="Last month">Last month</option>
    <option value="Last week">Last week</option>
    <option value="Today">Today</option>
  </select>
</div>
        <div className="w-268 h-262 flex space-x-40 ">
  <RectangleAtom
    text="Total Scenarios 4"
    className="flex justify-center items-center mb-4 ml-0 text-white bg-[#40B93C] md:flex rounded-lg p-8 dark:bg-slate-800 text-center text-2xl shadow-md"
  />
  <RectangleAtom
    text="Active Downloads 500"
    className="flex justify-center text-black items-center mb-4 text-lg text-black-500 border border-orange-400 rounded-md shadow-md focus:ring focus:ring-indigo-200 py-2 px-8 bg-white"
  />
</div>
<div className="w-268 h-262 flex space-x-40 ">
<RectangleAtom 
  text="Total Visitors" 
  className="flex justify-center items-center mb-4 ml-0 bg-black text-2xl text-white border border-gray-300 rounded-md shadow-md focus:ring focus:ring-indigo-200 py-2 px-4" 
/>
<RectangleAtom 
  text="Total Logins 500" 
  className="flex justify-center items-center mb-4 ml-4 bg-green-200 text-2xl text-black border border-gray-300 rounded-mdshadow-md focus:ring focus:ring-indigo-200 py-2 px-4" 
/>
</div>
</div>
<div className='mt-2 mr-60'>

<div className="flex items-center space-x-4 ml-8 mt-0 ">
          <div className="logout flex items-center justify-start ml-120 mt-0 mb-2">

            <div className='icons flex mx-2 ml-12 '>
              <div className='ml-80'>
              <FaUser className='text-black-400 text-4xl mx-2 mb-40  ' /></div>
              <FaBell className='text-black-400 text-4xl mx-2 ml-20 mt-0 mb-6' />
            </div>

            <div className="flex items-center gap-1 ml-40 pr-8">
              <div className="flex w-[120px] h-[40px] items-center justify-center gap-[10] p-[10px] relative bg-[#40B93C] rounded-[8px] mr-4 bg-green-800 ml-8 mb-40">
                <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#FBF9F9] text-[14px] text-center tracking-[0] leading-[normal]">
                 
                <Link href="/login">

                  Log out
                  </Link>
                </div>
              </div>
            </div>
            </div>
            </div>
            <div className='mt-[-80px]'>
  <p className='font-bold text-2xl ml-80 mb-4 text-black'> Serawazi Analytics: Active and Inactive users </p>
  <div className='mr-0 w-100  ml-80 '>
    <PieChart/>
  </div>
</div>
</div>

      </div>
    
      
      </div>
      
    );
  };
  
  export default Overview;    