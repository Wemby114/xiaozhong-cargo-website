import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Coverage from '@/components/sections/Coverage';
import Services from '@/components/sections/Services';
import Advantages from '@/components/sections/Advantages';
import FreightCalculator from '@/components/sections/FreightCalculator';
import FAQ from '@/components/sections/FAQ';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Coverage />
        <Services />
        <Advantages />
        <FreightCalculator />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
