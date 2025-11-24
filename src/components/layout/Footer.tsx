import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo.png" 
                alt="VV Software Developer Logo"
                width={60} 
                height={60}
                className="rounded-sm"
                data-ai-hint="W logo"
              />
              <span className="text-lg font-bold font-headline">VV Software Developer</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Engineering enterprise-grade software solutions for a complex world.
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="font-headline text-base font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-3">
             <h3 className="font-headline text-base font-semibold mb-4">Contact</h3>
             <div className="space-y-3 text-sm">
                <a href="mailto:vishwarajaofficial@gmail.com" className="text-muted-foreground block hover:text-foreground transition-colors break-all">vishwarajaofficial@gmail.com</a>
                <a href="tel:893920811" className="text-muted-foreground block hover:text-foreground transition-colors">893920811</a>
             </div>
          </div>

           <div className="lg:col-span-3">
             <h3 className="font-headline text-base font-semibold mb-4">Legal</h3>
             <ul className="space-y-2">
                <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
                </li>
                 <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
                </li>
             </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VV Software Developer Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
