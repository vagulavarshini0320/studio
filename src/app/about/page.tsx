import Image from 'next/image';
import { Eye, Rocket, Zap, Users } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        
        <AnimatedSection className="text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Engineering Digital Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
            We are a collective of expert engineers and designers, committed to building robust and scalable digital products for the enterprise.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <AnimatedSection>
            <div className="flex justify-center">
              <Image
                src="/pr.webp"
                alt="Photo of the founder, Vishwa Raja"
                width={400}
                height={400}
                className="rounded-lg object-cover shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),_0_10px_10px_-5px_rgba(0,0,0,0.04)]"
                data-ai-hint="man portrait"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <h2 className="font-headline text-3xl font-bold mb-4">Our Genesis</h2>
             <p className="text-muted-foreground leading-relaxed mb-4">
              VV Software Developer Pvt Ltd, founded on 19 November 2025 by Vishwa Raja and led by CEO Vagulavarshini L, is a product-centric software firm.
            </p>
            <p className="text-muted-foreground leading-relaxed">
               We architect and deliver sophisticated digital products by leveraging AI, workflow automation, and powerful, scalable technologies. Our core competency lies in translating complex business requirements into high-performance, enterprise-grade software solutions.
            </p>
          </AnimatedSection>
        </div>

        <div className="text-center mb-20 bg-muted/30 py-20 rounded-xl">
          <h2 className="font-headline text-3xl font-bold mb-12">Our Core Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
            <AnimatedSection delay={100}>
              <Card className="animated-card h-full text-left bg-card border group relative">
                 <div className="glow-border absolute inset-0 bg-primary/20 rounded-lg blur-2xl"></div>
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Rocket className="w-6 h-6 text-primary"/>
                  </div>
                  <CardTitle className="font-headline text-xl">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We leverage emerging technologies to deliver next-generation, future-proof solutions.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card className="animated-card h-full text-left bg-card border group relative">
                 <div className="glow-border absolute inset-0 bg-primary/20 rounded-lg blur-2xl"></div>
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Zap className="w-6 h-6 text-primary"/>
                  </div>
                  <CardTitle className="font-headline text-xl">Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We are committed to the highest standards of quality and performance in every system we build.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
             <AnimatedSection delay={300}>
              <Card className="animated-card h-full text-left bg-card border group relative">
                 <div className="glow-border absolute inset-0 bg-primary/20 rounded-lg blur-2xl"></div>
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Users className="w-6 h-6 text-primary"/>
                  </div>
                  <CardTitle className="font-headline text-xl">Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our clients' strategic objectives are our own. We cultivate strong, collaborative technology partnerships.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
             <AnimatedSection delay={400}>
              <Card className="animated-card h-full text-left bg-card border group relative">
                 <div className="glow-border absolute inset-0 bg-primary/20 rounded-lg blur-2xl"></div>
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Eye className="w-6 h-6 text-primary"/>
                  </div>
                  <CardTitle className="font-headline text-xl">Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We maintain open communication and complete transparency throughout the entire development lifecycle.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
