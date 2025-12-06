import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Package, 
  Calendar, 
  Settings, 
  ExternalLink,
  AlertCircle
} from "lucide-react";

// Mock subscribed services - in a real app, this would come from your backend
const subscribedServices: { 
  id: string; 
  title: string; 
  status: "active" | "pending" | "expired"; 
  nextBilling: string;
}[] = [];

const YourServices = () => {
  const hasServices = subscribedServices.length > 0;

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your <span className="gradient-text">Services</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Manage your subscribed automation services and monitor their performance.
          </p>
        </div>

        {hasServices ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subscribedServices.map((service) => (
              <div 
                key={service.id}
                className="glass-card rounded-2xl p-6 hover-glow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    service.status === "active" 
                      ? "bg-green-500/20 text-green-400"
                      : service.status === "pending"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }`}>
                    {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Next billing: {service.nextBilling}</span>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Settings className="w-4 h-4" />
                    Manage
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-lg mx-auto text-center animate-slide-up">
            <div className="glass-card rounded-2xl p-12">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-10 h-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold mb-3">No Active Services</h2>
              <p className="text-muted-foreground mb-8">
                You have not subscribed to any automation services yet. 
                Explore our services to get started with automating your business.
              </p>
              <Link to="/services">
                <Button variant="hero" size="lg">
                  Browse Services
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Quick Stats - Show when user has services */}
        {hasServices && (
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="text-3xl font-bold gradient-text mb-1">{subscribedServices.length}</div>
              <div className="text-sm text-muted-foreground">Active Services</div>
            </div>
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="text-3xl font-bold gradient-text mb-1">1,234</div>
              <div className="text-sm text-muted-foreground">Tasks Automated</div>
            </div>
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="text-3xl font-bold gradient-text mb-1">56h</div>
              <div className="text-sm text-muted-foreground">Time Saved</div>
            </div>
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="text-3xl font-bold gradient-text mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YourServices;
