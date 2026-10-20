# Plano — Landing page da Formação em Orientação Profissional (FOP)

## Objetivo e escopo aprovado
Landing page única, responsiva e em português brasileiro, para apresentar e converter inscrições para a Formação em Orientação Profissional (FOP). Usar os fatos fornecidos pelo usuário sem inventar resultados, depoimentos ou garantias. As chamadas de inscrição direcionam a `https://pay.voompcreators.com.br/9861`. Não há necessidade de servidor ou banco de dados para esta página institucional.

## Implementação e estrutura
- `client/src/pages/Home.tsx`: página completa com âncoras de navegação, seções de conversão, conteúdo, biografia, investimento, FAQ e contatos.
- `client/src/index.css`: tokens e regras responsivas da identidade FOP, tipografia, texturas, navegação móvel, acessibilidade e microinterações.
- `client/index.html`: idioma pt-BR, título, descrição e metadados básicos.
- `public/manus-routes.json`: manifesto da rota `/` servido estaticamente.
- `app.config.ts`: metadado `logoUrl` com URL pública durável da logo, quando configurado.
- Imagens fornecidas pelo usuário: logo e retrato da instrutora sob `/manus-storage/...`, sem gerar ou substituir a imagem da pessoa.

A implementação usa o starter React 19 + Vite já instalado e o fluxo `pnpm dev:static`, sem endpoints ou armazenamento de dados. Link externo de inscrição aberto em nova aba, com `rel` seguro. Links de WhatsApp, e-mail e Instagram são diretos.

## Direção de design

### Alternativas consideradas
- **Editorial acolhedor — 0,078**: composição inspirada em cadernos de formação, fundo creme e formas orgânicas.
- **Institucional clínico — 0,061**: blocos geométricos azuis com apresentação acadêmica sóbria.
- **Digital vibrante — 0,033**: cartões compactos, gradientes vivos e ritmo de produto SaaS.

### Estilo escolhido: editorial acolhedor com confiança acadêmica
- **Movimento:** editorial contemporâneo e humanista, com delicadeza tátil e clareza de material formativo.
- **Princípios:** acolhimento sem infantilizar; conteúdo completo e fácil de escanear; hierarquia clara entre descoberta, currículo e inscrição; contraste e acessibilidade.
- **Filosofia de cor:** bege claro texturizado cria acolhimento; azul #6c8ebf comunica serenidade e confiança; amarelo #f5d782 ilumina a sigla e os CTAs; verde menta #a0d6b4 e lavanda #bca0dc aparecem como acentos; cinza #b4b4b4 organiza elementos secundários. Respeitar a logo fornecida.
- **Paradigma de layout:** narrativa vertical editorial com seção hero assimétrica, faixas de prova factual, currículo expansível e apresentação humana da professora; evitar mosaico genérico de cartões centralizados.
- **Elementos de assinatura:** papel bege com granulação muito sutil; arcos/linhas que remetem a caminhos e escolhas; etiquetas editoriais inspiradas em fichas de estudo.
- **Interação:** navegação por âncoras, CTA sempre identificável, FAQ acessível por teclado e módulos legíveis em telas pequenas.
- **Animação:** transições curtas e discretas em hover e entrada; respeitar `prefers-reduced-motion`; não depender de movimento para transmitir informação.
- **Tipografia:** combinação de serif editorial para manchetes (Lora) e sans-serif de alta legibilidade para corpo e controles (DM Sans), com alternativas de sistema.
- **Essência:** formação prática, fundada na Gestalt, para profissionais de nível superior orientarem jovens na primeira escolha profissional. Personalidade: acolhedora, criteriosa, prática.
- **Voz:** direta, humana e informativa; sem promessas absolutas. Exemplos: “Ajude jovens a construir escolhas profissionais com mais consciência.” e “Da primeira conversa com a família à devolutiva: prepare-se para conduzir o processo.”
- **Logo:** utilizar a marca FOP enviada, sem recriação tipográfica ou alteração de cores; posicionar em navegação e rodapé.
- **Cor proprietária:** azul serenidade #6c8ebf, associado à marca; amarelo suave identifica ações principais.

## Conteúdo factual da oferta
Turma em dezembro de 2026; inscrições até a primeira semana de dezembro; 15 vagas; data exata ainda não definida. Formação online com 55 horas, sem prazo fixo de conclusão. Aulas gravadas liberadas semanalmente e 10 encontros ao vivo cujos dias/horários serão combinados com a turma. R$ 1.770,00 à vista ou em até 12x com juros; Pix, boleto e cartão. Certificado emitido pela Faculdade Anhanguera após conclusão de todas as atividades e questionários dos módulos. Público com ensino superior; o curso prepara para orientar jovens/adolescentes na primeira escolha, não para transição de carreira adulta ou orientação de carreira do próprio aluno.
