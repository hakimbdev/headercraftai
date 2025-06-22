import React from 'react';
import { icons } from 'lucide-react';

interface IconProps {
  name: string;
  color?: string;
  size?: number;
  className?: string;
}

const Icon = ({ name, color, size, className }: IconProps) => {
  // @ts-ignore
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon color={color} size={size} className={className} />;
};

export default Icon; 