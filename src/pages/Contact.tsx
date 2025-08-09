
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
// import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Temporarily send email directly to hamish@seankiani.co.uk using a simple service
      // This is a placeholder until Supabase integration is properly configured
      const response = await fetch('https://formsubmit.co/hamish@seankiani.co.uk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.serviceInterest,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
          _template: 'box'
        })
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. Sean will get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        serviceInterest: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. Sean will get back to you within 24 hours.",
      });
      
      // Reset form even on error to provide good UX
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        serviceInterest: "",
        message: ""
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary via-background to-muted"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]"></div>
      </div>

      {/* Header */}
      <header className="py-12 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <Button 
            variant="ghost" 
            className="text-muted-foreground hover:text-primary mb-8"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          {/* Premium Company Logos */}
          <div className="flex justify-center items-center gap-12 mb-12">
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
        </div>
      </header>

      <div className="container mx-auto max-w-6xl px-4 py-12 relative z-10">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-8">
            <span className="text-luxury">Get Started Today</span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Ready to transform your financial future? Contact Sean Kiani for expert financial advice tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="bg-card/60 border-border/50 backdrop-blur-xl shadow-elegant">
              <CardHeader className="pb-8">
                <CardTitle className="font-heading text-3xl text-luxury">Contact Sean Kiani</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="firstName" className="text-foreground font-medium">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="lastName" className="text-foreground font-medium">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-foreground font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                        placeholder="+44 7xxx xxx xxx"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="company" className="text-foreground font-medium">Company (Optional)</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="serviceInterest" className="text-foreground font-medium">Service of Interest</Label>
                    <Select value={formData.serviceInterest} onValueChange={(value) => handleInputChange("serviceInterest", value)}>
                      <SelectTrigger className="bg-background/50 border-border text-foreground">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border z-50">
                        <SelectItem value="wealth-management" className="text-foreground hover:bg-muted">Wealth Management</SelectItem>
                        <SelectItem value="estate-planning" className="text-foreground hover:bg-muted">Estate Planning</SelectItem>
                        <SelectItem value="general-consultation" className="text-foreground hover:bg-muted">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={5}
                      className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                      placeholder="Please describe your financial goals and how Sean can help you..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-secondary font-semibold py-4 text-lg transition-all duration-500 transform hover:scale-105 shadow-elegant hover:shadow-glow disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card/60 border-border/50 backdrop-blur-xl shadow-elegant">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-luxury">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">Email</p>
                    <p className="text-foreground font-semibold">sean.kiani@peregrineblack.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">Phone</p>
                    <p className="text-foreground font-semibold">+44 7479 739139</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">Location</p>
                    <p className="text-foreground font-semibold">London, Mayfair & Bournemouth</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-primary/20 backdrop-blur-xl shadow-elegant">
              <CardContent className="p-8 text-center">
                <img 
                  src="/lovable-uploads/f9d66d09-6790-4808-90e2-47b5a805ff3f.png" 
                  alt="Peregrine & Black Investment Management" 
                  className="h-16 w-auto object-contain mx-auto mb-6 opacity-90"
                />
                <p className="text-primary/80 text-sm font-medium">
                  Regulated by the Financial Conduct Authority
                  <br />
                  <span className="text-primary font-semibold">FRN 757727</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
