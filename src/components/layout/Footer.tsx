import Link from 'next/link';
import { CircuitBoard, Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="flex flex-col gap-4 md:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <CircuitBoard className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">VV Software Developer</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Engineering enterprise-grade software solutions for a complex world.
            </p>
            <div className="flex gap-1 mt-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Twitter className="w-5 h-5"/></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Github className="w-5 h-5"/></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Linkedin className="w-5 h-5"/></Link>
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-headline text-lg font-semibold mb-4">Company</h3>
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
          
          <div className="md:col-span-3">
             <h3 className="font-headline text-lg font-semibold mb-4">Contact</h3>
             <div className="space-y-3 text-sm">
                <a href="mailto:vishwarajaofficial@gmail.com" className="text-muted-foreground block hover:text-primary transition-colors">vishwarajaofficial@gmail.com</a>
                <a href="tel:893920811" className="text-muted-foreground block hover:text-primary transition-colors">893920811</a>
             </div>
          </div>

           <div className="md:col-span-3">
             <h3 className="font-headline text-lg font-semibold mb-4">Legal</h3>
             <ul className="space-y-2">
                <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
                </li>
                 <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
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
