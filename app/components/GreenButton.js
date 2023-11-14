import Link from 'next/link';

export default function GreenButton({ children }) {
    return (
      <div className='bg-[#52DB78] text-[#253D84] font-medium px-6 py-2 rounded-3xl'>
        {children}
      </div>
    );
  }