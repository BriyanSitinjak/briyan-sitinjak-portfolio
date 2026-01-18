import { MediaItem } from '@/constant/type';
import { motion } from 'framer-motion';
import React from 'react'

type MasonaryViewProps = {
  images: MediaItem[];
  onSelect: (img: MediaItem) => void;
}

const MasonaryView = ({ images, onSelect }: MasonaryViewProps) => {
  return (
    <div
    style={{
      columnCount: 2,
      columnGap: "12px",
      padding: "12px",
    }}
  >
    {images.map((img) => (
      <motion.div
        key={img.id}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        layout
        style={{
          breakInside: "avoid",
          marginBottom: "12px",
          borderRadius: "14px",
          overflow: "hidden",
          cursor: "pointer",
        }}
        onClick={() => onSelect(img)}
      >
        <motion.img
          // src={img.url}
          alt=""
          loading="lazy"
          style={{
            width: "100%",
            display: "block",
            borderRadius: "14px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    ))}
  </div>
  )
}

export default MasonaryView