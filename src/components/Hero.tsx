import React from 'react';
import { Rocket } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              To The Moon With
              <span className="text-red-600"> TrumpDanceCoin</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              The next generation meme coin powered by community and the Space Force 🚀
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="https://pump.fun/coin/64TMC9d5EAC8VMdkq13iHnUR2VvxZCaN1Pcynqxgpump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  Buy TrumpDanceCoin
                </a>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border border-red-900/20">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Welcome to TrumpDanceCoin (TDC) — the meme coin that keeps the community moving! Inspired by the viral joy of Trump's iconic dance, TDC is more than just a token; it's a platform for bringing people together through laughter and shared moments. Whether you're a crypto enthusiast, a meme lover, or just here for the fun, TDC thrives on the energy of its growing community.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mt-4">
                  Our mission is simple: create a space where humor meets collaboration. With active discussions, meme contests, and social challenges, TDC is all about celebrating the lighter side of the internet. Join the movement, connect with others, and let's make crypto fun and engaging!
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDFnNG1jdDV0NDcxMHQyZnV2OXpsbnZpcnJmanQ4ZXY3MjR3bDJmdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ze6OmgA0foBv8GuAxm/giphy.webp"
              alt="Cryptocurrency to the Moon"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}