import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Globe2, Users, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Globe3D } from '@/components/Globe3D';
import { StatsCounter } from '@/components/StatsCounter';
import { ProgramCard, TestimonialCard } from '@/components/Cards';
import { trainingPrograms, impactStats, testimonials } from '@/data/index';
import { ROUTE_PATHS } from '@/lib/index';
import { IMAGES } from '@/assets/images';
import { Button } from '@/components/ui/button';

export default function Home() {
  const featuredPrograms = trainingPrograms.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="w-full">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Globe3D className="w-full h-full" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70 z-10" />
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Humanitarian Global
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Centre Mondial de Formation et Ressources Humanitaires
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Développez vos compétences pour faire la différence dans les crises mondiales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to={ROUTE_PATHS.PROGRAMS}>
                  Explorer les Formations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to={ROUTE_PATHS.CONTACT}>
                  Nous Contacter
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Notre Mission</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Humanitarian Global est le centre de référence mondial pour la formation et le développement des compétences des praticiens humanitaires. Nous offrons des programmes de formation de qualité, des ressources essentielles et un réseau mondial pour renforcer l'efficacité de l'action humanitaire.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: BookOpen,
                title: 'Formations Certifiées',
                description: 'Plus de 250 programmes de formation spécialisés couvrant tous les aspects de l\'action humanitaire, avec certifications reconnues internationalement.'
              },
              {
                icon: Globe2,
                title: 'Portée Mondiale',
                description: 'Présence dans 120+ pays avec des partenariats stratégiques avec les principales organisations humanitaires et agences des Nations Unies.'
              },
              {
                icon: Users,
                title: 'Communauté d\'Experts',
                description: '45,000+ professionnels formés qui constituent un réseau mondial d\'expertise et de partage de connaissances en action humanitaire.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Programmes Phares</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez nos formations les plus demandées, conçues par des experts de terrain pour répondre aux défis humanitaires actuels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProgramCard program={program} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to={ROUTE_PATHS.PROGRAMS}>
                Voir Tous les Programmes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Notre Impact Global</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des chiffres qui témoignent de notre engagement à renforcer les capacités humanitaires mondiales.
            </p>
          </motion.div>

          <StatsCounter stats={impactStats} />

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to={ROUTE_PATHS.IMPACT}>
                Découvrir Notre Impact
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Témoignages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez comment nos formations transforment les pratiques professionnelles sur le terrain.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Rejoignez Notre Communauté</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Développez vos compétences, obtenez des certifications reconnues et faites partie d'un réseau mondial de professionnels humanitaires engagés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to={ROUTE_PATHS.PROGRAMS}>
                  Commencer Maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link to={ROUTE_PATHS.RESOURCES}>
                  Explorer les Ressources
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Pourquoi Choisir Humanitarian Global?</h2>
              <div className="space-y-6">
                {[
                  'Formations développées par des experts de terrain avec expérience concrète',
                  'Certifications reconnues par les principales organisations humanitaires',
                  'Accès gratuit à plus de 500 ressources et outils professionnels',
                  'Réseau mondial de 45,000+ praticiens humanitaires',
                  'Approche pédagogique innovante avec études de cas réelles',
                  'Support continu et mentorat par des professionnels expérimentés'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.GLOBAL_NETWORK_3}
                  alt="Réseau mondial humanitaire"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
                <div className="text-5xl font-bold mb-2">120+</div>
                <div className="text-lg">Pays Couverts</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}