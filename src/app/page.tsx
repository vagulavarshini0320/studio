import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services } from './services/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
const founderImage = PlaceHolderImages.find(p => p.id === 'founder');


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
          <div className="absolute inset-0 bg-background/80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <AnimatedSection className="flex flex-col items-center">
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
                Building Smart Solutions for a Smarter Future
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                We create high-quality software products that help businesses grow fast by leveraging AI, automation, and modern technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              From mobile apps to enterprise software, we provide a wide spectrum of development services.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <Card className="h-full overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-col items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                       <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Starts from</p>
                  <p className="text-2xl font-bold text-foreground font-headline">{service.price}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              {founderImage && (
                <Image
                  src={founderImage.imageUrl}
                  alt={founderImage.description}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover shadow-lg w-full"
                  data-ai-hint={founderImage.imageHint}
                />
              )}
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <h2 className="font-headline text-3xl font-bold mb-4">Meet Our Founder</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded by Vishwa Raja, a visionary developer with a passion for building future-ready digital solutions. Our mission is to empower businesses with innovative and reliable software.
              </p>
              <Button asChild variant="link" className="p-0 h-auto">
                <Link href="/about">Learn more about our story <ArrowRight className="ml-2" /></Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Have a project in mind?</h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Let's talk about how we can help you achieve your goals. Contact us for a free consultation.
            </p>
            <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get in Touch</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
