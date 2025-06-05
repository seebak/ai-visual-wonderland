
import React from 'react';
import { AIBrain } from '../components/AIBrain';
import { AIHelper } from '../components/AIHelper';
import { AICreative } from '../components/AICreative';
import { AIProblemSolver } from '../components/AIProblemSolver';
import { AILearning } from '../components/AILearning';
import { FloatingElements } from '../components/FloatingElements';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="text-center animate-fade-in">
          <AIBrain />
        </div>
      </section>

      {/* AI Helper Section */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="animate-fade-in">
          <AIHelper />
        </div>
      </section>

      {/* AI Creative Section */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="animate-fade-in">
          <AICreative />
        </div>
      </section>

      {/* AI Problem Solver Section */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="animate-fade-in">
          <AIProblemSolver />
        </div>
      </section>

      {/* AI Learning Section */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="animate-fade-in">
          <AILearning />
        </div>
      </section>
    </div>
  );
};

export default Index;
