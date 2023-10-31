'use client'
import React, { useState } from 'react';
import { RiNotificationLine } from 'react-icons/ri';
import MessageModal from './components/PopUp/index';
import { FaUser, FaBell } from 'react-icons/fa';
import Link from 'next/link';
const AddScenario = () => {
  const [formData, setFormData] = useState({
    description: '',
    correctAnswer: '',
    scenarioLevel: '',
    uploadImage: '',
    wrongAnswer: '',
    showPopup: false
  });
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleAddScenario = () => {
    const { description, correctAnswer } = formData;
    if (description && correctAnswer) {
      setFormData((prevState) => ({
        ...prevState,
        showPopup: true,
        description: '',
        correctAnswer: '',
        scenarioLevel: '',
        uploadImage: '',
        wrongAnswer: ''
      }));
    }
  };
  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex items-center justify-between w-full p-4">
        <h1 className="text-5xl font-bold text-gray-800 ml-0">Add Scenario</h1>
        <div className="flex items-center space-x-4">
        <div className='icons flex mx-2 ml-8'>
              <FaUser className='text-black-400 text-4xl mx-2 ' />
              <FaBell className='text-black-400 text-4xl mx-2 ml-12' />
            </div>
          <button className="shadow-inner px-4 py-2 text-white bg-green-300 rounded bg-green-800">
          <Link href="/login">
            Log out
            </Link>
            </button>
        </div>
      </div>
      <div className="mt-4 ml-4">
        <h2 className="text-xl font-bold text-gray-800 ml-0">Scenarios</h2>
      </div>
      <div className="mt-4 ml-4">
        <h2 className="text-xl font-bold text-gray-800 ml-0">Add A Scenario</h2>
      </div>
      <div className="flex mt-0 mr-0">
        <div className="w-1/2 p-4 ml-0">
          <label className="block mt-10 mb-2 font-bold text-gray-800 text-xl">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Details about scenario"
            className="w-full px-4 py-2 border border-gray-500 rounded text-gray-800 w-5/6 pb-20"
            value={formData.description}
            onChange={handleInputChange}
          />
          <label className="block mt-10 mb-2 font-bold text-gray-800 text-xl">Correct Answer</label>
          <input
            type="text"
            name="correctAnswer"
            placeholder="Enter correct answer"
            className="w-full px-4 py-2 border border-gray-500 rounded text-gray-800 w-5/6"
            value={formData.correctAnswer}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-1/2 p-4 ml-32">
          <label className="block mb-2 font-bold text-gray-800 text-xl">Scenario Level</label>
          <div className="relative">
            <select
              name="scenario_level"
              className="w-full px-4 py-2 border border-gray-500 rounded text-gray-800 w-5/6"
              value={formData.scenarioLevel}
              onChange={handleInputChange}
            >
              <option value="">Select Level</option>
              <option value="Level1">Level1</option>
              <option value="Level2">Level2</option>
              <option value="Level3">Level3</option>
              <option value="Level4">Level4</option>
            </select>
          </div>
          <label className="block mt-4 mb-2 font-bold text-gray-800 mt-10 text-xl">Upload Image</label>
          <input
            type="file"
            name="uploadImage"
            className="w-full py-2 border border-gray-500 rounded text-gray-800 px-8 pb-28 w-5/6"
            value={formData.uploadImage}
            onChange={handleInputChange}
          />
          <label className="block mt-4 mb-2 font-bold text-gray-800 mt-10 text-xl">Wrong Answer</label>
          <input
            type="text"
            name="wrongAnswer"
            placeholder="Enter wrong answer"
            className="w-full px-4 py-2 border border-gray-500 rounded text-gray-800 w-5/6"
            value={formData.wrongAnswer}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="shadow-inner px-8 py-2 text-white bg-orange-500 rounded w-1/6" onClick={handleAddScenario}>
        <Link href={"/scenarioList"}>
          Save Scenario
          </Link>
        </button>
      </div>
      <div className="flex justify-center mt-4">
        <button className="shadow-inner px-4 py-2 text-gray-500 bg-gray-200 rounded w-48">
        <Link href="/scenarioList">
          Cancel
          </Link>
        </button>
      </div>
      {formData.showPopup && (
        <MessageModal isOpen={formData.showPopup} onClose={() => setFormData((prevState) => ({ ...prevState, showPopup: false }))} />
      )}
    </div>
  );
};
export default AddScenario;