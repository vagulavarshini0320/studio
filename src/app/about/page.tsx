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
            About VV Software
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
            We are a passionate team of developers and designers dedicated to building exceptional digital products.
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
            <h2 className="font-headline text-3xl font-bold mb-4">Pioneering Digital Excellence</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              VV Software Developer Pvt Ltd is a product-based software company started on 19 November 2025. It was founded by Vishwa Raja and is led by CEO Vagulavarshini L.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We specialize in crafting modern digital products by integrating AI, automation, and powerful, scalable technologies. Our goal is to translate complex challenges into simple, elegant, and effective software solutions.
            </p>
          </AnimatedSection>
        </div>

        <div className="text-center mb-20">
          <h2 className="font-headline text-3xl font-bold mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={100}>
              <Card className="h-full text-left">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Rocket className="w-6 h-6 text-primary"/>
                  </div>
                  <CardTitle className="font-headline text-xl">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We constantly explore new technologies to deliver cutting-edge solutions.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card className="h-full text-left">
                <CardHeader>
                  <div className="bg-green-500/10 p-3 rounded-lg w-fit mb-4">
                    <Zap className="w-6 h-6 text-green-500"/>
                  </div>
                  <CardTitle className="font-headline text-xl">Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We are committed to the highest standards of quality in everything we create.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
             <AnimatedSection delay={300}>
              <Card className="h-full text-left">
                <CardHeader>
                  <div className="bg-yellow-500/10 p-3 rounded-lg w-fit mb-4">
                    <Users className="w-6 h-6 text-yellow-500"/>
                  </div>
                  <CardTitle className="font-headline text-xl">Client Success</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our clients' success is our success. We build strong, collaborative partnerships.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
             <AnimatedSection delay={400}>
              <Card className="h-full text-left">
                <CardHeader>
                  <div className="bg-red-500/10 p-3 rounded-lg w-fit mb-4">
                    <Eye className="w-6 h-6 text-red-500"/>
                  </div>
                  <CardTitle className="font-headline text-xl">Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We believe in open communication and full transparency throughout the development process.
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
