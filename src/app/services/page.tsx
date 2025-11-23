import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from './data';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const includedFeatures = [
    'Enterprise-Grade Security',
    'Scalable Cloud Architecture',
    'CI/CD & DevOps Integration',
    'Dedicated Project Management',
    'Comprehensive QA & Testing',
    'Post-Launch SLA',
]

export default function ServicesPage() {
  return (
    <div className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Our Service Offerings
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            We provide a comprehensive suite of software engineering services to build, scale, and maintain your digital infrastructure.
          </p>
        </AnimatedSection>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
               <Card className="animated-card h-full bg-card border group">
                 <div className="glow-border absolute inset-0 bg-primary/20 rounded-lg blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <CardHeader>
                  <div className="flex flex-col items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary transition-colors duration-300">
                       <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
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
          <div className="relative rounded-xl bg-muted/30 p-8 md:p-16 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-headline text-3xl font-bold mb-4">Standard Inclusions</h2>
                <p className="text-muted-foreground mb-6">
                  Every project is built on a foundation of quality, scalability, and robust engineering principles to ensure long-term success and maintainability.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="bg-primary/10 p-1 rounded-full border border-primary/20">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start p-8 bg-background rounded-lg shadow-lg border">
                <h3 className="font-headline text-2xl font-bold mb-4">Ready to build?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's transform your vision into a high-performance reality. Contact us today for a detailed, no-obligation project proposal.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">Request a Proposal</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
