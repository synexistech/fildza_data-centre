import { Card } from "./ui/card";
import { useState, useEffect } from "react";

interface Threat {
  id: number;
  country: string;
  lat: number;
  lng: number;
  severity: "low" | "medium" | "high";
  type: string;
}

// Real-world threat locations with coordinates (all continents)
const threatLocations = [
  // Asia
  { country: "China", lat: 35.8617, lng: 104.1954, continent: "Asia" },
  { country: "India", lat: 20.5937, lng: 78.9629, continent: "Asia" },
  { country: "Japan", lat: 36.2048, lng: 138.2529, continent: "Asia" },
  { country: "South Korea", lat: 35.9078, lng: 127.7669, continent: "Asia" },
  { country: "Indonesia", lat: -0.7893, lng: 113.9213, continent: "Asia" },
  { country: "Thailand", lat: 15.8700, lng: 100.9925, continent: "Asia" },
  { country: "Singapore", lat: 1.3521, lng: 103.8198, continent: "Asia" },
  { country: "Malaysia", lat: 4.2105, lng: 101.9758, continent: "Asia" },

  // Europe
  { country: "Russia", lat: 61.5240, lng: 105.3188, continent: "Europe" },
  { country: "Germany", lat: 51.1657, lng: 10.4515, continent: "Europe" },
  { country: "UK", lat: 55.3781, lng: -3.4360, continent: "Europe" },
  { country: "France", lat: 46.2276, lng: 2.2137, continent: "Europe" },
  { country: "Italy", lat: 41.8719, lng: 12.5674, continent: "Europe" },
  { country: "Spain", lat: 40.4637, lng: -3.7492, continent: "Europe" },
  { country: "Netherlands", lat: 52.1326, lng: 5.2913, continent: "Europe" },
  { country: "Poland", lat: 51.9194, lng: 19.1451, continent: "Europe" },

  // North America
  { country: "USA", lat: 37.0902, lng: -95.7129, continent: "North America" },
  { country: "Canada", lat: 56.1304, lng: -106.3468, continent: "North America" },
  { country: "Mexico", lat: 23.6345, lng: -102.5528, continent: "North America" },

  // South America
  { country: "Brazil", lat: -14.2350, lng: -51.9253, continent: "South America" },
  { country: "Argentina", lat: -38.4161, lng: -63.6167, continent: "South America" },
  { country: "Colombia", lat: 4.5709, lng: -74.2973, continent: "South America" },

  // Africa
  { country: "South Africa", lat: -30.5595, lng: 22.9375, continent: "Africa" },
  { country: "Egypt", lat: 26.0963, lng: 29.9538, continent: "Africa" },
  { country: "Nigeria", lat: 9.0820, lng: 8.6753, continent: "Africa" },
  { country: "Kenya", lat: -0.0236, lng: 37.9062, continent: "Africa" },

  // Oceania
  { country: "Australia", lat: -25.2744, lng: 133.7751, continent: "Oceania" },
  { country: "New Zealand", lat: -40.9006, lng: 174.8860, continent: "Oceania" },
];

const ThreatMap = () => {
  const [threats, setThreats] = useState<Threat[]>([]);

  useEffect(() => {
    // Initialize with some threats
    const initialThreats = threatLocations.slice(0, 8).map((location, index) => ({
      id: index + 1,
      country: location.country,
      lat: location.lat,
      lng: location.lng,
      severity: ["low", "medium", "high"][Math.floor(Math.random() * 3)] as Threat["severity"],
      type: ["DDoS", "Brute Force", "Port Scan", "SQL Injection", "XSS", "Ransomware"][Math.floor(Math.random() * 6)],
    }));
    setThreats(initialThreats);

    // Simulate new threats
    const interval = setInterval(() => {
      const randomLocation = threatLocations[Math.floor(Math.random() * threatLocations.length)];
      const newThreat: Threat = {
        id: Date.now(),
        country: randomLocation.country,
        lat: randomLocation.lat,
        lng: randomLocation.lng,
        severity: ["low", "medium", "high"][Math.floor(Math.random() * 3)] as Threat["severity"],
        type: ["DDoS", "Brute Force", "Port Scan", "SQL Injection", "XSS", "Ransomware"][Math.floor(Math.random() * 6)],
      };

      setThreats((prev) => [...prev.slice(-15), newThreat]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const severityColors = {
    low: "bg-success",
    medium: "bg-warning",
    high: "bg-destructive",
  };

  // Convert lat/lng to x/y coordinates for the map (Mercator-like projection)
  const latLngToXY = (lat: number, lng: number) => {
    // Convert to radians
    const latRad = (lat * Math.PI) / 180;
    const lngRad = (lng * Math.PI) / 180;

    // Mercator projection formula
    const x = ((lng + 180) / 360) * 100;
    const y = ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * 100;

    return { x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) };
  };

  return (
    <Card className="p-6 border-2 border-primary/50 bg-card/50">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <span className="text-primary">●</span> Global Threat Map
      </h3>
      <div className="relative w-full h-[400px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg overflow-hidden border border-border">
        {/* World Map Background */}
        <svg
          viewBox="0 0 1000 500"
          className="absolute inset-0 w-full h-full opacity-50"
        >
          {/* North America */}
          <path d="M80,120 L110,110 L150,115 L170,125 L160,140 L140,150 L120,145 L100,135 Z" fill="#00ffff" fillOpacity="0.08" stroke="#00ffff" strokeWidth="1.5" opacity="0.7"/>
          <text x="130" y="130" fill="#00ffff" fontSize="9" opacity="0.9" fontWeight="bold">NORTH AMERICA</text>

          {/* South America */}
          <path d="M160,220 L180,200 L190,240 L185,300 L170,320 L155,310 L150,270 Z" fill="#00ffff" fillOpacity="0.08" stroke="#00ffff" strokeWidth="1.5" opacity="0.7"/>
          <text x="170" y="260" fill="#00ffff" fontSize="9" opacity="0.9" fontWeight="bold">SOUTH AMERICA</text>

          {/* Europe */}
          <path d="M480,100 L510,95 L540,100 L550,110 L540,125 L520,130 L500,125 L490,115 Z" fill="#00ffff" fillOpacity="0.08" stroke="#00ffff" strokeWidth="1.5" opacity="0.7"/>
          <text x="515" y="115" fill="#00ffff" fontSize="9" opacity="0.9" fontWeight="bold">EUROPE</text>

          {/* Africa */}
          <path d="M510,170 L530,160 L550,200 L540,270 L520,300 L500,290 L490,240 Z" fill="#00ffff" fillOpacity="0.08" stroke="#00ffff" strokeWidth="1.5" opacity="0.7"/>
          <text x="520" y="220" fill="#00ffff" fontSize="9" opacity="0.9" fontWeight="bold">AFRICA</text>

          {/* Asia */}
          <path d="M580,80 L680,70 L780,90 L810,110 L790,140 L730,150 L650,140 L610,120 Z" fill="#00ffff" fillOpacity="0.08" stroke="#00ffff" strokeWidth="1.5" opacity="0.7"/>
          <text x="680" y="110" fill="#00ffff" fontSize="9" opacity="0.9" fontWeight="bold">ASIA</text>

          {/* Australia */}
          <path d="M730,300 L780,290 L810,305 L800,330 L770,340 L740,330 Z" fill="#00ffff" fillOpacity="0.08" stroke="#00ffff" strokeWidth="1.5" opacity="0.7"/>
          <text x="765" y="315" fill="#00ffff" fontSize="9" opacity="0.9" fontWeight="bold">AUSTRALIA</text>

          {/* Major cities/countries */}
          <circle cx="650" cy="105" r="2" fill="#00ffff" opacity="0.8"/>
          <text x="655" y="100" fill="#00ffff" fontSize="7" opacity="0.9">Beijing</text>

          <circle cx="620" cy="125" r="2" fill="#00ffff" opacity="0.8"/>
          <text x="625" y="120" fill="#00ffff" fontSize="7" opacity="0.9">Delhi</text>

          <circle cx="710" cy="95" r="2" fill="#00ffff" opacity="0.8"/>
          <text x="715" y="90" fill="#00ffff" fontSize="7" opacity="0.9">Tokyo</text>

          <circle cx="500" cy="110" r="2" fill="#00ffff" opacity="0.8"/>
          <text x="505" y="105" fill="#00ffff" fontSize="7" opacity="0.9">Moscow</text>

          <circle cx="530" cy="120" r="2" fill="#00ffff" opacity="0.8"/>
          <text x="535" y="115" fill="#00ffff" fontSize="7" opacity="0.9">Berlin</text>

          <circle cx="460" cy="125" r="2" fill="#00ffff" opacity="0.8"/>
          <text x="465" y="120" fill="#00ffff" fontSize="7" opacity="0.9">London</text>

          <circle cx="130" cy="125" r="2" fill="#00ffff" opacity="0.8"/>
          <text x="135" y="120" fill="#00ffff" fontSize="7" opacity="0.9">New York</text>

          <circle cx="170" cy="240" r="2" fill="#00ffff" opacity="0.8"/>
          <text x="175" y="235" fill="#00ffff" fontSize="7" opacity="0.9">São Paulo</text>

          <circle cx="765" cy="315" r="2" fill="#00ffff" opacity="0.8"/>
          <text x="770" y="310" fill="#00ffff" fontSize="7" opacity="0.9">Sydney</text>
        </svg>

        {/* Grid overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        {/* Threats */}
        {threats.map((threat) => {
          const { x, y } = latLngToXY(threat.lat, threat.lng);
          return (
            <div
              key={threat.id}
              className={`absolute w-3 h-3 rounded-full ${severityColors[threat.severity]} animate-pulse cursor-pointer group`}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                boxShadow: `0 0 15px ${threat.severity === 'high' ? '#ff0000' : threat.severity === 'medium' ? '#ff9900' : '#00ff00'}`,
              }}
              title={`${threat.type} attack from ${threat.country}`}
            >
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                {threat.type} - {threat.country}
              </div>
            </div>
          );
        })}

        {/* Malaysia (center point) */}
        <div className="absolute" style={{ left: '62%', top: '38%' }}>
          <div className="relative">
            <div className="w-5 h-5 bg-primary rounded-full glow-cyan animate-pulse shadow-lg" />
            <div className="absolute inset-0 w-5 h-5 bg-primary rounded-full animate-ping opacity-40" />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs rounded-lg whitespace-nowrap border border-primary-foreground/20 shadow-lg">
              🇲🇾 Malaysia (HQ)
            </div>
          </div>
        </div>

        {/* Connection lines from threats to Malaysia */}
        {threats.slice(0, 5).map((threat) => {
          const { x, y } = latLngToXY(threat.lat, threat.lng);
          const malaysiaX = 58;
          const malaysiaY = 45;

          return (
            <svg
              key={`line-${threat.id}`}
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 1 }}
            >
              <line
                x1={`${x}%`}
                y1={`${y}%`}
                x2={`${malaysiaX}%`}
                y2={`${malaysiaY}%`}
                stroke={threat.severity === 'high' ? '#ff0000' : threat.severity === 'medium' ? '#ff9900' : '#00ff00'}
                strokeWidth="1"
                strokeDasharray="2,2"
                opacity="0.6"
                className="animate-pulse"
              />
            </svg>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span>Low Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-warning animate-pulse" />
            <span>Medium Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
            <span>High Risk</span>
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          Live threats: {threats.length} | Last update: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </Card>
  );
};

export default ThreatMap;
