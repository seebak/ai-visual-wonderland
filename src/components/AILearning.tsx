
import React from 'react';
import { Bot } from 'lucide-react';

export const AILearning = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Central AI Robot */}
      <div className="relative z-10 w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
        <Bot size={80} className="text-white" />
      </div>

      {/* Data Streams */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-32 h-2 origin-left animate-pulse"
          style={{
            left: '50%',
            top: '50%',
            transform: `rotate(${i * 60}deg)`,
            transformOrigin: '0 0',
            animationDelay: `${i * 0.3}s`,
          }}
        >
          <div className="flex space-x-1">
            {[...Array(8)].map((_, j) => (
              <div
                key={j}
                className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                style={{
                  animationDelay: `${j * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Knowledge Nodes */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg animate-bounce flex items-center justify-center"
          style={{
            left: `${50 + Math.cos(i * 30 * Math.PI / 180) * 140}%`,
            top: `${50 + Math.sin(i * 30 * Math.PI / 180) * 140}%`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: '3s',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="text-xs">{['📊', '📚', '🔬', '🎯', '💎', '🌟', '🚀', '⚡', '🎭', '🎪', '🎨', '🎵'][i]}</div>
        </div>
      ))}

      {/* Growth Indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-16">
        <div className="flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-t from-green-400 to-emerald-500 rounded-t-lg animate-pulse"
              style={{
                width: '8px',
                height: `${20 + i * 10}px`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
