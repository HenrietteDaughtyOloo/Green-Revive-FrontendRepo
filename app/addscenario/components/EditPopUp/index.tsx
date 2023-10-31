'use client';
import Link from 'next/link';
import React, { useState } from "react";


interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
};

const EditModal= ({ isOpen, onClose, onEdit }:EditModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [image, setImage] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setSuccessMessage("Scenario has been successfully edited.");
  };
  return (
    <div className={`bg-opacity-70 bg-white-300 fixed inset-0 flex items-center justify-center z-50 ${isOpen ? "" : "hidden"}`}>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-8 pt-20 pb-20 pl-10 rounded-lg w-66 h-250 flex flex-col items-center justify-center bg-opacity-80 backdrop-blur-50">
      <h2 className="text-xl font-semibold mb-4 text-white">Edit Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-white">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full mt-1 p-2 border rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-white">
            Description
          </label>
          <textarea
            id="description"
            className="w-full mt-1 p-2 border rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="level" className="block text-sm font-medium text-white">
            Level
          </label>
          <input
            type="text"
            id="level"
            className="w-full mt-1 p-2 border rounded-md"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="correctAnswer" className="block text-sm font-medium text-white">
            Correct Answer
          </label>
          <input
            type="text"
            id="correctAnswer"
            className="w-full mt-1 p-2 border rounded-md"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="wrongAnswers" className="block text-sm font-medium text-white">
            Wrong Answers
          </label>
          <textarea
            id="wrongAnswers"
            className="w-full mt-1 p-2 border rounded-md"
            value={wrongAnswers.join("\n")}
          ></textarea>
        </div>
      </form>
      {successMessage && (
        <div className="mt-4 text-green-600">{successMessage}</div>
      )}
      <div className="mt-4" onClick={onClose}>
       
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300">
            Save
          </button>
       
      </div>
    </div>
  </div>
  );
};

export default EditModal;