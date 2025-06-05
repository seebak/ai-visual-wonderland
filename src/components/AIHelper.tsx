
import React from 'react';
import { Bot } from 'lucide-react';

export const AIHelper = () => {
  return (
    <div className="flex items-center justify-center space-x-16">
      {/* Human Figure */}
      <div className="relative">
        <div className="w-32 h-32 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full flex items-center justify-center shadow-xl">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full"></div>
          </div>
        </div>
        
        {/* Thought Bubble */}
        <div className="absolute -top-16 -right-8 w-20 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-amber-200">
          <div className="text-2xl">❓</div>
        </div>
        <div className="absolute -top-4 right-4 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-amber-200"></div>
      </div>

      {/* Connection Lines */}
      <div className="flex flex-col space-y-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full animate-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>

      {/* AI Robot */}
      <div className="relative">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
          <Bot size={64} className="text-white" />
        </div>
        
        {/* AI Response */}
        <div className="absolute -top-16 -left-8 w-24 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-blue-200">
          <div className="text-2xl">💡</div>
        </div>
        <div className="absolute -top-4 left-6 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-blue-200"></div>
      </div>
    </div>
  );
};
