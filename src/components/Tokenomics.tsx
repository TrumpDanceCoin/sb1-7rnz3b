import React from 'react';
import { PieChart, Wallet, Rocket, Users } from 'lucide-react';
import { Card } from './shared/Card';

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Tokenomics</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our tokenomics are designed to reward holders and ensure sustainable growth
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TokenCard
            icon={<Wallet />}
            title="40%"
            description="Liquidity Pool"
            color="bg-red-900/10"
          />
          <TokenCard
            icon={<Users />}
            title="30%"
            description="Community Rewards"
            color="bg-red-900/10"
          />
          <TokenCard
            icon={<Rocket />}
            title="20%"
            description="Development"
            color="bg-red-900/10"
          />
          <TokenCard
            icon={<PieChart />}
            title="10%"
            description="Marketing"
            color="bg-red-900/10"
          />
        </div>
      </div>
    </section>
  );
}

interface TokenCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

function TokenCard({ icon, title, description, color }: TokenCardProps) {
  return (
    <Card className={`${color} text-center transition-transform hover:scale-105`}>
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-black rounded-full border border-red-900/20">
          {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8 text-red-600' })}
        </div>
      </div>
      <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  );
}