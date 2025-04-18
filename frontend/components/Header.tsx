import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-semibold">
          <span className="text-primary">A</span>viral
        </h1>

        <div className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" onClick={() => scrollToSection("about")}>About</Button>
          <Button variant="ghost" onClick={() => scrollToSection("experience")}>Experience</Button>
          <Button variant="ghost" onClick={() => scrollToSection("projects")}>Projects</Button>
          <Button variant="ghost" onClick={() => scrollToSection("contact")}>Contact</Button>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            <Button variant="ghost" onClick={() => scrollToSection("about")}>About</Button>
            <Button variant="ghost" onClick={() => scrollToSection("experience")}>Experience</Button>
            <Button variant="ghost" onClick={() => scrollToSection("projects")}>Projects</Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")}>Contact</Button>
          </div>
        </div>
      )}
    </header>
  );
}
