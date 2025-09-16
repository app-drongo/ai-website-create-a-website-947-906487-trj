'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Code2,
  Headphones,
  Lock,
} from 'lucide-react';

export default function Features() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/contact');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const features = [
    {
      icon: Zap,
      title: 'Real-Time Data Processing',
      description:
        'Process millions of data points instantly with our advanced cloud infrastructure and machine learning algorithms.',
      badge: 'Performance',
    },
    {
      icon: Shield,
      title: 'SOC 2 Compliance',
      description:
        'Enterprise-grade security with SOC 2 Type II certification, GDPR compliance, and zero-trust architecture.',
      badge: 'Security',
    },
    {
      icon: Smartphone,
      title: 'Native Mobile SDKs',
      description:
        'Seamless integration across iOS, Android, and web platforms with our comprehensive SDK library.',
      badge: 'Integration',
    },
    {
      icon: Globe,
      title: 'Multi-Region Deployment',
      description:
        'Deploy across 15+ global regions with automatic failover and 99.99% uptime guarantee.',
      badge: 'Infrastructure',
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics Engine',
      description:
        'AI-powered insights that forecast trends, identify opportunities, and optimize business performance.',
      badge: 'Analytics',
    },
    {
      icon: Palette,
      title: 'White-Label Solutions',
      description:
        'Complete customization with your branding, custom domains, and tailored user experiences.',
      badge: 'Customization',
    },
    {
      icon: Code2,
      title: 'GraphQL & REST APIs',
      description:
        'Comprehensive API suite with webhooks, real-time subscriptions, and extensive documentation.',
      badge: 'Developer',
    },
    {
      icon: Headphones,
      title: 'Dedicated Success Manager',
      description:
        'Personal account manager, priority support queue, and custom onboarding for enterprise clients.',
      badge: 'Support',
    },
    {
      icon: Lock,
      title: 'Zero-Knowledge Architecture',
      description:
        'End-to-end encryption ensures your sensitive data remains completely private and secure.',
      badge: 'Privacy',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise-Grade SaaS
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Built for Scale
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Advanced automation, intelligent workflows, and enterprise security features that grow
            with your business needs and technical requirements.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to transform your business operations?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePrimaryAction}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Schedule Demo
            </button>
            <button
              onClick={handleSecondaryAction}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Explore Platform
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
