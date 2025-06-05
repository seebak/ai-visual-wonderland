
import React from 'react';

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Geometric Shapes */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        >
          <div
            className={`
              ${i % 3 === 0 ? 'w-4 h-4 rounded-full bg-purple-300' : ''}
              ${i % 3 === 1 ? 'w-6 h-6 rounded-lg bg-blue-300' : ''}
              ${i % 3 === 2 ? 'w-5 h-5 rounded-full bg-pink-300' : ''}
              opacity-60 shadow-lg
            `}
          />
        </div>
      ))}

      {/* Floating Binary Code */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`binary-${i}`}
          className="absolute text-gray-300 text-sm font-mono opacity-30 animate-bounce"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 2) * 60}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: '4s',
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </div>
      ))}

      {/* Gradient Orbs */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            background: `linear-gradient(45deg, 
              ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'][i]} 0%, 
              ${['#ff8e53', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#ff6b6b'][i]} 100%)`,
            opacity: 0.3,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};
