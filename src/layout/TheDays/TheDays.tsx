'use client'
import React, { useEffect } from 'react';
import { StepProvider } from '../../context/StepContext';
import StepContainer from '../../components/steps/StepContainer';
import { supabase } from '@/lib/supabase';
import { motion } from 'framer-motion';


const TheDays = () => {

  const getPhotos = async () => {
    const { data, error } = await supabase
      .storage
      .from("birthday-memories")
      .list("photos", {
        limit: 999,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    return data;
  }

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div>
      <h1>The Days</h1>
    </div>
    // <StepProvider>
    //   <StepContainer />
    // </StepProvider>
  );
};

export default TheDays;