import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '../Icons';
import { NavMobile } from './NavMobile';

export function Header() {
  const { data: session } = useSession();
  return (
    <div className="px-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <div className="hidden lg:block">
            <Logo />
          </div>
          <Image
            alt="exam social logo"
            src="/Isotype.png"
            width={80}
            height={80}
          />
        </div>
        <nav className="hidden lg:flex gap-6 text-lg">
          <Link href="/home">
            <button className="h-full" type="button">Home</button>
          </Link>
          <Link href="/contact">
            <button className="h-full" type="button">Contact</button>
          </Link>
          <Link href="/about-us">
            <button className="h-full" type="button">About us</button>
          </Link>
          {
            !session && (
            <button onClick={signIn} className="bg-primary hover:bg-quaternary hover:text-white duration-200 px-3 py-2 shadow-xl rounded-lg" type="button">
              Sign in
            </button>
            )
          }
          {
            session && (
              <>
                <Image
                  alt={session.user.name}
                  src={session.user.image}
                  width={100}
                  height={100}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <button onClick={signOut} type="button">
                  Logout
                </button>
              </>
            )
          }
        </nav>

      </div>
      <NavMobile />
    </div>
  );
}
