import Image from 'next/image';
import Link from 'next/link';
import {
  FooterBackground,
  Logo,
  FacebookIcon,
  InstagramIcon,
} from '../Icons';

export function Footer() {
  return (
    <div className="grid items-end mt-24 lg:mt-48">
      <div className="hidden lg:block" style={{ gridArea: '1/1/2/2' }}>
        <FooterBackground />
      </div>
      <div className="px-4 lg:bg-transparent bg-secondary-light" style={{ gridArea: '1/1/2/2' }}>
        <div className="grid lg:grid-cols-3 lg:max-w-6xl mx-auto self-end gap-8 py-12 lg:pt-0 lg:pb-12 xl:pb-24 max-w-md">
          <div>
            <div className="flex justify-center lg:justify-start items-center">
              <Logo />
              <Image
                alt="exam social logo"
                src="/Isotype.png"
                width={80}
                height={80}
              />
            </div>
            <p className="text-xl font-light text-center lg:text-start">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Nulla laoreet lacus nec volutpat
              gravida.
            </p>
          </div>
          <div>
            <nav className="grid justify-center text-center gap-4 text-lg">
              <Link href="/home">
                <button className="h-full" type="button">Home</button>
              </Link>
              <Link href="/contact">
                <button className="h-full" type="button">Contact</button>
              </Link>
              <Link href="/about-us">
                <button className="h-full" type="button">About us</button>
              </Link>
              <div className="flex justify-center items-center gap-4">
                <a href="http://www.facebook.com">
                  <button className="h-full" type="button">
                    <FacebookIcon />
                  </button>
                </a>
                <a href="http://www.instagram.com">
                  <button className="h-full" type="button">
                    <InstagramIcon />
                  </button>
                </a>
              </div>
            </nav>
          </div>
          <div className="flex flex-col justify-end items-stretch">
            <p className="text-xl font-medium mb-4">
              Give us your email to be updated
            </p>
            <div
              style={{ gridTemplateColumns: '1fr 100px' }}
              className="grid bg-white items-center border-styles rounded-full pl-3 p-1 gap-1"
            >
              <input className="focus:outline-none" type="text" placeholder="username@email.com" />
              <button className="hover:bg-tertiary duration-200 px-3 py-2 border-styles rounded-full text-lg bg-primary" type="button">
                Suscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
