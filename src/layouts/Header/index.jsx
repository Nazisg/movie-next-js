'use client'; // This directive makes the component a Client Component

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import PlayIcon from '@/assets/icons/play.svg'
const Header = () => {
  const activeSegment = useSelectedLayoutSegment();

  const navItems = [
    { name: 'Movies', href: '/' },
    { name: 'Series', href: '/series' },
    { name: 'Kids', href: '/kids' },
  ];

  return (
    <header className="flex justify-between items-center text-xl py-6">
      <Link href="/" className="flex gap-2 items-center">
        <PlayIcon className="w-7 h-7 fill-white"/>
        NETFILMS
      </Link>
      <nav className="flex gap-5">
        {navItems.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className={activeSegment === href.slice(1) ? 'text-red-500' : ''}
          >
            {name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
