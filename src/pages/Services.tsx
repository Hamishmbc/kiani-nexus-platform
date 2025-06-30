
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const handleNavigateToSean = () => {
    navigate("/sean");
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  const handleNavigateToContact = () => {
    navigate("/contact");
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  const handleNavigateToHome = () => {
    navigate("/");
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  const services = [
    {
      logo: "/lovable-uploads/7bc27a07-dc44-41d5-a4e8-32def761b5c6.png",
      title: "Peregrine & Black",
      subtitle: "Investment Management",
      description: "Independent financial advice with institutional-grade investment solutions. Comprehensive wealth management, pension planning, and investment strategies tailored to secure your financial future with clarity and expertise.",
      url: "https://www.peregrineblack.com/",
      gradient: "from-slate-700 to-slate-800"
    },
    {
      logo: "/lovable-uploads/8de56c06-de85-402a-8be4-4b2e0bf1ec13.png",
      title: "Inheritance Made Simple",
      subtitle: "Estate Planning Solutions",
      description: "Comprehensive estate planning services designed to protect your legacy and ensure seamless wealth transfer. Expert guidance through complex inheritance matters with innovative, tax-efficient strategies.",
      url: "https://www.inheritancemadesimple.com/",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      logo: "/lovable-uploads/71512c61-68d4-4ec3-b3f6-1ada677dfb0f.png",
      title: "Bankruptcy.co.uk",
      subtitle: "Positive Insolvency Solutions",
      description: "Expert insolvency and bankruptcy solutions providing positive pathways forward through challenging financial situations. Professional guidance with dignity, clarity, and practical solutions for financial recovery.",
      url: "https://www.bankruptcy.co.uk/",
      gradient: "from-slate-600 to-slate-700"
    },
    {
      logo: "/lovable-uploads/2428bbc4-b834-4ed1-a57e-e03dea2fef71.png",
      title: "Sumlii",
      subtitle: "AI Integration Solutions",
      description: "Cutting-edge AI integration services that transform and optimize your financial processes. Advanced technology solutions that enhance decision-making and streamline operations for the modern financial landscape.",
      url: "https://www.sumlii.com",
      gradient: "from-blue-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <Button 
            variant="ghost" 
            className="text-slate-300 hover:text-white mb-4"
            onClick={handleNavigateToHome}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Explore Our Services
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive financial solutions powered by expertise, regulation, and cutting-edge technology
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-slate-600 backdrop-blur-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
                onClick={() => window.open(service.url, '_blank')}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    {/* Logo Container */}
                    <div className="mb-6 p-6 rounded-2xl bg-white/95 backdrop-blur-sm shadow-lg flex items-center justify-center min-h-[120px] w-full max-w-[280px]">
                      <img 
                        src={service.logo} 
                        alt={service.title}
                        className="max-h-16 max-w-full object-contain"
                      />
                    </div>
                    
                    {/* Service Info */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <h4 className="text-lg text-blue-400 mb-4 font-medium">
                      {service.subtitle}
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sean Kiani Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/50 to-transparent"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <Card className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 border-slate-600 backdrop-blur-lg">
            <CardContent className="p-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
                    <img 
                      src="/lovable-uploads/eab295ab-c413-4338-86fa-813a7d1e7709.png" 
                      alt="Sean Kiani" 
                      className="relative w-48 h-48 rounded-full object-cover border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-2xl"
                    />
                  </div>
                </div>
                <div className="text-center lg:text-left flex-1">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Your Expert Guide
                  </h2>
                  <h3 className="text-2xl text-slate-300 mb-6 font-light">
                    Sean Kiani - Independent Financial Adviser
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-8">
                    With over two decades of experience across all these services, Sean brings unparalleled expertise in wealth management, estate planning, insolvency solutions, and AI integration. Whether you need comprehensive financial advice through Peregrine & Black, estate planning through Inheritance Made Simple, insolvency guidance via Bankruptcy.co.uk, or cutting-edge AI solutions from Sumlii, Sean is your trusted partner in navigating complex financial landscapes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      onClick={handleNavigateToSean}
                    >
                      Learn More About Sean
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      onClick={handleNavigateToContact}
                    >
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-slate-600 backdrop-blur-lg">
            <CardContent className="p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transform Your Financial Future Today
              </h3>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Experience the power of comprehensive, integrated financial services tailored to your unique needs across all aspects of wealth management.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white px-12 py-4 text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
                onClick={handleNavigateToContact}
              >
                Start Your Journey
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
