import React from 'react';
import clsx from 'clsx';

const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:opacity-50 disabled:pointer-events-none';

const variants = {
  default: 'bg-primary text-primary-foreground hover:opacity-90',
  ghost: 'bg-transparent hover:bg-gray-100',
  outline: 'border border-neutral-300 text-black hover:bg-gray-100',
};

const sizes = {
  default: 'h-10 px-4 py-2 text-sm',
  icon: 'h-10 w-10',
  lg: 'h-12 px-6 text-base',
};

export const Button = React.forwardRef(function Button({
  className,
  variant = 'default',
  size = 'default',
  type = 'button',
  asChild,
  aschild, // allow lowercase variant previously used
  children,
  ...props
}, ref) {
  const useChild = asChild || aschild;
  const classes = clsx(base, variants[variant] || variants.default, sizes[size] || sizes.default, className);

  if (useChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: clsx(classes, children.props.className),
      ref,
      ...props,
    });
  }

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
});
