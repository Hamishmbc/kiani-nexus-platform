
import { ArrowRight, TrendingUp, Shield, FileText, Brain, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  
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
      gradient: "from-blue-600 to-purple-600",
      delay: "0ms",
      logo: "/lovable-uploads/f9d66d09-6790-4808-90e2-47b5a805ff3f.png",
      logoAlt: "Peregrine & Black logo"
    },
    {
      title: "Estate Planning",
      description: "Comprehensive estate planning services to secure your legacy and ensure seamless wealth transfer through Inheritance Made Simple.",
      icon: Shield,
      url: "https://www.inheritancemadesimple.com/",
      gradient: "from-emerald-500 to-teal-600",
      delay: "100ms",
      logo: "/lovable-uploads/1af090b8-6bec-4e11-9932-0221d16d6fe2.png",
      logoAlt: "Inheritance Made Simple logo"
    },
    {
      title: "AI Integration",
      description: "Cutting-edge AI integration services to transform and optimize your financial processes through advanced technology solutions.",
      icon: Brain,
      url: "https://sumlii.com/",
      gradient: "from-purple-500 to-pink-500",
      delay: "200ms",
      logo: "/lovable-uploads/d833d486-4f8d-4357-b5e1-9b271c3ddd8b.png",
      logoAlt: "Sumlii logo"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section with Large Halo Image of Sean */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center">
            {/* Large Halo Image */}
            <div className="mb-12 relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
                <img 
                  src="/lovable-uploads/77d9eb5c-9ccd-4aaf-8e8f-2b2aa26c4777.png" 
                  alt="Sean Kiani" 
                  className="w-full h-full rounded-full object-cover border-8 border-white/20 shadow-2xl relative z-10 backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Welcome Text */}
            <div className="max-w-4xl mx-auto mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Sean Kiani
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-blue-300 mb-8 font-light">
                Welcome
              </p>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                Comprehensive financial solutions that seamlessly integrate independent FCA-authorised advice, strategic estate planning, and cutting-edge AI technology to safeguard and optimise your wealth across the global financial ecosystem.
              </p>
              
              {/* Key Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="h-8 w-8 text-blue-400" />
                  </div>
                  <p className="text-sm font-semibold text-slate-300">Independent Advice</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-8 w-8 text-emerald-400" />
                  </div>
                  <p className="text-sm font-semibold text-slate-300">AI Integrated</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-purple-400" />
                  </div>
                  <p className="text-sm font-semibold text-slate-300">360° Solutions</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-8 w-8 text-orange-400" />
                  </div>
                  <p className="text-sm font-semibold text-slate-300">24/7 Support</p>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Sean Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/50 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Sean Kiani
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Independent Financial Adviser & Estate Planner
            </p>
          </div>

          {/* Company Logos */}
          <div className="flex justify-center items-center gap-8 mb-12">
            <img 
              src="/lovable-uploads/b2f11928-3c1d-42b7-b074-103d078a8208.png" 
              alt="Inheritance Made Simple" 
              className="h-20 md:h-24 w-auto object-contain opacity-90 cursor-pointer hover:opacity-100 transition-opacity filter brightness-110"
              onClick={() => window.open("https://www.inheritancemadesimple.com/", '_blank')}
            />
            <img 
              src="/lovable-uploads/f9d66d09-6790-4808-90e2-47b5a805ff3f.png" 
              alt="Peregrine & Black Investment Management" 
              className="h-20 md:h-24 w-auto object-contain opacity-90 cursor-pointer hover:opacity-100 transition-opacity"
              onClick={() => window.open("https://www.peregrineblack.com/", '_blank')}
            />
          </div>

          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-lg">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
                  Sean Kiani brings a unique perspective to financial planning, having spent over two decades guiding individuals and business owners through complex matters of asset protection, strategic restructuring, business recovery, and estate planning. This extensive background, coupled with his recent transition into regulated financial advice, positions Sean exceptionally well to assist businesses and individuals across the entire financial ecosystem.
                </p>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
                  With a client-centered approach, Sean delivers independent and regulated financial advice and wealth management through his partnership with Peregrine and Black, a prestigious firm based in Mayfair, London. His estate planning products and services are provided through Inheritance Made Simple, a boutique estate planning agency located in Bournemouth.
                </p>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                  Sean's expertise ensures personalised strategies that address your unique needs, from optimising wealth growth to securing legacies for future generations. Passionate about demystifying finance, Sean is committed to fostering long-term relationships built on trust, transparency, and tangible results.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Comprehensive solutions across the full financial ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 border-slate-600 backdrop-blur-lg">
            <CardContent className="p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Financial Future?
              </h3>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Experience Sean's unique combination of commercial expertise and regulated financial advice.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={handleNavigateToContact}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
