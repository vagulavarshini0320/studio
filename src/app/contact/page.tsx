import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ContactForm from './ContactForm';

const mapImage = PlaceHolderImages.find(p => p.id === 'map');

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-center mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            We'd love to hear from you. Let's build something amazing together.
          </p>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="p-8 rounded-lg glass-card">
              <ContactForm />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} className="space-y-8">
            <div className="space-y-4">
                <h3 className="font-headline text-2xl font-semibold">Contact Information</h3>
                <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <a href="mailto:vishwarajaofficial@gmail.com" className="hover:text-primary">vishwarajaofficial@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <a href="tel:893920811" className="hover:text-primary">893920811</a>
                    </div>
                </div>
            </div>
            {mapImage && (
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={mapImage.imageUrl}
                  alt={mapImage.description}
                  width={800}
                  height={400}
                  className="w-full object-cover"
                  data-ai-hint={mapImage.imageHint}
                />
              </div>
            )}
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
