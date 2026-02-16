import { GraduationCap, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import profilePic from "@/assets/profile_pic.jpg";

const skills = [
  "Business Partnership, Leadership Alignment, Talent - acquire, groom and retain",
  "Tools & Systems",
  "Organization Structure, Diagnostics, OD, Change Management & Culture",
  "Performance Driven Culture",
  "Employee Engagement",
  "Job Analysis, Job Evaluation, Compensation & Benefits",
  "Legal Compliance and Industrial Relations",
];

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-16">
      {/* Hero Section */}
      <div className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2">
              About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              The Expert Behind the{" "}
              <span className="text-primary">Strategy</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              29+ years of transforming organizations through strategic HR leadership
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Professional Photo */}
            <AnimatedSection animation="fade-right" className="relative aspect-[5/5] rounded-2xl overflow-hidden border border-border order-2 lg:order-1 shadow-lg">
              <img 
                src={profilePic} 
                alt="Anand Shaligram - HR Consultant" 
                className="w-full h-full object-cover object-top"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection animation="fade-left" delay={200} className="space-y-6 order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl font-bold">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A seasoned professional with comprehensive expertise in aligning HR strategies to business objectives. With over 29 years of cross-functional experience, I bring a unique perspective that bridges strategic people management with operational excellence.
                </p>
                <p>
                  My career spans leadership roles at plant and corporate levels across diverse industries, giving me deep insights into the challenges organizations face in managing their most valuable asset—their people.
                </p>
                <p>
                  I specialize in creating sustainable HR frameworks that not only address immediate organizational needs but also build long-term capability for growth and transformation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-16 md:py-24 bg-foreground text-background">
        <div className="container">
          <AnimatedSection animation="zoom-in" className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-background/50 mb-6">
              Core Philosophy
            </p>
            <blockquote className="relative">
              <span className="absolute -top-8 -left-4 text-8xl text-primary/30 font-serif">"</span>
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium italic leading-relaxed">
                Even if you're on the right track, you'll get run over if you sit there.
              </p>
              <span className="absolute -bottom-8 -right-4 text-8xl text-primary/30 font-serif rotate-180">"</span>
            </blockquote>
            <p className="mt-12 text-background/70">
              - Will Rogers
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Credentials */}
      <div className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Education */}
            <AnimatedSection animation="fade-up" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h4 className="text-lg font-semibold">
                  Master's Degree in Management Science
                </h4>
              </div>
            </AnimatedSection>

            {/* Key Skills */}
            <AnimatedSection animation="fade-up" delay={200} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Key Skills</h3>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <ul className="space-y-3">
                  {skills.map((skill, index) => (
                    <AnimatedSection
                      key={skill}
                      animation="fade-up"
                      delay={300 + index * 50}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{skill}</span>
                    </AnimatedSection>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Experience Timeline Highlights */}
      <div className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <AnimatedSection animation="fade-up" className="text-center space-y-4 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold">Career Highlights</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A journey of continuous growth and impactful contributions
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-6">
            <AnimatedSection animation="fade-left" delay={100} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary" />
                <div className="w-0.5 h-full bg-border" />
              </div>
              <div className="pb-8">
                <p className="text-sm text-primary font-medium">Leadership</p>
                <h4 className="font-semibold text-lg">Leadership Award 2021</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  Professional Excellence in Industrial Relations & Human Resource Management.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary" />
                <div className="w-0.5 h-full bg-border" />
              </div>
              <div className="pb-8">
                <p className="text-sm text-primary font-medium">Corporate Leadership</p>
                <h4 className="font-semibold text-lg">Multi-Industry Experience</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  Led HR functions at plant and corporate levels across energy, infrastructure, manufacturing, and logistics sectors.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={300} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary" />
              </div>
              <div>
                <p className="text-sm text-primary font-medium">Consulting</p>
                <h4 className="font-semibold text-lg">Strategic HR Consulting</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  Providing expert consulting services to organizations seeking to transform their HR practices and align them with business strategy.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;