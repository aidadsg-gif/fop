import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  CircleHelp,
  Clock3,
  GraduationCap,
  HeartHandshake,
  Instagram,
  Menu,
  MonitorPlay,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";

const checkoutUrl = "https://pay.voompcreators.com.br/9861";
const logoUrl = "/images/logo-fop.jpg";
const photoUrl = "/images/eunice-goncalves.webp";

const modules = [
  { title: "Base Teórica", hours: 5 },
  { title: "A identidade do orientador profissional e preparação para atendimentos online e presenciais", hours: 4 },
  { title: "Primeiros contatos, entrevista com responsáveis e contrato", hours: 4 },
  { title: "Adolescência e escolha profissional", hours: 5 },
  { title: "Adolescência, influências e processo de escolha", hours: 5 },
  { title: "Técnicas de entrevista e entendimento do estado atual", hours: 4 },
  { title: "Fases do processo: autoconhecimento, informações sobre profissões e tomada de decisão", hours: 10 },
  { title: "Atendimentos em grupo e Orientação Profissional no contexto escolar", hours: 8 },
  { title: "Atendimento a jovens com diagnóstico", hours: 6 },
  { title: "Relatório de devolutiva em Orientação Profissional", hours: 4 },
];

const faqs = [
  {
    question: "Quando começa a próxima turma?",
    answer: "A próxima turma está prevista para dezembro de 2026. O dia exato ainda não foi definido. As inscrições ficam abertas até a primeira semana de dezembro, respeitando o limite de 15 vagas.",
  },
  {
    question: "Em quais dias acontecem os encontros ao vivo?",
    answer: "A formação inclui 10 encontros ao vivo. Os dias e horários serão combinados com a turma.",
  },
  {
    question: "Quanto tempo tenho para concluir a formação?",
    answer: "Não há um prazo fixo para concluir. As aulas gravadas são liberadas semanalmente e você avança no próprio ritmo.",
  },
  {
    question: "Quem pode fazer a formação?",
    answer: "É necessário ter ensino superior. A formação é voltada a profissionais que desejam orientar jovens e adolescentes na primeira escolha profissional, como psicólogos, professores, pedagogos e outros profissionais.",
  },
  {
    question: "A formação é para quem quer mudar de carreira ou escolher a própria profissão?",
    answer: "Não. O foco é preparar profissionais para orientar jovens e adolescentes. A formação não é voltada a adultos em transição de carreira nem a quem busca orientação para a própria carreira.",
  },
  {
    question: "Como recebo o certificado?",
    answer: "O certificado é emitido pela Faculdade Anhanguera. Para recebê-lo, é necessário concluir as atividades práticas e os questionários de todos os módulos.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "O investimento é de R$ 1.770,00 à vista ou em até 12 vezes com juros. O pagamento pode ser feito por Pix, boleto ou cartão de crédito. As condições de parcelamento são apresentadas na página de inscrição.",
  },
];

function EnrollmentLink({ children, className = "", label }: { children: React.ReactNode; className?: string; label: string }) {
  return (
    <a className={className} href={checkoutUrl} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {children}
    </a>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span className="eyebrow-mark" />{children}</p>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement"><Sparkles size={14} aria-hidden="true" /><span>Próxima turma: dezembro de 2026</span><span className="announcement-divider">·</span><span>15 vagas</span></div>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="FOP — início" onClick={closeMenu}>
            <img src={logoUrl} alt="FOP — Formação em Orientação Profissional" />
          </a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navegação principal">
            <a href="#formacao" onClick={closeMenu}>A formação</a>
            <a href="#programa" onClick={closeMenu}>Programa</a>
            <a href="#professora" onClick={closeMenu}>Professora</a>
            <a href="#duvidas" onClick={closeMenu}>Dúvidas</a>
            <EnrollmentLink className="button button-small" label="Inscreva-se na Formação em Orientação Profissional">Quero me inscrever <ArrowUpRight size={16} /></EnrollmentLink>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <SectionEyebrow>Formação online · 55 horas · Certificado</SectionEyebrow>
            <h1>Ajude jovens a escolher um caminho <em>com mais consciência.</em></h1>
            <p className="hero-lede">Prepare-se para orientar adolescentes na primeira escolha profissional — da conversa inicial com a família à devolutiva, com uma base teórica e prática fundamentada na Gestalt-terapia.</p>
            <div className="hero-actions">
              <EnrollmentLink className="button button-primary" label="Inscreva-se na próxima turma da FOP">Inscreva-se na próxima turma <ArrowRight size={18} /></EnrollmentLink>
              <a className="text-link" href="#programa">Conheça o programa <ArrowDown size={16} /></a>
            </div>
            <div className="hero-details">
              <span><Clock3 size={16} /> Aulas gravadas no seu ritmo</span>
              <span><UsersRound size={16} /> 10 encontros ao vivo</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="photo-frame"><img src={photoUrl} alt="Eunice Gonçalves, psicóloga e professora da FOP" fetchPriority="high" /></div>
            <div className="photo-caption"><span className="caption-line" /><span>Orientação profissional<br />com presença e propósito</span></div>
            <div className="hero-stamp"><span>FOP</span><small>Escolhas que<br />abrem caminhos</small></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          </div>
          <a className="scroll-hint" href="#formacao"><span>Conheça a formação</span><ArrowDown size={15} /></a>
        </section>

        <section className="facts-strip" aria-label="Resumo da formação">
          <div className="facts-inner">
            <div className="fact"><span className="fact-number">55<span>h</span></span><span className="fact-label">de formação</span></div>
            <div className="fact"><span className="fact-number">10</span><span className="fact-label">módulos práticos</span></div>
            <div className="fact"><span className="fact-number">10</span><span className="fact-label">encontros ao vivo</span></div>
            <div className="fact fact-intake"><span className="fact-number">Dez<span>/26</span></span><span className="fact-label">próxima turma</span></div>
          </div>
        </section>

        <section className="intro-section section-wrap" id="formacao">
          <div className="intro-heading">
            <SectionEyebrow>Uma escolha também se aprende a acompanhar</SectionEyebrow>
            <h2>Mais do que falar sobre profissões: <em>conduzir um processo.</em></h2>
          </div>
          <div className="intro-body">
            <p>Orientar um jovem na escolha profissional pede escuta, repertório e um caminho bem conduzido. A FOP apresenta uma base teórica e prática para você compreender as etapas desse trabalho e acompanhar o adolescente em suas descobertas e decisões.</p>
            <p>Com método próprio fundamentado na Gestalt-terapia, você percorre o processo desde os primeiros contatos com os responsáveis até os encontros de orientação e a devolutiva ao jovem e à família.</p>
            <a href="#programa" className="underlined-link">Ver o que você vai estudar <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="audience-section section-wrap">
          <div className="audience-card audience-card-blue">
            <div className="round-icon"><HeartHandshake size={23} /></div>
            <SectionEyebrow>Para quem é</SectionEyebrow>
            <h2>Para profissionais que querem apoiar a próxima geração.</h2>
            <p>Uma formação para quem tem ensino superior e deseja se preparar para orientar jovens e adolescentes na primeira escolha profissional.</p>
            <div className="profession-tags"><span>Psicólogos</span><span>Professores</span><span>Pedagogos</span><span>Outros profissionais</span></div>
          </div>
          <div className="audience-note">
            <span className="note-number">01 <span>/ elegibilidade</span></span>
            <h3>Um foco bem definido</h3>
            <p>A FOP prepara para atender jovens e adolescentes em seu primeiro processo de escolha profissional.</p>
            <div className="note-separator" />
            <p className="note-caveat"><CircleHelp size={17} /> Não é uma formação para adultos em transição de carreira nem para quem busca orientação para a própria carreira.</p>
          </div>
        </section>

        <section className="practice-section">
          <div className="section-wrap practice-inner">
            <div className="practice-intro">
              <SectionEyebrow>Conhecimento que acompanha a prática</SectionEyebrow>
              <h2>Da primeira conversa à <em>devolutiva.</em></h2>
              <p>Um passo a passo para compreender o processo de Orientação Profissional e se preparar para conduzi-lo com jovens e suas famílias.</p>
            </div>
            <div className="practice-list">
              <div className="practice-item"><span className="practice-icon"><BookOpen size={20} /></span><div><h3>Base e método</h3><p>Fundamentos teóricos e práticos a partir da Gestalt-terapia, com um método próprio que parte dos conceitos básicos e avança para práticas aplicadas.</p></div><span className="practice-index">01</span></div>
              <div className="practice-item"><span className="practice-icon"><MonitorPlay size={20} /></span><div><h3>Materiais para apoiar seu percurso</h3><p>Modelos de documentos, roteiros de atendimento, material de apoio em PDF, videoaulas práticas e orientações de marketing pessoal.</p></div><span className="practice-index">02</span></div>
              <div className="practice-item"><span className="practice-icon"><UsersRound size={20} /></span><div><h3>Diferentes contextos de atuação</h3><p>A formação aborda atendimentos individuais e em grupo, presenciais ou online, além da orientação profissional no contexto escolar e institucional.</p></div><span className="practice-index">03</span></div>
            </div>
          </div>
        </section>

        <section className="curriculum-section section-wrap" id="programa">
          <div className="curriculum-heading">
            <div><SectionEyebrow>Conteúdo programático</SectionEyebrow><h2>10 módulos para percorrer <em>todo o processo.</em></h2></div>
            <div className="curriculum-total"><strong>55</strong><span>horas<br />no total</span></div>
          </div>
          <p className="curriculum-lede">Cada módulo combina conteúdo e integração com a prática: ao final, você realiza uma atividade prática e um questionário.</p>
          <div className="module-list">
            {modules.map((module, index) => (
              <article className="module-row" key={module.title}>
                <span className="module-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{module.title}</h3>
                <span className="module-hours">{module.hours}h</span>
              </article>
            ))}
          </div>
          <div className="certificate-note"><GraduationCap size={23} /><p><strong>Certificado pela Faculdade Anhanguera.</strong> Para recebê-lo, é preciso concluir as atividades práticas e os questionários de todos os módulos.</p></div>
        </section>

        <section className="format-section">
          <div className="section-wrap format-inner">
            <div className="format-copy"><SectionEyebrow>Online, flexível e com encontros ao vivo</SectionEyebrow><h2>Aprenda no seu ritmo. <em>Construa junto com a turma.</em></h2><p>As aulas gravadas são liberadas semanalmente, sem prazo fixo para concluir a formação. Você organiza seu avanço e conta também com 10 encontros ao vivo.</p><EnrollmentLink className="button button-light" label="Acessar inscrição da FOP">Quero saber mais e me inscrever <ArrowRight size={17} /></EnrollmentLink></div>
            <div className="format-steps">
              <div className="format-step"><span>01</span><div><h3>Aulas gravadas</h3><p>Novas aulas liberadas semanalmente.</p></div><Check size={18} /></div>
              <div className="format-step"><span>02</span><div><h3>Seu próprio ritmo</h3><p>Não há prazo fixo para concluir.</p></div><Check size={18} /></div>
              <div className="format-step"><span>03</span><div><h3>10 encontros ao vivo</h3><p>Dias e horários combinados com a turma.</p></div><Check size={18} /></div>
            </div>
          </div>
        </section>

        <section className="instructor-section section-wrap" id="professora">
          <div className="instructor-photo"><img src={photoUrl} alt="Eunice Gonçalves em seu espaço de trabalho" loading="lazy" /><div className="instructor-photo-tag">Psicóloga · CRP 05: 30 448</div></div>
          <div className="instructor-copy"><SectionEyebrow>Quem conduz a formação</SectionEyebrow><h2>Conheça <em>Eunice Gonçalves.</em></h2><p className="instructor-lede">Psicóloga e orientadora profissional, com mais de 20 anos de experiência na área.</p><p>É especialista em Gestalt-terapia, Terapia de Família e Arteterapia. Atuou como psicóloga escolar no Colégio Carolinna Russo, entre 2018 e 2021, e coordena e leciona cursos de formação em Gestalt-terapia, Terapia de Casal e Família, Arteterapia e Orientação Profissional de Carreira.</p><p>Também é autora dos livros <em>O desabafo da Zad: a saga da lagarta</em> e <em>Entre elfo e fada: uma relação terapêutica</em>.</p><div className="instructor-signature"><span>Eunice Gonçalves</span><small>Psicóloga · Orientação Profissional</small></div></div>
        </section>

        <section className="investment-section section-wrap" id="inscricao">
          <div className="investment-card">
            <div className="investment-copy"><SectionEyebrow>Inscrições abertas</SectionEyebrow><h2>Seu próximo passo na <em>Orientação Profissional.</em></h2><p>Próxima turma em dezembro de 2026. O dia exato ainda será definido.</p><div className="availability"><span className="availability-dot" />Inscrições até a primeira semana de dezembro · 15 vagas</div></div>
            <div className="price-panel"><span className="price-label">Investimento</span><div className="price">R$ 1.770<small>,00</small></div><p className="price-description">à vista ou em até 12x com juros</p><p className="payment-methods">Pix · boleto · cartão de crédito</p><EnrollmentLink className="button button-primary button-full" label="Inscreva-se na FOP por R$ 1.770">Ir para inscrição e pagamento <ArrowUpRight size={18} /></EnrollmentLink><p className="checkout-note">As condições de parcelamento são mostradas na página de pagamento.</p></div>
          </div>
        </section>

        <section className="faq-section section-wrap" id="duvidas">
          <div className="faq-heading"><SectionEyebrow>Antes de se inscrever</SectionEyebrow><h2>Dúvidas <em>frequentes.</em></h2><p>Se ainda precisar conversar, entre em contato. Será um prazer ajudar.</p><a className="underlined-link" href="https://wa.me/5521993629093" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp <ArrowUpRight size={16} /></a></div>
          <div className="faq-list">{faqs.map((faq) => <details className="faq-item" key={faq.question}><summary>{faq.question}<span className="faq-plus" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
        </section>

        <section className="closing-cta section-wrap"><div className="closing-card"><div className="closing-flower" aria-hidden="true">✳</div><SectionEyebrow>Formação em Orientação Profissional</SectionEyebrow><h2>Uma escolha profissional começa com <em>uma boa conversa.</em></h2><p>Prepare-se para acompanhar jovens nesse primeiro passo.</p><EnrollmentLink className="button button-light" label="Fazer inscrição na Formação em Orientação Profissional">Quero fazer parte da próxima turma <ArrowRight size={18} /></EnrollmentLink></div></section>
      </main>

      <footer className="site-footer"><div className="footer-main"><a className="footer-brand" href="#inicio"><img src={logoUrl} alt="FOP — Formação em Orientação Profissional" /></a><p>Formação para profissionais que desejam orientar jovens e adolescentes na primeira escolha profissional.</p><div className="footer-contact"><a href="https://wa.me/5521993629093" target="_blank" rel="noopener noreferrer">WhatsApp: +55 21 99362-9093</a><a href="mailto:eunicecpsi@gmail.com">eunicecpsi@gmail.com</a><a href="https://instagram.com/orientacaoprofissional_curso" target="_blank" rel="noopener noreferrer"><Instagram size={15} /> @orientacaoprofissional_curso</a></div></div><div className="footer-bottom"><span>© 2026 FOP · Formação em Orientação Profissional</span><a href="#inicio">Voltar ao início ↑</a></div></footer>
    </div>
  );
}
