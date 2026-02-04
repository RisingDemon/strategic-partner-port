import { Building2, Users, Heart, ArrowRight, Compass, Gauge, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2">
              Services & Interventions
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Strategic{" "}
              <span className="text-primary">HR Solutions</span>{" "}
              for Business Growth
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive interventions designed to transform your organization's human capital
            </p>
          </div>
        </div>
      </section>

      {/* Core Framework */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Core Framework</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to organizational transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Foundation */}
            <div className="relative p-8 rounded-2xl border border-border bg-card text-center group hover:border-primary/50 transition-all duration-300">
              <div className="absolute top-4 right-4 text-6xl font-bold text-muted/30 group-hover:text-primary/10 transition-colors">
                01
              </div>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Compass className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Foundation</h3>
              <p className="text-muted-foreground text-sm">
                To create a Robust Human Resource foundation which  
will satisfy the requirements of the business.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-primary" />
            </div>
            <div className="md:hidden flex justify-center py-4">
              <ArrowRight className="h-6 w-6 text-primary rotate-90" />
            </div>

            {/* Gage */}
            <div className="relative p-8 rounded-2xl border border-border bg-card text-center group hover:border-primary/50 transition-all duration-300 md:col-start-2 md:col-span-1">
              <div className="absolute top-4 right-4 text-6xl font-bold text-muted/30 group-hover:text-primary/10 transition-colors">
                02
              </div>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Gauge className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gage</h3>
              <p className="text-muted-foreground text-sm">
                A preemptive way to align the business growth.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-primary" />
            </div>
            <div className="md:hidden flex justify-center py-4">
              <ArrowRight className="h-6 w-6 text-primary rotate-90" />
            </div>

            {/* Traverse */}
            <div className="relative p-8 rounded-2xl border border-border bg-card text-center group hover:border-primary/50 transition-all duration-300 md:col-start-3 md:col-span-1">
              <div className="absolute top-4 right-4 text-6xl font-bold text-muted/30 group-hover:text-primary/10 transition-colors">
                03
              </div>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Traverse</h3>
              <p className="text-muted-foreground text-sm">
                Develop HR practices to drive the business to lead the Industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Service Pillars</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized interventions tailored to your organization's unique needs
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid w-full grid-cols-3 mb-8">
              <div className="text-sm md:text-base px-4 py-2 rounded-md font-medium text-muted-foreground inline-flex items-center justify-center cursor-default">
                <Building2 className="h-4 w-4 mr-2 hidden sm:block" />
                Strategic 3
              </div>
              <div className="text-sm md:text-base px-4 py-2 rounded-md font-medium text-muted-foreground inline-flex items-center justify-center cursor-default">
                <Users className="h-4 w-4 mr-2 hidden sm:block" />
                Talent
              </div>
              <div className="text-sm md:text-base px-4 py-2 rounded-md font-medium text-muted-foreground inline-flex items-center justify-center cursor-default">
                <Heart className="h-4 w-4 mr-2 hidden sm:block" />
                Cultural
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 md:p-8 rounded-2xl border border-border bg-card">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Strategic Interventions</h3>
                    <p className="text-muted-foreground">
                      Building the foundation for organizational success through strategic planning and diagnostics.
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-semibold mb-2">Vision-Mission-Value Drafting</h4>
                    <p className="text-sm text-muted-foreground">
                      Crafting compelling organizational narratives that align teams and drive purpose.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-semibold mb-2">Organization Diagnostics</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive assessment of organizational health and improvement opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 md:p-8 rounded-2xl border border-border bg-card">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Talent Interventions</h3>
                    <p className="text-muted-foreground">
                      Developing and optimizing your most valuable asset—your people.
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-semibold mb-2">Competency Mapping</h4>
                    <p className="text-sm text-muted-foreground">
                      Identifying and defining the skills needed for organizational success.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-semibold mb-2">Performance Appraisal Systems</h4>
                    <p className="text-sm text-muted-foreground">
                      Designing fair and effective performance evaluation frameworks.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-semibold mb-2">Interviewing Skills Workshops</h4>
                    <p className="text-sm text-muted-foreground">
                      Training hiring managers to identify and select top talent.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 md:p-8 rounded-2xl border border-border bg-card">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Cultural Interventions</h3>
                    <p className="text-muted-foreground">
                      Shaping the culture that drives engagement, performance, and retention.
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-semibold mb-2">Leadership Alignment</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensuring leadership teams are unified in vision and execution.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-semibold mb-2">Employee Engagement Calendars</h4>
                    <p className="text-sm text-muted-foreground">
                      Strategic planning of initiatives that boost morale and connection.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-semibold mb-2">Change Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Guiding organizations through transitions with minimal disruption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-8 md:p-12 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-muted-foreground">
              Let's discuss how these interventions can be tailored to address your specific challenges and objectives.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
