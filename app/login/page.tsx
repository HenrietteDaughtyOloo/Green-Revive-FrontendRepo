import Link from "next/link";
import React from "react";
import PieChart from "../Analytics";

const Signin = () => {
  return (
    <div className="bg-[#fbf9f9] flex flex-col items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/drt1jptk7/image/upload/v1697981918/rdaepubukra09usnvvh9.png')" }}>
      <div className="absolute inset-0 bg-[rgba(251, 249, 249, 0.8 flex flex-col items-center justify-center)]" style={{ backgroundImage: "url('https://res.cloudinary.com/drt1jptk7/image/upload/v1697984327/qlikmfoiyas6cfu66mif.png')" }}>
        <div className="bg-grey-5 w-[600px] p-8 rounded-[15px] shadow-lg " >
          <h2 className="font-bold text-3xl text-center text-green-500 mb-4">
            Welcome </h2>
          <br />
          <h2 className="font-bold text-3xl text-left text-[#008000] mb-4 ">
            Log In
          </h2>
          <br />
          <div className="border border-white p-24 rounded-[47px] mt-0">
            <div className="mb-6">
              <br /> <br />
              <label htmlFor="username" className="font-medium text-white text-lg">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full h-10 border border-solid border-[#527845] rounded-[15px] pl-2 text-black focus:outline-none"
                placeholder="Enter your username"
              />
            </div>
            <br />
            <div className="mb-6">
              <label htmlFor="password" className="font-medium text-white text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full h-10 border pr-15 border-solid border-[#527845] rounded-[15px] pl-2 text-black focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
            <br />
            <div>
              <Link href="/dashboard-overview">
                <button className="w-full h-10 bg-[#40B93C] text-white text-lg rounded-[15px] mt-4">
                  Log In
                </button>
              </Link>
            </div>
            <br />
            <p className="text-white text-[25px] text-center">
              Don’t have an account?{" "}
              <Link href="/registration" className="font-bold text-[#008000] text-2xl">
                Create Account
              </Link>

            </p>
          </div>
          <div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default Signin;
