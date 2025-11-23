import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from './data';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const includedFeatures = [
    'Cross-platform compatibility',
    'Scalable architecture',
    'Modern UI/UX design',
    'Post-launch support',
]

export default function ServicesPage() {
  return (
    <div className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            We offer a wide range of software development services to help your business succeed in the digital world.
          </p>
        </AnimatedSection>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
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
                  <p className="text-3xl font-bold text-foreground font-headline">{service.price}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="relative rounded-2xl bg-muted p-8 md:p-16 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-headline text-3xl font-bold mb-4">What's included in every project?</h2>
                <p className="text-muted-foreground mb-6">
                  We ensure every project we undertake is built on a foundation of quality, scalability, and excellent design.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="bg-secondary/10 p-1 rounded-full">
                        <Check className="h-4 w-4 text-secondary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start p-8 bg-background rounded-lg shadow-lg">
                <h3 className="font-headline text-2xl font-bold mb-4">Ready to build?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's turn your idea into a reality. Contact us today for a free, no-obligation quote.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
