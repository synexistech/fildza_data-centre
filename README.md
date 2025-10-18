# Fildza Data Centre - Cyber Defense Dashboard

A modern web application for monitoring data centre infrastructure and cyber security operations.

## Features

- **Real-time Monitoring**: Live dashboards for server performance, GPU utilization, and network traffic
- **Cyber Defense SOC**: Threat detection, alert logging, and global threat mapping
- **GPU Node Management**: Deploy and monitor GPU instances for AI/ML workloads
- **Responsive Design**: Optimized for desktop and mobile devices

## Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **UI Framework**: shadcn/ui, Tailwind CSS
- **Charts**: Recharts
- **Routing**: React Router DOM
- **State Management**: React Query

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fildza-data-centre-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navigation.tsx  # Main navigation
│   ├── StatusCard.tsx  # Dashboard status cards
│   ├── ThreatMap.tsx   # Global threat visualization
│   └── AlertLog.tsx    # Security alert feed
├── pages/              # Route components
│   ├── Index.tsx       # Landing page
│   ├── DataCentre.tsx  # Infrastructure dashboard
│   └── CyberDefense.tsx # Security operations center
├── lib/                # Utilities and configurations
└── assets/             # Static assets
```

## Deployment

The application can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## License

This project is private and proprietary to Fildza Data Centre.
