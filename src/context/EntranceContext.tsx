'use client';

import React, { createContext, useContext, useState } from 'react';

interface EntranceContextType {
  isEntranceComplete: boolean;
  setEntranceComplete: (complete: boolean) => void;
}

const EntranceContext = createContext<EntranceContextType | undefined>(undefined);

export const EntranceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEntranceComplete, setIsEntranceComplete] = useState(false);

  const setEntranceComplete = (complete: boolean) => {
    setIsEntranceComplete(complete);
  };

  return (
    <EntranceContext.Provider value={{ isEntranceComplete, setEntranceComplete }}>
      {children}
    </EntranceContext.Provider>
  );
};

export const useEntrance = () => {
  const context = useContext(EntranceContext);
  if (context === undefined) {
    throw new Error('useEntrance must be used within an EntranceProvider');
  }
  return context;
};
