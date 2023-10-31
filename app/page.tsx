'use client'
"use client"
import React, { useEffect, useState } from 'react';
import cookie from 'js-cookie';
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = Boolean(cookie.get('LoginToken'));
    setIsUserLoggedIn(isLoggedIn);
    if (isLoggedIn) {
      router.push('/homePage');
    } else {
      setTimeout(() => {
        router.push('/welcome');
      }, 5000);
    }
  }, [router]);
  return (
    <div className="relative h-screen bg-cover bg-center bg-opacity-75" style={{ backgroundImage: "url('https://res.cloudinary.com/drt1jptk7/image/upload/v1697977868/mrymm4kmmas0hoe0pcid.jpg')" }}>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h1 className="text-8xl font-bold mb-4">SERAWAZI</h1>
    </div>
  </div>
)
};
export default App;
