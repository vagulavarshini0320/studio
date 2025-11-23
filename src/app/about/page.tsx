import Image from 'next/image';
import { Eye, Rocket, Zap, Users } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const founderImage = PlaceHolderImages.find(p => p.id === 'founder');

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

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <AnimatedSection>
            {founderImage && (
              <Image
                src={founderImage.imageUrl}
                alt={founderImage.description}
                width={600}
                height={600}
                className="rounded-lg object-cover shadow-2xl w-full"
                data-ai-hint={founderImage.imageHint}
              />
            )}
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

        <div className="text-center mb-20">
          <h2 className="font-headline text-3xl font-bold mb-12">Our Core Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={100}>
              <Card className="h-full text-left bg-card border border-border/50">
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
              <Card className="h-full text-left bg-card border border-border/50">
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
              <Card className="h-full text-left bg-card border border-border/50">
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
              <Card className="h-full text-left bg-card border border-border/50">
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
