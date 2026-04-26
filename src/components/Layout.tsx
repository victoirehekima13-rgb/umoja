import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { SiFacebook, SiLinkedin, SiX } from 'react-icons/si';
import { ROUTE_PATHS } from '@/lib/index';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { path: ROUTE_PATHS.HOME, label: 'Accueil' },
    { path: ROUTE_PATHS.PROGRAMS, label: 'Programmes' },
    { path: ROUTE_PATHS.IMPACT, label: 'Impact' },
    { path: ROUTE_PATHS.RESOURCES, label: 'Ressources' },
    { path: ROUTE_PATHS.CONTACT, label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-border'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to={ROUTE_PATHS.HOME} className="flex items-center gap-3 group">
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <Globe className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Humanitarian Global
                </span>
                <span className="text-xs text-muted-foreground">Formation & Ressources</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-foreground hover:bg-muted hover:text-primary'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link to={ROUTE_PATHS.CONTACT}>S'inscrire</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to={ROUTE_PATHS.PROGRAMS}>Explorer</Link>
              </Button>
            </div>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-3 pb-6 border-b border-border">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-foreground">Umoja Humanitarian Action</span>
                      <span className="text-xs text-muted-foreground">Formation & Ressources</span>
                    </div>
                  </div>

                  <nav className="flex flex-col gap-2">
                    {navigationItems.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                            isActive
                              ? 'bg-primary text-primary-foreground shadow-md'
                              : 'text-foreground hover:bg-muted hover:text-primary'
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </nav>

                  <div className="flex flex-col gap-3 pt-6 border-t border-border">
                    <Button variant="outline" asChild onClick={() => setMobileMenuOpen(false)}>
                      <Link to={ROUTE_PATHS.CONTACT}>S'inscrire</Link>
                    </Button>
                    <Button asChild onClick={() => setMobileMenuOpen(false)}>
                      <Link to={ROUTE_PATHS.PROGRAMS}>Explorer les Programmes</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      <main className="flex-1 pt-20">{children}</main>

      <footer className="bg-card border-t border-border mt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-foreground">Humanitarian Global</span>
                  <span className="text-xs text-muted-foreground">Formation & Ressources</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Centre mondial de formation et de ressources pour les praticiens humanitaires et du développement.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
                >
                  <SiFacebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
                >
                  <SiX className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
                >
                  <SiLinkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Programmes</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to={ROUTE_PATHS.PROGRAMS}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Formation Santé
                  </Link>
                </li>
                <li>
                  <Link
                    to={ROUTE_PATHS.PROGRAMS}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Logistique Humanitaire
                  </Link>
                </li>
                <li>
                  <Link
                    to={ROUTE_PATHS.PROGRAMS}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Protection & Droits
                  </Link>
                </li>
                <li>
                  <Link
                    to={ROUTE_PATHS.PROGRAMS}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Coordination de Crise
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Email:</span>
                  <br />
                  contact@umojahumaction.org
                </li>
                <li className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Téléphone:</span>
                  <br />
                  +243 978 261 544
                </li>
                <li className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Adresse:</span>
                  <br />
                  Bukavu, RD Congo
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2026 Umoja Humanitarian Action. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Politique de Confidentialité
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Conditions d'Utilisation
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
