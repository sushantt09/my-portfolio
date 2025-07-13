'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function FloatingBubbles() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [bubbles, setBubbles] = useState<{ 
    id: number; 
    size: number; 
    initialX: number; 
    initialY: number; 
    color: string; 
    duration: number; 
    delay: number; 
  }[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  useEffect(() => {
    if (windowSize.width && windowSize.height) {
      const newBubbles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        size: Math.random() * 40 + 15, // 15-55px
        initialX: Math.random() * windowSize.width,
        initialY: Math.random() * windowSize.height,
        color: [
          'bg-cyan-200/20 border-cyan-300/40',
          'bg-purple-200/20 border-purple-300/40',
          'bg-blue-200/20 border-blue-300/40',
          'bg-emerald-200/20 border-emerald-300/40',
          'bg-pink-200/20 border-pink-300/40',
        ][Math.floor(Math.random() * 5)],
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 8,
      }));
      setBubbles(newBubbles);
    }
  }, [windowSize]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble: any) => (
        <motion.div
          key={bubble.id}
          className={`absolute rounded-full ${bubble.color} border backdrop-blur-sm`}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.initialX,
            top: bubble.initialY,
          }}
          animate={{
            x: [0, 100, -50, 80, 0],
            y: [0, -80, 60, -100, 0],
            scale: [1, 1.2, 0.8, 1.1, 1],
            opacity: [0.3, 0.6, 0.2, 0.5, 0.3],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}