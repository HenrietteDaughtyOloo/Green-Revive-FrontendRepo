import React from 'react';

interface RectangleProps {
  text: string;
  className?: string;
}

const RectangleAtom: React.FC<RectangleProps> = ({ text, className }) => {
  return (
    <div className={`p-4 rounded gap-8 mb-8 flex-row text-justify mt-20 ${className}`} style={{ width: '200px', height: '200px' }}>
      {text}
    </div>
  );
};

export default RectangleAtom;