'use client'
import React, { useEffect } from 'react';
import { supabase } from '@/lib/supabase';


const TheDays = () => {

  const getPhotos = async () => {
    const { data } = await supabase
      .storage
      .from("birthday-memories")
      .list("photos", {
        limit: 999,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    return data;
  }

  // useEffect(() => {
  //   getPhotos();
  // }, []);

  return (
    <div>
      <h1>The Days</h1>
    </div>
  )
};

export default TheDays;