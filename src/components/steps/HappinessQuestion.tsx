'use client'
import React, { useState } from 'react';
import { useStepContext } from '../../context/StepContext';

const HappinessQuestion = () => {
  const { updateUserData, goToWelcome } = useStepContext();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    // Add a small delay for better UX
    setTimeout(() => {
      updateUserData({ happinessAnswer: answer });
      goToWelcome();
    }, 800);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8 p-6">
      {/* Animated Header */}
      <div className="text-center space-y-4">
        <div className="text-7xl mb-6 animate-bounce">😊</div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Are you happy?
        </h2>
        <p className="text-gray-600 text-lg">
          Tell me how you&apos;re feeling today
        </p>
      </div>

      {/* Answer Options */}
      <div className="w-full space-y-4">
        <button
          onClick={() => handleAnswer('Very Happy')}
          disabled={isAnswered}
          className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            selectedAnswer === 'Very Happy'
              ? 'border-green-500 bg-green-50 shadow-lg'
              : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
          } ${isAnswered ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="flex items-center justify-center space-x-3">
            <span className="text-3xl">😄</span>
            <span className="text-lg font-semibold text-gray-800">Very Happy</span>
          </div>
        </button>

        <button
          onClick={() => handleAnswer('Happy')}
          disabled={isAnswered}
          className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            selectedAnswer === 'Happy'
              ? 'border-blue-500 bg-blue-50 shadow-lg'
              : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
          } ${isAnswered ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="flex items-center justify-center space-x-3">
            <span className="text-3xl">🙂</span>
            <span className="text-lg font-semibold text-gray-800">Happy</span>
          </div>
        </button>

        <button
          onClick={() => handleAnswer('Okay')}
          disabled={isAnswered}
          className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            selectedAnswer === 'Okay'
              ? 'border-yellow-500 bg-yellow-50 shadow-lg'
              : 'border-gray-200 hover:border-yellow-300 hover:bg-yellow-50'
          } ${isAnswered ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="flex items-center justify-center space-x-3">
            <span className="text-3xl">😐</span>
            <span className="text-lg font-semibold text-gray-800">Okay</span>
          </div>
        </button>

        <button
          onClick={() => handleAnswer('Not So Good')}
          disabled={isAnswered}
          className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            selectedAnswer === 'Not So Good'
              ? 'border-red-500 bg-red-50 shadow-lg'
              : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
          } ${isAnswered ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="flex items-center justify-center space-x-3">
            <span className="text-3xl">😔</span>
            <span className="text-lg font-semibold text-gray-800">Not So Good</span>
          </div>
        </button>
      </div>

      {/* Loading Animation */}
      {isAnswered && (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      )}
    </div>
  );
};

export default HappinessQuestion; 