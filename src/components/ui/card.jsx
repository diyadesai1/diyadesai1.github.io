import React from 'react';
import clsx from 'clsx';

export function Card({ className, ...props }) {
  return (
    <div
      className={clsx(
        'rounded-lg border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow',
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return <div className={clsx('p-6 pb-0', className)} {...props} />;
}

export function CardTitle({ className, ...props }) {
  return <h3 className={clsx('text-lg font-semibold leading-tight', className)} {...props} />;
}

export function CardContent({ className, ...props }) {
  return (
    <div className={clsx('p-6 pt-4', className)} {...props} />
  );
}
