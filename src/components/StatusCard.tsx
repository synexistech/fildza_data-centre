import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface StatusCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  status?: "success" | "warning" | "destructive";
}

const StatusCard = ({ title, value, icon: Icon, trend, status = "success" }: StatusCardProps) => {
  const statusColors = {
    success: "text-success border-success/50 glow-cyan",
    warning: "text-warning border-warning/50",
    destructive: "text-destructive border-destructive/50",
  };

  return (
    <Card className={`p-6 border-2 ${statusColors[status]} gradient-cyber scan-line transition-all hover:scale-105`}>
      <div className="flex items-center justify-between mb-4">
        <Icon className={`w-8 h-8 ${statusColors[status]}`} />
        {trend && (
          <span className="text-xs font-mono text-muted-foreground">{trend}</span>
        )}
      </div>
      <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </Card>
  );
};

export default StatusCard;
