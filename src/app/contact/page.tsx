import { Mail, Phone } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);


export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Engage with our solution architects to discuss your project requirements or to schedule a demo.
          </p>
        </AnimatedSection>
        
        <div className="flex justify-center">
          <AnimatedSection delay={200} className="lg:col-span-2 space-y-8">
            <div className="animated-card relative p-8 rounded-lg bg-card border group">
              <div className="glow-border absolute inset-0 bg-primary/20 rounded-lg blur-2xl"></div>
              <h2 className="font-headline text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                  <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg mt-1 border border-primary/20">
                          <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                          <h3 className="font-semibold text-lg">Email</h3>
                          <a href="mailto:vishwarajaofficial@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">vishwarajaofficial@gmail.com</a>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg mt-1 border border-primary/20">
                          <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                          <h3 className="font-semibold text-lg">Phone</h3>
                          <a href="tel:893920811" className="text-muted-foreground hover:text-primary transition-colors">893920811</a>
                      </div>
                  </div>
                   <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg mt-1 border border-primary/20">
                          <WhatsAppIcon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                          <h3 className="font-semibold text-lg">WhatsApp</h3>
                          <a href="https://wa.me/91893920811" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Connect on WhatsApp</a>
                      </div>
                  </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
