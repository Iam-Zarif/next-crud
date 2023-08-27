import React from 'react';

const Loading = () => {
  return (
    <div className="mt-20 inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-md bg-opacity-75 bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default Loading;
