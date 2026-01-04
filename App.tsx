
import React, { useState, useEffect, useRef } from 'react';
import { 
  Smartphone, 
  Battery, 
  Zap, 
  Settings, 
  Clock, 
  UserCheck, 
  Home, 
  ShieldCheck, 
  Instagram, 
  MapPin, 
  Phone,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Cpu,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Shared Constants ---
const WHATSAPP_NUMBER = "5511952990927";
const WHATSAPP_MSG = "Olá, meu smartphone precisa de um reparo de alto nível. Vi o showroom da Sullivan Connection e quero agendar uma avaliação técnica VIP.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
const INSTAGRAM_URL = "https://www.instagram.com/sullivan_connection";

// --- Custom Icons ---
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.604 6.03l-1.706 6.233 6.376-1.671a11.79 11.79 0 005.759 1.505h.006c6.635 0 12.032-5.396 12.035-12.03a11.782 11.782 0 00-3.528-8.384" />
  </svg>
);

// --- Components ---

const SectionTitle: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-6xl font-display font-black mb-4 uppercase tracking-tighter italic ${light ? 'text-white' : 'text-zinc-900'}`}
    >
      {title}<span className="text-yellow-400">.</span>
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`max-w-xl mx-auto text-base md:text-lg ${light ? 'text-zinc-400' : 'text-zinc-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-16 h-1.5 bg-yellow-400 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div>
  </div>
);

const TechVideo: React.FC<{ src: string }> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold: 0.5 });
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) videoRef.current.play();
      else videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <div className="relative aspect-[9/16] bg-zinc-900 rounded-[2rem] overflow-hidden border-[6px] border-zinc-800 shadow-2xl">
      <video ref={videoRef} src={src} loop muted playsInline className="w-full h-full object-cover" />
    </div>
  );
};

const ShowroomShowcase = () => {
  const images = [
    "https://i.imgur.com/uNp96PY.jpeg",
    "https://i.imgur.com/6cnLS6B.jpeg",
    "https://i.imgur.com/KzGO3UJ.jpeg",
    "https://i.imgur.com/pOrFTAi.jpeg",
    "https://i.imgur.com/CrUfuky.jpeg",
    "https://i.imgur.com/DJT7Tbb.jpeg",
    "https://i.imgur.com/R31DFvC.jpeg",
    "https://i.imgur.com/LC7TvH4.jpeg",
    "https://i.imgur.com/mqZB7eC.jpeg",
    "https://i.imgur.com/OhNA5zE.jpeg"
  ];
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="relative group bg-zinc-900 rounded-[2.5rem] p-4 border border-zinc-800 shadow-2xl overflow-hidden">
        <div className="relative h-[400px] md:h-[600px] rounded-[1.8rem] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          
          <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all border border-white/10">
            <ChevronLeft />
          </button>
          <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all border border-white/10">
            <ChevronRight />
          </button>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${index === i ? 'border-yellow-400 scale-105' : 'border-transparent opacity-40 hover:opacity-100'}`}
            >
              <img src={img} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-zinc-950/98 backdrop-blur-2xl py-4 shadow-2xl border-b border-zinc-800/50' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.4)]">
            <Smartphone className="text-black w-6 h-6 stroke-[3px]" />
          </div>
          <span className="font-display font-black text-2xl tracking-tighter uppercase italic">
            Sullivan <span className="text-yellow-400">Connection</span>
          </span>
        </div>
        <div className="hidden lg:flex gap-10 font-black text-[10px] uppercase tracking-[0.3em]">
          {['Serviços', 'Vídeos', 'Showroom', 'Localização'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-yellow-400 transition-all">{item}</a>
          ))}
        </div>
        <a href={WHATSAPP_URL} target="_blank" className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-xl hidden sm:block">
          Agendamento VIP
        </a>
      </div>
    </nav>
  );
};

const FloatingWhatsApp = () => (
  <a href={WHATSAPP_URL} target="_blank" className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-5 rounded-[1.8rem] shadow-2xl hover:scale-110 transition-transform active:scale-90 animate-pulse-yellow border-4 border-white/20">
    <WhatsAppIcon className="w-8 h-8" />
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-yellow-400 selection:text-black bg-zinc-950 overflow-x-hidden">
      <Navbar />
      <FloatingWhatsApp />

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-20 grayscale-[0.3] brightness-[0.4]"
            alt="Sullivan Workshop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400 mb-8"
            >
              <Zap className="w-4 h-4 fill-current" />
              Engenharia Técnica de Alta Performance
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-[8rem] font-display font-black uppercase leading-[0.85] tracking-tighter mb-10 italic"
            >
              Hardware <br />
              <span className="text-yellow-400">Elite</span>.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl leading-tight font-light"
            >
              Reparos cirúrgicos com <span className="text-white font-semibold">precisão de laboratório</span>. Unidade Mauá ou Atendimento VIP Home Service.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <a href={WHATSAPP_URL} className="group relative inline-flex items-center justify-center bg-yellow-400 text-black px-12 py-6 rounded-2xl font-black text-xl uppercase tracking-tight hover:bg-white transition-all shadow-[0_30px_60px_rgba(250,204,21,0.3)]">
                Agendar Reparo <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="#showroom" className="inline-flex items-center justify-center border-2 border-zinc-700 hover:border-white px-12 py-6 rounded-2xl font-bold text-lg uppercase transition-all backdrop-blur-sm">
                Ver Showroom
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TECH IN ACTION --- */}
      <section id="vídeos" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <SectionTitle title="Tech in Action" subtitle="Transparência total em cada etapa do reparo." light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <TechVideo src="https://i.imgur.com/lQMoIri.mp4" />
            <TechVideo src="https://i.imgur.com/UfOKx5Q.mp4" />
            <TechVideo src="https://i.imgur.com/eMlY251.mp4" />
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="serviços" className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-5xl font-display font-black uppercase tracking-tighter italic mb-8">O que <br /><span className="text-yellow-400">Dominamos</span>.</h2>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed">Laboratório especializado em micro-eletrônica e diagnósticos de alta complexidade.</p>
              <div className="space-y-6">
                {["Garantia Real 90 Dias", "Peças Grau A+", "Certificação Técnica"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="text-black w-5 h-5" />
                    </div>
                    <span className="font-black uppercase tracking-widest text-[10px] text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Smartphone />, title: "Telas Elite", desc: "Vedação IP68 restaurada e calibração original de fábrica." },
                { icon: <Cpu />, title: "Placa Mãe", desc: "Reparos de nível componente e recuperação de trilhas." },
                { icon: <Battery />, title: "Baterias Pro", desc: "Células com 100% de saúde e reconhecimento de sistema." },
                { icon: <Settings />, title: "Software", desc: "Restauração profunda e recuperação de dados críticos." }
              ].map((service, idx) => (
                <div key={idx} className="bg-zinc-950 p-10 rounded-[2.5rem] border border-zinc-800 hover:border-yellow-400/50 transition-all group">
                  <div className="text-yellow-400 mb-6 w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-2xl group-hover:bg-yellow-400 group-hover:text-black transition-all">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-display font-black uppercase mb-4 italic tracking-tighter">{service.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SHOWROOM --- */}
      <section id="showroom" className="py-24 bg-zinc-950">
        <SectionTitle title="Sullivan Showroom" subtitle="A estética da perfeição técnica." light />
        <ShowroomShowcase />
        <div className="mt-16 text-center">
          <a href={WHATSAPP_URL} target="_blank" className="inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-2xl">
            Iniciar Avaliação VIP <WhatsAppIcon className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* --- LOCATION --- */}
      <section id="localização" className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h3 className="text-6xl font-display font-black text-white mb-10 uppercase tracking-tighter italic">Base <br />Mauá<span className="text-yellow-400">.</span></h3>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-yellow-400/10">
                    <MapPin className="text-black w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-black text-white uppercase tracking-[0.2em] text-[10px] mb-2 opacity-50">Local</h4>
                    <p className="text-zinc-300 font-medium text-lg leading-snug">Rua Vitória, 182 - Mauá - SP</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center shrink-0 border border-zinc-700">
                    <Phone className="text-yellow-400 w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-black text-white uppercase tracking-[0.2em] text-[10px] mb-2 opacity-50">Contato</h4>
                    <p className="text-zinc-300 font-medium text-lg">+55 11 95299-0927</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 h-[500px] w-full bg-zinc-950 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-zinc-800">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.512683884813!2d-46.4449856!3d-23.6575995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce695f70a256a7%3A0xc39e551606775535!2sR.%20Vit%C3%B3ria%2C%20182%20-%20Vila%20Margarida%2C%20Mau%C3%A1%20-%20SP%2C%2009310-440!5e0!3m2!1spt-BR!2sbr!4v1716492345678!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.1) brightness(0.8)' }} allowFullScreen loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-zinc-950 pt-24 pb-12 text-white border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                <Smartphone className="text-black w-7 h-7 stroke-[3px]" />
              </div>
              <span className="font-display font-black text-3xl tracking-tighter uppercase italic">Sullivan <span className="text-yellow-400">Connection</span></span>
            </div>
            <div className="flex gap-6">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all group shadow-xl"
              >
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          <div className="text-center text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">
            <p>&copy; 2024 SULLIVAN CONNECTION TECH LAB. MAUÁ / SP / BR</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
