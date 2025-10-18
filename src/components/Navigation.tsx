import { Link, useLocation } from "react-router-dom";
import { Server, Activity } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Server className="w-8 h-8 text-primary glow-cyan" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Fildza Data Centre
            </span>
          </Link>

          <div className="flex items-center gap-1">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                isActive("/")
                  ? "bg-primary/20 text-primary border border-primary/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <Activity className="w-4 h-4" />
              <span className="font-medium">Home</span>
            </Link>

            <Link
              to="/data-centre"
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                isActive("/data-centre")
                  ? "bg-primary/20 text-primary border border-primary/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <Server className="w-4 h-4" />
              <span className="font-medium">Data Centre</span>
            </Link>

            <Link
              to="/cyber-defense"
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                isActive("/cyber-defense")
                  ? "bg-primary/20 text-primary border border-primary/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <Activity className="w-4 h-4" />
              <span className="font-medium">Cyber Defense</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
