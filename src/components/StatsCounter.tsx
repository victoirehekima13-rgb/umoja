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
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => {
        const IconComponent = iconMap[stat.icon] || Users;
        
        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 40 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 35,
              delay: index * 0.1,
            }}
            className="relative group"
          >
            <div className="bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/30">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix || ''} 
                      prefix={stat.prefix || ''}
                    />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
