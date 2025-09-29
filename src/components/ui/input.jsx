import React from 'react';
import clsx from 'clsx';

const base = 'flex h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50';

export const Input = React.forwardRef(function Input({ className, type = 'text', ...props }, ref) {
  return <input ref={ref} type={type} className={clsx(base, className)} {...props} />;
});
