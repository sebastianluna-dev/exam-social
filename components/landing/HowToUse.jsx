import Image from 'next/image';
import { HomeBackground } from '../Icons';

export function HowToUse() {
  return (
    <div className="grid items-center justify-center mt-16 lg:mt-48">
      <div className="py-8 lg:py-0 bg-secondary-light sm:bg-transparent" style={{ gridArea: '1/1/2/2' }}>
        <HomeBackground />
      </div>
      <div style={{ gridArea: '1/1/2/2' }} className="h-96 sm:h-full grid sm:grid-cols-2 max-w-6xl w-full mx-auto gap-8">
        <div className="hidden sm:block relative w-4/5 mx-auto">
          <Image
            alt="man using computer"
            className="object-contain"
            src="/home-2.png"
            fill
          />
        </div>
        <div className="relative w-7/12 mx-auto h-full ">
          <Image
            alt="exam social muckup"
            className="object-contain"
            src="/phone.png"
            fill
          />
        </div>
      </div>
    </div>
  );
}
