"use client";
import React, { useState, useEffect } from 'react';
import { FaUser, FaBell } from 'react-icons/fa';
import DeleteModal from '../DeletePopUp/index';
import Link from 'next/link';
import EditModal from '../addscenario/components/EditPopUp';
import SideCol from '../components/SideCol';
import useGetScenarios from '../hooks/useGetScenarios';
import { useRouter } from 'next/router';
import Image from 'next/image';



const ScenarioListPage = () => {
  const router=useRouter
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleDelete = () => {
    setShowDeletePopup(true);
  };

  const handleEdit = () => {
    setShowEditPopup(true);
  };

  const handleEditConfirmation = () => {
    setShowEditPopup(false);
  };

  const handleDeleteConfirmation = () => {
    setShowDeletePopup(false);
  };
  const { scenarios } = useGetScenarios();
  console.log({ scenarios });
  
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <SideCol />
      <div className="flex items-center justify-between w-full py-4">
        <h1 className="text-5xl font-bold ml-72 pl-4 mt-10 text-gray-800">
          Scenario List
        </h1>
        <div className="flex items-center space-x-4">
          <div className="logout flex items-center justify-start mr-10 mt-10">
            <div className="icons flex mx-2 ml-8">
              <FaUser className="text-black-400 text-4xl mx-2" />
              <FaBell className="text-black-400 text-4xl mx-2 ml-12" />
            </div>
            <div className="flex items-center gap-10 ml-24 pr-28">
              <div className="flex w-[120px] h-[40px] items-center justify-center gap-[10px] p-[10px] relative bg-green-800 rounded-[8px] mr-4 bg-green-800">
                <div className="relative w-fit font-semibold text-[#FBF9F9] text-[14px] text-center tracking-[0] leading-normal">
                  <Link href="/login">Log out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end space-x-4 py-4 ml-auto pr-44 ml-0">
        <h2 className="font-bold text-black">
          Category:
        </h2>
        <div className="flex items-center space-x-2">
          <select className="border border-gray-300 rounded px-2 py-1 text-black">
            <option value="option1">Bill Of Rights</option>
            <option value="option2">Finance Bill</option>
          </select>
          <Link href='/addscenario'>
            <button className="bg-orange-500 text-white px-4 ml-4 py-2 ml-8 rounded">
              Add
            </button>
          </Link>
        </div>
      </div>
      <p className="text-2xl w-full px-40 py-2 ml-80 pl-32 text-black">
        Our list of scenarios displayed here on the Bill of Rights category
      </p>
      <div className="grid grid-cols-3 gap-8 py-4 pl-24 mx-6 pt-20 mt-10 ml-60">

              {scenarios &&
          scenarios.slice(0, 16).map((scenario) => (
            <div className="flex flex-col items-center" key={scenario.id}>
              <img className="w-64 h-64 object-cover" src={scenario.image} alt={'image'} />
              <p className="text-sm font-bold mt-2 text-black">
                Background: {scenario.background_info}
              </p>
              <p className="text-sm font-bold mt-2 text-black">
             Correct Answer: {scenario.correct_answer}
             </p>

             <p className="text-sm font-bold mt-2 text-black">
             Wrong Answer: {scenario.correct_answer}
             </p>


              <p className="text-xl">Level: {scenario.level}</p>
              <div className="flex space-x-2 mt-2">
                <button
                  className="bg-orange-500 text-white px-2 py-1 ml-4 rounded"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  className="bg-orange-500 text-white px-2 py-1 rounded"
                  onClick={handleEdit}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
      </div>
        <EditModal isOpen={showEditPopup} onClose={() => setShowEditPopup(false)} onEdit={handleEditConfirmation} />
     <DeleteModal isOpen={showDeletePopup} onClose={() => setShowDeletePopup(false)} onDelete={handleDeleteConfirmation} />

    </div>
  );
};
export default ScenarioListPage;