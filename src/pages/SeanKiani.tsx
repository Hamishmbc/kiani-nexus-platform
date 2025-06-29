
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SeanKiani = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="py-8 px-4">
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

      {/* Hero Section with Peregrine & Black Branding */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 border-slate-600 backdrop-blur-lg">
            <CardContent className="p-12">
              {/* Peregrine & Black Logo Header */}
              <div className="flex justify-center mb-8">
                <img 
                  src="/lovable-uploads/f9d66d09-6790-4808-90e2-47b5a805ff3f.png" 
                  alt="Peregrine & Black Investment Management" 
                  className="h-12 w-auto object-contain opacity-90"
                />
              </div>
              
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/77d9eb5c-9ccd-4aaf-8e8f-2b2aa26c4777.png" 
                    alt="Sean Kiani" 
                    className="w-48 h-48 rounded-full object-cover border-4 border-blue-500/30 shadow-2xl"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                    Sean Kiani
                  </h1>
                  <h2 className="text-2xl lg:text-3xl text-blue-400 mb-6 font-light">
                    Independent Financial Adviser & Estate Planner
                  </h2>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    For Individuals and Company Directors
                  </p>
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
              <CardContent className="p-8">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  Sean Kiani brings a unique perspective to financial planning, having spent over two decades guiding individuals and business owners through complex matters of business recovery, asset protection, and strategic restructuring. His transition into regulated financial advice marks the next chapter in a career defined by clarity, care, and practical solutions.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  After qualifying as an Independent Financial Adviser in 2023, Sean was excited to join Peregrine & Black — a firm whose independent ethos mirrors his own values. He is committed to offering clients best-of-breed pensions, investments, protection, and estate planning strategies, often using innovative structures such as Limited Liability Partnerships to achieve future-facing, tax-efficient outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-lg">
              <CardContent className="p-8">
                <p className="text-lg text-slate-300 leading-relaxed">
                  This new chapter combines Sean's deep commercial awareness with regulated financial advice — creating a powerful offering for clients who want to secure their legacy, optimise their wealth, and plan with confidence.
                </p>
              </CardContent>
            </Card>

            {/* Peregrine & Black Section */}
            <Card className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-slate-600 backdrop-blur-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img 
                      src="/lovable-uploads/f9d66d09-6790-4808-90e2-47b5a805ff3f.png" 
                      alt="Peregrine & Black Investment Management" 
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">
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
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Secure Your Financial Future?
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Experience Sean's unique combination of commercial expertise and regulated financial advice.
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
        </div>
      </section>
    </div>
  );
};

export default SeanKiani;
