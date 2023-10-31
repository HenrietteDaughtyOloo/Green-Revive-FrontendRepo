'use client'
import React, { useState } from 'react';
import { Card, LockedCard } from '../Atom/gameCards';
import DeletePopup from '../DeletePopUp/index';
import EditPopup from '../PopUpEdit/index';
import SideCol from '../components/SideCol';
import { FaUser, FaBell } from 'react-icons/fa';
import Link from 'next/link';


const Awards: React.FC = () => {
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

  return (
    <div className='ml-24'>
            <SideCol/>

      <div className="flex items-center justify-between w-full py-4">
        <h1 className="font-bold ml-60 pl-4 mt-0 text-black" style={{ fontSize: '2.5rem' }}>Rewards</h1>
        <div className="flex items-center space-x-4 text-black">
          <div className="logout flex items-center justify-start mr-10 mt-0 ">
            <div className='icons flex mx-2 ml-8'>
              <FaUser className='text-black-400 text-4xl mx-2 ' />
              <FaBell className='text-black-400 text-4xl mx-2 ml-12' />
            </div>
            <div className="flex items-center gap-10 ml-24 pr-28">
              <div className="flex w-[120px] h-[40px] items-center justify-center gap-[10px] p-[10px] relative bg-[#40B93C] rounded-[8px] mr-4 bg-green-800">
                <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#FBF9F9] text-[14px] text-center tracking-[0] leading-[normal]">
                <Link href="/login">

                  Log out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="flex justify-center items-center overflow-hidden text-black">
        <SideCol/>
      <div className='grid grid-cols-3 gap-20'>
        <Card
          imageUrl="Images/starts.png"
          title="Beginner"
          description="Description goes here."
          onDeleteClick={handleDelete}
          onEditClick={handleEdit}
        />
        <Card
          imageUrl="Images/stars.jpg"
          title="Master "
          description="Description goes here."
          onDeleteClick={handleDelete}
          onEditClick={handleEdit}
        />
        <Card
          imageUrl="Images/start.jpg"
          title="Bingo"
          description="Description goes here."
          onDeleteClick={handleDelete}
          onEditClick={handleEdit}
        />
        <Card
          imageUrl="Images/started.png"
          title="Law Guru"
          description="Description goes here."
          onDeleteClick={handleDelete}
          onEditClick={handleEdit}
        />
        <LockedCard
          imageUrl="Images/Vector.png"
          title=""
          description="Description goes here. "
        />
        <LockedCard
          imageUrl="Images/Vector.png"
          title="Title"
          description="Description goes here."
        />
      </div>
      {showDeletePopup && (
        <DeletePopup
          onClose={() => setShowDeletePopup(false)}
          onDelete={handleDeleteConfirmation}
          isOpen={showDeletePopup}
        />
      )}
      {showEditPopup && (
        <EditPopup
          onClose={() => setShowEditPopup(false)}
          onEdit={handleEditConfirmation}
          isOpen={showEditPopup} 
        />
      )}
    </div>
    </div>
  );
};

export default Awards;
