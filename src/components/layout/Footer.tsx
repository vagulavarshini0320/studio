import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="footer-gradient text-primary-foreground border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="flex flex-col gap-4 md:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/static/media/logo.png" 
                alt="VV Software Developer Logo"
                width={40} 
                height={40}
                className="rounded-sm"
                data-ai-hint="W logo"
              />
              <span className="text-xl font-bold font-headline">VV Software Developer</span>
            </Link>
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              Engineering enterprise-grade software solutions for a complex world.
            </p>
            <div className="flex gap-1 mt-2">
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-white hover:bg-white/10" asChild>
                <Link href="#"><Twitter className="w-5 h-5"/></Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-white hover:bg-white/10" asChild>
                <Link href="#"><Github className="w-5 h-5"/></Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-white hover:bg-white/10" asChild>
                <Link href="#"><Linkedin className="w-5 h-5"/></Link>
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-headline text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-3">
             <h3 className="font-headline text-lg font-semibold mb-4">Contact</h3>
             <div className="space-y-3 text-sm">
                <a href="mailto:vishwarajaofficial@gmail.com" className="text-primary-foreground/80 block hover:text-white transition-colors">vishwarajaofficial@gmail.com</a>
                <a href="tel:893920811" className="text-primary-foreground/80 block hover:text-white transition-colors">893920811</a>
             </div>
          </div>

           <div className="md:col-span-3">
             <h3 className="font-headline text-lg font-semibold mb-4">Legal</h3>
             <ul className="space-y-2">
                <li>
                    <Link href="#" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">Privacy Policy</Link>
                </li>
                 <li>
                    <Link href="#" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">Terms of Service</Link>
                </li>
             </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-primary-foreground/80">
          <p>© {new Date().getFullYear()} VV Software Developer Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
