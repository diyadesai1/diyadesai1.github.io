import React from 'react';
import clsx from 'clsx';

export function Separator({ className }) {
  return <div role="separator" className={clsx('w-full h-px bg-neutral-800', className)} />;
}
