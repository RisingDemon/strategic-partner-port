import { GraduationCap, Briefcase, Target, Users, Scale, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "Business Partnership", icon: Briefcase },
  { name: "Change Management", icon: Target },
  { name: "Industrial Relations", icon: Scale },
  { name: "CXO-level Head Hunting", icon: Search },
];

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2">
              About Me
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              The Expert Behind the{" "}
              <span className="text-primary">Strategy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              29+ years of transforming organizations through strategic HR leadership
            </p>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Placeholder */}
            <div className="relative aspect-[4/5] bg-muted rounded-2xl overflow-hidden border border-border order-2 lg:order-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-16 h-16 text-primary/50" />
                  </div>
                  <p className="text-muted-foreground text-sm">Professional Photo</p>
                  <p className="text-muted-foreground text-xs mt-1">(Upload your photo)</p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold">Professional Summary</h2>
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
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
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
              This philosophy drives my approach to organizational transformation—proactive, strategic, and always moving forward.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-lg font-semibold mb-2">
                  Master's Degree in Finance Management
                </h3>
                <p className="text-primary font-medium mb-2">First Class Distinction</p>
                <p className="text-muted-foreground">
                  Bharati Vidyapeeth, Pune University
                </p>
              </div>
            </div>

            {/* Key Skills */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Key Skills</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <skill.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Highlights */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Career Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A journey of continuous growth and impactful contributions
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary" />
                <div className="w-0.5 h-full bg-border" />
              </div>
              <div className="pb-8">
                <p className="text-sm text-primary font-medium">Leadership</p>
                <h3 className="font-semibold text-lg">Leadership Award 2021</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Recognized for exceptional contributions to organizational development and HR excellence.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary" />
                <div className="w-0.5 h-full bg-border" />
              </div>
              <div className="pb-8">
                <p className="text-sm text-primary font-medium">Corporate Leadership</p>
                <h3 className="font-semibold text-lg">Multi-Industry Experience</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Led HR functions at plant and corporate levels across energy, infrastructure, manufacturing, and logistics sectors.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary" />
              </div>
              <div>
                <p className="text-sm text-primary font-medium">Consulting</p>
                <h3 className="font-semibold text-lg">Strategic HR Consulting</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Providing expert consulting services to organizations seeking to transform their HR practices and align them with business strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
