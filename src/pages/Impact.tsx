import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Award, Users, Globe2, Heart, Target, CheckCircle2 } from 'lucide-react';
import { StatsCounter } from '@/components/StatsCounter';
import { TestimonialCard } from '@/components/Cards';
import { impactStats, testimonials } from '@/data/index';
import { IMAGES } from '@/assets/images';
import { springPresets, fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

export default function Impact() {
  const successStories = [
    {
      id: 'story-1',
      title: 'Réponse d\'Urgence au Sahel',
      location: 'Mali, Niger, Burkina Faso',
      year: '2025',
      image: IMAGES.HUMANITARIAN_WORK_3,
      description: 'Formation de 2,500 acteurs humanitaires locaux pour une réponse coordonnée aux crises alimentaires et sécuritaires.',
      results: [
        '2,500 professionnels formés',
        '15 organisations partenaires',
        '1.2M bénéficiaires atteints',
        '85% taux de satisfaction'
      ]
    },
    {
      id: 'story-2',
      title: 'Programme WASH Régional',
      location: 'Afrique de l\'Est',
      year: '2024-2025',
      image: IMAGES.TEAM_1,
      description: 'Renforcement des capacités en eau, hygiène et assainissement pour 180 ingénieurs et techniciens humanitaires.',
      results: [
        '180 ingénieurs certifiés',
        '45 systèmes d\'eau installés',
        '500K personnes desservies',
        '92% taux de réussite'
      ]
    },
    {
      id: 'story-3',
      title: 'Protection des Réfugiés',
      location: 'Moyen-Orient',
      year: '2025',
      image: IMAGES.TEAM_8,
      description: 'Formation spécialisée en protection pour 320 travailleurs humanitaires intervenant auprès des populations déplacées.',
      results: [
        '320 spécialistes formés',
        '8 camps de réfugiés couverts',
        '150K réfugiés protégés',
        '95% impact positif mesuré'
      ]
    }
  ];

  const partners = [
    { name: 'Nations Unies', category: 'Agences ONU' },
    { name: 'Croix-Rouge', category: 'Mouvement International' },
    { name: 'MSF', category: 'ONG Médicale' },
    { name: 'Oxfam', category: 'ONG Développement' },
    { name: 'UNICEF', category: 'Agence ONU' },
    { name: 'PAM', category: 'Agence ONU' },
    { name: 'HCR', category: 'Agence ONU' },
    { name: 'ACF', category: 'ONG Nutrition' },
    { name: 'Save the Children', category: 'ONG Protection' },
    { name: 'CARE International', category: 'ONG Développement' },
    { name: 'IRC', category: 'ONG Urgence' },
    { name: 'World Vision', category: 'ONG Développement' }
  ];

  const trainingEvolution = [
    { year: '2020', formations: 3200, participants: 8500 },
    { year: '2021', formations: 4100, participants: 11200 },
    { year: '2022', formations: 5300, participants: 15800 },
    { year: '2023', formations: 6800, participants: 21400 },
    { year: '2024', formations: 8500, participants: 28900 },
    { year: '2025', formations: 10200, participants: 37600 }
  ];

  const interventionZones = [
    { region: 'Afrique Subsaharienne', countries: 45, color: 'from-primary/80 to-primary' },
    { region: 'Moyen-Orient', countries: 18, color: 'from-accent/80 to-accent' },
    { region: 'Asie-Pacifique', countries: 32, color: 'from-chart-3/80 to-chart-3' },
    { region: 'Amérique Latine', countries: 15, color: 'from-chart-4/80 to-chart-4' },
    { region: 'Europe de l\'Est', countries: 10, color: 'from-chart-5/80 to-chart-5' }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6"
            >
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Impact Global Mesuré</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent leading-tight">
              Notre Impact dans le Monde
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Depuis 2015, nous formons des milliers de professionnels humanitaires qui transforment des vies à travers le monde. Découvrez l'impact mesurable de nos programmes de formation.
            </p>
          </motion.div>

          <StatsCounter stats={impactStats} />
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Présence Mondiale</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Zones d'Intervention</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une couverture globale pour répondre aux besoins humanitaires partout où ils se manifestent
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {interventionZones.map((zone) => (
              <motion.div
                key={zone.region}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl bg-card p-8 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${zone.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <Globe2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{zone.region}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">{zone.countries}</span>
                    <span className="text-muted-foreground">pays couverts</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Carte Interactive</h3>
                <p className="text-muted-foreground">Visualisation de notre portée mondiale</p>
              </div>
            </div>
            <div className="aspect-video rounded-2xl bg-muted/50 border border-border flex items-center justify-center">
              <div className="text-center">
                <Globe2 className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">Carte interactive des zones d'intervention</p>
                <p className="text-sm text-muted-foreground/70 mt-2">120+ pays • 5 continents • 45,000+ professionnels formés</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-3/10 text-chart-3 mb-6">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Histoires de Réussite</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des interventions qui font la différence sur le terrain
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {successStories.map((story) => (
              <motion.div
                key={story.id}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{story.location}</span>
                    <span className="mx-2">•</span>
                    <span>{story.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {story.description}
                  </p>
                  <div className="space-y-2">
                    {story.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Croissance Continue</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Évolution des Formations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une croissance soutenue qui témoigne de notre impact et de la confiance de nos partenaires
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="bg-card rounded-3xl p-8 md:p-12 border border-border"
          >
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  Formations Dispensées
                </h3>
                <div className="space-y-4">
                  {trainingEvolution.map((year) => (
                    <div key={year.year} className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                      <span className="font-semibold">{year.year}</span>
                      <span className="text-2xl font-bold text-primary">{year.formations.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  Participants Formés
                </h3>
                <div className="space-y-4">
                  {trainingEvolution.map((year) => (
                    <div key={year.year} className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                      <span className="font-semibold">{year.year}</span>
                      <span className="text-2xl font-bold text-accent">{year.participants.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="text-4xl font-bold text-primary mb-2">+219%</div>
                <div className="text-sm text-muted-foreground">Croissance formations</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5">
                <div className="text-4xl font-bold text-accent mb-2">+342%</div>
                <div className="text-sm text-muted-foreground">Croissance participants</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-chart-3/10 to-chart-3/5">
                <div className="text-4xl font-bold text-chart-3 mb-2">96%</div>
                <div className="text-sm text-muted-foreground">Taux de satisfaction</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-chart-4/10 to-chart-4/5">
                <div className="text-4xl font-bold text-chart-4 mb-2">89%</div>
                <div className="text-sm text-muted-foreground">Taux de certification</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Témoignages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Voix du Terrain</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ce que disent les professionnels humanitaires formés par Humanitarian Global
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={staggerItem}>
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Partenariats Stratégiques</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Partenaires</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaboration avec les principales organisations humanitaires mondiales
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl bg-card p-6 border border-border hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground">{partner.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-8 px-8 py-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
              <div>
                <div className="text-4xl font-bold text-primary mb-1">180+</div>
                <div className="text-sm text-muted-foreground">Organisations</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-4xl font-bold text-accent mb-1">45+</div>
                <div className="text-sm text-muted-foreground">Pays Partenaires</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-4xl font-bold text-chart-3 mb-1">15</div>
                <div className="text-sm text-muted-foreground">Années d'Expérience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-accent p-12 md:p-16 text-center"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Rejoignez Notre Communauté Mondiale
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Faites partie des 45,000+ professionnels humanitaires qui transforment des vies grâce à nos formations certifiées.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#programs"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-all duration-200 hover:scale-105"
                >
                  Découvrir les Formations
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 text-white font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-200 hover:scale-105"
                >
                  Devenir Partenaire
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
