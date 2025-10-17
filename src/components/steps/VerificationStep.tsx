'use client'
import React, { useState } from 'react';
import { useStepContext } from '../../context/StepContext';

const VerificationStep = () => {
  const { goToHappinessQuestion, updateUserData, getCurrentStep } = useStepContext();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  
  const currentStep = getCurrentStep();

  const handleVerify = () => {
    if (!inputValue.trim()) {
      setError('Pastikan urutannya dan besar kecilnya benar yaa');
      return;
    }

    if (inputValue === 'MySunfloow') {
      setError('');
      updateUserData({ nickname: inputValue });
      goToHappinessQuestion();
    } else {
      setError('Yah kurang tepat');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleVerify();
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {currentStep?.title}
        </h2>
        <p className="text-gray-600">
          {currentStep?.description}
        </p>
      </div>
      
      <div className="w-3/4">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setError('');
          }}
          onKeyPress={handleKeyPress}
          placeholder="Masukkan Jawabanmu" 
          className="w-full px-4 py-3 text-lg border-b-2 text-black border-gray-300 focus:border-blue-500 outline-none transition-all duration-300 bg-transparent placeholder:text-gray-400"
        />
        {error && (
          <p className="text-red-500 text-sm mt-2 text-center">
            {error}
          </p>
        )}
      </div>
      
      <button 
        onClick={handleVerify}
        className="w-3/4 px-6 py-3 bg-blue-500 text-white rounded-full font-medium transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-blue-300"
      >
        Verifikasi Aku
      </button>
    </div>
  );
};

export default VerificationStep;