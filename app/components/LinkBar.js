import Link from 'next/link';

const LinkBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-blue-800 text-white p-2">
      <div className="flex justify-center items-center h-full mx-auto space-x-4">
        <nav className="flex divide-x divide-gray-300 space-x-4">
          <Link href="https://www.unomoneytransfers.com/">UNO</Link>
          <Link href="https://www.legoitienle.com/">Le Goi Tien Le</Link>
          <Link href="https://www.giromex.com/">Giromex</Link>
          <Link href="https://www.sharemoney.com/us/en/denmark">Sharemoney</Link>
        </nav>
        <span>are services of Omnex Group, Inc</span>
      </div>
    </div>
  );
};

export default LinkBar;
