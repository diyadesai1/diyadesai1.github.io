import React from 'react';
import clsx from 'clsx';

const base = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors';

const variants = {
  default: 'bg-primary text-primary-foreground border-transparent',
  secondary: 'bg-gray-100 text-gray-800 border-gray-200',
  outline: 'bg-gray-50 border-gray-200 text-gray-700',
};

export function Badge({ className, variant = 'default', ...props }) {
  return <span className={clsx(base, variants[variant] || variants.default, className)} {...props} />;
}
