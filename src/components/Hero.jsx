import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Mic, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

const Hero = () => {
  const handleDownload = () => {
    toast({
      title: "🚧 Em breve!",
      description: "O app Raspshot estará disponível em breve nas lojas! 🚀",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium">Powered by TCS</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Transforme Seus Ambientes
          <span className="block text-gradient mt-2">Com o Poder da Voz</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
        >
          Tire uma foto do seu ambiente e use comandos de voz para visualizar
          novas cores, móveis e decorações instantaneamente
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            onClick={handleDownload}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl shadow-pink-500/50 transition-all hover:scale-105"
          >
            <Camera className="w-5 h-5 mr-2" />
            Baixar Raspshot
          </Button>
          <Button
            onClick={() => {
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
            }}
            size="lg"
            variant="outline"
            className="glass-effect border-2 border-white/30 hover:bg-white/20 px-8 py-6 text-lg rounded-full"
          >
            Ver Como Funciona
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="glass-effect rounded-3xl p-2 shadow-2xl">
            <img 
              className="w-full h-auto rounded-2xl"
              alt="Raspshot app interface showing room transformation"
             src="https://images.unsplash.com/photo-1690598996869-f4e225befb5d" />
          </div>
          
          {/* Floating icons */}
          <motion.div
            className="absolute -top-6 -left-6 glass-effect p-4 rounded-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Camera className="w-8 h-8 text-pink-300" />
          </motion.div>
          <motion.div
            className="absolute -bottom-6 -right-6 glass-effect p-4 rounded-2xl"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <Mic className="w-8 h-8 text-purple-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


export default Hero;
