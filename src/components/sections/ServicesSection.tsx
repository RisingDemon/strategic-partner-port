import { Building2, Users, Heart, ArrowRight, Compass, Gauge, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedSection from "@/components/AnimatedSection";

const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="scroll-mt-16">
      {/* Hero Section */}
      <div className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2">
              Services & Interventions
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Strategic{" "}
              <span className="text-primary">HR Solutions</span>{" "}
              for Business Growth
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive interventions designed to transform your organization's human capital
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Core Framework */}
      <div className="py-16 md:py-24">
        <div className="container">
          <AnimatedSection animation="fade-up" className="text-center space-y-4 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold">Core Framework</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to organizational transformation
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Foundation */}
            <AnimatedSection animation="fade-up" delay={100} className="relative p-8 rounded-2xl border border-border bg-card text-center group hover:border-primary/50 hover:shadow-lg transition-all duration-500">
              <div className="absolute top-4 right-4 text-6xl font-bold text-muted/30 group-hover:text-primary/10 transition-colors">
                01
              </div>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Compass className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3">Foundation</h4>
              <p className="text-muted-foreground text-sm">
                Establishing the fundamental building blocks of organizational excellence through vision, values, and strategic alignment.
              </p>
            </AnimatedSection>

            {/* Gage */}
            <AnimatedSection animation="fade-up" delay={250} className="relative p-8 rounded-2xl border border-border bg-card text-center group hover:border-primary/50 hover:shadow-lg transition-all duration-500">
              <div className="absolute top-4 right-4 text-6xl font-bold text-muted/30 group-hover:text-primary/10 transition-colors">
                02
              </div>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Gauge className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3">Gage</h4>
              <p className="text-muted-foreground text-sm">
                Measuring and assessing organizational health, employee engagement, and performance metrics to identify opportunities.
              </p>
            </AnimatedSection>

            {/* Traverse */}
            <AnimatedSection animation="fade-up" delay={400} className="relative p-8 rounded-2xl border border-border bg-card text-center group hover:border-primary/50 hover:shadow-lg transition-all duration-500">
              <div className="absolute top-4 right-4 text-6xl font-bold text-muted/30 group-hover:text-primary/10 transition-colors">
                03
              </div>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3">Traverse</h4>
              <p className="text-muted-foreground text-sm">
                Navigating the journey of transformation with strategic interventions, change management, and sustainable growth.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Service Pillars */}
      <div className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <AnimatedSection animation="fade-up" className="text-center space-y-4 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold">Service Pillars</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized interventions tailored to your organization's unique needs
            </p>
          </AnimatedSection>

          <AnimatedSection animation="zoom-in" delay={200}>
            <Tabs defaultValue="strategic" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="strategic" className="text-sm md:text-base">
                  <Building2 className="h-4 w-4 mr-2 hidden sm:block" />
                  Strategic
                </TabsTrigger>
                <TabsTrigger value="talent" className="text-sm md:text-base">
                  <Users className="h-4 w-4 mr-2 hidden sm:block" />
                  Talent
                </TabsTrigger>
                <TabsTrigger value="cultural" className="text-sm md:text-base">
                  <Heart className="h-4 w-4 mr-2 hidden sm:block" />
                  Cultural
                </TabsTrigger>
              </TabsList>

              <TabsContent value="strategic" className="space-y-6">
                <div className="p-6 md:p-8 rounded-2xl border border-border bg-card">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Strategic Interventions</h4>
                      <p className="text-muted-foreground">
                        Building the foundation for organizational success through strategic planning and diagnostics.
                      </p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <h5 className="font-semibold mb-2">Vision-Mission-Value Drafting</h5>
                      <p className="text-sm text-muted-foreground">
                        Crafting compelling organizational narratives that align teams and drive purpose.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <h5 className="font-semibold mb-2">Organization Diagnostics</h5>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive assessment of organizational health and improvement opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="talent" className="space-y-6">
                <div className="p-6 md:p-8 rounded-2xl border border-border bg-card">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Talent Interventions</h4>
                      <p className="text-muted-foreground">
                        Developing and optimizing your most valuable asset—your people.
                      </p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <h5 className="font-semibold mb-2">Competency Mapping</h5>
                      <p className="text-sm text-muted-foreground">
                        Identifying and defining the skills needed for organizational success.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <h5 className="font-semibold mb-2">Performance Appraisal Systems</h5>
                      <p className="text-sm text-muted-foreground">
                        Designing fair and effective performance evaluation frameworks.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <h5 className="font-semibold mb-2">Interviewing Skills Workshops</h5>
                      <p className="text-sm text-muted-foreground">
                        Training hiring managers to identify and select top talent.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="cultural" className="space-y-6">
                <div className="p-6 md:p-8 rounded-2xl border border-border bg-card">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Cultural Interventions</h4>
                      <p className="text-muted-foreground">
                        Shaping the culture that drives engagement, performance, and retention.
                      </p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <h5 className="font-semibold mb-2">Leadership Alignment</h5>
                      <p className="text-sm text-muted-foreground">
                        Ensuring leadership teams are unified in vision and execution.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <h5 className="font-semibold mb-2">Employee Engagement Calendars</h5>
                      <p className="text-sm text-muted-foreground">
                        Strategic planning of initiatives that boost morale and connection.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <h5 className="font-semibold mb-2">Change Management</h5>
                      <p className="text-sm text-muted-foreground">
                        Guiding organizations through transitions with minimal disruption.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </AnimatedSection>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24">
        <div className="container">
          <AnimatedSection animation="zoom-in" className="max-w-3xl mx-auto text-center space-y-6 p-8 md:p-12 rounded-2xl bg-primary/5 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-muted-foreground">
              Let's discuss how these interventions can be tailored to address your specific challenges and objectives.
            </p>
            <Button size="lg" onClick={scrollToContact}>
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
