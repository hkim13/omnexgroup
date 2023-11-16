import Link from 'next/link';
import '@/globals.css'

const Images1 = () => {
  return (
    <div className='flex flex-auto gap-4'>

    {/* left two images */} 
        <div>
            <div style={{ display: 'flex',  justifyContent: 'flex-end', paddingBottom: '1rem',  flexShrink: 1 }}> 
                <div
                    style={{
                    width: '11.9375rem',
                    height: '19.139375rem',
                    layout:'responsive',
                    overflow: 'hidden',
                    borderRadius: '40px',
                    backgroundImage: 'url("/Webp/AdobeStock_280396247.webp")',
                    backgroundSize: '275%',
                    backgroundPosition: '70%',
                    backgroundRepeat: 'no-repeat',
                    }}
                >
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}> 
                <div
                style={{
                    width: '17.75rem',
                    height: '11.236875rem',
                    layout:'responsive',
                    overflow: 'hidden',
                    borderRadius: '40px',
                    backgroundImage: 'url("/Webp/AdobeStock_409017261.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: '0%',
                    backgroundRepeat: 'no-repeat',
                }}
                >
                </div>
            </div>
            </div>  

            {/* right two images */}   
            <div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', paddingBottom: '1rem', flexShrink: 1 }}> 
                <div
                style={{
                    width: '19.1875rem',
                    height: '14.305rem',
                    layout:'responsive',
                    overflow: 'hidden',
                    borderRadius: '40px',
                    backgroundImage: 'url("/Webp/B-AdobeStock_235833811.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: '50%',
                    backgroundRepeat: 'no-repeat',
                }}
                >
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}> 
                <div
                style={{
                    width: '25.5rem',
                    height: '16.065rem',
                    layout:'responsive',
                    overflow: 'hidden',
                    borderRadius: '40px',
                    backgroundImage: 'url("/Webp/AdobeStock_469533192.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: '0%',
                    backgroundRepeat: 'no-repeat',
                }}
                >
                </div>
            </div>
        </div>  

    </div>
  );
};

export default Images1;

