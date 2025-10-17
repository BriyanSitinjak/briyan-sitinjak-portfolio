'use client'
import React from 'react';
import { useStepContext } from '../../context/StepContext';

const WelcomePage = () => {
  const { resetSteps, state } = useStepContext();

  const handleRestart = () => {
    resetSteps();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-4">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Hi Anesya,</h2>
        <h3 className="text-base font-medium text-gray-700">Gimana kabarnya hari ini?</h3>
        <p className="text-sm text-gray-600">Halo, {state.userData.nickname}!</p>
      </div>
      
      {/* Happiness Status */}
      {state.userData.happinessAnswer && (
        <div className="w-full max-w-sm">
          <div className="rounded-xl p-4 border border-gray-200 bg-white">
            <div className="text-center space-y-1">
              <h3 className="font-semibold text-gray-900">Mood</h3>
              <p className="text-sm text-gray-700">{state.userData.happinessAnswer}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Verification Status */}
      <div className="w-full max-w-sm">
        <div className="rounded-xl p-4 border border-gray-200 bg-white">
          <h3 className="font-semibold text-gray-900 mb-2 text-center">Verification</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Nickname</span>
              <span className="font-medium text-gray-800">{state.userData.nickname}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Status</span>
              <span className="text-gray-800 font-medium">Verified</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Restart Button */}
      <div className="w-full max-w-sm">
        <button 
          onClick={handleRestart}
          className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 active:bg-gray-950 transition-colors"
        >
          Start Over
        </button>
      </div>
    </div>
  );
};

export default WelcomePage; 