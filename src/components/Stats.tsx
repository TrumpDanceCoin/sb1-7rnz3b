import React from 'react';
import { Users, DollarSign, Rocket } from 'lucide-react';
import { Card } from './shared/Card';

export function Stats() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            icon={<Users className="w-8 h-8 text-red-600" />}
            title="100K+"
            description="Community Members"
          />
          <StatCard
            icon={<DollarSign className="w-8 h-8 text-red-600" />}
            title="$10M"
            description="Market Cap"
          />
          <StatCard
            icon={<Rocket className="w-8 h-8 text-red-600" />}
            title="50K"
            description="Holders"
          />
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function StatCard({ icon, title, description }: StatCardProps) {
  return (
    <Card className="text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  );
}