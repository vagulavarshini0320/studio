import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services } from './services/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
const founderImage = PlaceHolderImages.find(p => p.id === 'founder');

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-[-1] bg-grid-pattern">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover opacity-5"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <AnimatedSection className="flex flex-col items-center">
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                Enterprise Software Solutions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                We engineer high-performance software products that accelerate business growth through AI, automation, and robust, scalable technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Request a Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">Core Competencies</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              From mission-critical enterprise systems to innovative mobile applications, we provide a complete spectrum of development services.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <Card className="h-full bg-card border border-border/50 hover:border-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary transition-colors duration-300">
                       <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <CardTitle className="font-headline text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                   <p className="text-sm text-muted-foreground">Robust solutions for modern enterprises.</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              {founderImage && (
                <Image
                  src={founderImage.imageUrl}
                  alt={founderImage.description}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover w-full shadow-2xl"
                  data-ai-hint={founderImage.imageHint}
                />
              )}
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <h2 className="font-headline text-3xl font-bold mb-4">Engineered for Excellence</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded by Vishwa Raja, VV Software is dedicated to architecting future-proof digital infrastructures. Our mission is to empower enterprises with innovative, reliable, and scalable software solutions that drive measurable results.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary" /> Scalable Architectures</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary" /> AI & Automation Integration</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary" /> Secure & Compliant Systems</li>
              </ul>
              <Button asChild variant="link" className="p-0 h-auto text-base">
                <Link href="/about">Discover our methodology <ArrowRight className="ml-2" /></Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <div className="bg-card p-8 md:p-12 rounded-xl border border-border/50">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Ready to Architect Your Future?</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Let's discuss how our technological expertise can align with your strategic objectives. Schedule a complimentary consultation with our solutions architects.
              </p>
              <Button size="lg" asChild>
                  <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
