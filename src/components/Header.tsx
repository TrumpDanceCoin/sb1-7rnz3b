import React from 'react';
import { Rocket } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rocket className="w-8 h-8 text-red-600" />
            <span className="text-1xl font-bold text-white">TrumpDanceCoin</span>
          </div>
          <a 
            href="https://pump.fun/coin/64TMC9d5EAC8VMdkq13iHnUR2VvxZCaN1Pcynqxgpump"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors"
          >
            Buy Now
          </a>
        </div>
      </nav>
    </header>
  );
}