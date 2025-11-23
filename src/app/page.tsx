import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const founderImage = PlaceHolderImages.find(p => p.id === 'founder');
const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-[-1]">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-secondary/80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
                Building Smart Solutions for a Smarter Future
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
                We create high-quality software products that help businesses grow fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="relative flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-glow"></div>
                 {founderImage && (
                    <Image
                      src={founderImage.imageUrl}
                      alt={founderImage.description}
                      width={400}
                      height={400}
                      className="relative rounded-full object-cover w-full h-full border-4 border-background"
                      data-ai-hint={founderImage.imageHint}
                    />
                  )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founder Intro Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Meet Our Founder – Vishwa Raja</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A visionary developer building future-ready digital solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
