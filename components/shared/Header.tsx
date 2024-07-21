'use client'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Lottie from 'lottie-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import NavItems from './NavItems';
import eventLogo from '../animations/event.json';
import MobileNav from './MobileNav';



const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: eventLogo,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36 flex items-center">
          {/* <Image 
            src="/assets/images/logo.svg" width={128} height={38}
            alt="Evently logo" 
          /> */}
         
          <div className="size-14 ">
           <Lottie
              animationData={defaultOptions.animationData}
            />
            
          </div>
         
          
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
