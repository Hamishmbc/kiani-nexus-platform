
import { ArrowRight, TrendingUp, Shield, Crown, Gem, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const heroImageAnimation = useScrollAnimation(0.2);
  const featureHighlightsAnimation = useScrollAnimation(0.1);
  const companyLogosAnimation = useScrollAnimation(0.2);
  const aboutSectionAnimation = useScrollAnimation(0.1);
  const servicesHeaderAnimation = useScrollAnimation(0.1);
  const ctaSectionAnimation = useScrollAnimation(0.1);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavigateToContact = () => {
    navigate("/contact");
    setTimeout(() => window.scrollTo(0, 0), 100);
  };
  
  const services = [
    {
      title: "Financial Advisory & Wealth Management",
      description: "Independent FCA regulated financial advice and comprehensive wealth management solutions.",
      icon: TrendingUp,
      url: "https://www.peregrineblack.com/",
      gradient: "from-primary/20 to-accent/20",
      delay: "0ms",
      logo: "/lovable-uploads/f9d66d09-6790-4808-90e2-47b5a805ff3f.png",
      logoAlt: "Peregrine & Black logo",
      logoSize: "large" as const
    },
    {
      title: "Estate Planning",
      description: "Comprehensive estate planning services to secure your legacy and ensure seamless wealth transfer through Inheritance Made Simple.",
      icon: Shield,
      url: "https://www.inheritancemadesimple.com/",
      gradient: "from-accent/20 to-primary/20",
      delay: "100ms",
      logo: "/lovable-uploads/1af090b8-6bec-4e11-9932-0221d16d6fe2.png",
      logoAlt: "Inheritance Made Simple logo",
      logoSize: "normal" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary via-background to-muted"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center flex flex-col items-center">
            {/* Premium Profile Section */}
            <div className="mb-16 relative flex justify-center">
            <div 
              ref={heroImageAnimation.ref}
              className={`w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 relative transition-all duration-700 ${
                heroImageAnimation.isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
                <div className="absolute inset-0 luxury-gradient rounded-full blur-3xl opacity-20 animate-glow"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full animate-pulse"></div>
                <img 
                  src="/lovable-uploads/77d9eb5c-9ccd-4aaf-8e8f-2b2aa26c4777.png" 
                  alt="Sean Kiani" 
                  className="w-full h-full rounded-full object-cover border-4 border-primary/30 shadow-luxury relative z-10"
                />
              </div>
            </div>

            {/* Premium Typography */}
            <div className="max-w-5xl mx-auto mb-20 flex flex-col items-center">
              {/* Sean's Logo as Main Heading */}
              <div className="mb-12 flex justify-center">
                <img 
                  src="/lovable-uploads/01be6add-b71d-4d91-9364-ac2c21b1faa4.png" 
                  alt="Sean Kiani Logo" 
                  className="h-32 md:h-40 lg:h-48 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              
              <p className="text-2xl md:text-3xl lg:text-4xl text-primary/90 mb-8 font-light font-heading">
                Welcome
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-16 max-w-4xl mx-auto font-light">
                Tailored financial advisory solutions for the discerning investor. We integrate independent, FCA-authorised advice with strategic estate planning to empower, optimise, and safeguard your legacy for a prosperous future.
              </p>
              
              {/* Premium Feature Highlights */}
              <div 
                ref={featureHighlightsAnimation.ref}
                className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-700 ${
                  featureHighlightsAnimation.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-glow">
                    <Crown className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-lg font-semibold text-primary mb-2">Premium Advisory</p>
                  <p className="text-sm text-muted-foreground">Independent FCA regulation</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-glow">
                    <Shield className="h-10 w-10 text-accent" />
                  </div>
                  <p className="text-lg font-semibold text-primary mb-2">Estate Planning</p>
                  <p className="text-sm text-muted-foreground">Legacy protection</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-glow">
                    <Gem className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-lg font-semibold text-primary mb-2">Wealth Optimisation</p>
                  <p className="text-sm text-muted-foreground">Tailored strategies</p>
                </div>
              </div>
            </div>

            {/* Elegant Scroll Indicator */}
            <div className="flex justify-center animate-bounce">
              <div className="w-8 h-12 border-2 border-primary/40 rounded-full flex justify-center backdrop-blur-sm">
                <div className="w-1.5 h-4 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Sean Section */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8">
              <span className="text-luxury">About Sean Kiani</span>
            </h2>
            <p className="text-2xl text-primary/80 max-w-3xl mx-auto leading-relaxed font-light">
              Independent Financial Adviser & Estate Planner
            </p>
          </div>

          {/* Premium Company Logos */}
          <div 
            ref={companyLogosAnimation.ref}
            className={`flex justify-center items-center gap-12 mb-16 transition-all duration-700 ${
              companyLogosAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="group cursor-pointer" onClick={() => window.open("https://www.inheritancemadesimple.com/", '_blank')}>
              <img 
                src="/lovable-uploads/b2f11928-3c1d-42b7-b074-103d078a8208.png" 
                alt="Inheritance Made Simple" 
                className="h-24 md:h-28 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 filter brightness-110"
              />
            </div>
            <div className="group cursor-pointer" onClick={() => window.open("https://www.peregrineblack.com/", '_blank')}>
              <img 
                src="/lovable-uploads/f9d66d09-6790-4808-90e2-47b5a805ff3f.png" 
                alt="Peregrine & Black Investment Management" 
                className="h-24 md:h-28 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <div 
            ref={aboutSectionAnimation.ref}
            className={`space-y-8 transition-all duration-700 delay-200 ${
              aboutSectionAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="px-4 md:p-16">
              <div className="prose prose-lg prose-invert max-w-none text-center md:text-left">
                <p className="text-lg md:text-2xl text-foreground/90 leading-relaxed mb-8 font-light">
                  Sean brings a unique perspective to financial advisory for the discerning investor, drawing from over two decades of experience successfully guiding individuals and business owners through the complexities of wealth management, asset protection, estate planning, and strategic restructuring. This extensive experience positions him exceptionally well to support those in their prime earning and retirement years, navigating the full spectrum of financial challenges and opportunities.
                </p>
                <p className="text-lg md:text-2xl text-foreground/90 leading-relaxed mb-8 font-light">
                  With a client-centered approach, Sean delivers independent and regulated financial advice and wealth management through Peregrine and Black, a prestigious firm based in Mayfair, London. His estate planning products and services are provided through Inheritance Made Simple, a boutique estate planning agency located in Bournemouth.
                </p>
                <p className="text-lg md:text-2xl text-foreground/90 leading-relaxed font-light">
                  Sean's expertise ensures personalised strategies tailored to your distinctive needs, from optimising wealth growth to safeguarding legacies for future generations. Passionate about simplifying finance, Sean is dedicated to building enduring relationships founded on trust, transparency, and meaningful outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div 
            ref={servicesHeaderAnimation.ref}
            className={`text-center mb-20 transition-all duration-700 ${
              servicesHeaderAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8">
              <span className="text-luxury">Our Services</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 font-light">
              Premium financial solutions tailored for discerning clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-16 md:py-32 px-4">
        <div 
          ref={ctaSectionAnimation.ref}
          className={`container mx-auto max-w-5xl text-center transition-all duration-700 ${
            ctaSectionAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <Card className="bg-secondary border-primary/20 backdrop-blur-xl shadow-luxury relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
            <CardContent className="p-6 md:p-16 lg:p-20 relative z-10">
              <div className="mb-6 md:mb-8">
                <Award className="h-12 w-12 md:h-16 md:w-16 mx-auto text-primary mb-4 md:mb-6" />
              </div>
              <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight">
                <span className="text-primary">Book your complimentary meeting with Sean in Mayfair, Bournemouth or online</span>
              </h3>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 hover:shadow-glow text-secondary px-6 py-6 md:px-12 md:py-6 text-sm md:text-xl font-semibold transition-all duration-500 transform hover:scale-105 shadow-elegant border border-primary/20 w-full md:w-auto min-h-[80px] md:min-h-[60px] flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2"
                onClick={handleNavigateToContact}
              >
                <span className="text-center leading-tight">
                  Book your complimentary<br className="md:hidden" />
                  <span className="md:ml-1">meeting now</span>
                </span>
                <ArrowRight className="h-4 w-4 md:h-6 md:w-6 flex-shrink-0" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
