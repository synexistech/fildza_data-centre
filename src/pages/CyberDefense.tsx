import Navigation from "@/components/Navigation";
import ThreatMap from "@/components/ThreatMap";
import AlertLog from "@/components/AlertLog";
import StatusCard from "@/components/StatusCard";
import { Card } from "@/components/ui/card";
import { Shield, AlertTriangle, Activity, Lock } from "lucide-react";

const CyberDefense = () => {
  const threats = [
    { type: "DDoS Attack", count: 847, severity: "high" },
    { type: "Brute Force", count: 234, severity: "medium" },
    { type: "Port Scan", count: 1523, severity: "low" },
    { type: "SQL Injection", count: 45, severity: "high" },
  ];

  const severityColors = {
    high: "text-destructive border-destructive/50",
    medium: "text-warning border-warning/50",
    low: "text-success border-success/50",
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-destructive to-warning bg-clip-text text-transparent">
            Cyber Defense Operations Center
          </h1>
          <p className="text-muted-foreground">Real-time threat monitoring and incident response</p>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatusCard
            title="Active Threats"
            value="12"
            icon={AlertTriangle}
            trend="-8 from yesterday"
            status="warning"
          />
          <StatusCard
            title="Blocked Attacks"
            value="2,649"
            icon={Shield}
            trend="Today"
            status="success"
          />
          <StatusCard
            title="System Health"
            value="98.2%"
            icon={Activity}
            trend="Optimal"
            status="success"
          />
          <StatusCard
            title="Firewall Status"
            value="Active"
            icon={Lock}
            trend="All ports secured"
            status="success"
          />
        </div>

        {/* Threat Map */}
        <div className="mb-8">
          <ThreatMap />
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Alert Log */}
          <AlertLog />

          {/* Threat Analysis */}
          <Card className="p-6 border-2 border-warning/50 bg-card/50">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-warning">●</span> Threat Analysis
            </h3>
            <div className="space-y-3">
              {threats.map((threat, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 ${severityColors[threat.severity as keyof typeof severityColors]} bg-muted/20`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold">{threat.type}</h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-muted font-mono">
                      {threat.severity.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Attempts detected</span>
                    <span className="text-2xl font-bold">{threat.count.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-success/10 border border-success/50">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-success" />
                <h4 className="font-bold text-success">Defense Status: ACTIVE</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                All security systems operational. Automated response enabled.
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CyberDefense;
