import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, BookOpen, Award, Clock, TrendingUp, CheckCircle2, ChevronDown } from 'lucide-react';
import { trainingPrograms } from '@/data/index';
import { PROGRAM_CATEGORIES, PROGRAM_LEVELS, TrainingProgram } from '@/lib/index';
import { ProgramCard } from '@/components/Cards';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { IMAGES } from '@/assets/images';

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const filteredPrograms = trainingPrograms.filter((program) => {
    const categoryMatch = selectedCategory === 'all' || program.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || program.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const categories = [
    { value: 'all', label: 'Tous les Programmes' },
    { value: 'health', label: PROGRAM_CATEGORIES.health },
    { value: 'logistics', label: PROGRAM_CATEGORIES.logistics },
    { value: 'protection', label: PROGRAM_CATEGORIES.protection },
    { value: 'coordination', label: PROGRAM_CATEGORIES.coordination },
  ];

  const levels = [
    { value: 'all', label: 'Tous les Niveaux' },
    { value: 'beginner', label: PROGRAM_LEVELS.beginner },
    { value: 'intermediate', label: PROGRAM_LEVELS.intermediate },
    { value: 'advanced', label: PROGRAM_LEVELS.advanced },
  ];

  const faqs = [
    {
      question: 'Comment s\'inscrire à un programme de formation ?',
      answer: 'L\'inscription se fait en ligne via notre plateforme. Sélectionnez le programme souhaité, créez votre compte, remplissez le formulaire d\'inscription et soumettez les documents requis. Notre équipe validera votre candidature sous 48h.'
    },
    {
      question: 'Les formations sont-elles certifiantes ?',
      answer: 'Oui, tous nos programmes délivrent une certification reconnue internationalement. Vous devez compléter 80% du cours et réussir l\'évaluation finale pour obtenir votre certificat.'
    },
    {
      question: 'Quel est le format des formations ?',
      answer: 'Nos formations combinent apprentissage en ligne asynchrone, sessions live avec formateurs experts, études de cas pratiques et simulations terrain. Vous pouvez suivre à votre rythme tout en bénéficiant d\'un accompagnement personnalisé.'
    },
    {
      question: 'Y a-t-il des prérequis pour s\'inscrire ?',
      answer: 'Les prérequis varient selon le niveau du programme. Les formations débutant sont ouvertes à tous, tandis que les niveaux intermédiaire et avancé requièrent une expérience préalable dans le secteur humanitaire. Consultez la fiche détaillée de chaque programme.'
    },
    {
      question: 'Les formations sont-elles gratuites ?',
      answer: 'Oui, grâce au soutien de nos partenaires, toutes nos formations sont gratuites pour les praticiens humanitaires. Notre mission est de rendre la formation de qualité accessible à tous les acteurs du secteur.'
    },
    {
      question: 'Puis-je obtenir une bourse pour participer ?',
      answer: 'Nous offrons des bourses couvrant les frais de déplacement et d\'hébergement pour les formations en présentiel. Les candidatures sont évaluées selon des critères de mérite et de besoin. Consultez notre page dédiée aux bourses.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.TRAINING_1}
            alt="Formation humanitaire"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 text-base px-6 py-2">
              <BookOpen className="w-4 h-4 mr-2" />
              Programmes de Formation
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Développez Vos Compétences Humanitaires
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Formations certifiantes de qualité pour les praticiens humanitaires et du développement.
              Apprenez des experts, obtenez des certifications reconnues internationalement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Card className="p-6 bg-card/50 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold">250+</div>
                    <div className="text-sm text-muted-foreground">Programmes</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-accent/10">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold">45K+</div>
                    <div className="text-sm text-muted-foreground">Certifiés</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-muted-foreground">Gratuit</div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <Filter className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Filtrer les Programmes</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Catégorie</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat.value}
                      variant={selectedCategory === cat.value ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory(cat.value)}
                      className="transition-all"
                    >
                      {cat.label}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Niveau</label>
                <div className="flex flex-wrap gap-2">
                  {levels.map((lvl) => (
                    <Button
                      key={lvl.value}
                      variant={selectedLevel === lvl.value ? 'default' : 'outline'}
                      onClick={() => setSelectedLevel(lvl.value)}
                      className="transition-all"
                    >
                      {lvl.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6 text-muted-foreground">
              {filteredPrograms.length} programme{filteredPrograms.length > 1 ? 's' : ''} trouvé{filteredPrograms.length > 1 ? 's' : ''}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProgramCard program={program} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.TRAINING_2}
            alt="Certification"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <Badge className="mb-6 text-base px-6 py-2">
                <Award className="w-4 h-4 mr-2" />
                Certifications & Accréditations
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Certifications Reconnues Internationalement
              </h2>
              <p className="text-xl text-muted-foreground">
                Nos programmes sont accrédités par les principales organisations humanitaires mondiales
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 bg-card/50 backdrop-blur border-2 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Certification Professionnelle</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Chaque programme délivre une certification reconnue par les ONG internationales, agences ONU et institutions académiques. Validez vos compétences avec un certificat officiel.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur border-2 hover:border-accent/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/10 shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Standards Internationaux</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nos formations respectent les standards SPHERE, CHS et autres référentiels internationaux. Apprenez selon les meilleures pratiques du secteur humanitaire.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur border-2 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Formateurs Experts</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Apprenez auprès de praticiens expérimentés ayant géré des opérations humanitaires majeures. Bénéficiez de leur expertise terrain et de leurs retours d\'expérience.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur border-2 hover:border-accent/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/10 shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Apprentissage Flexible</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Formations en ligne à votre rythme avec sessions live, études de cas pratiques et simulations. Conciliez formation et activité professionnelle facilement.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <Badge className="mb-6 text-base px-6 py-2">
                <BookOpen className="w-4 h-4 mr-2" />
                Processus d\'Inscription
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comment S\'Inscrire ?
              </h2>
              <p className="text-xl text-muted-foreground">
                Un processus simple en 4 étapes pour commencer votre formation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  step: '01',
                  title: 'Choisissez Votre Programme',
                  description: 'Explorez notre catalogue de formations et sélectionnez le programme correspondant à vos objectifs professionnels et votre niveau d\'expérience.'
                },
                {
                  step: '02',
                  title: 'Créez Votre Compte',
                  description: 'Inscrivez-vous sur notre plateforme en quelques minutes. Remplissez votre profil professionnel et téléchargez les documents requis (CV, lettre de motivation).'
                },
                {
                  step: '03',
                  title: 'Validation de Candidature',
                  description: 'Notre équipe examine votre candidature sous 48h. Vous recevrez une confirmation par email avec les détails d\'accès à la formation et le calendrier.'
                },
                {
                  step: '04',
                  title: 'Commencez à Apprendre',
                  description: 'Accédez à votre espace de formation, suivez les modules à votre rythme, participez aux sessions live et obtenez votre certification à la fin du programme.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full bg-card/50 backdrop-blur border-2 hover:border-primary/50 transition-all">
                    <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Button size="lg" className="text-lg px-8 py-6">
                Commencer Mon Inscription
                <ChevronDown className="w-5 h-5 ml-2 rotate-[-90deg]" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.TRAINING_9}
            alt="FAQ"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Questions Fréquentes
              </h2>
              <p className="text-xl text-muted-foreground">
                Trouvez les réponses aux questions les plus courantes sur nos programmes
              </p>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-12"
            >
              <p className="text-muted-foreground mb-6">
                Vous avez d\'autres questions ? Notre équipe est là pour vous aider.
              </p>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Contactez-Nous
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}