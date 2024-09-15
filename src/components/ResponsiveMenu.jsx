import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute top-20 left-0 w-full h-screen  z-10"
        >
          <div className="py-10 m-6  text-2xl font-semibold uppercase bg-white text-black rounded-2xl">
            <ul className="flex flex-col items-center justify-center gap-10 text-black">
              <li>Home</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
