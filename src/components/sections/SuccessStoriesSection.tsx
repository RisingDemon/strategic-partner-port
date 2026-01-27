import { Building2, CheckCircle, ArrowRight, Search, FileCheck, Rocket, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";

const SuccessStoriesSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="success-stories" className="scroll-mt-16">
      {/* Hero Section */}
      <div className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Proven{" "}
              <span className="text-primary">Impact</span>{" "}
              Across Industries
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from strategic HR interventions that transformed organizations
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Corporate Achievements */}
      <div className="py-16 md:py-24">
        <div className="container">
          <AnimatedSection animation="fade-up" className="text-center space-y-4 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold">Corporate Achievements</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leadership roles that delivered measurable organizational impact
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Welspun */}
            <AnimatedSection animation="fade-right" delay={100} className="p-6 md:p-8 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Welspun BAPL (Sintex)</h4>
                  <p className="text-sm text-muted-foreground">Infrastructure & Manufacturing</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">M&A Due Diligence</p>
                    <p className="text-sm text-muted-foreground">
                      Successfully led HR due diligence during merger & acquisition processes, ensuring smooth integration.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">COVID-19 Manpower Rationalization</p>
                    <p className="text-sm text-muted-foreground">
                      Navigated workforce challenges during the pandemic while maintaining organizational stability and employee welfare.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Suzlon */}
            <AnimatedSection animation="fade-left" delay={200} className="p-6 md:p-8 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Suzlon Energy</h4>
                  <p className="text-sm text-muted-foreground">Renewable Energy</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Revamped PMS</p>
                    <p className="text-sm text-muted-foreground">
                      Redesigned Performance Management System for staff across India, improving clarity and fairness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Large Workforce Management</p>
                    <p className="text-sm text-muted-foreground">
                      Successfully managed HR operations for a workforce of 2,000+ employees across multiple locations.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Consulting Projects */}
      <div className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <AnimatedSection animation="fade-up" className="text-center space-y-4 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold">Recent Consulting Projects</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic HR interventions for growing organizations
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <AnimatedSection animation="fade-up" delay={100} className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Mahesh Patil & Co.</h4>
              <Badge variant="secondary" className="mb-3">Infrastructure</Badge>
              <p className="text-sm text-muted-foreground">
                Comprehensive HR strategy development and implementation for infrastructure growth.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200} className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">DBS Packaging</h4>
              <Badge variant="secondary" className="mb-3">Manufacturing</Badge>
              <p className="text-sm text-muted-foreground">
                Organizational restructuring and talent management system design.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300} className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Sumeet Trans Logistics</h4>
              <Badge variant="secondary" className="mb-3">Logistics</Badge>
              <p className="text-sm text-muted-foreground">
                HR process optimization and workforce capability building.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Engagement Methodology */}
      <div className="py-16 md:py-24">
        <div className="container">
          <AnimatedSection animation="fade-up" className="text-center space-y-4 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold">Engagement Methodology</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven approach to delivering successful HR interventions
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary via-primary to-primary" />

              {/* Step 1 */}
              <AnimatedSection animation="fade-up" delay={100} className="text-center relative">
                <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center mx-auto mb-4 relative z-10 hover:scale-110 transition-transform duration-300">
                  <Search className="h-10 w-10 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2">Understand & Explore</h4>
                <p className="text-sm text-muted-foreground">
                  Deep dive into organizational challenges, culture, and objectives
                </p>
              </AnimatedSection>

              {/* Step 2 */}
              <AnimatedSection animation="fade-up" delay={200} className="text-center relative">
                <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center mx-auto mb-4 relative z-10 hover:scale-110 transition-transform duration-300">
                  <FileCheck className="h-10 w-10 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2">Agree & Decide</h4>
                <p className="text-sm text-muted-foreground">
                  Collaborative planning and alignment on intervention strategies
                </p>
              </AnimatedSection>

              {/* Step 3 */}
              <AnimatedSection animation="fade-up" delay={300} className="text-center relative">
                <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center mx-auto mb-4 relative z-10 hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-10 w-10 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2">Implement</h4>
                <p className="text-sm text-muted-foreground">
                  Hands-on execution with minimal disruption to operations
                </p>
              </AnimatedSection>

              {/* Step 4 */}
              <AnimatedSection animation="fade-up" delay={400} className="text-center relative">
                <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center mx-auto mb-4 relative z-10 hover:scale-110 transition-transform duration-300">
                  <RefreshCw className="h-10 w-10 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2">Review</h4>
                <p className="text-sm text-muted-foreground">
                  Continuous improvement through feedback and outcome measurement
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24 bg-foreground text-background">
        <div className="container">
          <AnimatedSection animation="zoom-in" className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Your Success Story Starts Here
            </h3>
            <p className="text-background/70">
              Join the organizations that have transformed their HR practices and achieved remarkable results.
            </p>
            <Button size="lg" variant="secondary" onClick={scrollToContact}>
              Start Your Transformation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
