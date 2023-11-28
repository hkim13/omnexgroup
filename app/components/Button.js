import Link from 'next/link';

export default function Button({ children, className, onClick }) {
    return (
      <div className={`${className} font-medium px-6 py-2 rounded-full min-w-max`} onClick={onClick}>
      {children}
      </div>
    );
  }