
import React, { useState, useRef } from 'react';
import { 
  Smartphone, 
  Instagram, 
  MapPin, 
  Phone,
  ArrowRight,
  Truck,
  Maximize2,
  Settings,
  Wrench,
  Zap,
  ShieldCheck,
  PackageCheck,
  MessageCircle,
  Sparkles,
  LucideIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Shared Constants ---
const WHATSAPP_NUMBER = "5511952990927";
const WHATSAPP_MSG = "Olá! Vi o site e quero um orçamento. Meu celular quebrou!";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
const INSTAGRAM_URL = "https://www.instagram.com/sullivan_connection";

// --- Photo Gallery Data ---
const SERVICE_PHOTOS = [
  "https://i.imgur.com/cg66Umn.jpeg",
  "https://i.imgur.com/6cnLS6B.jpeg",
  "https://i.imgur.com/uNp96PY.jpeg",
  "https://i.imgur.com/cF1BfZh.jpeg",
  "https://i.imgur.com/tMEc9Cd.jpeg",
  "https://i.imgur.com/KzGO3UJ.jpeg",
  "https://i.imgur.com/CaeWyUY.jpeg",
  "https://i.imgur.com/pOrFTAi.jpeg",
  "https://i.imgur.com/CrUfuky.jpeg",
  "https://i.imgur.com/DJT7Tbb.jpeg",
  "https://i.imgur.com/NWK3KQk.jpeg",
  "https://i.imgur.com/R31DFvC.jpeg",
  "https://i.imgur.com/LC7TvH4.jpeg",
  "https://i.imgur.com/Avbygnb.jpeg",
  "https://i.imgur.com/mqZB7eC.jpeg",
  "https://i.imgur.com/SsIn71q.jpeg",
  "https://i.imgur.com/OhNA5zE.jpeg",
  "https://i.imgur.com/aP0psA7.jpeg",
  "https://i.imgur.com/9mJ8miS.jpeg",
  "https://i.imgur.com/iJuQ2FE.jpeg",
  "https://i.imgur.com/nj7Eqrw.jpeg",
  "https://i.imgur.com/SMG6pVw.jpeg",
  "https://i.imgur.com/HmPnCul.jpeg",
  "https://i.imgur.com/gsHsq2H.jpeg",
  "https://i.imgur.com/aPtlegi.jpeg"
];

const ComparisonSlider: React.FC<{ before: string; after: string; label: string; accentColor: string }> = ({ before, after, label, accentColor }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, position)));
  };

  return (
    <div className="flex flex-col gap-4 group">
      <div 
        className={`relative overflow-hidden rounded-[2.5rem] border-[4px] border-zinc-800 bg-zinc-950 shadow-2xl aspect-[4/5] cursor-col-resize hover:border-${accentColor}/30 transition-colors duration-500`}
        ref={containerRef} 
        onMouseMove={handleMove} 
        onTouchMove={handleMove}
      >
        <img src={after} className="absolute inset-0 w-full h-full object-contain p-2" alt="Depois" />
        <div className="absolute inset-0 z-10 overflow-hidden" style={{ width: `${sliderPos}%` }}>
          <img 
            src={before} 
            className="absolute inset-0 w-full h-full object-contain p-2 max-w-none bg-zinc-950" 
            style={{ width: containerRef.current?.offsetWidth }} 
            alt="Antes" 
          />
        </div>
        <div className={`absolute top-0 bottom-0 z-20 w-1 shadow-[0_0_20px_rgba(255,255,255,0.3)]`} style={{ left: `${sliderPos}%`, backgroundColor: accentColor }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-2xl border-2 border-black" style={{ backgroundColor: accentColor }}>
            <Maximize2 className="text-black w-5 h-5" />
          </div>
        </div>
      </div>
      <h4 className="text-center font-display font-black uppercase italic tracking-tighter text-zinc-500 text-[10px] group-hover:text-white transition-colors">{label}</h4>
    </div>
  );
};

const SullivanSteps = () => {
  const steps: { icon: LucideIcon, title: string, desc: string, color: string, border: string, glow: string, line: string }[] = [
    { 
      icon: MessageCircle, 
      title: "Solicite", 
      desc: "Orçamento instantâneo",
      color: "text-rose-500",
      border: "border-rose-500/20",
      glow: "shadow-[0_0_30px_rgba(244,63,94,0.2)]",
      line: "from-rose-500 to-orange-500"
    },
    { 
      icon: Truck, 
      title: "Coletamos", 
      desc: "Buscamos na sua porta",
      color: "text-orange-500",
      border: "border-orange-500/20",
      glow: "shadow-[0_0_30px_rgba(249,115,22,0.2)]",
      line: "from-orange-500 to-yellow-400"
    },
    { 
      icon: Settings, 
      title: "Reparo", 
      desc: "Técnica de laboratório",
      color: "text-yellow-400",
      border: "border-yellow-400/20",
      glow: "shadow-[0_0_30px_rgba(250,204,21,0.2)]",
      line: "from-yellow-400 to-emerald-500"
    },
    { 
      icon: PackageCheck, 
      title: "Entrega", 
      desc: "Seu celular renovado",
      color: "text-emerald-500",
      border: "border-emerald-500/20",
      glow: "shadow-[0_0_30px_rgba(16,185,129,0.2)]",
      line: "from-emerald-500 to-transparent"
    }
  ];

  return (
    <div className="py-24 bg-black/60 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase italic tracking-tighter">
            CONHEÇA NOSSO <span className="text-yellow-400">DELIVERY</span>
          </h2>
          <p className="text-zinc-600 uppercase font-black text-[9px] tracking-[0.5em] mt-3">Segurança e comodidade em cada etapa</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group flex flex-col items-center text-center"
              >
                <div className={`w-24 h-24 bg-zinc-950 rounded-[2.5rem] border-2 ${step.border} group-hover:border-opacity-100 border-opacity-40 ${step.glow} flex items-center justify-center mb-6 transition-all duration-700 shadow-2xl relative z-10 scale-95 group-hover:scale-105`}>
                  <div className={`${step.color} w-10 h-10 transition-transform duration-500 group-hover:rotate-12`}>
                    <IconComponent className="w-full h-full stroke-[2.5px]" />
                  </div>
                  <div className={`absolute -top-3 -right-3 w-8 h-8 bg-zinc-900 border-2 ${step.border} rounded-xl flex items-center justify-center text-[11px] font-black ${step.color} shadow-lg`}>
                    {idx + 1}
                  </div>
                </div>

                <h4 className={`font-display font-black text-sm uppercase italic mb-2 tracking-tighter transition-colors ${step.color}`}>{step.title}</h4>
                <p className="text-zinc-600 text-[9px] uppercase tracking-widest leading-tight font-bold opacity-80 group-hover:opacity-100">{step.desc}</p>
                
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[75%] w-[50%] h-[4px] z-0 overflow-hidden rounded-full">
                     <div className={`w-full h-full bg-gradient-to-r ${step.line} opacity-20 group-hover:opacity-60 transition-opacity blur-[1px]`} />
                     <motion.div 
                       initial={{ x: "-100%" }}
                       whileInView={{ x: "100%" }}
                       transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                       className="absolute inset-0 bg-white/10"
                     />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-yellow-400 selection:text-black text-white bg-[#050505]">
      {/* Navbar Minimalista */}
      <nav className="fixed w-full z-[100] transition-all duration-500 bg-black/80 backdrop-blur-xl py-5 border-b border-white/5">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-xl">
              <Smartphone className="text-black w-5 h-5 stroke-[3.5px]" />
            </div>
            <span className="font-display font-black text-xl tracking-tighter uppercase italic">
              SULLIVAN <span className="text-yellow-400">CELL</span>
            </span>
          </div>
          <a href={WHATSAPP_URL} target="_blank" className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-black text-[9px] uppercase tracking-widest hover:bg-white transition-all transform active:scale-95 shadow-xl">
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      </nav>
      
      {/* Floating Action WhatsApp */}
      <a href={WHATSAPP_URL} target="_blank" className="fixed bottom-8 right-8 z-[200] bg-[#25D366] text-white p-5 rounded-[2.5rem] shadow-2xl hover:scale-110 transition-transform animate-pulse-yellow border-4 border-white/10">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.604 6.03l-1.706 6.233 6.376-1.671a11.79 11.79 0 005.759 1.505h.006c6.635 0 12.032-5.396 12.035-12.03a11.782 11.782 0 00-3.528-8.384" /></svg>
      </a>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://i.imgur.com/Gz3p8Xa.png" className="w-full h-full object-cover opacity-10 grayscale" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 bg-zinc-900 border border-white/10 px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.4em] text-cyan-400 mb-10 shadow-2xl"
          >
            <Sparkles className="w-4 h-4" />
            TECNOLOGIA DE PONTA & EXCELÊNCIA
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-black uppercase leading-[1.05] tracking-tighter mb-12 italic glow-text"
          >
            CELULAR QUEBRADO?<br />
            RESOLVEMOS DO <br/>
            <span className="inline-block px-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-rose-500">SEU JEITO!</span>
          </motion.h1>
          
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href={WHATSAPP_URL} className="group relative bg-yellow-400 text-black px-12 py-7 rounded-3xl font-black text-xl uppercase tracking-tighter hover:bg-white transition-all shadow-2xl flex items-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
               Falar com Especialista <ArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform w-6 h-6" />
            </a>
            <div className="text-left hidden md:block border-l-2 border-cyan-400/30 pl-6 py-1">
              <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                Reparos de Placa • Telas • Baterias<br/>
                Qualidade premium com garantia real.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PROCESSO PIPELINE --- */}
      <SullivanSteps />

      {/* --- ANTES E DEPOIS --- */}
      <section className="py-32 bg-zinc-950/20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter mb-4">MÁXIMA <span className="text-cyan-400">PRECISÃO.</span></h2>
            <p className="text-zinc-600 uppercase font-black text-[9px] tracking-[0.6em]">Resultados impecáveis em cada projeto técnico</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <ComparisonSlider before="https://i.imgur.com/KOHlq5a.jpeg" after="https://i.imgur.com/gXEaDl9.jpeg" label="ESTRUTURA COMPLETA" accentColor="#06B6D4" />
            <ComparisonSlider before="https://i.imgur.com/o5S277Y.jpeg" after="https://i.imgur.com/PIFR2QH.jpeg" label="SUBSTITUIÇÃO DE DISPLAY" accentColor="#FACC15" />
            <ComparisonSlider before="https://i.imgur.com/981dsma.jpeg" after="https://i.imgur.com/zuPifgt.jpeg" label="RECUPERAÇÃO DE PLACA" accentColor="#A855F7" />
          </div>
        </div>
      </section>

      {/* --- GALERIA COMPLETA DE FOTOS --- */}
      <section className="py-32 bg-black/40 relative overflow-hidden">
        <div className="absolute -right-20 top-1/4 w-96 h-96 bg-yellow-500/5 blur-[100px] rounded-full" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter mb-4">NOSSA <span className="text-yellow-400">BANCADA.</span></h2>
            <p className="text-zinc-600 uppercase font-black text-[9px] tracking-[0.6em]">Transparência e expertise em cada componente</p>
          </div>
          
          <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {SERVICE_PHOTOS.map((url, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2.2rem] border border-white/5 bg-zinc-900 shadow-2xl"
              >
                <img 
                  src={url} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0" 
                  alt={`Sullivan Cell ${i}`} 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-[9px] font-black uppercase tracking-[0.4em] text-cyan-400">Sullivan Lab</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DIFERENCIAIS --- */}
      <section className="py-24 border-y border-white/5 bg-zinc-950/40">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: Zap, title: "REPARO EXPRESS", desc: "Serviços concluídos com agilidade superior.", accent: "text-yellow-400" },
              { icon: ShieldCheck, title: "GARANTIA REAL", desc: "Selo de confiança em todos os componentes.", accent: "text-emerald-400" },
              { icon: Wrench, title: "TÉCNICA AVANÇADA", desc: "Laboratório especializado em micro-soldagem.", accent: "text-cyan-400" }
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div key={i} className="flex gap-6 items-start group">
                  <div className={`w-16 h-16 bg-zinc-900 rounded-[1.5rem] flex items-center justify-center shrink-0 border border-zinc-800 group-hover:bg-zinc-800 transition-all duration-500 shadow-lg`}>
                    <div className={`${item.accent} w-8 h-8 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-full h-full" />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-display font-black uppercase text-xs mb-2 tracking-widest">{item.title}</h5>
                    <p className="text-zinc-600 text-[10px] leading-relaxed uppercase tracking-wider font-medium">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- LOCALIZAÇÃO --- */}
      <section className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute -left-40 bottom-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-2/5">
              <h3 className="text-5xl md:text-7xl font-display font-black text-white mb-10 uppercase tracking-tighter italic leading-none text-center lg:text-left">VISITE <br/><span className="text-cyan-400">NOSSA UNIDADE.</span></h3>
              <div className="space-y-6">
                <div className="flex gap-5 items-center bg-zinc-900/40 p-6 rounded-[2.5rem] border border-white/5 shadow-2xl hover:border-cyan-400/50 transition-colors duration-500">
                  <div className="w-14 h-14 bg-cyan-400 rounded-2xl flex items-center justify-center shrink-0 shadow-xl">
                    <MapPin className="text-black w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-black text-zinc-600 uppercase tracking-widest text-[9px] mb-1">Localização Física</h4>
                    <p className="text-zinc-200 font-bold text-base leading-tight">Rua Vitória, 182 - SP</p>
                  </div>
                </div>
                <div className="flex gap-5 items-center bg-zinc-900/40 p-6 rounded-[2.5rem] border border-white/5 shadow-2xl hover:border-yellow-400/50 transition-colors duration-500">
                  <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-black w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-black text-zinc-600 uppercase tracking-widest text-[9px] mb-1">WhatsApp Sullivan</h4>
                    <p className="text-zinc-200 font-bold text-base leading-tight">+55 11 95299-0927</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 h-[500px] w-full bg-zinc-950 rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-zinc-900 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.512683884813!2d-46.4449856!3d-23.6575995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce695f70a256a7%3A0xc39e551606775535!2sR.%20Vit%C3%B3ria%2C%20182%20-%20Vila%20Margarida%2C%20Mau%C3%A1%20-%20SP%2C%2009310-440!5e0!3m2!1spt-BR!2sbr!4v1716492345678!5m2!1spt-BR!2sbr" 
                width="100%" height="100%" 
                style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2) brightness(0.6)' }} 
                allowFullScreen loading="lazy" 
              />
              <div className="absolute inset-0 pointer-events-none border-[1px] border-white/10 rounded-[3rem]" />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black py-24 text-white border-t border-white/5 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className="container mx-auto px-6">
            <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-10 mx-auto shadow-[0_0_30px_rgba(250,204,21,0.3)]">
                <Smartphone className="text-black w-8 h-8 stroke-[3.5px]" />
            </div>
            <span className="font-display font-black text-3xl tracking-tighter uppercase italic mb-10 block">SULLIVAN <span className="text-yellow-400">CELL</span></span>
            <div className="flex justify-center gap-8 mb-16">
              <a href={INSTAGRAM_URL} target="_blank" className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all border border-white/5 shadow-2xl transform hover:-translate-y-1">
                  <Instagram className="w-7 h-7" />
              </a>
            </div>
            <p className="text-zinc-800 text-[10px] font-black uppercase tracking-[0.8em]">© 2024 • PREMIUM REPAIR TECH LAB • REVOLUTIONIZING DEVICE CARE</p>
        </div>
      </footer>
    </div>
  );
}
