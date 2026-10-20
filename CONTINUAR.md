# Continuidade — Landing page FOP

## Prompt pronto para retomada

> Continue o projeto da landing page da Formação em Orientação Profissional (FOP) a partir do pacote/repositório compartilhado. Leia `CONTINUAR.md`, `plan.md` e `TODO.md` antes de modificar o site. Preserve o design editorial acolhedor em azul e creme e use os fatos originais, sem inventar depoimentos, resultados, garantias, taxa/valor de parcela ou data exata de início. O código principal está em `client/src/pages/Home.tsx` e `client/src/index.css`; projeto React/Vite com comando `pnpm dev:static`. Link de inscrição: https://pay.voompcreators.com.br/9861. Ativos originais estão em `handoff-assets/logo-fop.jpg` e `handoff-assets/eunice-goncalves.webp`. Se continuar em outra conta Manus, reenvie esses dois arquivos ao armazenamento WebDev dessa conta e atualize as constantes `logoUrl` e `photoUrl` em `Home.tsx` com os novos caminhos retornados por `manus-upload-file --webdev`. Atualize também o `logoUrl` público em `app.config.ts` se a URL pública da marca mudar. Consulte o TODO, valide build/tipos, preserve a publicação desligada a menos que o usuário peça para publicar e atualize estes arquivos de continuidade antes de encerrar.

## Estado da implementação (19/10/2026)

Landing page responsiva implementada em português brasileiro com seções: apresentação/hero; resumo da oferta; proposta; público e limites; diferenciais e materiais; programa com 10 módulos; formato online; certificação; perfil de Eunice Gonçalves; investimento; perguntas frequentes; CTAs para o pagamento; WhatsApp, e-mail e Instagram.

**Verificações concluídas:** `pnpm check` sem erros; `pnpm build:static` passou; `GET /` retornou HTTP 200; `/manus-routes.json` retornou HTTP 200 e JSON válido com a rota `/`; a prévia do projeto serviu a logo como `image/jpeg` e a foto de Eunice como `image/webp`.

O desenvolvimento estático usa `pnpm dev:static` na porta configurada (padrão 3000). Abra Preview no painel do projeto Manus. Esta versão não foi publicada e `publishing.auto_publish` estava `false` no momento da implementação. Não há domínio próprio fornecido.

## Projeto Manus de origem

- Nome: `Formação em Orientação Profissional — FOP`
- Resource URI original: `manus-resource://manus-webdev/project/wdp_e7dd545613f1bea143a26755`
- Diretório original: `/home/ubuntu/fopsite`
- Blueprint confirmado pelo usuário.
- Diagnósticos TypeScript registrados pelo host.
- Ativos WebDev da conta original: `/manus-storage/fopp_e7c7641a.jpg` (logo) e `/manus-storage/IMG_2646(1)_7e18c864.webp` (foto); cópias originais estão em `handoff-assets/`.

A URI, o diretório, os caminhos de armazenamento privado e os serviços estão vinculados à conta/ambiente de origem; podem não estar acessíveis em outra conta. O pacote contém fontes e imagens para reimportação, e o prompt acima explica a troca dos caminhos.

## Dados confirmados da oferta

- Próxima turma: dezembro de 2026; dia exato ainda indefinido.
- Inscrições até a primeira semana de dezembro de 2026; 15 vagas.
- Online, 55 horas, sem prazo fixo de conclusão; aulas gravadas liberadas semanalmente e 10 encontros ao vivo com dias e horários a combinar com a turma.
- R$ 1.770,00 à vista ou em até 12x com juros; Pix, boleto ou cartão. Não foi informada a taxa/valor das parcelas.
- Certificado emitido pela Faculdade Anhanguera, condicionado à conclusão de atividades práticas e questionários de todos os módulos.
- Público com ensino superior, desejando orientar jovens/adolescentes na primeira escolha profissional. Não é voltado a adultos em transição de carreira nem a quem busca orientação para a própria carreira.
- Não há depoimentos disponíveis.
- Contatos: WhatsApp +55 21 99362-9093; `eunicecpsi@gmail.com`; Instagram `@orientacaoprofissional_curso`.

## Limite de observação dos créditos

Não há acesso confiável ao saldo restante nem gatilho automático de aviso de créditos baixos. Portanto, não é possível detectar proativamente o momento em que os créditos estão prestes a acabar. Para reduzir risco de perda, esta continuidade e um pacote exportável devem ser atualizados antes de encerrar etapas importantes.
