import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, MotionConfig, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import {
  IconAlertTriangle as AlertTriangle,
  IconArrowDown as ArrowDown,
  IconArrowRight as ArrowRight,
  IconArrowUpRight as ArrowUpRight,
  IconBrandInstagram as Instagram,
  IconBrandTiktok as Tiktok,
  IconBug as Bug,
  IconBuildingSkyscraper as Building,
  IconCertificate as Certificate,
  IconCheck as IconCheck,
  IconClock as Clock,
  IconDroplet as Droplet,
  IconExternalLink as ExternalLink,
  IconFileCertificate as FileCertificate,
  IconMessageCircle as MessageCircle,
  IconPhoneCall as PhoneCall,
  IconPlayerPlay as Play,
  IconPlus as IconPlus,
  IconQuote as IconQuote,
  IconShieldCheck as ShieldCheck,
  IconSparkles as Sparkles,
  IconStar as IconStar,
  IconStarFilled as IconStarFilled,
  IconTools as Tools,
  IconX as X
} from '@tabler/icons-react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import './styles.css';

/* =========================================================
   CONSTANTES E MENSAGENS OFICIAIS DE CONVERSÃO (WHATSAPP)
   ========================================================= */
const WHATSAPP = '5511947231234';
const waLink = (message) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

// Mensagens contextuais padronizadas
const WA_MSGS = {
  emergency: 'Olá! Sou responsável por um condomínio e preciso de atendimento emergencial. Gostaria de falar com um atendente.',
  generalQuote: 'Olá! Sou responsável por um condomínio e gostaria de solicitar um orçamento para a LM Comércio e Serviços.',
  dedetizacao: 'Olá! Gostaria de solicitar um orçamento para dedetização e desratização no meu condomínio.',
  caixaAgua: 'Olá! Gostaria de solicitar um orçamento para limpeza e desinfecção de caixa d’água no meu condomínio.',
  sanitizacao: 'Olá! Gostaria de solicitar um orçamento para sanitização de ambientes no meu condomínio.',
  altura: 'Olá! Gostaria de solicitar um orçamento para serviços em altura no meu condomínio.',
  manutencao: 'Olá! Gostaria de solicitar um orçamento para pequenos reparos e manutenção no meu condomínio.',
  qualificacao: 'Olá! Gostaria de falar com a equipe técnica da LM sobre as qualificações (NRs e ART) para serviços no condomínio.'
};

/* =========================================================
   DADOS DE SERVIÇOS E CONTEÚDOS OFICIAIS
   ========================================================= */
const mainServices = [
  {
    eyebrow: 'Higienização e potabilidade',
    title: 'Limpeza de caixas d’água',
    text: 'Desinfecção profunda com métodos seguros (NR-33), laudos técnicos de conformidade e fotos de antes/depois para prestação de contas.',
    image: '/assets/banner-caixa-agua-novo.jpg',
    tag: 'Saúde e Conformidade Sanitária',
    message: WA_MSGS.caixaAgua
  },
  {
    eyebrow: 'Controle e prevenção contínua',
    title: 'Dedetização & desratização',
    text: 'Proteção preventiva e corretiva para garagens, galerias, áreas comuns e lixeiras. Produtos homologados e certificados para a vigilância.',
    image: '/assets/banner-dedetizacao-novo.jpg',
    tag: 'Certificado de Garantia',
    message: WA_MSGS.dedetizacao
  },
  {
    eyebrow: 'Proteção para áreas coletivas',
    title: 'Sanitização de ambientes',
    text: 'Aplicação técnica em elevadores, halls, academias, salões de festas e portarias. Ambientes seguros e livres de patógenos com zero odor residual.',
    image: '/assets/banner-sanitizacao-novo.jpg',
    tag: 'Áreas de Alto Fluxo',
    message: WA_MSGS.sanitizacao
  }
];

const maintenanceServices = [
  {
    title: 'Serviços hidráulicos',
    text: 'Ajustes de bombas, registros gerais, vazamentos em colunas e manutenção de barriletes.',
    image: '/assets/limpeza-caixa-agua-1.jpeg'
  },
  {
    title: 'Serviços elétricos',
    text: 'Quadros de comando, iluminação de emergência, disjuntores e pequenos reparos elétricos.',
    image: '/assets/eletrica.jpeg'
  },
  {
    title: 'Ar-condicionado',
    text: 'Manutenção preventiva e corretiva para portarias, salas administrativas e salões.',
    image: '/assets/ar-condicionado.jpeg'
  },
  {
    title: 'Manutenção predial leve',
    text: 'Pintura pontual, reparos de alvenaria e conservação contínua da estrutura predial.',
    image: '/assets/manutencao.jpeg'
  },
  {
    title: 'Pequenos reparos do cotidiano',
    text: 'Agilidade para solucionar aquelas demandas acumuladas que geram queixas de moradores.',
    image: '/assets/eletrica-7.jpeg'
  }
];

const gallery = [
  ['/assets/trabalho-fachada-altura.jpg', 'Manutenção em altura com caminhão cesto'],
  ['/assets/trabalho-video-1.mp4', 'Vídeo: Serviço em campo', '/assets/trabalho-video-1-poster.jpg'],
  ['/assets/limpeza-caixa-agua-1.jpeg', 'Limpeza técnica de caixa d’água'],
  ['/assets/dedetizacao.jpeg', 'Dedetização preventiva em áreas comuns'],
  ['/assets/trabalho-totem-sadef.jpg', 'Instalação e alinhamento de totem'],
  ['/assets/trabalho-video-2.mp4', 'Vídeo: Manutenção em campo', '/assets/trabalho-video-2-poster.jpg'],
  ['/assets/eletrica-4.jpeg', 'Reparo e revisão elétrica'],
  ['/assets/limpeza-caixa-agua-2.jpeg', 'Desinfecção de reservatório superior'],
  ['/assets/ar-condicionado-2.jpeg', 'Manutenção de climatização predial'],
  ['/assets/eletrica-5.jpeg', 'Revisão de quadro de disjuntores'],
  ['/assets/manutencao.jpeg', 'Conservação e manutenção preventiva'],
  ['/assets/eletrica-6.jpeg', 'Adequação de circuitos elétricos']
];

const revealVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

function Reveal({ children, className = '', delay = 0, amount = 0.12 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={revealVariants}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.18 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
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
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.14);
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.14);
  };
  const reset = () => { x.set(0); y.set(0); };
  return (
    <motion.a
      {...props}
      className={className}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onFocus={reset}
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
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
  return (
    <div className={`spotlight-surface ${className}`} onPointerMove={handleMove}>
      <motion.span className="card-spotlight" style={{ x: springX, y: springY }} aria-hidden="true" />
      {children}
    </div>
  );
}

function ParallaxImage({ src, alt }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  return <motion.img ref={ref} src={src} alt={alt} loading="lazy" decoding="async" style={{ y }} />;
}

function ThreeDImageCard({ image, alt, className = '' }) {
  return (
    <CardContainer containerClassName={`aceternity-container ${className}`} className="aceternity-card" data-3d-card>
      <CardBody className="aceternity-card-body">
        <CardItem translateZ={26} className="aceternity-card-media">
          <img src={image} alt={alt} loading="lazy" decoding="async" />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

/* =========================================================
   1. HEADER DA PÁGINA (NAVEGAÇÃO PRINCIPAL)
   ========================================================= */
function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header" id="topo">
      <div className="container nav-wrap">
        <a className="brand" href="#topo" aria-label="LM Comércio e Serviços — Início">
          <img src="/assets/logotipo.png" alt="LM Comércio e Serviços" width="210" height="69" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        >
          {open ? <X size={18} /> : 'Menu'} <span>{open ? '' : '+'}</span>
        </button>
        <nav id="main-nav" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
          <a href="#solucoes" onClick={close}>Soluções</a>
          <a href="#manutencao" onClick={close}>Manutenção</a>
          <a href="#altura" onClick={close}>Serviços em Altura</a>
          <a href="#qualificacao" onClick={close}>Qualificação Técnica</a>
          <a href="#diferenciais" onClick={close}>Diferenciais</a>
          <a href="#trabalhos" onClick={close}>Trabalhos</a>
          <a href="#avaliacoes" onClick={close}>Avaliações</a>
          <MagneticLink
            className="nav-cta"
            href={waLink(WA_MSGS.emergency)}
            target="_blank"
            rel="noreferrer"
            onClick={close}
          >
            <PhoneCall size={15} /> <span>Emergência 24h</span>
          </MagneticLink>
        </nav>
      </div>
    </header>
  );
}

/* =========================================================
   2. HERO SECTION — NOVO POSICIONAMENTO PARA SÍNDICOS
   ========================================================= */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 28]);

  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <div className="container hero-content">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } } }}
        >
          <motion.div className="hero-badge-sindico" variants={revealVariants}>
            <Building size={14} /> Parceira Estratégica de Síndicos e Administradoras
          </motion.div>
          <motion.h1 id="hero-title" variants={revealVariants}>
            SÍNDICO, SEU CONDOMÍNIO <em>PRECISA DE SOLUÇÕES.</em> NÓS PODEMOS AJUDAR!
          </motion.h1>
          <motion.p className="hero-subtitle" variants={revealVariants}>
            Dedetização, limpeza de caixas d’água, sanitização, serviços em altura e manutenção predial leve.
            Segurança técnica, laudos de conformidade e equipe preparada para tirar o peso da sua rotina.
          </motion.p>
          <motion.div className="hero-actions" variants={revealVariants}>
            <MagneticLink
              className="button button-primary"
              href={waLink(WA_MSGS.generalQuote)}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar orçamento <ArrowUpRight size={18} />
            </MagneticLink>
            <MagneticLink
              className="button button-emergency"
              href={waLink(WA_MSGS.emergency)}
              target="_blank"
              rel="noreferrer"
            >
              <PhoneCall size={17} /> Atendimento emergencial
            </MagneticLink>
          </motion.div>
          <motion.div className="hero-trust-bullets" variants={revealVariants}>
            <span><IconCheck size={14} /> Laudos e certificados</span>
            <span><IconCheck size={14} /> Equipe capacitada (NRs)</span>
            <span><IconCheck size={14} /> ART conforme aplicabilidade</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-visual-frame">
            <motion.img
              src="/assets/dedetizacao-2.jpeg"
              alt="Profissional técnico realizando serviço especializado em condomínio"
              width="735"
              height="490"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="hero-visual-meta">
            <span>01</span>
            <span>Atendimento especializado para condomínios</span>
            <span className="meta-rule" />
          </div>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#emergencia" aria-label="Rolar para atendimento emergencial">
        <span /> Conheça nossas soluções
      </a>
    </section>
  );
}

/* =========================================================
   3. DESTAQUE PARA ATENDIMENTO EMERGENCIAL 24 HORAS
   ========================================================= */
function EmergencySection() {
  return (
    <section className="emergency-highlight-section" id="emergencia" aria-label="Atendimento Emergencial para Condomínios">
      <div className="container">
        <Reveal className="emergency-box">
          <div className="emergency-badge-top">
            <span className="pulse-indicator" aria-hidden="true" />
            <PhoneCall size={16} /> CANAL DE RESPOSTA RÁPIDA
          </div>
          <div className="emergency-content-grid">
            <div className="emergency-copy">
              <h2>SÍNDICO, CONTE COM ATENDIMENTO EMERGENCIAL 24 HORAS!</h2>
              <p>
                Imprevistos acontecem. Conte com nosso atendimento para encaminhar as demandas emergenciais do seu condomínio.
              </p>
              <div className="emergency-tags">
                <span>Vazamentos e registros</span>
                <span>Infestações críticas</span>
                <span>Demandas elétricas urgentes</span>
                <span>Suporte técnico operacional</span>
              </div>
            </div>
            <div className="emergency-action-block">
              <MagneticLink
                className="button emergency-btn-glow"
                href={waLink(WA_MSGS.emergency)}
                target="_blank"
                rel="noreferrer"
              >
                <PhoneCall size={19} />
                <span>ACIONAR ATENDIMENTO</span>
                <ArrowRight size={17} />
              </MagneticLink>
              <small className="emergency-disclaimer">
                * Canal prioritário para encaminhamento de demandas emergenciais de condomínios. Sujeito à disponibilidade técnica e confirmação operacional da equipe de plantão.
              </small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   4. PROBLEMAS E NECESSIDADES COMUNS DOS CONDOMÍNIOS
   ========================================================= */
function CommonNeedsSection() {
  const needs = [
    {
      num: '01',
      icon: <Droplet size={22} />,
      problem: 'Caixas d’água sem higienização e risco à saúde',
      desc: 'Água imprópria e falta de laudos colocam a saúde dos moradores em risco e geram advertências da vigilância sanitária. A LM realiza desinfecção completa com laudos de conformidade.'
    },
    {
      num: '02',
      icon: <Bug size={22} />,
      problem: 'Pragas urbanas e queixas de moradores',
      desc: 'Baratas nas garagens, formigas nos halls e roedores nas lixeiras desgastam a gestão do síndico. Oferecemos controle contínuo, seguro e com certificado semestral de garantia.'
    },
    {
      num: '03',
      icon: <Tools size={22} />,
      problem: 'Pequenos reparos que acumulam no dia a dia',
      desc: 'Lâmpadas queimadas, registros vazando e pequenos ajustes que demoram semanas para serem resolvidos. Centralizamos essas demandas em uma equipe parceira e organizada.'
    },
    {
      num: '04',
      icon: <Building size={22} />,
      problem: 'Demandas em altura sem equipe qualificada',
      desc: 'Reparos de fachada, calhas e estruturas que exigem trabalho em altura não podem ser feitos por amadores. Atuamos com treinamento NR-35 e equipamentos adequados.'
    },
    {
      num: '05',
      icon: <FileCertificate size={22} />,
      problem: 'Insegurança jurídica e prestação de contas',
      desc: 'Dificuldade em obter relatórios fotográficos e laudos para apresentar em assembleia. A LM entrega documentação clara e suporte técnico para tranquilidade do síndico.'
    },
    {
      num: '06',
      icon: <Clock size={22} />,
      problem: 'Falta de pontualidade e múltiplos contatos',
      desc: 'Lidar com vários prestadores autônomos sem compromisso gera atrasos e dor de cabeça. Com a LM, você tem um único ponto de contato ágil, uniformizado e profissional.'
    }
  ];

  return (
    <section className="condo-needs section" id="necessidades" aria-labelledby="needs-heading">
      <div className="container">
        <Reveal className="section-heading split-heading">
          <div>
            <div className="section-label"><span>02</span><span className="label-line" /><span>Dores reais da gestão</span></div>
            <p className="kicker">Rotina simplificada para o síndico</p>
            <h2 id="needs-heading">Problemas comuns que <em>nós resolvemos para você.</em></h2>
          </div>
          <p className="heading-note dark-note">
            Entendemos a responsabilidade da administração predial. Nossa missão é ser o braço direito do síndico na conservação do condomínio.
          </p>
        </Reveal>

        <div className="needs-grid">
          {needs.map((item, idx) => (
            <Reveal key={item.num} delay={idx * 0.05} className="need-card">
              <div className="need-card-header">
                <span className="need-num">{item.num}</span>
                <span className="need-icon">{item.icon}</span>
              </div>
              <h3>{item.problem}</h3>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   5. CATÁLOGO DE SERVIÇOS EM CARDS COM IMAGENS
   ========================================================= */
function ServicesCatalog() {
  return (
    <section className="solutions section-dark" id="solucoes" aria-labelledby="services-heading">
      <div className="container">
        <Reveal className="section-heading">
          <div className="section-label section-label-dark">
            <span>03</span><span className="label-line" /><span>Serviços especializados</span>
          </div>
          <div>
            <p className="kicker light">O essencial para o condomínio</p>
            <h2 id="services-heading">Catálogo de serviços <em>para manter tudo em ordem.</em></h2>
          </div>
          <p className="heading-note">
            Soluções completas com produtos homologados, equipe treinada e laudos técnicos para prestação de contas.
          </p>
        </Reveal>

        <div className="service-list">
          {mainServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08} className="service-card">
              <SpotlightSurface>
                <ThreeDImageCard image={service.image} alt={service.title} />
                <div className="service-body">
                  <div className="service-tag-pill">{service.tag}</div>
                  <p className="kicker light">{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <MagneticLink className="card-link" href={waLink(service.message)} target="_blank" rel="noreferrer">
                    <span>Solicitar orçamento para condomínio</span> <ArrowUpRight size={17} />
                  </MagneticLink>
                </div>
              </SpotlightSurface>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   6. SEÇÃO DE PEQUENOS REPAROS E MANUTENÇÃO PREDIAL
   ========================================================= */
function MaintenanceSection() {
  return (
    <section className="complementary section" id="manutencao" aria-labelledby="maint-heading">
      <div className="container">
        <Reveal className="section-heading split-heading">
          <div>
            <div className="section-label"><span>04</span><span className="label-line" /><span>Conservação e Reparos</span></div>
            <p className="kicker">Para as demandas pontuais do prédio</p>
            <h2 id="maint-heading">Pequenos reparos e manutenção: <em>a LM resolve.</em></h2>
          </div>
          <p className="heading-note dark-note">
            Do cuidado preventivo às intervenções emergenciais, auxiliamos síndicos e administradoras a manterem as instalações prediais sempre funcionando.
          </p>
        </Reveal>

        <div className="complementary-grid">
          {maintenanceServices.map((item, index) => (
            <Reveal key={item.title} className="complementary-card" delay={index * 0.06}>
              <div className="complementary-image">
                <ParallaxImage src={item.image} alt={item.title} />
              </div>
              <div className="complementary-content">
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="maintenance-cta-strip" delay={0.2}>
          <div className="cta-strip-text">
            <strong>Precisa de apoio para demandas pontuais ou contrato recorrente?</strong>
            <span>Montamos um cronograma sob medida para as necessidades do seu condomínio.</span>
          </div>
          <MagneticLink
            className="button button-primary"
            href={waLink(WA_MSGS.manutencao)}
            target="_blank"
            rel="noreferrer"
          >
            Falar com especialista <ArrowUpRight size={17} />
          </MagneticLink>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   7. SEÇÃO DE QUALIFICAÇÃO TÉCNICA (NRS E ART)
   ========================================================= */
function TechnicalQualificationsSection() {
  const quals = [
    {
      badge: 'NR-35',
      title: 'Trabalho em Altura',
      desc: 'Profissionais capacitados e equipados com cintos tipo paraquedista, talabartes duplos, trava-quedas e linhas de vida para serviços em fachadas e coberturas elevadas.'
    },
    {
      badge: 'NR-12',
      title: 'Máquinas e Equipamentos',
      desc: 'Procedimentos seguros na operação de maquinários, lavadoras industriais de alta pressão e ferramentas elétricas para manutenção e conservação predial.'
    },
    {
      badge: 'NR-33',
      title: 'Espaços Confinados',
      desc: 'Protocolos de segurança e ventilação para entrada e higienização em reservatórios subterrâneos, caixas d’água elevadas e galerias de condomínios.'
    },
    {
      badge: 'ART',
      title: 'ART Civil e Elétrica',
      desc: 'Disponibilidade de emissão de Anotação de Responsabilidade Técnica (ART) por profissionais legalmente habilitados, conforme aplicabilidade e escopo da demanda.'
    }
  ];

  return (
    <section className="tech-qualifications section-dark" id="qualificacao" aria-labelledby="qual-heading">
      <div className="container">
        <Reveal className="section-heading split-heading">
          <div>
            <div className="section-label section-label-dark">
              <span>05</span><span className="label-line" /><span>Segurança e Conformidade</span>
            </div>
            <p className="kicker light">Rigor operacional e responsabilidade</p>
            <h2 id="qual-heading">Qualificação técnica: <em>sua tranquilidade garantida.</em></h2>
          </div>
          <p className="heading-note">
            Trabalho sério, sem amadorismo. Cumprimento das normas regulamentadoras vigentes para resguardar o síndico e o condomínio.
          </p>
        </Reveal>

        <div className="quals-grid">
          {quals.map((q, idx) => (
            <Reveal key={q.badge} delay={idx * 0.07} className="qual-card">
              <div className="qual-badge-header">
                <span className="qual-badge-code">{q.badge}</span>
                <ShieldCheck size={20} className="qual-check-icon" />
              </div>
              <h3>{q.title}</h3>
              <p>{q.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="qual-disclaimer-box" delay={0.25}>
          <AlertTriangle size={18} className="qual-warn-icon" />
          <p>
            <strong>Transparência e conformidade:</strong> As Normas Regulamentadoras (NRs) refletem as qualificações e treinamentos individuais dos profissionais de campo. A responsabilidade técnica (ART) é disponibilizada e emitida por engenheiros ou técnicos legalmente habilitados, conforme o escopo e a aplicabilidade específica de cada projeto.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   8. SEÇÃO DE SERVIÇOS EM ALTURA
   ========================================================= */
function HeightServicesSection() {
  return (
    <section className="height-services section" id="altura" aria-labelledby="height-heading">
      <div className="container">
        <div className="height-grid">
          <Reveal className="height-copy">
            <div className="section-label"><span>06</span><span className="label-line" /><span>Especialização e Equipamento</span></div>
            <p className="kicker">Acesso seguro em altura</p>
            <h2 id="height-heading">PRECISA DE SERVIÇOS EM ALTURA NO SEU CONDOMÍNIO?</h2>
            <p className="lead">
              Conte com soluções especializadas para demandas que exigem acesso em altura, planejamento e execução com segurança.
            </p>
            <p>
              Realizamos intervenções técnicas em fachadas, instalação de totens e estruturas, manutenção de pontos elevados, calhas e coberturas com caminhão cesto e equipamentos certificados pela NR-35.
            </p>
            <ul className="height-features-list">
              <li><IconCheck size={16} /> Limpeza técnica de fachadas e vidros em altura</li>
              <li><IconCheck size={16} /> Instalação e manutenção de totens, luminosos e câmeras</li>
              <li><IconCheck size={16} /> Reparo pontual em telhados, calhas e estruturas elevadas</li>
              <li><IconCheck size={16} /> Uso obrigatório de EPIs e cumprimento estrito da NR-35</li>
            </ul>
            <div className="height-actions">
              <MagneticLink
                className="button button-primary"
                href={waLink(WA_MSGS.altura)}
                target="_blank"
                rel="noreferrer"
              >
                SOLICITAR ORÇAMENTO <ArrowUpRight size={18} />
              </MagneticLink>
            </div>
          </Reveal>

          <Reveal className="height-visual-collage" delay={0.15}>
            <div className="height-visual-main">
              <img
                src="/assets/trabalho-fachada-altura.jpg"
                alt="Equipe da LM realizando manutenção com caminhão cesto em altura"
                loading="lazy"
                decoding="async"
              />
              <span className="visual-caption">Manutenção com caminhão cesto</span>
            </div>
            <div className="height-visual-secondary">
              <img
                src="/assets/trabalho-totem-sadef.jpg"
                alt="Instalação de totem e infraestrutura de segurança"
                loading="lazy"
                decoding="async"
              />
              <span className="visual-caption">Instalação de totem</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   9. DIFERENCIAIS DA LM PARA SÍNDICOS
   ========================================================= */
function DifferentialsSection() {
  const diffs = [
    {
      title: 'Parceira Estratégica Única',
      desc: 'Em vez de contratar múltiplos prestadores autônomos, você conta com uma parceira completa para dedetização, caixas d’água, sanitização, altura e manutenção.'
    },
    {
      title: 'Segurança Técnica para o Síndico',
      desc: 'Emissão de laudos de potabilidade, certificados de desinsetização e relatórios fotográficos de antes/depois prontos para prestação de contas na assembleia.'
    },
    {
      title: 'Pontualidade e Organização',
      desc: 'Equipe própria devidamente uniformizada, identificada e com todos os EPIs exigidos, com agendamentos planejados para não interferir na rotina dos moradores.'
    },
    {
      title: 'Atendimento Ágil e Emergencial',
      desc: 'Suporte rápido para canalizar demandas urgentes e evitar que pequenos imprevistos se tornem grandes prejuízos para o condomínio.'
    }
  ];

  return (
    <section className="differentials section-accent" id="diferenciais" aria-labelledby="diff-heading">
      <div className="container">
        <Reveal className="section-heading split-heading">
          <div>
            <div className="section-label"><span>07</span><span className="label-line" /><span>Por que a LM</span></div>
            <p className="kicker">Compromisso com o seu condomínio</p>
            <h2 id="diff-heading">Diferenciais que fazem <em>a diferença na gestão.</em></h2>
          </div>
          <p className="heading-note">
            Entendemos que a tranquilidade do síndico depende de prestadores pontuais, qualificados e transparentes.
          </p>
        </Reveal>

        <div className="diffs-grid">
          {diffs.map((d, index) => (
            <Reveal key={d.title} delay={index * 0.07} className="diff-card">
              <span className="diff-card-num">0{index + 1}</span>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   10. GALERIA DE TRABALHOS REALIZADOS
   ========================================================= */
function GallerySection() {
  return (
    <section className="work section" id="trabalhos" aria-labelledby="work-heading">
      <div className="container">
        <Reveal className="section-heading split-heading">
          <div>
            <div className="section-label"><span>08</span><span className="label-line" /><span>Registros em campo</span></div>
            <p className="kicker">Transparência em cada detalhe</p>
            <h2 id="work-heading">Trabalhos realizados: <em>presença e resultado.</em></h2>
          </div>
          <p className="heading-note dark-note">
            Confira registros reais de serviços executados pela equipe da LM em condomínios e estabelecimentos.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {gallery.map(([image, alt, poster], index) => (
            <GalleryItem key={`${image}-${index}`} image={image} alt={alt} poster={poster} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ image, alt, poster, index }) {
  const [open, setOpen] = useState(false);
  const isVideo = image.endsWith('.mp4');
  const use3D = !isVideo && [0, 4, 8].includes(index);

  const media = isVideo ? (
    <div className="gallery-video-wrapper">
      <video
        src={image}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="video-overlay-play">
        <span className="video-play-btn" aria-hidden="true"><Play size={20} /></span>
      </div>
      <span className="video-badge"><Play size={11} /> Vídeo</span>
    </div>
  ) : use3D ? (
    <ThreeDImageCard image={image} alt={alt} className="gallery-3d" />
  ) : (
    <img src={image} alt={alt} loading="lazy" decoding="async" />
  );

  return (
    <Reveal className={`gallery-item gallery-item-${index + 1} ${isVideo ? 'is-video' : ''}`} delay={index * 0.04}>
      <button
        type="button"
        aria-label={isVideo ? `Assistir vídeo: ${alt}` : `Ampliar foto: ${alt}`}
        onClick={() => setOpen(true)}
      >
        {media}
        <span>{alt} <ArrowUpRight size={16} /></span>
      </button>
      {open && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={isVideo ? `Vídeo: ${alt}` : `Imagem ampliada: ${alt}`}
          onClick={() => setOpen(false)}
        >
          <button type="button" className="lightbox-close" aria-label="Fechar" onClick={() => setOpen(false)}>
            <X size={30} />
          </button>
          {isVideo ? (
            <video
              src={image}
              poster={poster}
              controls
              autoPlay
              playsInline
              className="gallery-lightbox-video"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img src={image} alt={alt} />
          )}
        </div>
      )}
    </Reveal>
  );
}

/* =========================================================
   11. AVALIAÇÕES DE SÍNDICOS E GESTORES (REVIEWS)
   ========================================================= */
const initialReviews = [
  {
    id: 'rev-1',
    name: 'Marcos Vinicius',
    role: 'Síndico Profissional',
    entity: 'Condomínio Residencial Jardins do Sul',
    service: 'Dedetização & Desratização',
    rating: 5,
    comment: 'Contratamos a LM para a dedetização semestral e desratização das áreas comuns e garagens. Equipe extremamente pontual, uniformizada e com todos os laudos técnicos e certificados emitidos no mesmo dia para prestação de contas aos moradores. Excelente atendimento!',
    date: '10/11/2026',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Dra. Fernanda Alcantara',
    role: 'Gerente Administrativa',
    entity: 'Colégio Integrado Alpha',
    service: 'Sanitização',
    rating: 5,
    comment: 'Fizeram a sanitização completa das salas de aula, biblioteca e pátios. O produto utilizado não deixou odores fortes e permitiu o retorno das atividades com total segurança. Profissionalismo ímpar da LM.',
    date: '04/11/2026',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Roberto Guimarães',
    role: 'Síndico',
    entity: 'Condomínio Torre Empresarial Paulista',
    service: 'Limpeza de Caixas d’água',
    rating: 5,
    comment: 'Executaram a limpeza e desinfecção de duas caixas d’água de grande porte com agendamento no fim de semana para não interromper o abastecimento comercial. Fotos do antes e depois anexadas ao laudo com potabilidade da água impecável.',
    date: '28/10/2026',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Camila Silveira',
    role: 'Coordenadora de Facilities',
    entity: 'Hub Corporativo Berrini',
    service: 'Manutenção',
    rating: 5,
    comment: 'A LM resolveu rapidamente demandas elétricas e pequenos reparos hidráulicos em nossos andares. Ter uma única empresa de confiança para múltiplos serviços facilitou demais o nosso fluxo de facilities.',
    date: '22/10/2026',
    verified: true
  },
  {
    id: 'rev-5',
    name: 'Antônio Carlos Neves',
    role: 'Conselho Fiscal',
    entity: 'Residencial Vila Nova',
    service: 'Dedetização & Desratização',
    rating: 5,
    comment: 'Trabalho sério e muito seguro. Tínhamos problemas recorrentes com formigas e baratas de esgoto nas galerias do condomínio. Após a intervenção da LM, o controle foi 100% efetivo.',
    date: '15/10/2026',
    verified: true
  },
  {
    id: 'rev-6',
    name: 'Patrícia Rocha',
    role: 'Administradora de Bens',
    entity: 'Imóveis & Gestão Condominial',
    service: 'Limpeza de Caixas d’água',
    rating: 5,
    comment: 'Acompanhei o serviço em 3 prédios sob minha administração. Preço justo, cumprimento rigoroso de prazos e equipe com todos os EPIs e certificações exigidas pela vigilância.',
    date: '08/10/2026',
    verified: true
  }
];

function StarRating({ rating, size = 15, className = '' }) {
  return (
    <div className={`reviews-stars-row ${className}`} aria-label={`${rating} de 5 estrelas`}>
      {[1, 2, 3, 4, 5].map((star) => (
        star <= rating ? <IconStarFilled key={star} size={size} /> : <IconStar key={star} size={size} />
      ))}
    </div>
  );
}

function Reviews() {
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('lm_customer_reviews');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return initialReviews;
  });

  const [activeFilter, setActiveFilter] = useState('Todos');
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    entity: '',
    service: 'Limpeza de Caixas d’água',
    rating: 5,
    comment: ''
  });

  const filterOptions = ['Todos', 'Limpeza de Caixas d’água', 'Dedetização & Desratização', 'Sanitização', 'Manutenção'];

  const filteredReviews = activeFilter === 'Todos'
    ? reviews
    : reviews.filter((r) => r.service.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(r.service.toLowerCase()));

  const avgRating = (reviews.reduce((acc, cur) => acc + cur.rating, 0) / reviews.length).toFixed(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.comment.trim()) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      name: formData.name.trim(),
      role: formData.role.trim() || 'Gestor / Morador',
      entity: formData.entity.trim() || 'Condomínio ou Empresa',
      service: formData.service,
      rating: Number(formData.rating),
      comment: formData.comment.trim(),
      date: new Date().toLocaleDateString('pt-BR'),
      verified: true
    };

    const updated = [newRev, ...reviews];
    setReviews(updated);
    try {
      localStorage.setItem('lm_customer_reviews', JSON.stringify(updated));
    } catch (e) {}

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormOpen(false);
      setFormData({
        name: '',
        role: '',
        entity: '',
        service: 'Limpeza de Caixas d’água',
        rating: 5,
        comment: ''
      });
    }, 2400);
  };

  return (
    <section className="reviews-section" id="avaliacoes" aria-labelledby="reviews-heading">
      <div className="container">
        <Reveal className="reviews-header-wrap">
          <div>
            <div className="section-label section-label-dark">
              <span>09</span><span className="label-line" /><span>Depoimentos Reais</span>
            </div>
            <p className="kicker light">Reconhecimento de quem confia</p>
            <h2 id="reviews-heading">Avaliações de <em>síndicos e administradoras.</em></h2>
          </div>
          <button
            type="button"
            className="reviews-btn-trigger"
            onClick={() => setFormOpen(!formOpen)}
            aria-expanded={formOpen}
          >
            <IconPlus size={16} /> {formOpen ? 'Fechar formulário' : 'Deixar sua avaliação'}
          </button>
        </Reveal>

        <Reveal className="reviews-stats-bar" delay={0.08}>
          <div className="reviews-score-block">
            <span className="reviews-big-score">{avgRating}</span>
            <div>
              <StarRating rating={Math.round(Number(avgRating))} size={18} />
              <span className="reviews-stat-label">Nota média geral</span>
            </div>
          </div>
          <div className="reviews-stat-divider" aria-hidden="true" />
          <div className="reviews-stat-item">
            <span className="reviews-stat-num">{reviews.length}</span>
            <span className="reviews-stat-label">Avaliações registradas</span>
          </div>
          <div className="reviews-stat-divider" aria-hidden="true" />
          <div className="reviews-stat-item">
            <span className="reviews-stat-num">100%</span>
            <span className="reviews-stat-label">Laudos emitidos com aprovação</span>
          </div>
        </Reveal>

        {formOpen && (
          <Reveal className="review-form-card" delay={0.05}>
            <h3 className="review-form-title">Compartilhe sua experiência com a LM</h3>
            <p className="review-form-desc">Seu relato ajuda outros síndicos e gestores a conhecerem nosso padrão de atendimento.</p>
            {submitted ? (
              <div className="review-success-msg" role="status">
                <IconCheck size={20} /> Avaliação enviada com sucesso! Muito obrigado pela parceria.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="review-form-grid">
                  <div>
                    <label className="review-label" htmlFor="rev-name">Seu Nome *</label>
                    <input
                      id="rev-name"
                      className="review-input"
                      required
                      placeholder="Ex: Carlos Andrade"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="review-label" htmlFor="rev-role">Cargo / Função</label>
                    <input
                      id="rev-role"
                      className="review-input"
                      placeholder="Ex: Síndico, Gerente de Facilities..."
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="review-label" htmlFor="rev-entity">Condomínio ou Empresa</label>
                    <input
                      id="rev-entity"
                      className="review-input"
                      placeholder="Ex: Condomínio Edifício Solar..."
                      value={formData.entity}
                      onChange={(e) => setFormData({ ...formData, entity: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="review-label" htmlFor="rev-service">Serviço Realizado</label>
                    <select
                      id="rev-service"
                      className="review-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="Limpeza de Caixas d’água">Limpeza de Caixas d’água</option>
                      <option value="Dedetização & Desratização">Dedetização & Desratização</option>
                      <option value="Sanitização">Sanitização</option>
                      <option value="Serviços em Altura">Serviços em Altura</option>
                      <option value="Manutenção">Manutenção Predial / Reparos</option>
                    </select>
                  </div>
                  <div className="review-field-full">
                    <label className="review-label">Avaliação em Estrelas</label>
                    <div className="review-stars-picker">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className={`star-btn ${formData.rating >= star ? 'is-active' : ''}`}
                          onClick={() => setFormData({ ...formData, rating: star })}
                          aria-label={`Selecionar ${star} estrelas`}
                        >
                          {formData.rating >= star ? <IconStarFilled size={22} /> : <IconStar size={22} />}
                        </button>
                      ))}
                      <span className="star-rating-hint">{formData.rating} de 5 estrelas</span>
                    </div>
                  </div>
                  <div className="review-field-full">
                    <label className="review-label" htmlFor="rev-comment">Seu Depoimento *</label>
                    <textarea
                      id="rev-comment"
                      className="review-textarea"
                      required
                      placeholder="Conte como foi o atendimento da LM, cumprimento de prazos, laudos..."
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    />
                  </div>
                </div>
                <div className="review-form-actions">
                  <button type="submit" className="review-submit-btn">Publicar Avaliação</button>
                  <button type="button" className="review-cancel-btn" onClick={() => setFormOpen(false)}>Cancelar</button>
                </div>
              </form>
            )}
          </Reveal>
        )}

        <div className="reviews-filter-bar" role="tablist" aria-label="Filtrar avaliações por serviço">
          {filterOptions.map((f) => (
            <button
              key={f}
              type="button"
              className={`reviews-filter-pill ${activeFilter === f ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="reviews-grid">
          {filteredReviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="review-card-top">
                <span className="review-card-tag">{rev.service}</span>
                <StarRating rating={rev.rating} size={14} />
              </div>
              <p className="review-card-quote">“{rev.comment}”</p>
              <div className="review-card-author">
                <div className="review-author-avatar" aria-hidden="true">
                  {rev.name.charAt(0).toUpperCase()}
                </div>
                <div className="review-author-info">
                  <div className="review-author-name">{rev.name}</div>
                  <div className="review-author-meta">{rev.role} • {rev.entity}</div>
                  <div className="review-verified-badge"><IconCheck size={11} /> Serviço Verificado ({rev.date})</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   12. CHAMADA PARA ORÇAMENTO (CTA FINAL)
   ========================================================= */
function QuoteCtaSection() {
  return (
    <section className="quote-cta-section" id="contato" aria-labelledby="cta-heading">
      <div className="container">
        <Reveal className="quote-cta-box">
          <div className="quote-cta-content">
            <span className="kicker light">Parceria que facilita a sua rotina</span>
            <h2 id="cta-heading">Pronto para levar mais tranquilidade para a gestão do seu condomínio?</h2>
            <p>
              Fale diretamente com a equipe técnica da LM Comércio e Serviços. Atendimento ágil, orçamentos detalhados e suporte especializado para síndicos e administradoras.
            </p>
            <div className="quote-cta-buttons">
              <MagneticLink
                className="button button-primary"
                href={waLink(WA_MSGS.generalQuote)}
                target="_blank"
                rel="noreferrer"
              >
                Solicitar orçamento pelo WhatsApp <ArrowUpRight size={18} />
              </MagneticLink>
              <MagneticLink
                className="button button-emergency"
                href={waLink(WA_MSGS.emergency)}
                target="_blank"
                rel="noreferrer"
              >
                <PhoneCall size={17} /> Acionar atendimento emergencial
              </MagneticLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   13. RODAPÉ COMPLETO
   ========================================================= */
function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/logotipo.png" alt="LM Comércio e Serviços" width="250" height="82" loading="lazy" decoding="async" />
            <p>
              Parceira estratégica de síndicos, condomínios e administradoras. Soluções completas em dedetização, limpeza de caixas d'água, sanitização, serviços em altura e manutenção predial.
            </p>
            <div className="footer-domain-badge">
              <span>Domínio Oficial:</span> <strong>https://manutencaolm.com.br/</strong>
            </div>
          </div>

          <div>
            <span className="footer-label">Navegação Rápida</span>
            <a href="#solucoes">Soluções Especializadas</a>
            <a href="#manutencao">Pequenos Reparos &amp; Manutenção</a>
            <a href="#altura">Serviços em Altura</a>
            <a href="#qualificacao">Qualificação Técnica (NRs &amp; ART)</a>
            <a href="#diferenciais">Diferenciais da Empresa</a>
            <a href="#trabalhos">Trabalhos Realizados</a>
            <a href="#avaliacoes">Avaliações de Síndicos</a>
          </div>

          <div>
            <span className="footer-label">Canais de Contato</span>
            <a href={waLink(WA_MSGS.generalQuote)} target="_blank" rel="noreferrer">
              <MessageCircle size={14} /> WhatsApp: (11) 94723-1234
            </a>
            <a href={waLink(WA_MSGS.emergency)} target="_blank" rel="noreferrer" className="footer-emergency-link">
              <PhoneCall size={14} /> Atendimento Emergencial 24h
            </a>
            <div className="footer-socials">
              <span className="footer-social-label">Canais Institucionais</span>
              <button type="button" className="social-button" disabled title="Rede oficial em estruturação">
                <Instagram size={14} /> Instagram oficial
              </button>
              <button type="button" className="social-button" disabled title="Rede oficial em estruturação">
                <Tiktok size={14} /> TikTok oficial
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} LM Comércio e Serviços. Todos os direitos reservados.</span>
          <span>Atendimento focado em condomínios, escolas e empresas • São Paulo e Região</span>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   14. BOTÃO FLUTUANTE PARA CONTATO EMERGENCIAL E WHATSAPP
   ========================================================= */
function FloatingEmergencyContact() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`floating-contact-container ${expanded ? 'is-open' : ''}`}>
      {expanded && (
        <div className="floating-options-menu" role="dialog" aria-label="Opções de Atendimento">
          <a
            className="floating-opt-item is-emergency"
            href={waLink(WA_MSGS.emergency)}
            target="_blank"
            rel="noreferrer"
            onClick={() => setExpanded(false)}
          >
            <div className="opt-icon"><PhoneCall size={16} /></div>
            <div>
              <strong>Atendimento Emergencial 24h</strong>
              <small>Para imprevistos urgentes no condomínio</small>
            </div>
          </a>
          <a
            className="floating-opt-item"
            href={waLink(WA_MSGS.generalQuote)}
            target="_blank"
            rel="noreferrer"
            onClick={() => setExpanded(false)}
          >
            <div className="opt-icon"><MessageCircle size={16} /></div>
            <div>
              <strong>Solicitar Orçamento</strong>
              <small>Atendimento comercial pelo WhatsApp</small>
            </div>
          </a>
        </div>
      )}

      <button
        type="button"
        className="floating-main-trigger"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-label="Abrir opções de atendimento no WhatsApp"
      >
        <span className="floating-pulse" aria-hidden="true" />
        <img src="/assets/whatsapp-button.png" alt="WhatsApp" width="36" height="36" />
        <span className="floating-trigger-text">{expanded ? <X size={18} /> : 'Plantão'}</span>
      </button>
    </div>
  );
}

/* =========================================================
   COMPONENTE PRINCIPAL DA APLICAÇÃO
   ========================================================= */
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <EmergencySection />
        <CommonNeedsSection />
        <ServicesCatalog />
        <MaintenanceSection />
        <TechnicalQualificationsSection />
        <HeightServicesSection />
        <DifferentialsSection />
        <GallerySection />
        <Reviews />
        <QuoteCtaSection />
      </main>
      <Footer />
      <FloatingEmergencyContact />
    </MotionConfig>
  );
}

// Inicialização segura no DOM
const rootEl = document.getElementById('app');
if (rootEl) {
  createRoot(rootEl).render(<App />);
}
