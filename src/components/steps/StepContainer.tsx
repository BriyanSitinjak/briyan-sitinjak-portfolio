'use client'
import React from 'react';
import { useStepContext } from '../../context/StepContext';
import WelcomePage from './WelcomePage';
import VerificationStep from './VerificationStep';
import HappinessQuestion from './HappinessQuestion';

const StepContainer = () => {
  const { state } = useStepContext();

  const renderComponent = () => {
    if (state.isWelcomePage) {
      return <WelcomePage />;
    }
    
    if (state.isHappinessQuestion) {
      return <HappinessQuestion />;
    }
    
    return <VerificationStep />;
  };

  return (
    <div className="block md:hidden w-80 h-[800px] bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-md mx-auto overflow-auto">
      <div className="w-full h-full flex items-center justify-center">
        {renderComponent()}
      </div>
    </div>
  );
};

export default StepContainer;