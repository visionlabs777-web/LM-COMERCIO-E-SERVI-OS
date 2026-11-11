import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, MotionConfig, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { IconArrowDown as ArrowDown, IconArrowUpRight as ArrowUpRight, IconMessageCircle as MessageCircle, IconX as X } from '@tabler/icons-react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import './styles.css';

const WHATSAPP = '5511947231234';
const waLink = (message) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const services = [
  { eyebrow: 'Cuidado essencial', title: 'Limpeza de caixas d’água', text: 'Higienização cuidadosa para apoiar a rotina e a conservação do seu espaço.', image: '/assets/banner-caixa-agua-sanitizacao.png', message: 'Olá! Gostaria de solicitar um orçamento para limpeza de caixa d’água.' },
  { eyebrow: 'Ambientes bem cuidados', title: 'Sanitização', text: 'Mais cuidado para áreas de uso coletivo, com uma solução prática e profissional.', image: '/assets/sanitizacao-ambientes.webp', message: 'Olá! Gostaria de solicitar um orçamento para sanitização.' },
  { eyebrow: 'Controle e prevenção', title: 'Dedetização & desratização', text: 'Ambientes mais protegidos com atendimento organizado para condomínios, escolas e empresas.', image: '/assets/banner-dedetizacao-desratizacao.png', message: 'Olá! Gostaria de solicitar um orçamento para dedetização e desratização.' }
];

const complementary = [
  ['Manutenção predial leve', 'Pequenos reparos e cuidados que ajudam a manter a operação em dia.', '/assets/manutencao.jpeg'],
  ['Serviços hidráulicos', 'Apoio para ajustes e necessidades hidráulicas do cotidiano.', '/assets/limpeza-caixa-agua-1.jpeg'],
  ['Serviços elétricos', 'Execução cuidadosa para reparos e melhorias elétricas.', '/assets/eletrica.jpeg'],
  ['Ar-condicionado', 'Manutenção para apoiar conforto e funcionamento dos ambientes.', '/assets/ar-condicionado.jpeg'],
  ['Pequenos reparos', 'Uma equipe parceira para resolver diferentes demandas de conservação.', '/assets/eletrica-7.jpeg']
];

const gallery = [
  ['/assets/dedetizacao-2.jpeg', 'Dedetização'], ['/assets/dedetizacao.jpeg', 'Dedetização'],
  ['/assets/limpeza-caixa-agua-1.jpeg', 'Limpeza de caixa d’água'], ['/assets/limpeza-caixa-agua-2.jpeg', 'Limpeza de caixa d’água'],
  ['/assets/eletrica-4.jpeg', 'Serviço elétrico'], ['/assets/eletrica-5.jpeg', 'Serviço elétrico'],
  ['/assets/eletrica-6.jpeg', 'Serviço elétrico'], ['/assets/ar-condicionado-2.jpeg', 'Ar-condicionado'], ['/assets/manutencao.jpeg', 'Manutenção']
];

const viewport = { once: true, amount: 0.14 };
const revealVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

function Reveal({ children, className = '', delay = 0, amount = 0.14 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });
  return <motion.div ref={ref} className={className} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={revealVariants} transition={{ duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.18 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

function SpotlightCursor() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(-180);
  const y = useMotionValue(-180);
  const springX = useSpring(x, { stiffness: 260, damping: 34, mass: 0.16 });
  const springY = useSpring(y, { stiffness: 260, damping: 34, mass: 0.16 });
  const trail1X = useSpring(x, { stiffness: 190, damping: 30, mass: 0.22 });
  const trail1Y = useSpring(y, { stiffness: 190, damping: 30, mass: 0.22 });
  const trail2X = useSpring(x, { stiffness: 125, damping: 25, mass: 0.3 });
  const trail2Y = useSpring(y, { stiffness: 125, damping: 25, mass: 0.3 });
  const trail3X = useSpring(x, { stiffness: 82, damping: 21, mass: 0.38 });
  const trail3Y = useSpring(y, { stiffness: 82, damping: 21, mass: 0.38 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const touchOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches && navigator.maxTouchPoints > 0;
    if (reduceMotion || touchOnly) return undefined;
    const handleMove = (event) => { x.set(event.clientX); y.set(event.clientY); setActive(true); };
    const handleLeave = () => setActive(false);
    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('pointermove', handleMove, { passive: true });
    document.addEventListener('mousemove', handleMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleLeave);
    return () => { window.removeEventListener('pointermove', handleMove); window.removeEventListener('mousemove', handleMove); document.removeEventListener('pointermove', handleMove); document.removeEventListener('mousemove', handleMove); document.documentElement.removeEventListener('mouseleave', handleLeave); };
  }, [reduceMotion, x, y]);

  if (reduceMotion) return null;
  const state = active ? 'is-active' : '';
  return <>
    <motion.div className={`cursor-spotlight cursor-spotlight-trail cursor-spotlight-trail-3 ${state}`} style={{ x: trail3X, y: trail3Y }} aria-hidden="true" />
    <motion.div className={`cursor-spotlight cursor-spotlight-trail cursor-spotlight-trail-2 ${state}`} style={{ x: trail2X, y: trail2Y }} aria-hidden="true" />
    <motion.div className={`cursor-spotlight cursor-spotlight-trail cursor-spotlight-trail-1 ${state}`} style={{ x: trail1X, y: trail1Y }} aria-hidden="true" />
    <motion.div className={`cursor-spotlight cursor-spotlight-core ${state}`} style={{ x: springX, y: springY }} aria-hidden="true" />
  </>;
}

function MagneticLink({ children, className = '', ...props }) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.22 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.22 });
  const handleMove = (event) => {
    if (reduceMotion || event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.16);
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.16);
  };
  const reset = () => { x.set(0); y.set(0); };
  return <motion.a {...props} className={className} onPointerMove={handleMove} onPointerLeave={reset} onFocus={reset} style={reduceMotion ? undefined : { x: springX, y: springY }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>{children}</motion.a>;
}

function SpotlightSurface({ children, className = '' }) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(-130);
  const y = useMotionValue(-130);
  const springX = useSpring(x, { stiffness: 240, damping: 28, mass: 0.18 });
  const springY = useSpring(y, { stiffness: 240, damping: 28, mass: 0.18 });
  const handleMove = (event) => {
    if (reduceMotion || event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };
  return <div className={`spotlight-surface ${className}`} onPointerMove={handleMove}><motion.span className="card-spotlight" style={{ x: springX, y: springY }} aria-hidden="true" />{children}</div>;
}

function ParallaxImage({ src, alt }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-14, 14]);
  return <motion.img ref={ref} src={src} alt={alt} loading="lazy" style={{ y }} />;
}

function ThreeDImageCard({ image, alt, className = '' }) {
  return <CardContainer containerClassName={`aceternity-container ${className}`} className="aceternity-card" data-3d-card>
    <CardBody className="aceternity-card-body">
      <CardItem translateZ={28} className="aceternity-card-media"><img src={image} alt={alt} loading="lazy" /></CardItem>
    </CardBody>
  </CardContainer>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header" id="topo">
    <div className="container nav-wrap">
      <a className="brand" href="#topo" aria-label="LM Comércio e Serviços — início"><img src="/assets/logotipo.png" alt="LM Comércio e Serviços" /></a>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? <X size={18} /> : 'Menu'} <span>{open ? '' : '+'}</span></button>
      <nav id="main-nav" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
        <a href="#solucoes" onClick={close}>Soluções</a><a href="#complementares" onClick={close}>Manutenção</a><a href="#quem-atendemos" onClick={close}>Quem atendemos</a><a href="#trabalhos" onClick={close}>Trabalhos</a>
        <MagneticLink className="nav-cta" href={waLink('Olá! Gostaria de solicitar um orçamento para a LM Comércio e Serviços.')} target="_blank" rel="noreferrer" onClick={close}>Fale com a LM <ArrowUpRight size={15} /></MagneticLink>
      </nav>
    </div>
  </header>;
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 32]);
  return <section ref={ref} className="hero" aria-labelledby="hero-title">
    <div className="container hero-content">
      <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}>
        <motion.p className="kicker light" variants={revealVariants}>LM Comércio e Serviços <span className="rule" /> Soluções para cuidar de cada detalhe.</motion.p>
        <motion.h1 id="hero-title" variants={revealVariants}>Seu condomínio <em>em boas mãos.</em></motion.h1>
        <motion.p className="hero-subtitle" variants={revealVariants}>Dedetização, limpeza de caixas d’água, sanitização e manutenção para condomínios, escolas e empresas.</motion.p>
        <motion.div className="hero-actions" variants={revealVariants}>
          <MagneticLink className="button button-primary" href={waLink('Olá! Gostaria de solicitar um orçamento para a LM Comércio e Serviços.')} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowUpRight size={18} /></MagneticLink>
          <MagneticLink className="button button-ghost" href="#solucoes">Conheça nossos serviços <ArrowDown size={17} /></MagneticLink>
        </motion.div>
      </motion.div>
      <motion.div className="hero-visual" initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
        <div className="hero-visual-frame"><motion.img src="/assets/dedetizacao-2.jpeg" alt="Profissional realizando dedetização em uma residência" style={{ y: imageY }} /></div>
        <div className="hero-visual-meta"><span>01</span><span>Dedetização &amp; desratização</span><span className="meta-rule" /></div>
      </motion.div>
    </div>
    <a className="scroll-cue" href="#apresentacao" aria-label="Rolar para apresentação"><span /> role para explorar</a>
  </section>;
}

function Intro() {
  return <section className="intro section" id="apresentacao"><div className="container intro-grid"><Reveal className="section-label"><span>01</span><span className="label-line" /><span>Sobre a LM</span></Reveal><Reveal className="intro-copy"><p className="kicker">Uma parceria que facilita a rotina</p><h2>Mais soluções para <em>cuidar do seu espaço.</em></h2><p className="lead">A LM Comércio e Serviços reúne serviços especializados, conservação e manutenção predial leve para tornar a rotina de condomínios, escolas e empresas mais simples.</p><p>Em vez de lidar com vários contatos, você encontra uma parceira para resolver diferentes necessidades do dia a dia com organização, proximidade e cuidado em cada atendimento.</p><a className="text-link" href="#solucoes">Descubra como podemos ajudar <ArrowUpRight size={17} /></a></Reveal><Reveal className="intro-stamp" delay={0.12}><span>LM</span><small>comércio<br />e serviços</small></Reveal></div></section>;
}

function Services() {
  return <section className="solutions section-dark" id="solucoes"><div className="container"><Reveal className="section-heading"><div className="section-label section-label-dark"><span>02</span><span className="label-line" /><span>Serviços principais</span></div><div><p className="kicker light">O essencial, bem feito</p><h2>Soluções para manter <em>tudo em ordem.</em></h2></div><p className="heading-note">Atendimento pensado para quem precisa de agilidade sem abrir mão do cuidado.</p></Reveal><div className="service-list">{services.map((service, index) => <Reveal key={service.title} delay={index * 0.08} className="service-card"><SpotlightSurface><ThreeDImageCard image={service.image} alt={service.title} /><div className="service-body"><p className="kicker light">{service.eyebrow}</p><h3>{service.title}</h3><p>{service.text}</p><MagneticLink className="card-link" href={waLink(service.message)} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowUpRight size={17} /></MagneticLink></div></SpotlightSurface><span className="service-index">0{index + 1}</span></Reveal>)}</div></div></section>;
}

function Complementary() {
  return <section className="complementary section" id="complementares"><div className="container"><Reveal className="section-heading split-heading"><div><div className="section-label"><span>03</span><span className="label-line" /><span>Serviços complementares</span></div><p className="kicker">Para as demandas do cotidiano</p><h2>Quando aparecer uma necessidade, <em>conte com a LM.</em></h2></div><p className="heading-note dark-note">Do cuidado preventivo aos pequenos reparos, a LM ajuda condomínios e estabelecimentos a manterem seus espaços funcionando bem.</p></Reveal><div className="complementary-grid">{complementary.map(([title, text, image], index) => <Reveal key={title} className="complementary-card" delay={index * 0.06}><div className="complementary-image"><ParallaxImage src={image} alt={title} /></div><div className="complementary-content"><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div></div></section>;
}

function Audience() {
  return <section className="audience section-accent" id="quem-atendemos"><div className="container audience-grid"><Reveal className="audience-heading"><div className="section-label"><span>04</span><span className="label-line" /><span>Quem atendemos</span></div><p className="kicker">Uma solução para diferentes rotinas</p><h2>Para quem precisa de uma empresa <em>que acompanha.</em></h2></Reveal><Reveal className="audience-list" delay={0.12}><div><span>01</span><strong>Condomínios residenciais</strong><p>Cuidado próximo para a rotina de moradores e áreas comuns.</p></div><div><span>02</span><strong>Condomínios comerciais</strong><p>Serviços que ajudam a manter a operação funcionando.</p></div><div><span>03</span><strong>Escolas, empresas e comércios</strong><p>Mais organização para diferentes espaços e necessidades.</p></div></Reveal></div></section>;
}

function Gallery() {
  return <section className="work section" id="trabalhos"><div className="container"><Reveal className="section-heading split-heading"><div><div className="section-label"><span>05</span><span className="label-line" /><span>Trabalhos realizados</span></div><p className="kicker">Um pouco do nosso trabalho</p><h2>Presença, cuidado e <em>resultado.</em></h2></div><p className="heading-note dark-note">Uma seleção de registros enviados pela LM para mostrar a variedade de serviços que fazem parte da nossa rotina.</p></Reveal><div className="gallery-grid">{gallery.map(([image, alt], index) => <GalleryItem key={`${image}-${index}`} image={image} alt={alt} index={index} />)}</div></div></section>;
}

function GalleryItem({ image, alt, index }) {
  const [open, setOpen] = useState(false);
  const use3D = [0, 3, 7].includes(index);
  const media = use3D ? <ThreeDImageCard image={image} alt={alt} className="gallery-3d" /> : <img src={image} alt={alt} loading="lazy" />;
  return <Reveal className={`gallery-item gallery-item-${index + 1}`} delay={index * 0.045}><button type="button" aria-label={`Ampliar foto: ${alt}`} onClick={() => setOpen(true)}>{media}<span>{alt} <ArrowUpRight size={16} /></span></button>{open && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`Imagem ampliada: ${alt}`} onClick={() => setOpen(false)}><button type="button" className="lightbox-close" aria-label="Fechar imagem" onClick={() => setOpen(false)}><X size={30} /></button><img src={image} alt={alt} /></div>}</Reveal>;
}

function Contact() {
  return <section className="contact section-dark" id="contato"><div className="container contact-grid"><Reveal className="contact-mark"><img src="/assets/logotipo.png" alt="LM Comércio e Serviços" /><p>Uma empresa parceira para cuidar do seu espaço.</p></Reveal><Reveal className="contact-copy" delay={0.12}><p className="kicker light">Vamos conversar?</p><h2>Precisa de uma empresa para <em>cuidar do seu condomínio?</em></h2><p>Conte com a LM Comércio e Serviços para diferentes necessidades de manutenção, dedetização, limpeza e conservação.</p><MagneticLink className="button button-primary" href={waLink('Olá! Gostaria de conhecer os serviços da LM Comércio e Serviços.')} target="_blank" rel="noreferrer">Fale com a LM pelo WhatsApp <MessageCircle size={18} /></MagneticLink></Reveal></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><img src="/assets/logotipo.png" alt="LM Comércio e Serviços" /><p>Serviços para conservar, cuidar e manter.</p></div><div><p className="footer-label">Navegação</p><a href="#solucoes">Soluções</a><a href="#complementares">Manutenção</a><a href="#trabalhos">Trabalhos</a></div><div><p className="footer-label">Contato</p><a href="tel:+5511947231234">(11) 94723-1234</a><a href={waLink('Olá! Gostaria de falar com a LM Comércio e Serviços.')} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14} /></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} LM Comércio e Serviços</span><span>Conservação, manutenção e cuidado.</span></div></footer>;
}

function App() {
  return <MotionConfig reducedMotion="user"><SpotlightCursor /><ScrollProgress /><Header /><main><Hero /><Intro /><Services /><Complementary /><Audience /><Gallery /><Contact /></main><Footer /><MagneticLink className="floating-whatsapp" href={waLink('Olá! Gostaria de falar com a LM Comércio e Serviços.')} target="_blank" rel="noreferrer" aria-label="Falar com a LM pelo WhatsApp"><MessageCircle size={25} /><small>Fale com a LM</small></MagneticLink></MotionConfig>;
}

createRoot(document.getElementById('app')).render(<App />);
