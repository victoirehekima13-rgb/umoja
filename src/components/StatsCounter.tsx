import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';
import type { ImpactStat } from '@/lib';

interface StatsCounterProps {
  stats: ImpactStat[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  users: Users,
  globe: Globe,
  award: Award,
  trending: TrendingUp,
};

function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest).toLocaleString('fr-FR')}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, suffix, prefix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export function StatsCounter({ stats }: StatsCounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {stats.map((stat, index) => {
        const IconComponent = iconMap[stat.icon] || Users;
        
        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={hasAnimated ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 25,
              delay: index * 0.08,
            }}
            className="relative group"
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-6 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:scale-105 hover:border-primary/40 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center group-hover:from-primary/25 group-hover:to-accent/25 transition-all duration-300 group-hover:scale-110">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                
                <div className="space-y-1.5">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix || ''} 
                      prefix={stat.prefix || ''}
                    />
                  </div>
                  
                  <h3 className="text-sm font-semibold text-foreground leading-tight">
                    {stat.label}
                  </h3>
                  
                  <p className="text-xs text-muted-foreground leading-relaxed hidden lg:block">
                    {stat.description}
                  </p>
                </div>
              </div>
              
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
