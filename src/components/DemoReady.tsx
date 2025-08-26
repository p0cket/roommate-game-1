import { useGameStore } from '../store'
import { motion } from 'framer-motion'

export default function DemoReady() {
  const turn = useGameStore((s) => s.turn)
  const setTurn = useGameStore((s) => s.setTurn)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: 24,
        border: '2px solid #888',
        borderRadius: 12,
        maxWidth: 320,
        margin: '40px auto',
        textAlign: 'center',
        background: '#f8f8ff',
      }}
    >
      <h2>Demo: Zustand + Framer Motion</h2>
      <p>Current Turn: <strong>{turn}</strong></p>
      <button
        onClick={() => setTurn(turn + 1)}
        style={{
          padding: '8px 16px',
          fontSize: 16,
          borderRadius: 8,
          cursor: 'pointer',
          background: '#6c63ff',
          color: '#fff',
          border: 'none',
        }}
      >
        Next Turn
      </button>
      <motion.div
        key={turn}
        initial={{ scale: 0.8, background: '#fff' }}
        animate={{ scale: 1, background: '#e0e7ff' }}
        transition={{ duration: 0.3 }}
        style={{
          marginTop: 20,
          padding: 12,
          borderRadius: 8,
        }}
      >
        Turn {turn} animation!
      </motion.div>
    </motion.div>
  )
}
