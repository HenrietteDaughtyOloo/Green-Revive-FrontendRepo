import React from 'react';
interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  onDeleteClick: () => void;
  onEditClick: () => void;
}

interface LockedCardsProp {
  imageUrl: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ imageUrl, title, description, onDeleteClick, onEditClick }) => {
  return (
    <div className="bg-white  w-[388px] h-[379px] rounded-lg shadow-lg p-20">
      <img
        src={imageUrl}
        alt="Image"
        className="items-center  "
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-black-400">
          <span className="font-bold">Description: </span>
          <span className="font-poppins-regular">
            Finished level one <br />
            Answered all questions Accurately
          </span>
        </p>
        <div className="flex justify-between mt-4">
          <button
            className="flex justify-center items-center gap-2 w-[65.957px] h-[32.579px] transform rotate-[-0.118deg] p-[2.059px 4.119px] bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-[10px] border-[0.257px] border-white"
            onClick={onDeleteClick}
          >
            Delete
          </button>

          <button
            className="bg-[#527845] hover:bg-orange-600 text-white font-semibold flex justify-center items-center gap-3 p-[2.059px 4.119px] w-[65.957px] h-[32.579px] transform rotate-[-0.118deg] rounded-[10px] border-[0.257px] border-white"
            onClick={onEditClick}
          >
            Edit
          </button>

        </div>
      </div>
    </div>
  );
};

export const LockedCard: React.FC<LockedCardsProp> = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-[#527845] w-[388px] h-[379px] rounded-lg shadow-lg p-20">
      <img
        src={imageUrl}
        alt="Image"
        className="items-center left"
      />
      <div className="p-4">
        <h2 className="text-white text-18 font-inter font-normal">Champion</h2>
        <p className="text-white text-18 font-inter font-normal">Unlock Level</p>
      </div>
    </div>
  );
};