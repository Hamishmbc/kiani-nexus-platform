
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SeanKiani = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="py-8 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <Button 
            variant="ghost" 
            className="text-slate-300 hover:text-white mb-4"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section with Peregrine & Black Logo */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 border-slate-600 backdrop-blur-lg relative">
            <CardContent className="p-8 md:p-12">
              {/* Company Logos - responsive positioning */}
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative">
                {/* Logos positioned for mobile/tablet at top, desktop at top-right */}
                <div className="lg:absolute lg:top-0 lg:right-0 order-first lg:order-none flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <img 
                    src="/lovable-uploads/eacd3396-5ff8-4c31-ac3c-af03007958f8.png" 
                    alt="Inheritance Made Simple" 
                    className="h-12 md:h-14 lg:h-16 w-auto object-contain opacity-90 cursor-pointer hover:opacity-100 transition-opacity"
                    onClick={() => window.open("https://www.inheritancemadesimple.co.uk/", '_blank')}
                  />
                  <img 
                    src="/lovable-uploads/f9d66d09-6790-4808-90e2-47b5a805ff3f.png" 
                    alt="Peregrine & Black Investment Management" 
                    className="h-14 md:h-16 lg:h-18 w-auto object-contain opacity-90 cursor-pointer hover:opacity-100 transition-opacity"
                    onClick={() => window.open("https://www.peregrineblack.com/", '_blank')}
                  />
                </div>
                
                {/* Main content */}
                <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 w-full lg:pr-32">
                  <div className="flex-shrink-0">
                    <img 
                      src="/lovable-uploads/77d9eb5c-9ccd-4aaf-8e8f-2b2aa26c4777.png" 
                      alt="Sean Kiani" 
                      className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-blue-500/30 shadow-2xl"
                    />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
                      Sean Kiani
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-400 mb-4 lg:mb-6 font-light">
                      Independent Financial Adviser & Estate Planner
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                      For Individuals and Company Directors
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-lg">
              <CardContent className="p-6 md:p-8">
                <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-6">
                  Sean Kiani brings a unique perspective to financial planning, having spent over two decades guiding individuals and business owners through complex matters of asset protection, strategic restructuring, business recovery, and estate planning. This extensive background, coupled with his recent transition into regulated financial advice, positions Sean exceptionally well to assist businesses and individuals across the entire financial ecosystem.
                </p>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-6">
                  With a client-centered approach, Sean delivers independent and regulated financial advice and wealth management through his partnership with Peregrine and Black, a prestigious firm based in Mayfair, London. His estate planning products and services are provided through Inheritance Made Simple, a boutique estate planning agency located in Bournemouth.
                </p>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  Sean's expertise ensures personalised strategies that address your unique needs, from optimising wealth growth to securing legacies for future generations. Passionate about demystifying finance, Sean is committed to fostering long-term relationships built on trust, transparency, and tangible results.
                </p>
              </CardContent>
            </Card>


            {/* Peregrine & Black Section */}
            <Card className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-slate-600 backdrop-blur-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="flex-shrink-0">
                    <img 
                      src="/lovable-uploads/f9d66d09-6790-4808-90e2-47b5a805ff3f.png" 
                      alt="Peregrine & Black Investment Management" 
                      className="h-12 md:h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                      Partnered with Peregrine & Black
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      Sean operates through Peregrine & Black Investment Management, delivering independent financial advice with institutional-grade investment solutions.
                    </p>
                    <Button 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 transform hover:scale-105"
                      onClick={() => window.open("https://www.peregrineblack.com/", '_blank')}
                    >
                      Visit Peregrine & Black
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section with Better Contrast */}
            <Card className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 border-slate-600 backdrop-blur-lg">
              <CardContent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Ready to Secure Your Financial Future?
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Experience Sean's unique combination of commercial expertise and regulated financial advice.
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeanKiani;
