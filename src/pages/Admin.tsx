import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard,
  Users,
  Package,
  FileText,
  Settings,
  BarChart3,
  Bell,
  Search,
  Plus,
  MoreVertical,
  ArrowLeft
} from "lucide-react";
import { toast } from "sonner";

const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", services: 3, status: "active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", services: 2, status: "active" },
  { id: 3, name: "Bob Wilson", email: "bob@example.com", services: 1, status: "pending" },
];

const mockOrders = [
  { id: "ORD-001", user: "John Doe", service: "Bill & Invoice Automation", date: "2024-01-15", status: "completed" },
  { id: "ORD-002", user: "Jane Smith", service: "Meeting Scheduler Bot", date: "2024-01-14", status: "active" },
  { id: "ORD-003", user: "Bob Wilson", service: "Custom Automation", date: "2024-01-13", status: "pending" },
];

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    { label: "Total Users", value: "1,234", icon: Users, change: "+12%" },
    { label: "Active Subscriptions", value: "856", icon: Package, change: "+8%" },
    { label: "Revenue", value: "$45,678", icon: BarChart3, change: "+23%" },
    { label: "New Orders", value: "45", icon: FileText, change: "+5%" },
  ];

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "users", label: "Users", icon: Users },
    { id: "orders", label: "Orders", icon: FileText },
    { id: "services", label: "Services", icon: Package },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Top Bar */}
      <div className="glass-card border-b border-border/30 sticky top-16 z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/profile">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-xl font-bold gradient-text">Admin Panel</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none text-sm w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="glass-card rounded-xl p-3 sticky top-40">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id 
                      ? "bg-primary/20 text-primary" 
                      : "hover:bg-secondary text-muted-foreground"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "dashboard" && (
              <div className="space-y-6 animate-slide-up">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="glass-card rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <stat.icon className="w-5 h-5 text-muted-foreground" />
                        <span className="text-xs text-green-400">{stat.change}</span>
                      </div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Recent Orders */}
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Recent Orders</h2>
                    <Button variant="outline" size="sm">View All</Button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Order ID</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">User</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Service</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockOrders.map((order) => (
                          <tr key={order.id} className="border-b border-border/50 hover:bg-secondary/50">
                            <td className="py-3 px-4 font-medium">{order.id}</td>
                            <td className="py-3 px-4">{order.user}</td>
                            <td className="py-3 px-4 text-muted-foreground">{order.service}</td>
                            <td className="py-3 px-4 text-muted-foreground">{order.date}</td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                order.status === "completed" ? "bg-green-500/20 text-green-400" :
                                order.status === "active" ? "bg-blue-500/20 text-blue-400" :
                                "bg-yellow-500/20 text-yellow-400"
                              }`}>
                                {order.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "users" && (
              <div className="glass-card rounded-xl p-6 animate-slide-up">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Manage Users</h2>
                  <Button variant="hero" size="sm">
                    <Plus className="w-4 h-4" />
                    Add User
                  </Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Name</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Email</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Services</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockUsers.map((user) => (
                        <tr key={user.id} className="border-b border-border/50 hover:bg-secondary/50">
                          <td className="py-3 px-4 font-medium">{user.name}</td>
                          <td className="py-3 px-4 text-muted-foreground">{user.email}</td>
                          <td className="py-3 px-4">{user.services}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              user.status === "active" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                            }`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="glass-card rounded-xl p-6 animate-slide-up">
                <h2 className="text-lg font-semibold mb-6">All Orders</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Order ID</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">User</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Service</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockOrders.map((order) => (
                        <tr key={order.id} className="border-b border-border/50 hover:bg-secondary/50">
                          <td className="py-3 px-4 font-medium">{order.id}</td>
                          <td className="py-3 px-4">{order.user}</td>
                          <td className="py-3 px-4 text-muted-foreground">{order.service}</td>
                          <td className="py-3 px-4 text-muted-foreground">{order.date}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              order.status === "completed" ? "bg-green-500/20 text-green-400" :
                              order.status === "active" ? "bg-blue-500/20 text-blue-400" :
                              "bg-yellow-500/20 text-yellow-400"
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "services" && (
              <div className="glass-card rounded-xl p-6 animate-slide-up">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Manage Services</h2>
                  <Button variant="hero" size="sm" onClick={() => toast.success("Add service feature coming soon!")}>
                    <Plus className="w-4 h-4" />
                    Add Service
                  </Button>
                </div>
                <p className="text-muted-foreground">Manage your automation services, pricing, and features here.</p>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="glass-card rounded-xl p-6 animate-slide-up">
                <h2 className="text-lg font-semibold mb-6">Admin Settings</h2>
                <p className="text-muted-foreground">Configure website settings, notifications, and more.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
