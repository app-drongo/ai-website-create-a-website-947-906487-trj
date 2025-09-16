'use client';
import { useRouter } from 'next/navigation';
import { ChevronRight, Home, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Pageheader() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleSearch = () => {
    router.push('/features');
  };

  const handleFilters = () => {
    router.push('/contact');
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="bg-background border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link
              href="/"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Home className="size-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="size-4" />
            <Link href="/features" className="hover:text-foreground transition-colors">
              Cloud Solutions
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">Enterprise Analytics Platform</span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Advanced Analytics & Business Intelligence
              </h1>
              <p className="text-lg text-muted-foreground">
                Unlock powerful insights with our comprehensive analytics suite. From real-time
                dashboards to predictive modeling, transform your data into actionable business
                intelligence.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2" onClick={handleFilters}>
                <Filter className="size-4" />
                Configure
              </Button>
              <Button className="gap-2" onClick={handleSearch}>
                <Search className="size-4" />
                Explore
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">12</span> Analytics Modules Active
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">99.9%</span> Uptime SLA
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.9★</span> Customer satisfaction
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Real-time</span> Data processing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
