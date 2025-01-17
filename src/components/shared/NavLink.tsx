import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a href={href} className="text-gray-300 hover:text-red-500 transition-colors">
      {children}
    </a>
  );
}