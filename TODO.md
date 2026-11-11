# TODO — LM Comércio e Serviços

## Site institucional funcional
- [x] Entregar um site institucional completo, moderno, responsivo e profissional para a LM COMÉRCIO E SERVIÇOS, sem aparência de template ou site genérico.
- [x] Posicionar a LM como prestadora de serviços especializados, conservação, pequenos reparos e manutenção predial leve; não apresentá-la como construtora ou empreiteira.
- [x] Falar diretamente com síndicos, administradoras, condomínios residenciais e comerciais, escolas, empresas e estabelecimentos comerciais.

## Materiais oficiais e direção visual
- [x] Usar os materiais oficiais da pasta compartilhada, preservar o logotipo original e não distorcê-lo ou redesenhá-lo.
- [x] Usar `LAND PAGE.jpg` obrigatoriamente como banner principal do hero, sem substituí-lo.
- [x] Usar as cores e a identidade visual dos materiais oficiais, com hierarquia tipográfica, espaçamento equilibrado, fotografias reais, ícones consistentes e animações sutis.
- [x] Evitar excesso de gradientes, glow exagerado, cards repetitivos, bordas arredondadas em tudo, elementos decorativos sem função e aparência de template de IA.

## Conteúdo e serviços
- [x] Criar apresentação da LM com posicionamento sobre serviços especializados, conservação e manutenção predial leve.
- [x] Dar destaque comercial a dedetização, desratização, limpeza de caixas d'água e sanitização, usando os banners oficiais.
- [x] Apresentar como serviços complementares: manutenção predial leve, hidráulica, elétrica, manutenção de ar-condicionado e pequenos reparos, com fotografias reais e peso comercial secundário.
- [x] Criar seção de públicos atendidos para condomínios residenciais, condomínios comerciais, escolas, empresas e estabelecimentos comerciais.
- [x] Criar galeria responsiva dos trabalhos com visualização ampliada, sem inventar trabalhos.
- [x] Criar chamada comercial e contato/rodapé sem inventar endereço, e-mail, CNPJ, certificações, horários, depoimentos, avaliações ou áreas de atendimento.

## Conversão via WhatsApp
- [x] Usar `5511947231234` como destino de todos os CTAs de orçamento e contato.
- [x] Usar mensagens pré-preenchidas contextuais para cada serviço.
- [x] Incluir botão flutuante de WhatsApp discreto, acessível e disponível em todas as páginas/seções.
- [x] Usar no hero a chamada “Seu condomínio precisa de soluções. A LM resolve.”, texto complementar e CTAs “SOLICITAR ORÇAMENTO” e “CONHEÇA NOSSOS SERVIÇOS”.

## Qualidade técnica
- [x] Garantir responsividade em celulares pequenos, smartphones, tablets, notebooks e monitores grandes.
- [x] Garantir textos legíveis, botões fáceis de tocar, menu funcional, ausência de rolagem horizontal, imagens otimizadas, animações leves e acessibilidade.
- [x] Testar navegação, botões, galeria ampliada, CTAs, links de WhatsApp, estados de interação e comportamento em telas móveis e desktop.
- [x] Manter `/manus-routes.json` sincronizado com as rotas do site.

## Reformulação da primeira dobra — versão aprovada
- [x] Reconstruir a hero em composição dividida: texto à esquerda e fotografia individual à direita.
- [x] Usar a identidade visual original da LM com preto, branco, cinza e laranja; remover o verde-limão como cor principal.
- [x] Usar o título “Seu condomínio em boas mãos.”, o destaque “Soluções para cuidar de cada detalhe.” e a descrição comercial aprovada.
- [x] Remover `LAND PAGE.jpg` do background da hero e usar fotografia individual oficial sem sobreposição de textos.
- [x] Manter navegação com logotipo, Soluções, Manutenção, Quem atendemos, Trabalhos e Fale com a LM.
- [x] Garantir composição responsiva em desktop, tablet e mobile, com botões dimensionados e título sem cortes.

## Aceternity UI + Motion — implementação real
- [x] Migrar o entrypoint para React/Vite compatível com shadcn e preservar as seções, CTAs, links de WhatsApp e assets oficiais.
- [x] Executar `npx shadcn@latest add @aceternity/3d-card-demo --yes` com sucesso.
- [x] Manter os arquivos oficiais gerados em `src/components/ui/3d-card.jsx` e `src/components/3d-card-demo.jsx`.
- [x] Configurar `components.json` com o registry oficial `@aceternity` e o utilitário `src/lib/utils.js`.
- [x] Usar o componente oficial `CardContainer`, `CardBody` e `CardItem` em três cards de serviços e três imagens selecionadas da galeria, sem aplicar 3D em todas as imagens.
- [x] Instalar e importar Motion real de `motion/react`, com `MotionConfig reducedMotion="user"`.
- [x] Implementar progresso de rolagem com `useScroll` + `useSpring`, reveals com `useInView`/variants, stagger na hero e parallax discreto em imagens.
- [x] Validar no navegador o progresso em `scrollY=2200` com `scaleX(0.360232)` e validar transformação real do 3D Card com `rotateY(-0.78deg) rotateX(-0.866875deg)`.
- [x] Substituir os tons esverdeados da interface por preto, grafite, branco e cinzas neutros, preservando o laranja da identidade LM.
- [x] Validar build de produção, Preview desktop/mobile e diagnósticos gerenciados sem erros de compilação.

## Spotlight Cursor + Magnetic Links — interação premium
- [x] Implementar Spotlight Cursor global em React com Motion e springs, usando o laranja LM com transparência, blur e intensidade discreta.
- [x] Deslocar a iluminação global suavemente com o cursor sem substituir o ponteiro padrão.
- [x] Implementar spotlight local nos cards de serviços, acompanhando a posição do pointer e reforçando a profundidade dos cards escuros.
- [x] Implementar Magnetic Links para CTAs da hero, navegação, cards de serviço, contato e WhatsApp, com atração leve e `whileTap`.
- [x] Desativar as interações em ponteiro coarse/touch e respeitar `prefers-reduced-motion` via MotionConfig, useReducedMotion e media queries.
- [x] Validar transforms Motion do spotlight global, spotlight de card e botão magnético no navegador.

## Atualização do logo e rastro do cursor
- [x] Substituir `public/assets/logotipo.png` pelo novo wordmark horizontal enviado pelo usuário.
- [x] Atualizar o logo de plataforma em `app.config.ts` para a nova URL CDN durável.
- [x] Ajustar proporções do logo no Header, contato e rodapé sem distorção em desktop ou mobile.
- [x] Confirmar que o Spotlight Cursor não havia sido removido: o código Motion permanecia no projeto; o Preview temporário estava parado.
- [x] Reiniciar o Preview e reforçar o efeito com quatro camadas Motion em springs diferentes, criando um rastro laranja luminoso suave.
- [x] Manter o efeito desativado em touch/coarse e em `prefers-reduced-motion`.

## Correção do Spotlight Cursor
- [x] Diagnosticar o problema no Preview: as camadas Motion estavam ativas e posicionadas, mas o `mix-blend-mode: screen` combinado com blur tornava o glow praticamente invisível.
- [x] Remover a mistura que causava inconsistência e usar glow radial normal com contraste controlado.
- [x] Reduzir o diâmetro visual do halo para manter o ponteiro padrão e evitar aparência de cursor gigante.
- [x] Adicionar fallback de `mousemove` além de `pointermove` para compatibilidade de navegador.
- [x] Validar o halo laranja visível sobre o fundo escuro da Hero no Preview.

## Compatibilidade final do cursor
- [x] Não ocultar o efeito em ambientes híbridos que informam `pointer: coarse`, mas ainda possuem hover/mouse.
- [x] Escutar `pointermove` e `mousemove` tanto em `window` quanto em `document` para suportar Preview embutido e navegador externo.
- [x] Corrigir a precedência de opacidade do core e validar o halo laranja claramente visível no Preview.

## Cursor minimalista e compatível
- [x] Reduzir o core do Spotlight Cursor de 260px para 72px.
- [x] Reduzir as três camadas de rastro para 54px, 42px e 30px.
- [x] Remover o glow amplo e manter iluminação laranja discreta, sem `mix-blend-mode`.
- [x] Validar no Preview que as quatro camadas Motion continuam ativas e acompanham o cursor.
- [x] Manter a desativação em dispositivos touch-only e em `prefers-reduced-motion`.

## Reordenação dos serviços principais
- [x] Definir o slot 1 como Limpeza de caixas d’água.
- [x] Definir o slot 2 como Sanitização.
- [x] Definir o slot 3 como Dedetização & desratização.
- [x] Substituir a imagem do card de Sanitização por `sanitizacao-ambientes.webp`, usando o arquivo oficial anexado.
- [x] Validar no Preview os três títulos, índices e caminhos de imagem na ordem solicitada.


## Redes sociais e identidade do WhatsApp
- [x] Adicionar botões visuais de Instagram e TikTok no rodapé, sem direcionamento até o usuário informar as contas oficiais.
- [x] Substituir o ícone genérico do botão flutuante pelo logo oficial do WhatsApp fornecido em `BOTAO.eps`, convertido para `public/assets/whatsapp-button.png` sem alterar o original.
- [x] Manter os botões sociais acessíveis, responsivos e claramente identificados como disponíveis em breve.
