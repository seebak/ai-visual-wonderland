
import React from 'react';
import { Brain } from 'lucide-react';

export const AIBrain = () => {
  return (
    <div className="relative">
      {/* Main AI Brain */}
      <div className="relative z-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full w-64 h-64 flex items-center justify-center shadow-2xl animate-pulse">
        <Brain size={120} className="text-white" />
      </div>
      
      {/* Orbiting Elements */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
          <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg"></div>
        </div>
        <div className="absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-red-500 rounded-full shadow-lg"></div>
        </div>
        <div className="absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2">
          <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"></div>
        </div>
      </div>

      {/* Neural Network Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 bg-gradient-to-t from-transparent via-purple-300 to-transparent opacity-60 animate-pulse"
            style={{
              height: '100px',
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 2) * 20}%`,
              transform: `rotate(${i * 30}deg)`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
