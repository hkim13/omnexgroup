import Image from 'next/image'

export default function UseCasesPage() {
  return (
    <main className='max-w-[974px] mx-auto px-6 pt-[80px] md:pt-[85px] pb-[50px]'>
      <div className='flex flex-col gap-10 text-center pb-[40px] md:pb-[79px]'>
        <div>
          <h3 className="font-bold pb-4 text-green">About Us</h3>
          <h1 className='text-[#253D84]'>Use Cases</h1>
        </div>
        <p className='max-w-[614px] mx-auto'>We enable individuals to send money internationally to their friends and relatives by visiting a retail location, using our APP or visiting our website.</p>
      </div>

      <div className='flex flex-col gap-4'>
        {/* In Person Transactions */}
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          <div className='border border-[#333333] rounded-3xl h-[188px] w-full md:h-[346px]'>
            <h1 className='px-[38px] py-[50px]'>In-Person Transactions</h1>
          </div>
          <div className='relative h-[264px] md:h-[346px]'>
            <Image className='w-full h-full object-cover rounded-3xl' src="/Webp/shutterstock_2248802201.webp" alt="" width={357} height={237}/>
          </div>
        </div>

        {/* In Person Transactions - Information */}
        <div class="grid grid-cols-1 gap-4">
          <div class="bg-[#F5F5F5] rounded-3xl min-h-max pb-[52px] px-[35px] pt-[48px] flex flex-col gap-7 md:h-[195px] md:flex-row md:gap-[60px]">
            <div className='flex items-center justify-center rounded-full border-2 border-[#333333] h-[64px] w-[64px] md:min-h-[75px] md:min-w-[75px] grow-0'>
              <div className="font-bold text-[36px] md:text-[46px]">1</div>
            </div>
            <p>A consumer who visits a retail store in person provides the store clerk with instructions for the transaction, including the sender’s name, beneficiary information, and amount to be transferred.</p>
            
          </div>
          
          <div class="md:grid md:grid-cols-2 md:grid-rows-2 gap-4">
            <div class="bg-[#DFE7FF] rounded-3xl md:row-span-2 min-h-max pb-[52px] px-[35px] pt-[48px] flex flex-col gap-7 md:h-[346px]">
              <div className='flex items-center justify-center rounded-full border-2 border-[#333333] h-[64px] w-[64px] md:min-h-[75px] md:min-w-[75px]'>
                <div className="font-bold text-[36px] md:text-[46px]">2</div>
              </div>
              <p>The store clerk transcribes this information into web-based software, obtains additional compliance related information (identification, source of funds) if appropriate, and either:</p>
              <p className='md:hidden'>- collects cash from the consumer for the transaction; </p>
              <p className='md:hidden'>- allows the consumer to swipe their debit card and enter a pin# for the transaction.</p>
            </div>
            <div class="bg-[#DFE7FF] rounded-3xl hidden border md:flex md:row-span-1">
              <p className='hidden md:flex self-center px-[52px]'>- collects cash from the consumer for the transaction;</p>
            </div>
            <div class="bg-[#DFE7FF] rounded-3xl hidden border md:flex md:row-span-1">
              <p className='hidden md:flex self-center px-[52px]'>- allows the consumer to swipe their debit card and enter a pin# for the transaction.</p>
            </div>
          </div>

          <div class="bg-[#DCF8E4] rounded-3xl min-h-max pb-[52px] px-[35px] pt-[48px] flex flex-col gap-7 md:h-[195px] md:flex-row md:gap-[60px]">
            <div className='flex items-center justify-center rounded-full border-2 border-[#333333] h-[64px] w-[64px] md:min-h-[75px] md:min-w-[75px] grow-0'>
              <div className="font-bold text-[36px] md:text-[46px]">3</div>
            </div>
            <p>At close of day, the store manager deposits cash collected and closes batch for card transactions, if any.</p>
          </div>
        </div>

        {/* APP/Web-Based Transactions */}
        <div className='border border-[#333333] rounded-3xl h-[188px] w-full md:h-[346px] '>
          <h1 className='px-[38px] py-[50px] md:max-w-[500px]'>APP/Web-Based Transactions</h1>
        </div>
        
        {/* APP/Web-Based Transactions - Information */}
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div class="bg-[#F5F5F5] rounded-3xl min-h-max pb-[52px] px-[35px] pt-[48px] flex flex-col gap-7">
            <div className='flex items-center justify-center rounded-full border-2 border-[#333333] h-[64px] w-[64px] md:min-h-[75px] md:min-w-[75px] grow-0'>
              <div className="font-bold text-[36px] md:text-[46px]">1</div>
            </div>
            <p>A consumer registers on our web site/app, and the system validates the consumer’s identity.</p>
          </div>
          <div class="bg-[#DFE7FF] rounded-3xl min-h-max pb-[52px] px-[35px] pt-[48px] flex flex-col gap-7">
            <div className='flex items-center justify-center rounded-full border-2 border-[#333333] h-[64px] w-[64px] md:min-h-[75px] md:min-w-[75px] grow-0'>
              <div className="font-bold text-[36px] md:text-[46px]">2</div>
            </div>
            <p>The consumer then enters and confirms transfer details, including name of beneficiary and contact details, the place for pickup, the amount, and other pertinent details.</p>
          </div>
          <div class="bg-[#DCF8E4] rounded-3xl min-h-max pb-[52px] px-[35px] pt-[48px] flex flex-col gap-7">
            <div className='flex items-center justify-center rounded-full border-2 border-[#333333] h-[64px] w-[64px] md:min-h-[75px] md:min-w-[75px] grow-0'>
              <div className="font-bold text-[36px] md:text-[46px]">3</div>
            </div>
            <p>The system generates and provides to the consumer CFPB compliant predisclosure and a state/CFPB compliant receipt.</p>
          </div>
          <div className='relative row-start-1 h-[264px] md:h-full md:row-start-2 md:col-start-2'>
            <Image className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_502415678_Preview.webp" alt="" width={357} height={237}/>
          </div>
        </div>
      </div>
      
      
    </main>
  )
}