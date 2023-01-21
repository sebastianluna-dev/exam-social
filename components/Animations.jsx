import { motion } from 'framer-motion';

export function TranslateX({ children, className, delay }) {
  return (
    <motion.div
      initial={{ x: 150, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -150, opacity: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      { children }
    </motion.div>
  );
}

export function ZoomOut({ children }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      exit={{ scale: 0.75, opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export function ZoomIn({ children, className, delay }) {
  return (
    <motion.div
      initial={{ scale: 0.75, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ButtonAnimation({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
    >
      {children}
    </motion.div>
  );
}
