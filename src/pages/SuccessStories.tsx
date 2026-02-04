import { Building2, CheckCircle, ArrowRight, Search, FileCheck, Rocket, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SuccessStories = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2">
              Success Stories
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Proven{" "}
              <span className="text-primary">Impact</span>{" "}
              Across Industries
            </h1>
            <p className="text-lg text-muted-foreground">
              Real results from strategic HR interventions that transformed organizations
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Achievements */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Corporate Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leadership roles that delivered measurable organizational impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Welspun */}
            <div className="p-6 md:p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Welspun BAPL (Sintex)</h3>
                  <p className="text-sm text-muted-foreground">Manufacturing</p>
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
            </div>

            {/* Suzlon */}
            <div className="p-6 md:p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Suzlon Energy</h3>
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
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Projects */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Recent Consulting Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic HR interventions for growing organizations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Mahesh Patil & Co.</h3>
              <Badge variant="secondary" className="mb-3">Infrastructure</Badge>
              <p className="text-sm text-muted-foreground">
                Comprehensive HR strategy development and implementation for infrastructure growth.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">DBS Packaging</h3>
              <Badge variant="secondary" className="mb-3">Manufacturing</Badge>
              <p className="text-sm text-muted-foreground">
                Organizational restructuring and talent management system design.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Sumeet Trans Logistics</h3>
              <Badge variant="secondary" className="mb-3">Logistics</Badge>
              <p className="text-sm text-muted-foreground">
                HR process optimization and workforce capability building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Methodology */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Engagement Methodology</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven approach to delivering successful HR interventions
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary via-primary to-primary" />

              {/* Step 1 */}
              <div className="text-center relative">
                <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Search className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Understand & Explore</h3>
                <p className="text-sm text-muted-foreground">
                  Deep dive into organizational challenges, culture, and objectives
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center relative">
                <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center mx-auto mb-4 relative z-10">
                  <FileCheck className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Agree & Decide</h3>
                <p className="text-sm text-muted-foreground">
                  Collaborative planning and alignment on intervention strategies
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center relative">
                <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Rocket className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Implement</h3>
                <p className="text-sm text-muted-foreground">
                  Hands-on execution with minimal disruption to operations
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center relative">
                <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center mx-auto mb-4 relative z-10">
                  <RefreshCw className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Review</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous improvement through feedback and outcome measurement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-background/70">
              Your Success Story Starts Here
            </h2>
            <p className="text-background/70">
              Join the organizations that have transformed their HR practices and achieved remarkable results.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Start Your Transformation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
