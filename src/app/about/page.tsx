import Image from 'next/image';
import { Eye, Rocket } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const founderImage = PlaceHolderImages.find(p => p.id === 'founder');

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        
        <AnimatedSection>
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-center mb-12">
            About VV Software
          </h1>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <AnimatedSection>
            {founderImage && (
              <Image
                src={founderImage.imageUrl}
                alt={founderImage.description}
                width={500}
                height={500}
                className="rounded-xl object-cover shadow-2xl"
                data-ai-hint={founderImage.imageHint}
              />
            )}
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <h2 className="font-headline text-3xl font-bold mb-4">Pioneering Digital Excellence</h2>
            <p className="text-muted-foreground leading-relaxed">
              VV Software Developer Pvt Ltd is a product-based software company started on 19 November 2025, founded by Vishwa Raja, and led by CEO Vagulavarshini L. We build modern digital products with AI, automation, and powerful technology.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection delay={300}>
            <Card className="glass-card h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Rocket className="w-8 h-8 text-primary"/>
                  <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower businesses with innovative and reliable software solutions that drive growth, efficiency, and digital transformation.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <Card className="glass-card h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Eye className="w-8 h-8 text-primary"/>
                  <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be a globally recognized leader in software development, known for our commitment to quality, cutting-edge technology, and client success.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
