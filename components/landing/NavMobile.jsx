import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export function NavMobile() {
  const [mobileNavState, setMobileNavState] = useState(false);

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const variants2 = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <>
      <div
        aria-hidden
        className="h-16 w-16 bg-secondary rounded-full cursor-pointer flex flex-col p-4 fixed z-50 justify-between top-6 right-6 lg:hidden"
        onClick={() => { setMobileNavState(!mobileNavState); }}
      >
        <motion.div
          animate={{
            rotate: mobileNavState ? 45 : 0,
            y: mobileNavState ? 12 : 0,
          }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="h-2 w-full bg-white"
        />
        <AnimatePresence>
          {
            !mobileNavState
            && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="h-2 w-full bg-white"
            />
            )
          }
        </AnimatePresence>
        <motion.div
          animate={{
            rotate: mobileNavState ? -45 : 0,
            y: mobileNavState ? -12 : 0,
          }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="h-2 w-full bg-white"
        />
      </div>
      <motion.div style={{ pointerEvents: mobileNavState ? 'auto' : 'none' }} className="lg:hidden fixed top-0 bottom-0 left-0 right-0 z-40">
        <motion.nav initial={false} animate={mobileNavState ? 'open' : 'closed'} className="p-6 h-full w-full ml-auto sm:w-2/3 md:w-1/2 overflow-hidden">
          <div className="flex justify-end">
            <AnimatePresence>
              {
                mobileNavState
                && (
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 28 }}
                  exit={{ scale: 1 }}
                  transition={{
                    scale: { type: 'tween', duration: 0.6 },
                  }}
                  className="h-16 w-16 bg-secondary rounded-full shadow-lg"
                />
                )
              }
            </AnimatePresence>
          </div>
          <motion.ul variants={variants} className="relative w-full flex flex-col pt-20">

            <motion.li
              variants={variants2}
              key="3"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 1 }}
            >
              <Link href="/home">
                <button
                  type="button"
                  className="w-full bg-white text-primary-500 font-medium bg-opacity-60 hover:bg-opacity-100 p-6 mb-4 rounded-2xl block duration-300"
                >
                  Home
                </button>
              </Link>
            </motion.li>
            <motion.li
              variants={variants2}
              key="1"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 1 }}
            >
              <Link href="/home">
                <button
                  type="button"
                  className="w-full bg-white text-primary-500 font-medium bg-opacity-60 hover:bg-opacity-100 p-6 mb-4 rounded-2xl block duration-300"
                >
                  Contact
                </button>
              </Link>
            </motion.li>
            <motion.li
              variants={variants2}
              key="2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 1 }}
            >
              <Link href="/home">
                <button
                  type="button"
                  className="w-full bg-white text-primary-500 font-medium bg-opacity-60 hover:bg-opacity-100 p-6 mb-4 rounded-2xl block duration-300"
                >
                  About us
                </button>
              </Link>
            </motion.li>

          </motion.ul>
        </motion.nav>
      </motion.div>
    </>
  );
}
