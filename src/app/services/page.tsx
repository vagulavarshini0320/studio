import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from './data';

export default function ServicesPage() {
  return (
    <div className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-center mb-4">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            We offer a wide range of services to help your business succeed in the digital world.
          </p>
        </AnimatedSection>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <Card className="glass-card h-full overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                       <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-primary font-headline">{service.price}</p>
                  <p className="text-sm text-muted-foreground">Starting from</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
