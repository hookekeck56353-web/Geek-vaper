/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Zap, 
  Cpu, 
  Wind, 
  Layers, 
  Star, 
  ChevronRight, 
  Smartphone,
  ShieldCheck,
  Rocket,
  MessageCircle,
  Phone,
  MapPin
} from "lucide-react";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/244900000000" // Placeholder for Angola number
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] flex items-center justify-center"
  >
    <MessageCircle className="text-white w-8 h-8" />
  </motion.a>
);

const StarryBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            width: Math.random() * 3 + "px",
            height: Math.random() * 3 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animationDuration: Math.random() * 10 + 5 + "s",
            animationDelay: Math.random() * 5 + "s",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,51,132,0.1),transparent_70%)]" />
    </div>
  );
};

const PulseWave = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="pulse-ring" style={{ animationDelay: "0s" }} />
    <div className="pulse-ring" style={{ animationDelay: "1s" }} />
    <div className="pulse-ring" style={{ animationDelay: "2s" }} />
  </div>
);

export default function App() {
  const flavors = [
    { name: "WHITE GUMMY ICE", color: "from-white/20 to-white/5" },
    { name: "MIAMI MINT", color: "from-green-400/20 to-green-600/5" },
    { name: "BLUE RAZZ ICE", color: "from-blue-400/20 to-blue-600/5" },
    { name: "JUICY PEACH ICE", color: "from-orange-400/20 to-orange-600/5" },
    { name: "FROZEN STRAWBERRY", color: "from-red-400/20 to-red-600/5" },
    { name: "WATERMELON ICE", color: "from-red-500/20 to-red-700/5" },
    { name: "STRAWBERRY MANGO", color: "from-yellow-400/20 to-red-500/5" },
    { name: "STRAWBERRY BANANA", color: "from-yellow-300/20 to-pink-500/5" },
    { name: "BLUEBERRY WATERMELON", color: "from-blue-500/20 to-red-500/5" },
    { name: "MEXICO MANGO", color: "from-yellow-500/20 to-orange-600/5" },
  ];

  return (
    <div className="relative min-h-screen selection:bg-brand-pink selection:text-white">
      <StarryBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card !rounded-none border-t-0 border-x-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-pink rounded-lg flex items-center justify-center">
              <Zap className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tighter italic">GEEK BUZZ</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#features" className="hover:text-brand-pink transition-colors">Tecnologia</a>
            <a href="#flavors" className="hover:text-brand-pink transition-colors">Sabores</a>
            <a href="#contact" className="hover:text-brand-pink transition-colors">Contacto</a>
          </div>
          <button className="bg-brand-pink px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-pink/80 transition-all shadow-[0_0_20px_rgba(214,51,132,0.4)]">
            COMPRAR AGORA
          </button>
        </div>
      </nav>

      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pink text-xs font-bold mb-6">
              <Star className="w-3 h-3 fill-current" />
              EDIÇÃO STARRY SKY - ANGOLA
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter">
              PULSE <span className="text-brand-pink italic">X</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 mb-8 max-w-xl font-light leading-relaxed">
              A maior revolução do vape chegou a Luanda. O primeiro ecrã curvo 3D do mundo com tecnologia Pulse líder de mercado.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="glass-card px-6 py-4 flex flex-col">
                <span className="text-3xl font-black text-brand-pink">30K</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Puffs Regulares</span>
              </div>
              <div className="glass-card px-6 py-4 flex flex-col border-brand-pink/30">
                <span className="text-3xl font-black text-brand-pink">20K</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Puffs Modo Pulse</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <PulseWave />
            <div className="relative z-10 group">
              <div className="absolute -inset-4 bg-brand-pink/20 blur-3xl rounded-full group-hover:bg-brand-pink/30 transition-all duration-500" />
              <img 
                src="https://picsum.photos/seed/vape-starry/800/1000" 
                alt="Geek Buzz Pulse X Starry Sky" 
                className="w-full max-w-md rounded-[3rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Floating UI Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -right-8 top-1/4 glass-card p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-brand-pink/20 flex items-center justify-center">
                  <Smartphone className="text-brand-pink w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase">Display</div>
                  <div className="text-xs font-bold">3D Curved Screen</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Specs */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Tecnologia do Futuro</h2>
            <div className="w-24 h-1 bg-brand-pink mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Cpu className="w-8 h-8" />, 
                title: "Tecnologia ECPU", 
                desc: "Gestão inteligente de chip para sabor consistente do primeiro ao 30.000º puff." 
              },
              { 
                icon: <Layers className="w-8 h-8" />, 
                title: "Dual Mesh Coil", 
                desc: "Superfície de aquecimento melhorada para nuvens massivas e sabor puro e intenso." 
              },
              { 
                icon: <Wind className="w-8 h-8" />, 
                title: "Fluxo de Ar Ajustável", 
                desc: "Controlo de precisão de MTL para RDL. Personalize a sua experiência." 
              },
              { 
                icon: <ShieldCheck className="w-8 h-8" />, 
                title: "Bloqueio de Segurança", 
                desc: "Segurança em primeiro lugar. 3 modos integrados incluindo proteção infantil." 
              },
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: "Carga Rápida", 
                desc: "Carregamento rápido Tipo-C garante que nunca fique à espera da próxima sessão." 
              },
              { 
                icon: <Rocket className="w-8 h-8" />, 
                title: "Modo Pulse", 
                desc: "Ative o poder máximo para 200% de intensidade de sabor e produção de nuvens." 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-8 group hover:border-brand-pink/50 transition-all"
              >
                <div className="text-brand-pink mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flavor Grid */}
      <section id="flavors" className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Galáxia de Sabores</h2>
              <p className="text-white/40 mt-2 uppercase tracking-widest text-sm italic">Não Nascemos Extraordinários, Mas Ousamos Ser.</p>
            </div>
            <button className="flex items-center gap-2 text-brand-pink font-bold hover:gap-4 transition-all">
              VER TODOS OS SABORES <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {flavors.map((flavor, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card p-4 text-center group cursor-pointer overflow-hidden relative`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${flavor.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative z-10">
                  <img 
                    src={`https://picsum.photos/seed/${flavor.name}/300/400`} 
                    alt={flavor.name} 
                    className="w-full aspect-[3/4] object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <h4 className="text-[10px] font-black uppercase tracking-widest leading-tight">{flavor.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-pink/10 blur-[120px] -z-10" />
        <div className="max-w-4xl mx-auto text-center glass-card p-12 md:p-20 border-brand-pink/20">
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none tracking-tighter">PRONTO PARA A REVOLUÇÃO <span className="text-brand-pink">PULSE</span>?</h2>
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            Seja um parceiro ou encomende a sua Edição Starry Sky hoje. Experimente o futuro do vape em Angola.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-brand-pink px-10 py-5 rounded-full text-lg font-black hover:scale-105 transition-all shadow-[0_0_30px_rgba(214,51,132,0.5)]">
              SER UM DISTRIBUIDOR
            </button>
            <button className="glass-card px-10 py-5 rounded-full text-lg font-black hover:bg-white/10 transition-all">
              FALAR COM VENDAS
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase">Telefone / WhatsApp</div>
              <div className="font-bold">+244 900 000 000</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase">Localização</div>
              <div className="font-bold">Luanda, Angola</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase">Atendimento</div>
              <div className="font-bold">24/7 Suporte Local</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Zap className="text-brand-pink w-6 h-6" />
            <span className="font-bold text-lg tracking-tighter italic uppercase">GEEK BUZZ PULSE X</span>
          </div>
          <div className="text-white/40 text-xs uppercase tracking-widest text-center">
            Para mais detalhes, por favor contacte-nos. © 2026 GEEK BUZZ TECNOLOGIA ANGOLA.
          </div>
          <div className="flex gap-6">
            {/* Social Icons Placeholder */}
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-pink/20 transition-colors cursor-pointer">
              <Star className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-pink/20 transition-colors cursor-pointer">
              <Layers className="w-4 h-4" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
