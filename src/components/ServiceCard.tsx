
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  url: string;
  gradient: string;
  delay: string;
  logo?: string;
  logoAlt?: string;
  logoSize?: "normal" | "large";
}

const ServiceCard = ({ title, description, icon: Icon, url, gradient, delay, logo, logoAlt, logoSize = "normal" }: ServiceCardProps) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const logoSizeClass = logoSize === "large" ? "h-48 md:h-56" : "h-24 md:h-28";
  const containerSizeClass = logoSize === "large" ? "w-56 h-56 md:w-64 md:h-64" : "w-32 h-32 md:w-36 md:h-36";
  const paddingClass = logoSize === "large" ? "px-6 py-1" : "p-6";

  return (
    <Card 
      className="group bg-card/40 border-border/30 hover:border-primary/40 backdrop-blur-xl transition-all duration-700 hover:scale-105 cursor-pointer animate-fade-in shadow-elegant hover:shadow-luxury"
      style={{ animationDelay: delay }}
      onClick={handleClick}
    >
      <CardContent className="p-10 md:p-12 relative overflow-hidden">
        {/* Premium Background Gradient Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Premium Logo Container */}
        <div className={`${containerSizeClass} rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm ${paddingClass} mb-8 group-hover:scale-110 group-hover:shadow-glow transition-all duration-500 flex items-center justify-center border border-primary/20`}>
          {logo ? (
            <img 
              src={logo} 
              alt={logoAlt || title} 
              className={`${logoSizeClass} w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105`}
            />
          ) : (
            <Icon className="w-full h-full text-primary" />
          )}
        </div>

        {/* Premium Content */}
        <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-foreground mb-6 group-hover:text-luxury transition-all duration-500">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-8 leading-relaxed text-lg group-hover:text-foreground/90 transition-colors duration-500">
          {description}
        </p>

        {/* Premium Action Button */}
        <Button 
          variant="outline" 
          className="w-full border-primary/30 text-primary hover:luxury-gradient hover:border-primary/50 hover:text-secondary-foreground transition-all duration-500 group-hover:shadow-glow font-semibold py-3"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          Explore Services
          <ExternalLink className="ml-2 h-5 w-5" />
        </Button>

        {/* Premium Hover Effect Overlay */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-tr-full"></div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
