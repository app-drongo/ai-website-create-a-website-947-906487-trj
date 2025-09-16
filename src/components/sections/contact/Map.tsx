'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Navigation,
  Home,
  Coffee,
  ShoppingBag,
  Train,
  Utensils,
  Trees,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Map() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/features');
  };
  // ACTION_PLACEHOLDER_END

  const datacenters = [
    { id: 1, name: 'US-East-1', latency: '12ms', type: 'Primary', lat: 34.0522, lng: -118.2437 },
    { id: 2, name: 'US-West-2', latency: '8ms', type: 'Edge', lat: 34.0622, lng: -118.2537 },
    { id: 3, name: 'EU-Central', latency: '45ms', type: 'Regional', lat: 34.0422, lng: -118.2337 },
  ];

  const infrastructure = [
    { icon: Coffee, name: 'CDN Nodes', count: 127 },
    { icon: Utensils, name: 'API Endpoints', count: 28 },
    { icon: ShoppingBag, name: 'Load Balancers', count: 8 },
    { icon: Train, name: 'Edge Servers', count: 34 },
    { icon: Trees, name: 'Backup Sites', count: 15 },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Global Infrastructure Network
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our worldwide data centers and edge locations for optimal performance
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative aspect-[16/10] bg-muted">
                {/* Placeholder Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/20">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=750&fit=crop"
                    alt="Global network map"
                    className="w-full h-full object-cover opacity-30"
                  />
                </div>

                {/* Map Overlay Elements */}
                <div className="absolute inset-0">
                  {/* Data Center Markers */}
                  <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-primary hover:bg-primary/90"
                      >
                        <Home className="size-5" />
                      </Button>
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Card className="p-2 whitespace-nowrap">
                          <p className="text-xs font-semibold">US-East-1</p>
                          <p className="text-xs text-muted-foreground">12ms latency</p>
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 right-1/3">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-accent/20 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-accent hover:bg-accent/90"
                      >
                        <Home className="size-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="absolute bottom-1/3 left-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-secondary/20 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-secondary hover:bg-secondary/90"
                      >
                        <Home className="size-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button size="icon" variant="secondary" className="shadow-lg">
                    <Navigation className="size-4" />
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="size-3 bg-primary rounded-full" />
                      <span>Primary DC</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="size-3 bg-accent rounded-full" />
                      <span>Edge Node</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="size-3 bg-secondary rounded-full" />
                      <span>Regional</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Data Center List */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="size-5 text-primary" />
                  Active Data Centers
                </h3>
                <div className="space-y-3">
                  {datacenters.map(dc => (
                    <div
                      key={dc.id}
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      <div>
                        <p className="font-medium text-sm">{dc.name}</p>
                        <p className="text-xs text-muted-foreground">{dc.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm">{dc.latency}</p>
                        <Badge variant="secondary" className="text-xs">
                          Online
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Infrastructure Stats */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Infrastructure Overview</h3>
                <div className="space-y-3">
                  {infrastructure.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-muted flex items-center justify-center">
                          <item.icon className="size-5 text-muted-foreground" />
                        </div>
                        <span className="text-sm font-medium">{item.name}</span>
                      </div>
                      <Badge variant="outline">{item.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Button onClick={handlePrimaryAction} className="w-full" size="lg">
              Deploy Your App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
