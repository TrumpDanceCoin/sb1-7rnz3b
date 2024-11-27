import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-black p-8 rounded-xl shadow-lg border border-red-900/20 ${className}`}>
      {children}
    </div>
  );
}