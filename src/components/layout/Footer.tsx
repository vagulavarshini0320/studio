import Link from 'next/link';
import { Code2, Github, Twitter, Linkedin } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">VV Software</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building Smart Solutions for a Smarter Future.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Github /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
             <h3 className="font-headline text-lg font-semibold mb-4">Contact Us</h3>
             <div className="space-y-2 text-sm text-muted-foreground">
                <p>Email: <a href="mailto:vishwarajaofficial@gmail.com" className="hover:text-primary">vishwarajaofficial@gmail.com</a></p>
                <p>Phone: <a href="tel:893920811" className="hover:text-primary">893920811</a></p>
             </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© 2025 VV Software Developer Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
