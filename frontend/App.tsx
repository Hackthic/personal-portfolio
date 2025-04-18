import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <div id="about"><About /></div>
          <div id="experience"><Experience /></div>
          <div id="projects"><Projects /></div>
          <div id="contact"><Contact /></div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
