
import React from 'react';
import { Lightbulb } from 'lucide-react';

export const AICreative = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Central AI */}
      <div className="relative z-10 w-40 h-40 bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl">
        <Lightbulb size={80} className="text-white" />
      </div>

      {/* Creative Outputs */}
      <div className="absolute inset-0">
        {/* Art Palette */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl shadow-lg animate-bounce flex items-center justify-center"
             style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <div className="text-2xl">🎨</div>
        </div>

        {/* Music Note */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg animate-bounce flex items-center justify-center"
             style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
          <div className="text-xl">🎵</div>
        </div>

        {/* Writing */}
        <div className="absolute bottom-0 left-0 w-18 h-18 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl shadow-lg animate-bounce flex items-center justify-center"
             style={{ animationDelay: '1s', animationDuration: '3s' }}>
          <div className="text-2xl">✍️</div>
        </div>

        {/* Code */}
        <div className="absolute bottom-0 right-0 w-20 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg animate-bounce flex items-center justify-center"
             style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
          <div className="text-xl">💻</div>
        </div>
      </div>

      {/* Sparkles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-ping"
          style={{
            left: `${30 + Math.cos(i * 45 * Math.PI / 180) * 120}px`,
            top: `${30 + Math.sin(i * 45 * Math.PI / 180) * 120}px`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: '2s',
          }}
        />
      ))}
    </div>
  );
};
