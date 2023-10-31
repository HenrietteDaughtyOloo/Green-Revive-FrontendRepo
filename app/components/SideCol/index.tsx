'use client'
import React, { useState } from "react";
import { FaBell, FaRegSun } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import Link from "next/link";

type ActiveLinks = {
  dashboard: boolean;
  scenarios: boolean;
  rewards: boolean;
};

const SideCol = () => {
  const [activeLink, setActiveLink] = useState<ActiveLinks>({
    dashboard: false,
    scenarios: false,
    rewards: false,
      });

  const setActive = (link: keyof ActiveLinks) => {
    setActiveLink((prevState) => ({
      ...prevState,
      [link]: !prevState[link],
    }));
  };

  return (
    <div className="fixed left-0 top-0 h-screen">
      <div className="absolute w-[239px] top-0 left-0">
        <div className="absolute w-[270px] h-screen top-0 left-0 bg-black">
          {/* <img
            className="absolute w-[239px] h-px top-[170px] left-0 z-[9999] !important"
            alt="Line"
            src="/Images/logos.png bg-white"
          /> */}
          <div className="flex flex-col w-[192px] items-start gap-[8px] absolute top-[185px] left-[25px]">
            <div className="relative w-[192px] h-[80px] rounded-[4px] overflow-hidden">
              <Link href="/dashboard-overview">
              <div
                className={`group hover:bg-[#ff5722] transition-bg duration-300 ease-in-out h-[60px] ${
                  activeLink.dashboard ? "bg-[#ff5722]" : ""
                }`}
                onClick={() => setActive("dashboard")}
              >
                  <div className="inline-flex items-center gap-[16px] relative top-[40px] left-[16px]">
                    <FaHouse className="!relative !w-[16px] !h-[16px] text-white" />
                    <div className="[font-family:'Kumbh_Sans-SemiBold',Helvetica] font-semibold text-white text-[17px] tracking-[0] leading-[normal]">
                      Dashboard
                    </div>
                  </div>
              </div>
              </Link>
            </div>

            <div className="relative w-[192px] h-[80px] rounded-[4px] overflow-hidden group hover:bg-[#ff5722] transition-bg duration-300 ease-in-out h-[60px]">
              <Link href="/scenarioList">
                <div
                  className={`group hover:bg-[#ff5722] transition-bg duration-300 ease-in-out h-[60px] ${
                    activeLink.scenarios ? "bg-[#ff5722]" : ""
                  }`}
                  onClick={() => setActive("scenarios")}
                >
                  <div className="inline-flex items-center gap-[16px] relative top-[40px] left-[16px]">
                    <FaShieldAlt className="!relative !w-[16px] !h-[16px] text-white" />
                    <div className="[font-family:'Kumbh_Sans-SemiBold',Helvetica] font-semibold text-white text-[17px] tracking-[0] leading-[normal]">
                      Scenarios
                    </div>
                  </div>
                </div>
                </Link>
            </div>

            <div className="relative w-[192px] h-[80px] rounded-[4px] overflow-hidden group hover:bg-[#ff5722] transition-bg duration-300 ease-in-out h-[60px]">
              <Link href="/Awards">
                <div
                  className={`group hover:bg-[#ff5722] transition-bg duration-300 ease-in-out h-[60px] ${
                    activeLink.rewards ? "bg-[#ff5722]" : ""
                  }`}
                  onClick={() => setActive("rewards")}
                >
                  <div className="inline-flex items-center gap-[16px] relative top-[40px] left-[16px]">
                    <FaUserGraduate className="!relative !w-[16px] !h-[16px] text-white" />
                    <div className="[font-family:'Kumbh_Sans-SemiBold',Helvetica] font-semibold text-white text-[17px] tracking-[0] leading-[normal]">
                      Rewards
                    </div>
                  </div>
                </div>
                </Link>
            </div>

          </div>
        </div>
        <div>
          <div className="w-[65px] h-[60px] top-[21px] left-[79px] rounded-[10px] absolute bg-white" />
          <img
            className="absolute w-[63px] h-[50px] top-[29px] left-[85px] object-cover align center"
            alt="Screenshot from"
            src="Images/logos.png"
          />
          <div className="absolute w-[102px] top-[94px] left-[80px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
            SERAWAZI
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCol;


