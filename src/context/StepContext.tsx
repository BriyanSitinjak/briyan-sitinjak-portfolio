'use client'
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Step types
export interface Step {
  id: string;
  title: string;
  description: string;
  component: string;
}

// Context state
interface StepState {
  steps: Step[];
  isWelcomePage: boolean;
  isHappinessQuestion: boolean;
  userData: {
    nickname?: string;
    happinessAnswer?: string;
  };
}

// Action types
type StepAction =
  | { type: 'GO_TO_WELCOME' }
  | { type: 'GO_TO_HAPPINESS_QUESTION' }
  | { type: 'RESET_STEPS' }
  | { type: 'UPDATE_USER_DATA'; payload: Partial<StepState['userData']> };

// Initial state
const initialState: StepState = {
  steps: [
    {
      id: 'verification',
      title: 'Anesya?',
      description: 'Apa panggilan kesayanganku untukmu',
      component: 'VerificationStep'
    }
  ],
  isWelcomePage: false,
  isHappinessQuestion: false,
  userData: {}
};

// Reducer
const stepReducer = (state: StepState, action: StepAction): StepState => {
  switch (action.type) {
    case 'GO_TO_WELCOME':
      return {
        ...state,
        isWelcomePage: true,
        isHappinessQuestion: false
      };

    case 'GO_TO_HAPPINESS_QUESTION':
      return {
        ...state,
        isWelcomePage: false,
        isHappinessQuestion: true
      };

    case 'RESET_STEPS':
      return initialState;

    case 'UPDATE_USER_DATA':
      return {
        ...state,
        userData: { ...state.userData, ...action.payload }
      };

    default:
      return state;
  }
};

// Context
interface StepContextType {
  state: StepState;
  goToWelcome: () => void;
  goToHappinessQuestion: () => void;
  resetSteps: () => void;
  updateUserData: (data: Partial<StepState['userData']>) => void;
  getCurrentStep: () => Step | undefined;
}

const StepContext = createContext<StepContextType | undefined>(undefined);

// Provider component
interface StepProviderProps {
  children: ReactNode;
}

export const StepProvider: React.FC<StepProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(stepReducer, initialState);

  const goToWelcome = () => dispatch({ type: 'GO_TO_WELCOME' });
  const goToHappinessQuestion = () => dispatch({ type: 'GO_TO_HAPPINESS_QUESTION' });
  const resetSteps = () => dispatch({ type: 'RESET_STEPS' });
  const updateUserData = (data: Partial<StepState['userData']>) => 
    dispatch({ type: 'UPDATE_USER_DATA', payload: data });

  const getCurrentStep = () => state.steps[0];

  const value: StepContextType = {
    state,
    goToWelcome,
    goToHappinessQuestion,
    resetSteps,
    updateUserData,
    getCurrentStep
  };

  return (
    <StepContext.Provider value={value}>
      {children}
    </StepContext.Provider>
  );
};

// Hook to use the context
export const useStepContext = () => {
  const context = useContext(StepContext);
  if (context === undefined) {
    throw new Error('useStepContext must be used within a StepProvider');
  }
  return context;
};