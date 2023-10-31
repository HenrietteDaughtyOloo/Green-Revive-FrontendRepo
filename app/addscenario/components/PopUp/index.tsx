import React from "react";

type MessageModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MessageModal: React.FC<MessageModalProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className=" p-8 rounded-lg mb-96 relative bg-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-black ">Successfully added</h2>
        <button
          className="px-4 py-2 text-white rounded bg-gray-400"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MessageModal;