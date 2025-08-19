import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-conditions", label: "Terms & Conditions" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href;
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-primary/10 shadow-elegant"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/lovable-uploads/01be6add-b71d-4d91-9364-ac2c21b1faa4.png"
                alt="Sean Kiani"
                className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                    "hover:bg-primary/10 hover:text-primary",
                    "before:absolute before:inset-x-0 before:bottom-0 before:h-0.5",
                    "before:bg-primary",
                    "before:transform before:scale-x-0 before:transition-transform before:duration-300",
                    "hover:before:scale-x-100",
                    isActive(item.href)
                      ? "text-primary bg-primary/5 before:scale-x-100"
                      : "text-foreground/80"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                asChild
                size="sm"
                className="bg-primary hover:bg-primary/90 hover:shadow-glow text-secondary border border-primary/20 transition-all duration-300 hover:scale-105"
              >
                <Link to="/contact">Book Meeting</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-foreground hover:text-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-background/98 backdrop-blur-xl border-t border-primary/10 shadow-lg">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "relative px-4 py-3 rounded-lg text-base font-medium transition-all duration-300",
                      "hover:bg-primary/10 hover:text-primary transform hover:translate-x-2",
                      "border-l-4 transition-all duration-300",
                      isActive(item.href)
                        ? "text-primary bg-primary/5 border-l-primary shadow-sm"
                        : "text-foreground/80 border-l-transparent hover:border-l-primary/50"
                    )}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-primary/10">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 hover:shadow-glow text-secondary transition-all duration-300"
                  >
                    <Link to="/contact">Book Your Meeting</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;