import { Link } from "react-router-dom";
import { ArrowRight, Award, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Award Badge */}
            <div className="inline-flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 bg-primary/5">
                <Award className="h-4 w-4 mr-2 text-primary" />
                Leadership Award 2021
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Aligning{" "}
              <span className="text-primary">Human Capital</span>{" "}
              with Business Strategy
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Professional Excellence in Industrial Relations & Human Resource Management with over{" "}
              <span className="font-semibold text-foreground">29 years</span> of cross-functional expertise.
            </p>

            {/* Hook Quote */}
            <blockquote className="relative px-6 py-4 md:px-10 md:py-6 bg-muted rounded-lg border-l-4 border-primary animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <p className="text-lg md:text-xl italic text-foreground">
                "Transforming employee potential into substantive performance and contributions to business success."
              </p>
            </blockquote>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      </section>

      {/* Trust Markers Section */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Trusted by Industry Leaders
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                Partnered with Leading Organizations
              </h2>
            </div>

            {/* Client Logos Placeholder */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-8">
              <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-24 h-16 md:w-32 md:h-20 bg-muted rounded-lg flex items-center justify-center border border-border">
                  <Building2 className="h-8 w-8 text-muted-foreground" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Suzlon</span>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-24 h-16 md:w-32 md:h-20 bg-muted rounded-lg flex items-center justify-center border border-border">
                  <Building2 className="h-8 w-8 text-muted-foreground" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Welspun</span>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-24 h-16 md:w-32 md:h-20 bg-muted rounded-lg flex items-center justify-center border border-border">
                  <Building2 className="h-8 w-8 text-muted-foreground" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Mahatransco</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border mt-12">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">29+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">2000+</p>
                <p className="text-sm text-muted-foreground mt-1">Workforce Managed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground mt-1">Industries Served</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Organizations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              How I Can Help Your Organization
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic interventions designed to align your human capital with business objectives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Strategic */}
            <div className="group p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategic</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Vision-Mission-Value drafting and Organization Diagnostics to build a strong foundation.
              </p>
              <Link to="/services" className="text-primary text-sm font-medium hover:underline inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Talent */}
            <div className="group p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Talent</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Competency Mapping, Performance Appraisal Systems, and Interviewing Skills Workshops.
              </p>
              <Link to="/services" className="text-primary text-sm font-medium hover:underline inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Cultural */}
            <div className="group p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cultural</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Leadership Alignment, Employee Engagement Calendars, and Change Management.
              </p>
              <Link to="/services" className="text-primary text-sm font-medium hover:underline inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
