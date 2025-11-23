"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
          <Code2 className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline">VV Software</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/contact">Get Quote</Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                     <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
                      <Code2 className="h-8 w-8 text-primary" />
                      <span className="text-xl font-bold font-headline">VV Software</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                      <X className="h-6 w-6" />
                       <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col gap-6 p-6 text-lg">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={cn(
                          'font-medium transition-colors hover:text-primary',
                           pathname === link.href ? 'text-primary' : 'text-foreground'
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                   <div className="mt-auto p-6">
                     <Button asChild className="w-full">
                        <Link href="/contact" onClick={closeMobileMenu}>Get Quote</Link>
                    </Button>
                   </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
