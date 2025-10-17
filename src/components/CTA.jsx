import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const CTA = () => {
  const handleDownload = () => {
    toast({
      title: "🚧 Em breve!",
      description: "O app Raspshot estará disponível em breve nas lojas! 🚀",
    });
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-600/30 via-purple-600/30 to-orange-600/30"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-3xl p-12 md:p-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 mb-8"
          >
            <Smartphone className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Transformar
            <span className="block text-gradient mt-2">Seus Ambientes?</span>
          </h2>

          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Baixe o Raspshot agora e comece a visualizar a decoração dos seus sonhos
            com o poder da inteligência artificial
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-7 text-lg rounded-full shadow-2xl shadow-pink-500/50 transition-all hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Baixar para iOS
            </Button>
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-10 py-7 text-lg rounded-full shadow-2xl shadow-purple-500/50 transition-all hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Baixar para Android
            </Button>
          </div>

          <p className="text-sm text-white/60 mt-8">
            Disponível em breve • Grátis para download
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;