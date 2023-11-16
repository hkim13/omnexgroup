import Link from 'next/link';

export default function Button({ children, className }) {
    return (
      <div className={`${className} font-medium px-6 py-2 rounded-full`}>
      {children}
      </div>
    );
  }