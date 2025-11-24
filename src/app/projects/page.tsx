import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from './data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ProjectsPage() {
  return (
    <div className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Our Portfolio
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            A selection of enterprise-grade projects that demonstrate our commitment to quality, performance, and innovation.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
            return (
              <AnimatedSection key={project.title} delay={index * 150}>
                <Card className="animated-card h-full bg-card border group relative overflow-hidden">
                  <div className="glow-border absolute inset-0 bg-primary/20 rounded-lg blur-2xl"></div>
                  {projectImage && (
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={projectImage.imageHint}
                    />
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 h-20">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}
