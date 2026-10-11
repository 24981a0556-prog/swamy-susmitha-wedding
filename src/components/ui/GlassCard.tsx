import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'interactive' | 'subtle';
  id?: string;
}

export function GlassCard({
  children,
  className = '',
  variant = 'default',
  id,
}: GlassCardProps) {
  const variantClass = {
    default: 'glass-panel',
    interactive: 'glass-panel-interactive',
    subtle: 'glass-panel-subtle',
  }[variant];

  return (
    <div
      id={id}
      className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 ${variantClass} ${className}`}
    >
      {/* Subtle corner golden flourishes */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-amber-400/30 rounded-tl pointer-events-none" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-amber-400/30 rounded-tr pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-amber-400/30 rounded-bl pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-amber-400/30 rounded-br pointer-events-none" />

      {children}
    </div>
  );
}
