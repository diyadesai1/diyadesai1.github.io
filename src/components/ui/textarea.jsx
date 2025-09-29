import React from 'react';
import clsx from 'clsx';

const base = 'flex w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]';

export const Textarea = React.forwardRef(function Textarea({ className, ...props }, ref) {
  return <textarea ref={ref} className={clsx(base, className)} {...props} />;
});
