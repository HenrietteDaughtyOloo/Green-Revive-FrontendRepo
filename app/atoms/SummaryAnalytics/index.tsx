import React from 'react';

interface RectangleProps {
  text: string;
  number:string
  className?: string;
}

const RectangleAtom: React.FC<RectangleProps> = ({ text, number, className }) => {
  return (
    <div className={`p-4 rounded gap-8 mb-8 flex-row text-justify mt-20 ${className}`} style={{ width: '200px', height: '200px' }}>
      {text}
      {number}
    </div>
  );
};

export default RectangleAtom;