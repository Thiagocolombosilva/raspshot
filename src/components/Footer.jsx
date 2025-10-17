import React from 'react';
import { Camera, Mail, Instagram, Twitter } from 'lucide-react';
import { toast } from './ui/use-toast';

const Footer = () => {
  const handleSocialClick = () => {
    toast({
      title: "🚧 Em breve!",
      description: "Nossas redes sociais estarão disponíveis em breve! 🚀",
    });
  };

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Raspshot</span>
            </div>
            <p className="text-white/70">
              Transforme seus ambientes com o poder da voz e inteligência artificial
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer">
              <Mail className="w-5 h-5" />
              <span>contato@raspshot.com</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <button
                onClick={handleSocialClick}
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                onClick={handleSocialClick}
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; 2025 Raspshot. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;