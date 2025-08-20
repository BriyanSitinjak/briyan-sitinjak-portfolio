'use client'
import React from 'react';
import { StepProvider } from '../../context/StepContext';
import StepContainer from '../../components/steps/StepContainer';

const TheDays = () => {
  return (
    <StepProvider>
      <StepContainer />
    </StepProvider>
  );
};

export default TheDays;