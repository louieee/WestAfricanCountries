import React from 'react';

interface LoadingModalProps {
  isOpen?: boolean;
}

const LoadingScreen: React.FC<LoadingModalProps> = ({ isOpen = false }) => {
  /*
  * This loading component is shown when the api fetch is being loaded
  * */
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-teal-600 bg-opacity-50"
    >
      <div className="w-[70px] h-[70px] rounded-full border-4 border-solid
      border-amber-500 animate animate-pulse text-center">
      </div>
    </div>
  );
};

export default LoadingScreen;
