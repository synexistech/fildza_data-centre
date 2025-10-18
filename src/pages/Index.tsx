import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Server, Activity, Zap, Lock, Globe, Database } from "lucide-react";
import { Link } from "react-router-dom";
import malaysiaFlag from "@/assets/malaysia-flag.png";

const Index = () => {
  const features = [
    {
      icon: Server,
      title: "High-Performance Infrastructure",
      description: "Enterprise-grade servers with 99.98% uptime guarantee",
    },
    {
      icon: Database,
      title: "Advanced Security",
      description: "Military-grade encryption and 24/7 threat monitoring",
    },
    {
      icon: Zap,
      title: "GPU Acceleration",
      description: "Latest NVIDIA GPUs for AI/ML workloads",
    },
    {
      icon: Lock,
      title: "Cyber Defense",
      description: "Real-time threat detection and automated response",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0 scan-line" />
        
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/50 bg-primary/10">
              <img src={malaysiaFlag} alt="Malaysia" className="w-6 h-4 object-cover rounded-sm" />
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary">SECURE • SCALABLE • RELIABLE</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Fildza Data Centre
              </span>
              <br />
              <span className="text-foreground">Cyber Defense</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Premier data centre services in Malaysia with cutting-edge cybersecurity solutions.
              Specializing in GPU cloud computing, dedicated servers, and comprehensive cyber defense monitoring.
            </p>
            
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link to="/data-centre">
                <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground glow-cyan">
                  <Server className="w-5 h-5 mr-2" />
                  Data Centre Dashboard
                </Button>
              </Link>
              <Link to="/cyber-defense">
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                  <Activity className="w-5 h-5 mr-2" />
                  Cyber Defense SOC
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Next-Generation Infrastructure
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology designed for maximum performance and security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 border-2 border-border hover:border-primary/50 transition-all gradient-cyber scan-line"
              >
                <Icon className="w-12 h-12 text-primary mb-4 glow-cyan" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.98%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">2.6K+</div>
              <div className="text-muted-foreground">Threats Blocked Daily</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">24/7</div>
              <div className="text-muted-foreground">Security Monitoring</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-warning mb-2">50ms</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <Card className="p-12 border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10 text-center">
          <Activity className="w-16 h-16 text-primary mx-auto mb-6 glow-cyan" />
          <h2 className="text-3xl font-bold mb-4">Ready to Deploy?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start monitoring your infrastructure and defending against cyber threats in real-time
          </p>
          <Link to="/data-centre">
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground">
              Get Started Now
            </Button>
          </Link>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Server className="w-8 h-8 text-primary glow-cyan" />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Fildza Data Centre
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Leading provider of data centre services and cybersecurity solutions in Malaysia.
                Empowering businesses with reliable infrastructure and advanced threat protection.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>Malaysia • Asia Pacific</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>GPU Cloud Computing</li>
                <li>Dedicated Servers</li>
                <li>Cyber Defense SOC</li>
                <li>24/7 Monitoring</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info.synexistech@gmail.com</li>
                <li>+6018-5936086</li>
                <li>Kuala Lumpur, Malaysia</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Fildza Data Centre. All rights reserved. | Built with modern web technologies</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
