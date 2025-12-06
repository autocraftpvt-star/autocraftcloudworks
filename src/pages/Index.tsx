import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Clock, 
  TrendingUp, 
  Shield, 
  Users, 
  Cpu,
  ArrowRight,
  CheckCircle2,
  Bot
} from "lucide-react";
import heroImage from "@/assets/hero-automation.png";

const advantages = [
  {
    icon: Clock,
    title: "Save 80% Time",
    description: "Automate repetitive tasks and free up your team to focus on what matters most.",
  },
  {
    icon: TrendingUp,
    title: "Boost Productivity",
    description: "Increase efficiency with intelligent automation that works 24/7 without breaks.",
  },
  {
    icon: Shield,
    title: "Reduce Errors",
    description: "Eliminate human errors with precise, consistent automated workflows.",
  },
  {
    icon: Zap,
    title: "Instant Execution",
    description: "Tasks that took hours now complete in seconds with our bot agents.",
  },
  {
    icon: Users,
    title: "Better Client Experience",
    description: "Respond faster and deliver better service to your clients automatically.",
  },
  {
    icon: Cpu,
    title: "Smart Integration",
    description: "Seamlessly connect with your existing tools and systems.",
  },
];

const features = [
  "Bill Creation & Management",
  "Meeting Scheduling",
  "Task Automation",
  "Client Data Entry",
  "Invoice Generation",
  "Email Automation",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow delay-500" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6">
                <Bot className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">AI-Powered Automation</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Automate Your{" "}
                <span className="gradient-text">Business Workflow</span>{" "}
                With Intelligent Bots
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Transform your business operations with our smart bot agents. From bill creation 
                to meeting scheduling, we automate everything so you can focus on growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link to="/services">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    Explore Services
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="glass" size="xl" className="w-full sm:w-auto">
                    Get Started Free
                  </Button>
                </Link>
              </div>
              
              {/* Quick Features */}
              <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
                {features.slice(0, 4).map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Content - Hero Image */}
            <div className="relative animate-slide-up delay-200">
              <div className="relative z-10 rounded-2xl overflow-hidden glow-effect">
                <img 
                  src={heroImage} 
                  alt="Automation Dashboard" 
                  className="w-full h-auto rounded-2xl animate-float"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">AutoBot</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how our automation solutions can transform your business operations 
              and give you a competitive edge.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div 
                key={advantage.title}
                className="glass-card rounded-2xl p-6 hover-glow animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <advantage.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Automate Your Business?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join hundreds of businesses that have transformed their operations with our bot agents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/services">
                  <Button variant="hero" size="lg">
                    View All Services
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="outline" size="lg">
                    Create Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 AutoBot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
