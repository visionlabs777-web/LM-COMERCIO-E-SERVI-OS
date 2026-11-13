import React, { useEffect } from 'react';
import {
  IconArrowRight as ArrowRight,
  IconBrandInstagram as Instagram,
  IconBrandTiktok as Tiktok,
  IconBug as Bug,
  IconBuildingSkyscraper as Building,
  IconDroplet as Droplet,
  IconExternalLink as ExternalLink,
  IconMessageCircle as MessageCircle,
  IconPhoneCall as PhoneCall,
  IconShieldCheck as ShieldCheck,
  IconSparkles as Sparkles
} from '@tabler/icons-react';

const WHATSAPP = '5511947231234';
const waLink = (message) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const WA_MSGS = {
  emergency: 'Olá! Sou responsável por um condomínio e preciso de atendimento emergencial. Gostaria de falar com um atendente.',
  generalQuote: 'Olá! Sou responsável por um condomínio e gostaria de solicitar um orçamento para a LM Comércio e Serviços.',
  dedetizacao: 'Olá! Gostaria de solicitar um orçamento para dedetização e desratização no meu condomínio.',
  caixaAgua: 'Olá! Gostaria de solicitar um orçamento para limpeza e desinfecção de caixa d’água no meu condomínio.',
  sanitizacao: 'Olá! Gostaria de solicitar um orçamento para sanitização de ambientes no meu condomínio.',
  altura: 'Olá! Gostaria de solicitar um orçamento para serviços em altura no meu condomínio.'
};

/**
 * Componente avulso para eventual uso externo em páginas de biografia (Instagram / TikTok).
 * Não faz parte da navegação do site institucional oficial.
 */
export default function LinkInBioPage({ onNavigateHome }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'LM Comércio e Serviços | Links Rápidos e Atendimento';
  }, []);

  const bioLinks = [
    {
      num: 1,
      label: 'ATENDIMENTO EMERGENCIAL 24 HORAS',
      desc: 'Plantão para demandas emergenciais em condomínios',
      icon: <PhoneCall size={18} />,
      url: waLink(WA_MSGS.emergency),
      isEmergency: true
    },
    {
      num: 2,
      label: 'SOLICITAR ORÇAMENTO PELO WHATSAPP',
      desc: 'Orçamentos rápidos com a equipe comercial',
      icon: <MessageCircle size={18} />,
      url: waLink(WA_MSGS.generalQuote),
      isHighlight: true
    },
    {
      num: 3,
      label: 'DEDETIZAÇÃO E DESRATIZAÇÃO',
      desc: 'Controle de pragas urbanas e laudos para condomínios',
      icon: <Bug size={18} />,
      url: waLink(WA_MSGS.dedetizacao)
    },
    {
      num: 4,
      label: 'LIMPEZA DE CAIXA D’ÁGUA',
      desc: 'Higienização e desinfecção com laudo de potabilidade',
      icon: <Droplet size={18} />,
      url: waLink(WA_MSGS.caixaAgua)
    },
    {
      num: 5,
      label: 'SANITIZAÇÃO DE AMBIENTES',
      desc: 'Proteção para áreas comuns e halls sociais',
      icon: <Sparkles size={18} />,
      url: waLink(WA_MSGS.sanitizacao)
    },
    {
      num: 6,
      label: 'SERVIÇOS EM ALTURA',
      desc: 'Fachadas, totens e manutenção com equipe NR-35',
      icon: <Building size={18} />,
      url: waLink(WA_MSGS.altura)
    },
    {
      num: 7,
      label: 'QUALIFICAÇÃO TÉCNICA',
      desc: 'Consulte sobre NRs (35, 12, 33) e emissão de ART',
      icon: <ShieldCheck size={18} />,
      url: '/#qualificacao',
      isInternal: true
    },
    {
      num: 8,
      label: 'ACESSAR SITE OFICIAL',
      desc: 'Conheça todos os serviços em manutencaolm.com.br',
      icon: <ExternalLink size={18} />,
      url: '/',
      isHome: true
    }
  ];

  return (
    <div className="bio-page-wrapper">
      <div className="bio-container">
        <header className="bio-header">
          <div className="bio-brand">
            <img src="/assets/logotipo.png" alt="LM Comércio e Serviços" width="220" height="72" />
          </div>
          <p className="bio-slogan">
            Parceira Estratégica de Síndicos, Administradoras e Condomínios
          </p>
          <div className="bio-badge">
            <Building size={13} /> Atendimento Ágil em São Paulo e Região
          </div>
        </header>

        <main className="bio-links-list">
          {bioLinks.map((item) => {
            if (item.isHome) {
              return (
                <button
                  key={item.num}
                  type="button"
                  className="bio-link-btn is-home"
                  onClick={onNavigateHome}
                >
                  <span className="bio-btn-icon">{item.icon}</span>
                  <div className="bio-btn-text">
                    <strong>{item.label}</strong>
                    <small>{item.desc}</small>
                  </div>
                  <ArrowRight size={17} className="bio-btn-arrow" />
                </button>
              );
            }

            if (item.isInternal) {
              return (
                <a
                  key={item.num}
                  href={item.url}
                  className="bio-link-btn is-internal"
                  onClick={() => {
                    if (onNavigateHome) onNavigateHome();
                    setTimeout(() => {
                      const el = document.querySelector('#qualificacao');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 120);
                  }}
                >
                  <span className="bio-btn-icon">{item.icon}</span>
                  <div className="bio-btn-text">
                    <strong>{item.label}</strong>
                    <small>{item.desc}</small>
                  </div>
                  <ArrowRight size={17} className="bio-btn-arrow" />
                </a>
              );
            }

            return (
              <a
                key={item.num}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className={`bio-link-btn ${item.isEmergency ? 'is-emergency' : ''} ${item.isHighlight ? 'is-highlight' : ''}`}
              >
                <span className="bio-btn-icon">{item.icon}</span>
                <div className="bio-btn-text">
                  <strong>{item.label}</strong>
                  <small>{item.desc}</small>
                </div>
                <ArrowRight size={17} className="bio-btn-arrow" />
              </a>
            );
          })}
        </main>

        <footer className="bio-footer">
          <p>&copy; {new Date().getFullYear()} LM Comércio e Serviços</p>
          <a href="/" onClick={(e) => { if (onNavigateHome) { e.preventDefault(); onNavigateHome(); } }}>
            https://manutencaolm.com.br/
          </a>
        </footer>
      </div>
    </div>
  );
}
