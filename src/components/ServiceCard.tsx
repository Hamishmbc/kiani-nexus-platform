
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
}

const ServiceCard = ({ title, description, icon: Icon, url, gradient, delay, logo, logoAlt }: ServiceCardProps) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card 
      className="group bg-slate-800/50 border-slate-700 hover:border-slate-600 backdrop-blur-lg transition-all duration-500 hover:scale-105 cursor-pointer animate-fade-in"
      style={{ animationDelay: delay }}
      onClick={handleClick}
    >
      <CardContent className="p-8 relative overflow-hidden">
        {/* Background Gradient Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        {/* Logo */}
        <div className={`${title === 'Financial Advisory & Wealth Management' ? 'w-80 h-80' : 'w-40 h-40'} rounded-2xl bg-white/10 backdrop-blur-sm ${title === 'Financial Advisory & Wealth Management' ? 'p-2' : 'p-6'} mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
          {logo ? (
            <img 
              src={logo} 
              alt={logoAlt || title} 
              className="w-full h-full object-contain"
            />
          ) : (
            <Icon className="w-full h-full text-white" />
          )}
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
          {description}
        </p>

        {/* Action Button */}
        <Button 
          variant="outline" 
          className="w-full border-slate-600 text-slate-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:border-blue-500/50 hover:text-white transition-all duration-300 group-hover:shadow-lg"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          Learn More
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>

        {/* Hover Effect Overlay */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
