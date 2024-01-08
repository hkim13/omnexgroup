"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function ContactUsPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/email';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    alert(result.status);
  };

  
  
  return (
    <main className='bg-[#F5F5F5]'>
      {/* blue heading */}
      <div className='bg-[#253D84] flex flex-col gap-10 items-center text-center pb-[40px] md:pb-[79px] pt-[50px] px-6'>
        <div>
          <h3 className="font-bold pb-4 text-green">Get Support</h3>
          <h1 className='text-white'>Contact Us</h1>
        </div>
        <p className='max-w-[630px] text-white'>If you require support or you&apos;d like to learn more about our company, please contact us at the number provided or through the form below.</p>
      </div>

      <div className='px-6 max-w-[759px] mx-auto'>
        {/* call us */}
        <div className='flex flex-col gap-4 py-14'>
          <h3 className='text-[#253D84]'>Call Us</h3>
          <div className='bg-white rounded-2xl flex flex-col gap-10 px-6 py-10 sm:items-center mx-auto'>
            <p>Feel free to call us from Monday to Friday from 9 AM - 5 PM or you can always send us a message below.</p>
            <div className='flex flex-row gap-[10px]'>
              <button className="font-medium px-3 py-2 rounded-full min-w-max bg-[#253D84] text-white">
                <Link href="tel:866-614-1670" className='flex gap-1'><Image src='/SVG/Phone.svg' alt="" width={16} height={16}/>866-614-1670</Link>
              </button>
              <button className="font-medium px-3 py-2 rounded-full min-w-max text-[#253D84] border-2 border-[#253D84]">
                <Link href="tel:866-614-1670,,8041" className='font-bold'>ext. 8041</Link>
              </button>
            </div>
            <p>Once you are on the line, type the following numbers to reach the service you want:</p>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div class="min-h-max flex flex-row gap-3">
                <div className='flex items-center justify-center rounded-full border-2 border-[#333333] min-h-[40px] min-w-[40px] grow-0'>
                  <div className="font-medium text-[16px]">1</div>
                </div>
                <p className='pt-1'>Customer Service</p>
              </div>
              <div class="row-start-2 min-h-max flex flex-row gap-3">
                <div className='flex items-center justify-center rounded-full border-2 border-[#333333] min-h-[40px] min-w-[40px] grow-0'>
                  <div className="font-medium text-[16px]">2</div>
                </div>
                <p className='pt-1'>Tech Support</p>
              </div>
              <div class="min-h-max flex flex-row gap-3">
                <div className='flex items-center justify-center rounded-full border-2 border-[#333333] min-h-[40px] min-w-[40px] grow-0'>
                  <div className="font-medium text-[16px]">3</div>
                </div>
                <p className='pt-1'>Collections</p>
              </div>
              <div class="min-h-max flex flex-row gap-3">
                <div className='flex items-center justify-center rounded-full border-2 border-[#333333] min-h-[40px] min-w-[40px] grow-0'>
                  <div className="font-medium text-[16px]">4</div>
                </div>
                <p className='pt-1'>Compliance</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4 pb-20'>
          <h3 className='text-[#253D84] font-bold text-xl'>Send us a Message</h3>
          <div className='bg-white rounded-2xl flex flex-col gap-6 px-6 py-10 sm:px-10'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className='flex flex-col sm:flex-row gap-4'>
                <div className='flex flex-col gap-4 sm:flex-1'>
                  <p>Full name</p>
                  <input
                    className="p-4 border border-[#C2C2C2] rounded-md"
                    type="text"
                    name="fullName"
                    placeholder=""
                    required
                  />
                </div>
                <div className='flex flex-col gap-4 sm:flex-1'>
                  <p>Email address</p>
                  <input
                    className="p-4 border border-[#C2C2C2] rounded-md"
                    type="email"
                    name="email"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              
              <div className='flex flex-col gap-4'>
                <p>Subject</p>
                <input
                  className="p-4 border border-[#C2C2C2] rounded-md"
                  type="text"
                  name="subject"
                  placeholder=""
                  required
                />
              </div>
              <div className='flex flex-col gap-4'>
                <p>Message</p>
                <textarea
                  className="p-4 h-[205px] border border-[#C2C2C2] rounded-md"
                  name="message"
                  placeholder=""
                  required
                />
              </div>
              <button type="submit" className="self-center bg-[#52DB78] text-[#253D84] font-bold py-2 w-full sm:max-w-min sm:sm:px-6 sm:whitespace-nowrap rounded-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      

    </main>
  )
}