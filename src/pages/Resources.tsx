import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, Eye, Filter, FileText, Video, BookOpen, FileBarChart, Wrench } from 'lucide-react';
import { resources } from '@/data/index';
import { RESOURCE_TYPES } from '@/lib/index';
import { Resource } from '@/lib/index';
import { ResourceCard } from '@/components/Cards';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { IMAGES } from '@/assets/images';

const typeIcons: Record<Resource['type'], typeof FileText> = {
  guide: BookOpen,
  report: FileBarChart,
  'case-study': FileText,
  video: Video,
  tool: Wrench,
};

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<Resource['type'] | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = new Set(resources.map(r => r.category));
    return ['all', ...Array.from(cats)];
  }, []);

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesSearch = 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = selectedType === 'all' || resource.type === selectedType;
      const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
      
      return matchesSearch && matchesType && matchesCategory;
    });
  }, [searchQuery, selectedType, selectedCategory]);

  return (
    <div className="min-h-screen">
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.GLOBAL_NETWORK_2} 
            alt="Ressources humanitaires" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent/8 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="mb-6 text-base px-6 py-2.5 rounded-full border border-accent/20 bg-accent/10" variant="secondary">
                <BookOpen className="w-4 h-4 mr-2" />
                Bibliothèque de Ressources
              </Badge>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              Centre de Ressources Humanitaires
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Accédez à notre collection complète de guides pratiques, rapports, études de cas, vidéos de formation et outils pour praticiens humanitaires. Toutes nos ressources sont disponibles gratuitement.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Rechercher des ressources..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 h-12 text-lg"
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">Type:</span>
                  </div>
                  <Button
                    variant={selectedType === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedType('all')}
                  >
                    Tous
                  </Button>
                  {Object.entries(RESOURCE_TYPES).map(([key, label]) => {
                    const Icon = typeIcons[key as Resource['type']];
                    return (
                      <Button
                        key={key}
                        variant={selectedType === key ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedType(key as Resource['type'])}
                        className="gap-2"
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        {label as string}
                      </Button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-sm font-medium text-muted-foreground">Catégorie:</span>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'secondary' : 'ghost'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category === 'all' ? 'Toutes' : category}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 flex items-center justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {filteredResources.length} {filteredResources.length === 1 ? 'Ressource Trouvée' : 'Ressources Trouvées'}
                </h2>
                <p className="text-muted-foreground">
                  {selectedType !== 'all' && `Type: ${RESOURCE_TYPES[selectedType]} • `}
                  {selectedCategory !== 'all' && `Catégorie: ${selectedCategory}`}
                </p>
              </div>
            </motion.div>

            {filteredResources.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Aucune ressource trouvée</h3>
                <p className="text-muted-foreground mb-6">
                  Essayez de modifier vos critères de recherche ou de filtrage
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedType('all');
                    setSelectedCategory('all');
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredResources.map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <ResourceCard resource={resource} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'une Ressource Spécifique ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Notre équipe peut vous aider à trouver les ressources adaptées à vos besoins ou développer du contenu personnalisé pour votre organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Download className="w-5 h-5" />
                Demander une Ressource
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Eye className="w-5 h-5" />
                Parcourir le Catalogue Complet
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Formats Disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border/50 text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Guides Pratiques</h3>
                <p className="text-muted-foreground">
                  Manuels détaillés et check-lists opérationnelles pour une mise en œuvre immédiate
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border/50 text-center">
                <Video className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Vidéos de Formation</h3>
                <p className="text-muted-foreground">
                  Contenus visuels et démonstrations pratiques pour un apprentissage interactif
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border/50 text-center">
                <Wrench className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-2">Outils Terrain</h3>
                <p className="text-muted-foreground">
                  Applications mobiles et formulaires pour faciliter le travail sur le terrain
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
