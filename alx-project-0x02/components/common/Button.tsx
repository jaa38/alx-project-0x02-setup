import { type ButtonProps } from '@/interfaces';

const Button = ({ title, size, shape }: ButtonProps) => {
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button className={`bg-blue-600 text-white ${sizeClasses[size]} ${shape}`}>
      {title}
    </button>
  );
};

export default Button;
