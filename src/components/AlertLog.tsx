import { Card } from "./ui/card";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface Alert {
  id: number;
  type: "blocked" | "warning" | "success";
  message: string;
  timestamp: string;
  source?: string;
}

const AlertLog = () => {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: 1,
      type: "blocked",
      message: "Suspicious login attempt blocked",
      timestamp: new Date().toISOString(),
      source: "192.168.1.47",
    },
  ]);

  useEffect(() => {
    const messages = [
      { type: "blocked" as const, message: "DDoS attack mitigated", source: "103.45.78.22" },
      { type: "warning" as const, message: "Unusual network traffic detected", source: "10.0.0.15" },
      { type: "success" as const, message: "Security scan completed", source: "System" },
      { type: "blocked" as const, message: "SQL injection attempt blocked", source: "45.123.67.89" },
      { type: "warning" as const, message: "High CPU usage detected on Node-3", source: "Node-3" },
    ];

    const interval = setInterval(() => {
      const randomAlert = messages[Math.floor(Math.random() * messages.length)];
      const newAlert: Alert = {
        id: Date.now(),
        ...randomAlert,
        timestamp: new Date().toISOString(),
      };
      
      setAlerts((prev) => [newAlert, ...prev.slice(0, 9)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getAlertStyle = (type: Alert["type"]) => {
    switch (type) {
      case "blocked":
        return { icon: Shield, color: "text-destructive", bg: "bg-destructive/10" };
      case "warning":
        return { icon: AlertTriangle, color: "text-warning", bg: "bg-warning/10" };
      case "success":
        return { icon: CheckCircle, color: "text-success", bg: "bg-success/10" };
    }
  };

  return (
    <Card className="p-6 border-2 border-secondary/50 bg-card/50">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <span className="text-secondary">●</span> Security Alert Log
      </h3>
      <div className="space-y-2 max-h-[500px] overflow-y-auto">
        {alerts.map((alert) => {
          const style = getAlertStyle(alert.type);
          const Icon = style.icon;
          
          return (
            <div
              key={alert.id}
              className={`p-3 rounded-lg ${style.bg} border border-border/50 flex items-start gap-3 animate-in slide-in-from-top-2`}
            >
              <Icon className={`w-4 h-4 mt-0.5 ${style.color}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{alert.message}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-muted-foreground font-mono">
                    {new Date(alert.timestamp).toLocaleTimeString()}
                  </span>
                  {alert.source && (
                    <span className="text-xs text-muted-foreground font-mono">
                      Source: {alert.source}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default AlertLog;
