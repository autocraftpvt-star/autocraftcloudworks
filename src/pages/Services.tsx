import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Calendar, 
  ClipboardList, 
  Users, 
  Mail, 
  Cog,
  ArrowRight,
  Check,
  Send,
  X
} from "lucide-react";
import { toast } from "sonner";

const services = [
  {
    id: "billing",
    icon: FileText,
    title: "Bill & Invoice Automation",
    description: "Automate bill creation, invoice generation, and payment tracking with our intelligent bot.",
    features: ["Auto-generate invoices", "Payment reminders", "Receipt management", "Financial reports"],
    price: "$49/month",
  },
  {
    id: "meetings",
    icon: Calendar,
    title: "Meeting Scheduler Bot",
    description: "Let our bot handle all your meeting scheduling, reminders, and follow-ups automatically.",
    features: ["Calendar sync", "Smart scheduling", "Meeting reminders", "Follow-up emails"],
    price: "$39/month",
  },
  {
    id: "tasks",
    icon: ClipboardList,
    title: "Task Management Bot",
    description: "Streamline task assignment, tracking, and completion with automated workflows.",
    features: ["Task assignment", "Progress tracking", "Deadline alerts", "Team notifications"],
    price: "$45/month",
  },
  {
    id: "clients",
    icon: Users,
    title: "Client Data Bot",
    description: "Automatically collect, organize, and manage client information with zero manual effort.",
    features: ["Data collection", "CRM integration", "Contact management", "Data validation"],
    price: "$55/month",
  },
  {
    id: "email",
    icon: Mail,
    title: "Email Automation Bot",
    description: "Automate email responses, newsletters, and client communications effortlessly.",
    features: ["Auto-replies", "Newsletter automation", "Email templates", "Campaign tracking"],
    price: "$35/month",
  },
  {
    id: "custom",
    icon: Cog,
    title: "Custom Automation",
    description: "Need something specific? Send us your requirements and we will build a custom bot for your needs.",
    features: ["Tailored solutions", "API integrations", "Custom workflows", "Dedicated support"],
    price: "Custom Quote",
    isCustom: true,
  },
];

const Services = () => {
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [customRequest, setCustomRequest] = useState({
    name: "",
    email: "",
    company: "",
    requirements: "",
  });

  const handleSubscribe = (serviceTitle: string) => {
    toast.success(`Subscribed to ${serviceTitle}!`, {
      description: "Check 'Your Services' to manage your subscription.",
    });
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Custom request submitted!", {
      description: "Our team will contact you within 24 hours.",
    });
    setShowCustomForm(false);
    setCustomRequest({ name: "", email: "", company: "", requirements: "" });
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Automation Services</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of intelligent bot agents designed to automate 
            different aspects of your business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="glass-card rounded-2xl p-6 flex flex-col hover-glow animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-lg font-bold gradient-text">{service.price}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {service.isCustom ? (
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setShowCustomForm(true)}
                >
                  Send Requirements
                  <Send className="w-4 h-4" />
                </Button>
              ) : (
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => handleSubscribe(service.title)}
                >
                  Subscribe Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Custom Request Modal */}
        {showCustomForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <div className="glass-card rounded-2xl p-8 max-w-lg w-full animate-slide-up relative">
              <button 
                onClick={() => setShowCustomForm(false)}
                className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-2xl font-bold mb-2">Custom Automation Request</h3>
              <p className="text-muted-foreground mb-6">
                Tell us about your automation needs and we will create a tailored solution.
              </p>
              
              <form onSubmit={handleCustomSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                    value={customRequest.name}
                    onChange={(e) => setCustomRequest({ ...customRequest, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                    value={customRequest.email}
                    onChange={(e) => setCustomRequest({ ...customRequest, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                    value={customRequest.company}
                    onChange={(e) => setCustomRequest({ ...customRequest, company: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Requirements</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Describe what you want to automate..."
                    value={customRequest.requirements}
                    onChange={(e) => setCustomRequest({ ...customRequest, requirements: e.target.value })}
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full">
                  Submit Request
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Not sure which service is right for you?
          </p>
          <Link to="/profile">
            <Button variant="outline" size="lg">
              Contact Us for Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
