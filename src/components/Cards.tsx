import { motion } from "framer-motion";
import { Clock, Award, BookOpen, Download, Eye, Calendar, FileText, Video, Wrench, Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrainingProgram, Resource, Testimonial, PROGRAM_CATEGORIES, RESOURCE_TYPES, PROGRAM_LEVELS } from "@/lib/index";
import { hoverLift } from "@/lib/motion";

interface ProgramCardProps {
  program: TrainingProgram;
}

export function ProgramCard({ program }: ProgramCardProps) {
  const categoryColors = {
    health: "bg-accent/10 text-accent border-accent/20",
    logistics: "bg-primary/10 text-primary border-primary/20",
    protection: "bg-secondary/10 text-secondary-foreground border-secondary/20",
    coordination: "bg-muted text-muted-foreground border-border",
  };

  const levelColors = {
    beginner: "bg-green-500/10 text-green-700 dark:text-green-400",
    intermediate: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
    advanced: "bg-red-500/10 text-red-700 dark:text-red-400",
  };

  return (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="h-full"
    >
      <Card className="h-full overflow-hidden backdrop-blur-sm bg-card/95 border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
        <div className="relative h-48 overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
          <div className="absolute top-4 right-4 flex gap-2">
            {program.certification && (
              <Badge className="bg-primary text-primary-foreground">
                <Award className="w-3 h-3 mr-1" />
                Certifié
              </Badge>
            )}
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <Badge className={categoryColors[program.category]}>
              {PROGRAM_CATEGORIES[program.category]}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <div className="flex items-start justify-between gap-2 mb-2">
            <CardTitle className="text-xl font-semibold line-clamp-2">
              {program.title}
            </CardTitle>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {program.duration}
            </div>
            <Badge variant="outline" className={levelColors[program.level]}>
              {PROGRAM_LEVELS[program.level]}
            </Badge>
          </div>
        </CardHeader>

        <CardContent>
          <CardDescription className="line-clamp-3 mb-4">
            {program.description}
          </CardDescription>

          {program.objectives && program.objectives.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Objectifs clés:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {program.objectives.slice(0, 3).map((objective, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="line-clamp-1">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex items-center justify-between pt-4 border-t">
          {program.price && (
            <p className="text-lg font-semibold text-primary">{program.price}</p>
          )}
          {program.startDate && (
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {program.startDate}
            </p>
          )}
          <Button size="sm" className="ml-auto">
            En savoir plus
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const typeIcons = {
    guide: FileText,
    report: FileText,
    'case-study': BookOpen,
    video: Video,
    tool: Wrench,
  };

  const TypeIcon = typeIcons[resource.type];

  const typeColors = {
    guide: "bg-primary/10 text-primary",
    report: "bg-accent/10 text-accent",
    'case-study': "bg-secondary/10 text-secondary-foreground",
    video: "bg-destructive/10 text-destructive",
    tool: "bg-muted text-muted-foreground",
  };

  return (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="h-full"
    >
      <Card className="h-full overflow-hidden backdrop-blur-sm bg-card/95 border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
        <div className="relative h-40 overflow-hidden">
          <img
            src={resource.image}
            alt={resource.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge className={typeColors[resource.type]}>
              <TypeIcon className="w-3 h-3 mr-1" />
              {RESOURCE_TYPES[resource.type]}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-lg font-semibold line-clamp-2">
            {resource.title}
          </CardTitle>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {resource.publishDate}
            {resource.fileSize && (
              <>
                <span>•</span>
                <span>{resource.fileSize}</span>
              </>
            )}
            <span>•</span>
            <span>{resource.language}</span>
          </div>
        </CardHeader>

        <CardContent>
          <CardDescription className="line-clamp-3 mb-3">
            {resource.description}
          </CardDescription>
          <Badge variant="outline" className="text-xs">
            {resource.category}
          </Badge>
        </CardContent>

        <CardFooter className="flex gap-2 pt-4 border-t">
          {resource.viewUrl && (
            <Button variant="outline" size="sm" className="flex-1">
              <Eye className="w-4 h-4 mr-2" />
              Voir
            </Button>
          )}
          {resource.downloadUrl && (
            <Button size="sm" className="flex-1">
              <Download className="w-4 h-4 mr-2" />
              Télécharger
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="h-full"
    >
      <Card className="h-full backdrop-blur-sm bg-card/95 border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/20">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg font-semibold">
                {testimonial.name}
              </CardTitle>
              <p className="text-sm text-muted-foreground line-clamp-1">
                {testimonial.role}
              </p>
              <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                <Building2 className="w-3 h-3" />
                <span className="line-clamp-1">{testimonial.organization}</span>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <blockquote className="relative">
            <span className="absolute -top-2 -left-2 text-4xl text-primary/20 font-serif">"</span>
            <p className="text-muted-foreground italic pl-4 line-clamp-4">
              {testimonial.content}
            </p>
          </blockquote>
          <div className="mt-4 pt-4 border-t">
            <p className="text-xs text-muted-foreground">
              Pays: <span className="text-foreground font-medium">{testimonial.country}</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
