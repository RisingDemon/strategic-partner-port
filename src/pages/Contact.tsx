import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2">
              Get In Touch
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Let's Start a{" "}
              <span className="text-primary">Conversation</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to transform your organization's human capital strategy?
            </p>
          </div>
        </div>
      </section>

      {/* Quote & Contact */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Quote */}
            <div className="text-center mb-16">
              <blockquote className="relative px-6 py-8 md:px-12 md:py-10 bg-primary/5 rounded-2xl border border-primary/20">
                <span className="absolute -top-4 left-8 text-6xl text-primary/30 font-serif">"</span>
                <p className="text-xl md:text-2xl italic text-foreground max-w-3xl mx-auto">
                  Look forward for the meeting to freeze the interventions and the timelines.
                </p>
              </blockquote>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Phone */}
              <a
                href="tel:+919175123329"
                className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Me</h3>
                <p className="text-2xl font-bold text-primary mb-2">+91 91751 23329</p>
                <p className="text-sm text-muted-foreground">
                  Available for calls during business hours
                </p>
                <div className="mt-4 flex items-center justify-center text-sm text-primary font-medium">
                  <span>Tap to call</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:27.anand@gmail.com"
                className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Me</h3>
                <p className="text-xl font-bold text-primary mb-2 break-all">27.anand@gmail.com</p>
                <p className="text-sm text-muted-foreground">
                  I'll respond within 24-48 hours
                </p>
                <div className="mt-4 flex items-center justify-center text-sm text-primary font-medium">
                  <span>Send email</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </a>

              {/* Location */}
              <div className="p-8 rounded-2xl border border-border bg-card text-center md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-xl font-bold text-primary mb-2">Pune, Maharashtra</p>
                <p className="text-sm text-muted-foreground">
                  Available for in-person meetings and pan-India consulting
                </p>
              </div>
            </div>

            {/* Availability Info */}
            <div className="mt-12 p-6 md:p-8 rounded-2xl bg-muted/50 border border-border">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Availability</h3>
                  <p className="text-muted-foreground">
                    I'm available for consulting engagements across India. Whether you need strategic advisory, on-site interventions, or remote consulting, let's discuss how I can help transform your organization.
                  </p>
                </div>
                <Button asChild size="lg" className="shrink-0">
                  <a href="tel:+919175123329">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">What to Expect</h2>
              <p className="text-muted-foreground">
                When you reach out, here's how we'll work together
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Initial Discussion</h3>
                <p className="text-sm text-muted-foreground">
                  Understanding your organization's unique challenges
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Needs Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Identifying the right interventions for your goals
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Proposal</h3>
                <p className="text-sm text-muted-foreground">
                  Clear timeline and deliverables for the engagement
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Execution</h3>
                <p className="text-sm text-muted-foreground">
                  Hands-on implementation and ongoing support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
