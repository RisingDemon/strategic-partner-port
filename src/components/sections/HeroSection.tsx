import { ArrowRight, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import suzlonLogo from "@/assets/suzlon.webp";
import welspunLogo from "@/assets/welspun.png";
import hranexiLogo from "@/assets/hranexi.jpg";
import CountUp from '@/components/CountUp';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="scroll-mt-16">
      {/* Hero Section */}
      <div className="relative py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Award Badge */}
            <AnimatedSection animation="fade-down" delay={100}>
              <div className="inline-flex items-center gap-2">
                <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 bg-primary/5">
                  <Award className="h-4 w-4 mr-2 text-primary" />
                  Leadership Award 2021
                </Badge>
              </div>
            </AnimatedSection>

            {/* Headline */}
            <AnimatedSection animation="fade-up" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Aligning{" "}
                <span className="text-primary">Human Capital</span>{" "}
                with Business Strategy
              </h1>
            </AnimatedSection>

            {/* Sub-headline */}
            <AnimatedSection animation="fade-up" delay={300}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional Excellence in Industrial Relations & Human Resource Management with over{" "}
                <span className="font-semibold text-foreground">29 years</span> of cross-functional expertise.
              </p>
            </AnimatedSection>

            {/* Hook Quote */}
            <AnimatedSection animation="zoom-in" delay={400}>
              <blockquote className="relative px-6 py-4 md:px-10 md:py-6 bg-muted rounded-lg border-l-4 border-primary">
                <p className="text-lg md:text-xl italic text-foreground">
                  "Transforming employee potential into substantive performance and contributions to business success."
                </p>
              </blockquote>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation="fade-up" delay={500}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" className="w-full sm:w-auto" onClick={scrollToContact}>
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={scrollToServices}>
                  Explore Services
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      </div>

      {/* Trust Markers Section */}
      <div className="py-16 md:py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-8">
            <AnimatedSection animation="fade-up">
              <div className="space-y-2">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Trusted by Industry Leaders
                </p>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Partnered with Leading Organizations
                </h2>
              </div>
            </AnimatedSection>

            {/* Client Logos */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-8">
              <AnimatedSection animation="fade-up" delay={100} className="opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105">
                <div className="w-32 h-16 md:w-40 md:h-20 bg-white rounded-lg flex items-center justify-center p-3 border border-border shadow-sm">
                  <img src={suzlonLogo} alt="Suzlon" className="max-w-full max-h-full object-contain" />
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200} className="opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105">
                <div className="w-32 h-16 md:w-40 md:h-20 bg-white rounded-lg flex items-center justify-center p-3 border border-border shadow-sm">
                  <img src={welspunLogo} alt="Welspun" className="max-w-full max-h-full object-contain" />
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={300} className="opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105">
                <div className="w-32 h-16 md:w-40 md:h-20 bg-white rounded-lg flex items-center justify-center p-3 border border-border shadow-sm">
                  <img src={hranexiLogo} alt="hranexi" className="max-w-full max-h-full object-contain" />
                </div>
              </AnimatedSection>
            </div>

            {/* Stats */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border mt-12">
                <div className="text-center group">
                  <p className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                    <CountUp end={29} suffix="+" duration={1500} />
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div className="text-center group">
                  <p className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                    <CountUp end={2000} suffix="+" duration={1700} />
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Workforce Managed</p>
                </div>
                <div className="text-center group">
                  <p className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                    <CountUp end={15} suffix="+" duration={1500} />
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Industries Served</p>
                </div>
                <div className="text-center group">
                  <p className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                    <CountUp end={7} suffix="+" duration={1200} />
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Organizations</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Quick Services Preview */}
      <div className="py-16 md:py-24">
        <div className="container">
          <AnimatedSection animation="fade-up" className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              How I Can Help Your Organization
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic interventions designed to align your human capital with business objectives
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Strategic */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="group p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Strategic</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Vision-Mission-Value drafting and Organization Diagnostics to build a strong foundation.
                </p>
                <button onClick={scrollToServices} className="text-primary text-sm font-medium hover:underline inline-flex items-center group/link">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </AnimatedSection>

            {/* Talent */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="group p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Talent</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Competency Mapping, Performance Appraisal Systems, and Interviewing Skills Workshops.
                </p>
                <button onClick={scrollToServices} className="text-primary text-sm font-medium hover:underline inline-flex items-center group/link">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </AnimatedSection>

            {/* Cultural */}
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="group p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cultural</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Leadership Alignment, Employee Engagement, and Change Management.
                </p>
                <button onClick={scrollToServices} className="text-primary text-sm font-medium hover:underline inline-flex items-center group/link">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" delay={400} className="text-center mt-12">
            <Button variant="outline" size="lg" onClick={scrollToServices}>
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
