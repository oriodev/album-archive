import React from 'react';
import { ModeToggle } from '../ui/toggle-mode';
import { Separator } from '../ui/separator';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center space-x-5 mt-10">
        <Link href="/">
          <h1 className="font-black text-xl">Album Archive</h1>
        </Link>

        <ModeToggle />
      </div>
    </>
  );
};

export default Navbar;
