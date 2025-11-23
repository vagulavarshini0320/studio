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
    <footer className="bg-muted">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="flex flex-col gap-4 md:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">VV Software</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building Smart Solutions for a Smarter Future.
            </p>
            <div className="flex gap-2 mt-2">
              <Link href="#" className="p-2 rounded-md text-muted-foreground hover:bg-primary/10 hover:text-primary"><Twitter className="w-5 h-5"/></Link>
              <Link href="#" className="p-2 rounded-md text-muted-foreground hover:bg-primary/10 hover:text-primary"><Github className="w-5 h-5"/></Link>
              <Link href="#" className="p-2 rounded-md text-muted-foreground hover:bg-primary/10 hover:text-primary"><Linkedin className="w-5 h-5"/></Link>
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
             <div className="space-y-3 text-sm text-muted-foreground">
                <p><a href="mailto:vishwarajaofficial@gmail.com" className="hover:text-primary">vishwarajaofficial@gmail.com</a></p>
                <p><a href="tel:893920811" className="hover:text-primary">893920811</a></p>
             </div>
          </div>

           <div className="md:col-span-3">
             <h3 className="font-headline text-lg font-semibold mb-4">Legal</h3>
             <ul className="space-y-2">
                <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
                </li>
                 <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
                </li>
             </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VV Software Developer Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
