import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Mic, Palette, Sofa, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Capture Instantânea',
    description: 'Tire fotos do seu ambiente em segundos com a câmera do seu celular',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Mic,
    title: 'Comando de Voz',
    description: 'Descreva as mudanças que deseja fazer usando apenas sua voz',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Palette,
    title: 'Novas Cores',
    description: 'Visualize seu ambiente com diferentes paletas de cores instantaneamente',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Sofa,
    title: 'Móveis Virtuais',
    description: 'Adicione e posicione móveis virtualmente antes de comprar',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Sparkles,
    title: 'IA Avançada',
    description: 'Tecnologia de ponta para transformações realistas e precisas',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Zap,
    title: 'Resultados Rápidos',
    description: 'Veja as transformações em tempo real, sem espera',
    color: 'from-fuchsia-500 to-pink-500',
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recursos <span className="text-gradient">Incríveis</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Tudo que você precisa para visualizar e planejar a decoração dos seus sonhos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;