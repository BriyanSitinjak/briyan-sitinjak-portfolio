'use client'
import React from 'react';
import { useStepContext } from '../../context/StepContext';

const WelcomePage = () => {
  const { resetSteps, state } = useStepContext();

  const handleRestart = () => {
    resetSteps();
  };

  const getHappinessEmoji = (answer?: string) => {
    switch (answer) {
      case 'Very Happy':
        return '😄';
      case 'Happy':
        return '🙂';
      case 'Okay':
        return '😐';
      case 'Not So Good':
        return '😔';
      default:
        return '😊';
    }
  };

  const getHappinessColor = (answer?: string) => {
    switch (answer) {
      case 'Very Happy':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'Happy':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Okay':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Not So Good':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-4">
      {/* Modern Header with Gradient */}
      <div className="text-center space-y-4">
        <div className="text-8xl mb-6 animate-pulse">🎉</div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Hi Anesya,
        </h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Gimana kabarnya hari ini?
        </h3>
        <p className="text-lg text-blue-600 font-medium">
          Halo, {state.userData.nickname}! 🥰
        </p>
      </div>
      
      {/* Happiness Status Card */}
      {state.userData.happinessAnswer && (
        <div className="w-full max-w-sm">
          <div className={`rounded-2xl p-6 border-2 ${getHappinessColor(state.userData.happinessAnswer)} shadow-lg transform hover:scale-105 transition-all duration-300`}>
            <div className="text-center space-y-3">
              <div className="text-4xl">{getHappinessEmoji(state.userData.happinessAnswer)}</div>
              <h3 className="font-bold text-lg">Your Mood Today</h3>
              <p className="font-medium">{state.userData.happinessAnswer}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Verification Status */}
      <div className="w-full max-w-sm">
        <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl p-4 border border-blue-200 shadow-md">
          <h3 className="font-semibold text-gray-800 mb-3 text-center">Verification Status</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Nickname:</span>
              <span className="font-medium text-gray-800">{state.userData.nickname}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Status:</span>
              <span className="text-green-600 font-medium flex items-center">
                <span className="mr-1">✅</span> Verified
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern Restart Button */}
      <div className="w-full max-w-sm">
        <button 
          onClick={handleRestart}
          className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-semibold transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-green-300 text-lg"
        >
          Start Over ✨
        </button>
      </div>
    </div>
  );
};

export default WelcomePage; 