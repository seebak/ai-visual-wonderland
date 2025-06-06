
import React from 'react';
import { Bot, Zap, Heart, Sparkles, Brain, Code, Palette, Music } from 'lucide-react';

export const CharacterScene = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Left side characters */}
      <div className="absolute left-20 flex flex-col items-center space-y-8">
        {/* Hooded programmer character */}
        <div className="relative animate-bounce" style={{ animationDuration: '3s', animationDelay: '0s' }}>
          <div className="w-32 h-40 bg-gradient-to-b from-orange-400 to-orange-600 rounded-t-full rounded-b-3xl shadow-2xl flex flex-col items-center justify-center relative">
            <div className="w-20 h-20 bg-purple-500 rounded-full mb-2 flex items-center justify-center shadow-lg">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
              </div>
            </div>
            <div className="w-16 h-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <Code size={12} className="text-white" />
            </div>
          </div>
        </div>

        {/* Small robot */}
        <div className="relative animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '1s' }}>
          <div className="w-20 h-24 bg-gradient-to-b from-gray-700 to-gray-900 rounded-xl shadow-2xl flex flex-col items-center justify-center">
            <div className="w-12 h-8 bg-black rounded-lg mb-2 flex items-center justify-center">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
            <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
              <Zap size={12} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Center characters */}
      <div className="flex items-end space-x-12">
        {/* Tall character with Discord logo style */}
        <div className="relative animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
          <div className="w-28 h-48 bg-gradient-to-b from-indigo-400 to-purple-600 rounded-t-full rounded-b-3xl shadow-2xl flex flex-col items-center justify-center relative">
            <div className="w-20 h-20 bg-white rounded-full mb-4 flex items-center justify-center shadow-lg">
              <Bot size={32} className="text-purple-600" />
            </div>
            <div className="w-16 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
              <Brain size={16} className="text-white" />
            </div>
          </div>
        </div>

        {/* Floating cute robot */}
        <div className="relative animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }}>
          <div className="w-24 h-28 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full shadow-2xl flex flex-col items-center justify-center relative">
            <div className="w-16 h-12 bg-white rounded-full mb-2 flex items-center justify-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              </div>
            </div>
            <div className="w-8 h-4 bg-gray-600 rounded-full"></div>
          </div>
        </div>

        {/* Pink character */}
        <div className="relative animate-bounce" style={{ animationDuration: '3s', animationDelay: '2s' }}>
          <div className="w-32 h-44 bg-gradient-to-b from-pink-300 to-pink-500 rounded-t-full rounded-b-3xl shadow-2xl flex flex-col items-center justify-center relative">
            <div className="w-18 h-18 bg-white rounded-full mb-4 flex items-center justify-center shadow-lg">
              <Heart size={24} className="text-pink-500" />
            </div>
            <div className="w-20 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Right side characters */}
      <div className="absolute right-20 flex flex-col items-center space-y-8">
        {/* Flying character with antennae */}
        <div className="relative animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '0.8s' }}>
          <div className="w-24 h-28 bg-gradient-to-b from-blue-300 to-blue-500 rounded-full shadow-2xl flex flex-col items-center justify-center relative">
            {/* Antennae */}
            <div className="absolute -top-4 left-4 w-1 h-6 bg-gray-600 rounded-full"></div>
            <div className="absolute -top-4 right-4 w-1 h-6 bg-gray-600 rounded-full"></div>
            <div className="absolute -top-6 left-4 w-3 h-3 bg-white rounded-full shadow-lg animate-pulse"></div>
            <div className="absolute -top-6 right-4 w-3 h-3 bg-white rounded-full shadow-lg animate-pulse"></div>
            
            <div className="w-16 h-12 bg-white rounded-full mb-2 flex items-center justify-center">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
            </div>
            <div className="w-12 h-4 bg-blue-600 rounded-full flex items-center justify-center">
              <Sparkles size={10} className="text-white" />
            </div>
          </div>
        </div>

        {/* Character with hat */}
        <div className="relative animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '1.8s' }}>
          <div className="w-28 h-40 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-t-full rounded-b-3xl shadow-2xl flex flex-col items-center justify-center relative">
            {/* Hat */}
            <div className="absolute -top-8 w-24 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg"></div>
            <div className="w-18 h-18 bg-white rounded-full mb-4 flex items-center justify-center shadow-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              </div>
            </div>
            <div className="w-16 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
              <Music size={12} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: '3s',
          }}
        >
          <div className="w-6 h-6 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full shadow-lg flex items-center justify-center">
            {['💫', '🌟', '✨', '⭐', '🔮', '🎨', '🎵', '💡'][i]}
          </div>
        </div>
      ))}
    </div>
  );
};
