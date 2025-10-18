import Navigation from "@/components/Navigation";
import StatusCard from "@/components/StatusCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, HardDrive, Activity, Zap, Server } from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";

const DataCentre = () => {
  const [cpuData, setCpuData] = useState<Array<{ time: string; usage: number }>>([]);

  useEffect(() => {
    // Generate initial data
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      time: `${i}s`,
      usage: Math.floor(Math.random() * 40) + 30,
    }));
    setCpuData(initialData);

    // Update data every 2 seconds
    const interval = setInterval(() => {
      setCpuData((prev) => {
        const newData = [...prev.slice(1), {
          time: `${prev.length}s`,
          usage: Math.floor(Math.random() * 40) + 30,
        }];
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const gpuNodes = [
    { id: 1, name: "RTX 4090 Node", vram: "24GB", price: "$1.20/hr", status: "available" },
    { id: 2, name: "A100 80GB Node", vram: "80GB", price: "$2.50/hr", status: "available" },
    { id: 3, name: "RTX 3090 Cluster", vram: "24GB x4", price: "$3.80/hr", status: "limited" },
    { id: 4, name: "H100 SXM Node", vram: "80GB", price: "$4.20/hr", status: "available" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Data Centre Dashboard
          </h1>
          <p className="text-muted-foreground">Real-time monitoring and GPU deployment</p>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatusCard
            title="CPU Usage"
            value="68%"
            icon={Cpu}
            trend="+2.5%"
            status="success"
          />
          <StatusCard
            title="Storage"
            value="4.2TB"
            icon={HardDrive}
            trend="12.8TB free"
            status="success"
          />
          <StatusCard
            title="GPU Utilization"
            value="42%"
            icon={Zap}
            trend="+5.2%"
            status="warning"
          />
          <StatusCard
            title="Uptime"
            value="99.98%"
            icon={Activity}
            trend="847 days"
            status="success"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 border-2 border-primary/50 bg-card/50">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-primary">●</span> CPU Performance
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={cpuData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(180 30% 20%)" />
                <XAxis dataKey="time" stroke="hsl(180 30% 65%)" />
                <YAxis stroke="hsl(180 30% 65%)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222 47% 8%)",
                    border: "1px solid hsl(180 30% 20%)",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="usage"
                  stroke="hsl(180 100% 50%)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 border-2 border-secondary/50 bg-card/50">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-secondary">●</span> Network Traffic
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={cpuData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(180 30% 20%)" />
                <XAxis dataKey="time" stroke="hsl(180 30% 65%)" />
                <YAxis stroke="hsl(180 30% 65%)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222 47% 8%)",
                    border: "1px solid hsl(180 30% 20%)",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="usage"
                  stroke="hsl(280 100% 60%)"
                  fill="hsl(280 100% 60% / 0.2)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* GPU Nodes */}
        <Card className="p-6 border-2 border-success/50 bg-card/50">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Server className="w-6 h-6 text-success" />
            Available GPU Nodes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {gpuNodes.map((node) => (
              <div
                key={node.id}
                className="p-4 rounded-lg border-2 border-border bg-muted/20 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold">{node.name}</h4>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-mono ${
                      node.status === "available"
                        ? "bg-success/20 text-success"
                        : "bg-warning/20 text-warning"
                    }`}
                  >
                    {node.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">VRAM: {node.vram}</p>
                <p className="text-xl font-bold text-primary mb-3">{node.price}</p>
                <Button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
                  Deploy Now
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default DataCentre;
