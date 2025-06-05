
import React from 'react';
import { Settings } from 'lucide-react';

export const AIProblemSolver = () => {
  return (
    <div className="flex items-center justify-center space-x-12">
      {/* Problem (Puzzle Pieces) */}
      <div className="relative">
        <div className="grid grid-cols-2 gap-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-lg shadow-lg transform animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                transform: `rotate(${i * 15}deg) translate(${i * 2}px, ${i * 2}px)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* AI Processing */}
      <div className="relative">
        <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
          <Settings size={64} className="text-white animate-spin" style={{ animationDuration: '3s' }} />
        </div>
        
        {/* Processing Rings */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border-4 border-indigo-300 rounded-full animate-ping"
            style={{
              animationDelay: `${i * 0.5}s`,
              animationDuration: '2s',
            }}
          />
        ))}
      </div>

      {/* Solution */}
      <div className="relative">
        <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-6xl">✓</div>
        </div>
        
        {/* Success Sparkles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-yellow-300 rounded-full animate-bounce"
            style={{
              left: `${-10 + i * 8}px`,
              top: `${-10 + (i % 2) * 20}px`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
