import { LabelHTMLAttributes } from 'react';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ children, ...props }: LabelProps) {
  return (
    <label {...props} className="block mb-1 text-sm font-medium text-gray-700">
      {children}
    </label>
  );
}
