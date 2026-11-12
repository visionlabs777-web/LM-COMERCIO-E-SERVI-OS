import './styles.css';

const WHATSAPP = '5511947231234';
const waLink = (message) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const services = [
  {
    eyebrow: 'Controle e prevenção',
    title: 'Dedetização & desratização',
    text: 'Ambientes mais protegidos com atendimento organizado para condomínios, escolas e empresas.',
    image: '/assets/banner-dedetizacao-desratizacao.png',
    message: 'Olá! Gostaria de solicitar um orçamento para dedetização e desratização.'
  },
  {
    eyebrow: 'Cuidado essencial',
    title: 'Limpeza de caixas d’água',
    text: 'Higienização cuidadosa para apoiar a rotina e a conservação do seu espaço.',
    image: '/assets/banner-caixa-agua-sanitizacao.png',
    message: 'Olá! Gostaria de solicitar um orçamento para limpeza de caixa d’água.'
  },
  {
    eyebrow: 'Ambientes bem cuidados',
    title: 'Sanitização',
    text: 'Mais cuidado para áreas de uso coletivo, com uma solução prática e profissional.',
    image: '/assets/limpeza-caixa-agua-2.jpeg',
    message: 'Olá! Gostaria de solicitar um orçamento para sanitização.'
  }
];

const complementary = [
  ['Manutenção predial leve', 'Pequenos reparos e cuidados que ajudam a manter a operação em dia.', '/assets/manutencao.jpeg'],
  ['Serviços hidráulicos', 'Apoio para ajustes e necessidades hidráulicas do cotidiano.', '/assets/limpeza-caixa-agua-1.jpeg'],
  ['Serviços elétricos', 'Execução cuidadosa para reparos e melhorias elétricas.', '/assets/eletrica.jpeg'],
  ['Ar-condicionado', 'Manutenção para apoiar conforto e funcionamento dos ambientes.', '/assets/ar-condicionado.jpeg'],
  ['Pequenos reparos', 'Uma equipe parceira para resolver diferentes demandas de conservação.', '/assets/eletrica-7.jpeg']
];

const gallery = [
  ['/assets/dedetizacao-2.jpeg', 'Dedetização'],
  ['/assets/dedetizacao.jpeg', 'Dedetização'],
  ['/assets/limpeza-caixa-agua-1.jpeg', 'Limpeza de caixa d’água'],
  ['/assets/limpeza-caixa-agua-2.jpeg', 'Limpeza de caixa d’água'],
  ['/assets/eletrica-4.jpeg', 'Serviço elétrico'],
  ['/assets/eletrica-5.jpeg', 'Serviço elétrico'],
  ['/assets/eletrica-6.jpeg', 'Serviço elétrico'],
  ['/assets/ar-condicionado-2.jpeg', 'Ar-condicionado'],
  ['/assets/manutencao.jpeg', 'Manutenção']
];

const app = document.querySelector('#app');

app.innerHTML = `
  <header class="site-header" id="topo">
    <div class="container nav-wrap">
      <a class="brand" href="#topo" aria-label="LM Comércio e Serviços — início">
        <img src="/assets/logotipo.png" alt="LM Comércio e Serviços" />
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">Menu <span>+</span></button>
      <nav id="main-nav" class="main-nav" aria-label="Navegação principal">
        <a href="#solucoes">Soluções</a>
        <a href="#complementares">Manutenção</a>
        <a href="#quem-atendemos">Quem atendemos</a>
        <a href="#trabalhos">Trabalhos</a>
        <a class="nav-cta" href="${waLink('Olá! Gostaria de solicitar um orçamento para a LM Comércio e Serviços.')}" target="_blank" rel="noreferrer">Fale com a LM <span>↗</span></a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero" aria-labelledby="hero-title">
      <div class="container hero-content">
        <div class="hero-copy reveal">
          <p class="kicker light">LM Comércio e Serviços <span class="rule"></span> Soluções para cuidar de cada detalhe.</p>
          <h1 id="hero-title">Seu condomínio <em>em boas mãos.</em></h1>
          <p class="hero-subtitle">Dedetização, limpeza de caixas d’água, sanitização e manutenção para condomínios, escolas e empresas.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${waLink('Olá! Gostaria de solicitar um orçamento para a LM Comércio e Serviços.')}" target="_blank" rel="noreferrer">Solicitar orçamento <span>↗</span></a>
            <a class="button button-ghost" href="#solucoes">Conheça nossos serviços <span>↓</span></a>
          </div>
        </div>
        <div class="hero-visual reveal reveal-delay">
          <div class="hero-visual-frame"><img src="/assets/dedetizacao-2.jpeg" alt="Profissional realizando dedetização em uma residência" /></div>
          <div class="hero-visual-meta"><span>01</span><span>Dedetização &amp; desratização</span><span class="meta-rule"></span></div>
        </div>
      </div>
      <a class="scroll-cue" href="#apresentacao" aria-label="Rolar para apresentação"><span></span> role para explorar</a>
    </section>

    <section class="intro section" id="apresentacao">
      <div class="container intro-grid">
        <div class="section-label reveal"><span>01</span><span class="label-line"></span><span>Sobre a LM</span></div>
        <div class="intro-copy reveal">
          <p class="kicker">Uma parceria que facilita a rotina</p>
          <h2>Mais soluções para <em>cuidar do seu espaço.</em></h2>
          <p class="lead">A LM Comércio e Serviços reúne serviços especializados, conservação e manutenção predial leve para tornar a rotina de condomínios, escolas e empresas mais simples.</p>
          <p>Em vez de lidar com vários contatos, você encontra uma parceira para resolver diferentes necessidades do dia a dia com organização, proximidade e cuidado em cada atendimento.</p>
          <a class="text-link" href="#solucoes">Descubra como podemos ajudar <span>↗</span></a>
        </div>
        <div class="intro-stamp reveal reveal-delay"><span>LM</span><small>comércio<br/>e serviços</small></div>
      </div>
    </section>

    <section class="solutions section-dark" id="solucoes">
      <div class="container">
        <div class="section-heading reveal">
          <div class="section-label section-label-dark"><span>02</span><span class="label-line"></span><span>Serviços principais</span></div>
          <div><p class="kicker light">O essencial, bem feito</p><h2>Soluções para manter <em>tudo em ordem.</em></h2></div>
          <p class="heading-note">Atendimento pensado para quem precisa de agilidade sem abrir mão do cuidado.</p>
        </div>
        <div class="service-list">
          ${services.map((service, index) => `
            <article class="service-card reveal" style="--delay:${index * 90}ms">
              <div class="service-media"><img src="${service.image}" alt="${service.title}" loading="lazy" /></div>
              <div class="service-body"><p class="kicker light">${service.eyebrow}</p><h3>${service.title}</h3><p>${service.text}</p><a class="card-link" href="${waLink(service.message)}" target="_blank" rel="noreferrer">Solicitar orçamento <span>↗</span></a></div>
              <span class="service-index">0${index + 1}</span>
            </article>`).join('')}
        </div>
      </div>
    </section>

    <section class="complementary section" id="complementares">
      <div class="container">
        <div class="section-heading split-heading reveal">
          <div><div class="section-label"><span>03</span><span class="label-line"></span><span>Serviços complementares</span></div><p class="kicker">Para as demandas do cotidiano</p><h2>Quando aparecer uma necessidade, <em>conte com a LM.</em></h2></div>
          <p class="heading-note dark-note">Do cuidado preventivo aos pequenos reparos, a LM ajuda condomínios e estabelecimentos a manterem seus espaços funcionando bem.</p>
        </div>
        <div class="complementary-grid">
          ${complementary.map(([title, text, image], index) => `<article class="complementary-card reveal" style="--delay:${index * 60}ms"><div class="complementary-image"><img src="${image}" alt="${title}" loading="lazy" /></div><div class="complementary-content"><span>0${index + 1}</span><h3>${title}</h3><p>${text}</p></div></article>`).join('')}
        </div>
      </div>
    </section>

    <section class="audience section-accent" id="quem-atendemos">
      <div class="container audience-grid">
        <div class="audience-heading reveal"><div class="section-label"><span>04</span><span class="label-line"></span><span>Quem atendemos</span></div><p class="kicker">Uma solução para diferentes rotinas</p><h2>Para quem precisa de uma empresa <em>que acompanha.</em></h2></div>
        <div class="audience-list reveal reveal-delay"><div><span>01</span><strong>Condomínios residenciais</strong><p>Cuidado próximo para a rotina de moradores e áreas comuns.</p></div><div><span>02</span><strong>Condomínios comerciais</strong><p>Serviços que ajudam a manter a operação funcionando.</p></div><div><span>03</span><strong>Escolas, empresas e comércios</strong><p>Mais organização para diferentes espaços e necessidades.</p></div></div>
      </div>
    </section>

    <section class="work section" id="trabalhos">
      <div class="container">
        <div class="section-heading split-heading reveal"><div><div class="section-label"><span>05</span><span class="label-line"></span><span>Trabalhos realizados</span></div><p class="kicker">Um pouco do nosso trabalho</p><h2>Presença, cuidado e <em>resultado.</em></h2></div><p class="heading-note dark-note">Uma seleção de registros enviados pela LM para mostrar a variedade de serviços que fazem parte da nossa rotina.</p></div>
        <div class="gallery-grid">${gallery.map(([image, alt], index) => `<button class="gallery-item reveal" style="--delay:${index * 45}ms" type="button" data-image="${image}" data-alt="${alt}" aria-label="Ampliar foto: ${alt}"><img src="${image}" alt="${alt}" loading="lazy" /><span>${alt} <b>↗</b></span></button>`).join('')}</div>
      </div>
    </section>

    <section class="contact section-dark" id="contato">
      <div class="container contact-grid"><div class="contact-mark reveal"><img src="/assets/logotipo.png" alt="LM Comércio e Serviços" /><p>Uma empresa parceira para cuidar do seu espaço.</p></div><div class="contact-copy reveal reveal-delay"><p class="kicker light">Vamos conversar?</p><h2>Precisa de uma empresa para cuidar da sua <em>casa, condomínio ou negócio?</em></h2><p>Seja para sua residência, condomínio ou empresa, conte com a LM Comércio e Serviços para diferentes necessidades de manutenção, dedetização, limpeza e conservação.</p><a class="button button-primary" href="${waLink('Olá! Gostaria de conhecer os serviços da LM Comércio e Serviços.')}" target="_blank" rel="noreferrer">Fale com a LM pelo WhatsApp <span>↗</span></a></div></div>
    </section>
  </main>

  <footer class="site-footer"><div class="container footer-grid"><div class="footer-brand"><img src="/assets/logotipo.png" alt="LM Comércio e Serviços" /><p>Serviços para conservar, cuidar e manter.</p></div><div><p class="footer-label">Navegação</p><a href="#solucoes">Soluções</a><a href="#complementares">Manutenção</a><a href="#trabalhos">Trabalhos</a></div><div><p class="footer-label">Contato</p><a href="${waLink('Olá! Gostaria de falar com a LM Comércio e Serviços.')}" target="_blank" rel="noreferrer">WhatsApp ↗</a></div></div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} LM Comércio e Serviços</span><span>Conservação, manutenção e cuidado.</span></div></footer>
  <a class="floating-whatsapp" href="${waLink('Olá! Gostaria de falar com a LM Comércio e Serviços.')}" target="_blank" rel="noreferrer" aria-label="Falar com a LM pelo WhatsApp"><span>◔</span><small>Fale com a LM</small></a>
  <div class="lightbox" role="dialog" aria-modal="true" aria-label="Visualização ampliada" aria-hidden="true"><button class="lightbox-close" type="button" aria-label="Fechar imagem">×</button><img src="" alt="Imagem ampliada da galeria" /></div>
`;

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); menuToggle.setAttribute('aria-expanded', String(open)); });
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded', 'false'); }));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach((item) => item.addEventListener('click', () => { lightboxImage.src = item.dataset.image; lightboxImage.alt = item.dataset.alt; lightbox.setAttribute('aria-hidden', 'false'); lightbox.classList.add('is-open'); document.body.classList.add('no-scroll'); }));
const closeLightbox = () => { lightbox.classList.remove('is-open'); lightbox.setAttribute('aria-hidden', 'true'); document.body.classList.remove('no-scroll'); };
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox(); });
