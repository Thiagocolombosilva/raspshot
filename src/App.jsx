import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from './components/ui/toaster';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Raspshot - Transforme Seus Ambientes com IA</title>
        <meta name="description" content="Tire fotos do seu ambiente e transforme-o instantaneamente com comandos de voz. Visualize novas cores, móveis e decorações antes de comprar." />
      </Helmet>
      <div className="min-h-screen overflow-x-hidden">
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;