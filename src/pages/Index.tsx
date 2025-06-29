
import { ArrowRight, TrendingUp, Shield, FileText, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Financial Advisory & Wealth Management",
      description: "FCA regulated financial advice and comprehensive wealth management solutions through Sean Kiani of Peregrine and Black.",
      icon: TrendingUp,
      url: "https://www.peregrineblack.com/",
      gradient: "from-blue-600 to-purple-600",
      delay: "0ms"
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
      title: "Insolvency Solutions",
      description: "Expert insolvency and bankruptcy solutions providing positive pathways forward through challenging financial situations.",
      icon: FileText,
      url: "https://www.bankruptcy.co.uk/",
      gradient: "from-orange-500 to-red-500",
      delay: "200ms",
      logo: "/lovable-uploads/217fea7e-8a17-4a1b-851c-8398fe875a9a.png",
      logoAlt: "Bankruptcy.co.uk logo"
    },
    {
      title: "AI Integration",
      description: "Cutting-edge AI integration services to transform and optimize your financial processes through advanced technology solutions.",
      icon: Brain,
      url: "https://www.sumlii.com",
      gradient: "from-purple-500 to-pink-500",
      delay: "300ms",
      logo: "/lovable-uploads/d833d486-4f8d-4357-b5e1-9b271c3ddd8b.png",
      logoAlt: "Sumlii logo"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/50 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive financial solutions powered by expertise, regulation, and cutting-edge AI technology
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate("/services")}
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Sean Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-slate-600 backdrop-blur-lg">
            <CardContent className="p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/eab295ab-c413-4338-86fa-813a7d1e7709.png" 
                    alt="Sean Kiani" 
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500/30"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Meet Sean Kiani
                  </h3>
                  <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                    FCA regulated financial advisor with extensive experience in wealth management, estate planning, insolvency, and innovative AI financial integration.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    onClick={() => navigate("/sean")}
                  >
                    Learn More About Sean
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-slate-600 backdrop-blur-lg">
            <CardContent className="p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Financial Future?
              </h3>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Experience the power of holistic, AI-integrated financial services tailored to your unique needs.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate("/contact")}
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
