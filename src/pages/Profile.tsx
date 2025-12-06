import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  LogIn,
  UserPlus,
  Package,
  Settings,
  LogOut,
  ShieldCheck
} from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      toast.success("Account created successfully!", {
        description: "Welcome to AutoBot!",
      });
    } else {
      toast.success("Logged in successfully!");
    }
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.info("Logged out successfully");
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Profile Header */}
            <div className="glass-card rounded-2xl p-8 mb-6 animate-slide-up">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <User className="w-10 h-10 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{formData.name || "User"}</h1>
                  <p className="text-muted-foreground">{formData.email || "user@example.com"}</p>
                </div>
              </div>
            </div>

            {/* Menu Options */}
            <div className="space-y-3 animate-slide-up delay-100">
              <Link to="/your-services">
                <div className="glass-card rounded-xl p-4 flex items-center justify-between hover-glow cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Package className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Your Services</h3>
                      <p className="text-sm text-muted-foreground">Manage subscriptions</p>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="glass-card rounded-xl p-4 flex items-center justify-between hover-glow cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Account Settings</h3>
                    <p className="text-sm text-muted-foreground">Update profile & password</p>
                  </div>
                </div>
              </div>

              <Link to="/admin">
                <div className="glass-card rounded-xl p-4 flex items-center justify-between hover-glow cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Admin Panel</h3>
                      <p className="text-sm text-muted-foreground">Manage website (Admin only)</p>
                    </div>
                  </div>
                </div>
              </Link>

              <button 
                onClick={handleLogout}
                className="w-full glass-card rounded-xl p-4 flex items-center gap-4 hover:bg-destructive/10 transition-colors text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                  <LogOut className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold">Logout</h3>
                  <p className="text-sm text-muted-foreground">Sign out of your account</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="glass-card rounded-2xl p-8 animate-slide-up">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                {isSignUp ? (
                  <UserPlus className="w-8 h-8 text-primary-foreground" />
                ) : (
                  <LogIn className="w-8 h-8 text-primary-foreground" />
                )}
              </div>
              <h1 className="text-2xl font-bold">
                {isSignUp ? "Create Account" : "Welcome Back"}
              </h1>
              <p className="text-muted-foreground mt-2">
                {isSignUp 
                  ? "Sign up to start automating your business" 
                  : "Log in to access your services"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full pl-10 pr-12 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button type="submit" variant="hero" className="w-full" size="lg">
                {isSignUp ? "Create Account" : "Log In"}
              </Button>
            </form>

            {/* Toggle */}
            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="ml-2 text-primary hover:underline font-medium"
                >
                  {isSignUp ? "Log In" : "Sign Up"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
