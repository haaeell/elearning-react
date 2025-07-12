import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'dark' | 'light';
};

export default function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  const base =
    'px-4 py-3 rounded-xl text-sm font-medium focus:outline-none transition';
  const variants = {
    primary: 'bg-cyan-400 text-white hover:bg-cyan-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-400 text-white hover:bg-red-500',
    warning: 'bg-yellow-400 text-white hover:bg-yellow-500',
    success: 'bg-green-400 text-white hover:bg-green-500',
    info: 'bg-cyan-400 text-white hover:bg-cyan-500',
    dark: 'bg-gray-800 text-white hover:bg-gray-900',
    light: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  };

  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
