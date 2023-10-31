import React, { useState } from 'react';

type EditModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
};

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div
      className={`bg-opacity-50 bg-gray-500 fixed inset-0 flex items-center z-50 fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="modal">
        <h2 className="text-xl font-semibold mb-4">Edit Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium">
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
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              className="w-full mt-1 p-2 border rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;