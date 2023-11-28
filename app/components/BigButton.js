import Link from 'next/link';

export default function Button({ children, onClick, className }) {
    return (
      <div className={`${className} font-bold text-[22px] px-8 py-4 rounded-full sm:rounded-3xl min-w-max`} onClick={onClick}>
      {children}
      </div>
    );
  }