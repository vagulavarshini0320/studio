import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from './ContactForm';

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
        
        <div className="grid lg:grid-cols-5 gap-12">
          <AnimatedSection className="lg:col-span-3">
            <div className="p-8 rounded-lg bg-card border">
              <h2 className="font-headline text-3xl font-bold mb-6">Submit an Inquiry</h2>
              <ContactForm />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} className="lg:col-span-2 space-y-8">
            <h2 className="font-headline text-3xl font-bold">Contact Information</h2>
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
                        <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Headquarters</h3>
                        <p className="text-muted-foreground">
                            123 Tech Park, Silicon Valley,<br/>
                            Chennai, India
                        </p>
                    </div>
                </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
