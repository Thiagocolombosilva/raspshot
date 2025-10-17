import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Mic, Sparkles, Eye } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    number: '01',
    title: 'Tire uma Foto',
    description: 'Abra o app e capture uma foto do ambiente que deseja transformar',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Mic,
    number: '02',
    title: 'Grave seu Comando',
    description: 'Pressione o botão e descreva as mudanças que deseja ver no ambiente',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'IA Processa',
    description: 'Nossa inteligência artificial transforma sua foto em segundos',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Eye,
    number: '04',
    title: 'Visualize o Resultado',
    description: 'Veja como ficaria seu ambiente com as mudanças aplicadas',
    color: 'from-cyan-500 to-blue-500',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como <span className="text-gradient">Funciona</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Transforme seus ambientes em 4 passos simples
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-white/30 to-transparent -translate-x-4" />
              )}
              
              <div className="glass-effect rounded-2xl p-8 text-center hover:shadow-2xl transition-all group">
                <div className="relative inline-block mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-white text-purple-900 flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 glass-effect rounded-3xl p-2 max-w-5xl mx-auto shadow-2xl"
        >
          <img 
            className="w-full h-auto rounded-2xl"
            alt="Step by step process of using Raspshot app"
           src="https://images.unsplash.com/photo-1644410152165-db3492fd1090" />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;