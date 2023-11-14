import Link from 'next/link';

const LinkBar = () => {
  return (
    <div className="bg-blue-800 text-white p-2">
      <div className="flex flex-wrap justify-center items-center h-full mx-auto space-x-4">
        <nav className="flex gap-4">
          <Link href="https://www.unomoneytransfers.com/">
            <img src="/SVG/UnoSMALL.svg" alt="Uno" width="50"/> 
          </Link>
          <Link href="https://www.legoitienle.com/">
            <img src="/SVG/LeGoiSMALL.svg" alt="LeGoi" width="100"/> 
          </Link>
          <Link href="https://www.giromex.com/">
            <img src="/SVG/GiromexSMALL.svg" alt="Giromex" width="75"/> 
          </Link>
          <Link href="https://www.sharemoney.com/us/en/denmark">
            <img src="/SVG/SharemoneySMALL.svg" alt="Sharemoney" width="100"/> 
          </Link>
        </nav>
        <span className='font-thin'>are services of Omnex Group, Inc</span>
      </div>
    </div>
  );
};

export default LinkBar;