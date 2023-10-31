'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const WelcomeSection = () => {
    return (
      <div className="relative h-screen bg-cover bg-center bg-opacity-75 backdrop-blur" style={{ backgroundImage: "url('https://res.cloudinary.com/drt1jptk7/image/upload/v1697977868/mrymm4kmmas0hoe0pcid.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 text-white -ml-[210px]">
          <h1 className="text-6xl font-bold mb-4">Who is SeraWazi</h1> <br />
          <p className="text-5xl mb-8">Explore The <span className="text-orange-500">Principles</span> <br />
            of <span className="text-green-500">Kenyan</span>  Governance <br />within The <span className="text-red-500">Gaming</span>  Universe!
          </p>
        </div>
  
        <div className="absolute top-0 right-0 mt-8 mr-8 flex">
          <Link href="/login">
            <button className="bg-green-500 text-white px-4 py-2 rounded-[10px] mr-8">
              <span className="font-md text-white text-xl">Log In</span>
            </button>
          </Link> 
          <Link href="/registration">
            <button className="bg-green-500 text-white  px-4 py-2 rounded-[10px] mr-4">
              <span className="font-md text-white text-xl">Sign Up</span>
            </button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default WelcomeSection;
    