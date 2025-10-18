import { Card } from "./ui/card";
import { useState, useEffect } from "react";

interface Threat {
  id: number;
  x: number;
  y: number;
  severity: "low" | "medium" | "high";
}

const ThreatMap = () => {
  const [threats, setThreats] = useState<Threat[]>([]);

  useEffect(() => {
    // Simulate threat detection
    const interval = setInterval(() => {
      const newThreat: Threat = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        severity: ["low", "medium", "high"][Math.floor(Math.random() * 3)] as Threat["severity"],
      };
      
      setThreats((prev) => [...prev.slice(-20), newThreat]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const severityColors = {
    low: "bg-success",
    medium: "bg-warning",
    high: "bg-destructive",
  };

  return (
    <Card className="p-6 border-2 border-primary/50 bg-card/50">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <span className="text-primary">●</span> Global Threat Map
      </h3>
      <div className="relative w-full h-[400px] bg-muted/20 rounded-lg overflow-hidden border border-border">
        {/* Grid overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
        
        {/* Threats */}
        {threats.map((threat) => (
          <div
            key={threat.id}
            className={`absolute w-3 h-3 rounded-full ${severityColors[threat.severity]} animate-pulse`}
            style={{
              left: `${threat.x}%`,
              top: `${threat.y}%`,
              boxShadow: `0 0 10px ${threat.severity === 'high' ? '#ff0000' : threat.severity === 'medium' ? '#ff9900' : '#00ff00'}`,
            }}
          />
        ))}

        {/* Center point (your location) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-4 h-4 bg-primary rounded-full glow-cyan" />
            <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping opacity-75" />
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-6 text-xs font-mono">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-success" />
          <span>Low Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-warning" />
          <span>Medium Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-destructive" />
          <span>High Risk</span>
        </div>
      </div>
    </Card>
  );
};

export default ThreatMap;
