## Introdução

O Léxico é uma notação que, por meio da descrição de termos, tem como objetivo descrever os símbolos de uma linguagem. No entanto, seu principal objetivo na Engenharia de Requisitos é o reconhecimento de palavras ou frases peculiares ao contexto social aplicado no estudo. Cada símbolo possui sua Impacto e seu Noção. Impacto é o que tal símbolos denota, já Noção é a conotação de um símbolos, ou seja, o efeito real que ele causa quando executado. Os responsáveis pela criação dos léxicos foram os integrantes: .

## Metodologia

Para a confeccção dos léxicos, utilizamos a notação do Léxico Ampliado da Linguagem (LAL)<a id="anchor_1" href="#REF1">[1]</a>, com os conceitos explicitados na Tabela 1, já o template utilizado está presente na Tabela 2:

Tabela 1 - Léxicos do tipo LAL

| Tipo do símbolo | Impacto                                                                     | Noção                                                                           |
| --------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Verbo           | Quem realiza, quando acontece e quais os procedimentos                      | Quais os reflexos das ações no ambiente e novos estados decorrentes             |
| Objeto          | Definir o objeto e identificar outros objetos com os quais ele se relaciona | Ações que podem ser aplicadas ao objeto                                         |
| Estado          | O que indica e ações que levaram a esse estado                              | Identificar outros estados que podem ocorrer a partir do estado que se descreve |

Fonte: SAYÃO e CARVALHO<a id="anchor_1" href="#REF1">[1]</a>.

Tabela 2 - Template Léxicos

| ID            | Descrição                            |
| ------------- | ------------------------------------ |
| Classificação | Estado/Objeto/Verbo                  |
| Noção         | Descrição de ações e de seus efeitos |
| Impacto       | O que muda quando a ação ocorre      |
| Dicionário    | Sinônimos                            |

Fonte: [Lara Souza](https://github.com/mel14-hub), [Pedro Henrique](https://github.com/pedrohpsantos), e [Yan Matheus](https://github.com/Yanmatheus0812).

## Léxicos

### L01: Autenticar Estudante

O Léxico presente na Tabela 3, faz o uso do seguinte requisito de acordo com a [Tabela de requisitos elicitados](/docs/Elicitação/Requisitos-Elicitados.md): RQ1

Tabela 3 - Léxico 01: Autenticar Estudantes (L01)

| L01           | Descrição                                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------------------------- |
| Classificação | Verbo                                                                                                       |
| Noção         | Ação realizada pelo estudante para acessar o aplicativo utilizando suas credenciais de autenticação do Gov. |
| Impacto       | Permite o acesso seguro ao aplicativo, utilizando suas funcionalidades.                                     |
| Dicionário    | Entrar, logar, acessar                                                                                      |

Fonte: [Camila Silva](https://github.com/CamilaSilvaC) e [Yan Matheus](https://github.com/Yanmatheus0812).

### L02: Cadastrar informações

O Léxico presente na Tabela 4, faz o uso dos seguintes requisitos de acordo com a [Tabela de requisitos elicitados](/docs/Elicitação/Requisitos-Elicitados.md): RQ13, RQ47 e RQ51

Tabela 4 - Léxico 02: Cadastrar credenciais (L02)

| L02           | Descrição                                                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Classificação | Verbo                                                                                                                              |
| Noção         | Ação realizada pelo estudante de cadastrar informações da sua conta do aplicativo e conta bancária e inserir atividades na agenda. |
| Impacto       | Permite o estudante ter suas informaçẽos atualizadas e recebimento do auxílio Pé de meia.                                          |
| Dicionário    | registrar, inserir, inscrever, adicionar                                                                                           |

Fonte: [Camila Silva](https://github.com/CamilaSilvaC) e [Yan Matheus](https://github.com/Yanmatheus0812).

### L03: Consultar informações

O Léxico presente na Tabela 5, faz o uso dos seguintes requisitos de acordo com a [Tabela de requisitos elicitados](/docs/Elicitação/Requisitos-Elicitados.md): RQ5, RQ7, RQ8, RQ9, RQ11, RQ17, RQ18, RQ19, RQ20, RQ30, RQ31, RQ32, RQ33, RQ34, RQ37, RQ61 e RQ62

Tabela 5 - Léxico 03: Consultar informações (L03)

| L03           | Descrição                                                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Classificação | Verbo                                                                                                                              |
| Noção         | Ação realizada pelo Estudante de consultar informações pessoais e acadêmicas                                                       |
| Impacto       | Se informar de atualizações acadêmicas, detalhes de suas disciplinas, documentos oficiais, agenda e status do benefício Pé de meia |
| Dicionário    | Pesquisar, conferir, examinar, verificar, checar, buscar, acessar, acompanhar, visualizar, observar                                |

Fonte: [Camila Silva](https://github.com/CamilaSilvaC) e [Yan Matheus](https://github.com/Yanmatheus0812).

### L04: Emitir documentos

O Léxico presente na Tabela 6, faz o uso dos seguintes requisitos de acordo com a [Tabela de requisitos elicitados](/docs/Elicitação/Requisitos-Elicitados.md): RQ27, RQ28, RQ29 e RQ59

Tabela 6 - Léxico 04: Emitir documentos (L04)

| L04           | Descrição                                                                         |
| ------------- | --------------------------------------------------------------------------------- |
| Classificação | Verbo                                                                             |
| Noção         | Ação do estudante de emitir documentos estudantis                                 |
| Impacto       | Permite o estudante ter acesso aos seus diplomas, declarações e histórico escolar |
| Dicionário    | Gerar, disponibilizar                                                             |

Fonte: [Camila Silva](https://github.com/CamilaSilvaC) e [Yan Matheus](https://github.com/Yanmatheus0812).

### L05: Editar informações

O Léxico presente na Tabela 7, faz o uso dos seguintes requisitos de acordo com a [Tabela de requisitos elicitados](/docs/Elicitação/Requisitos-Elicitados.md): RQ43, RQ44 e RQ48

Tabela 7 - Léxico 05: Editar informações (L05)

| L05           | Descrição                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| Classificação | Verbo                                                                                                        |
| Noção         | Ação do estudante de editar informações e atividades                                                         |
| Impacto       | Permite o estudante editar informações pessoais, bancárias e atividades da agenda sem consequeência imediata |
| Dicionário    | Modificar, alterar, corrigir, ajustar, refazer                                                               |

Fonte: [Camila Silva](https://github.com/CamilaSilvaC) e [Yan Matheus](https://github.com/Yanmatheus0812).

### L06: Excluir atividades

O Léxico presente na Tabela 8, faz o uso do seguinte requisito de acordo com a [Tabela de requisitos elicitados](/docs/Elicitação/Requisitos-Elicitados.md): RQ49

Tabela 8 - Léxico 06: Excluir atividades (L06)

| L06           | Descrição                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------- |
| Classificação | Verbo                                                                                        |
| Noção         | Ação do Estudante de excluir uma atividade da agenda                                         |
| Impacto       | Permite o Estudante ter controle das atividades que deseja que estejam disponíveis na agenda |
| Dicionário    | Remover, apagar, deletar, retirar, eliminar, descartar                                       |

Fonte: [Camila Silva](https://github.com/CamilaSilvaC) e [Yan Matheus](https://github.com/Yanmatheus0812).

### L07: Notificar eventos

O Léxico presente na Tabela 9, faz o uso dos seguintes requisitos de acordo com a [Tabela de requisitos elicitados](/docs/Elicitação/Requisitos-Elicitados.md): RQ14, RQ21, RQ22, RQ23, RQ50 e RQ56

Tabela 9 - Léxico 07: Notificar eventos (L07)

| L07           | Descrição                                                                                                                                             |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Classificação | Verbo                                                                                                                                                 |
| Noção         | Ação do sistema de notificar o Estudante com notificações, vibrações e/ou barulhos sobre eventos                                                      |
| Impacto       | Permite o Estudante ficar mais facilmente informado em caso de abertura de editais, eventos próximos marcados na agenda, faltas e parcelas do auxílio |
| Dicionário    | Avisar, comunicar, informar, alertar, noticiar                                                                                                        |

Fonte: [Camila Silva](https://github.com/CamilaSilvaC) e [Yan Matheus](https://github.com/Yanmatheus0812).

### L08: Acessar páginas

O Léxico presente na Tabela 10, faz o uso dos seguintes requisitos de acordo com a [Tabela de requisitos elicitados](/docs/Elicitação/Requisitos-Elicitados.md): RQ15 e RQ42

Tabela 10 - Léxico 08: Acessar páginas (L08)

| L08           | Descrição                                                                                                                        |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Classificação | Verbo                                                                                                                            |
| Noção         | Ação do Estudante de acessar páginas de serviços e outras aplicações da plataforma                                               |
| Impacto       | Permite o estudante acessar as principais funcionalidades do aplicativo como serviços estudantis, fórum de dúvidas e disciplinas |
| Dicionário    | Entrar, abrir, utilizar, operar                                                                                                  |

Fonte: [Camila Silva](https://github.com/CamilaSilvaC) e [Yan Matheus](https://github.com/Yanmatheus0812).

### L09: Comunicar em canais

O Léxico presente na Tabela 11, faz o uso dos seguintes requisitos de acordo com a [Tabela de requisitos elicitados](/docs/Elicitação/Requisitos-Elicitados.md): RQ35, RQ36, RQ57, RQ58 e RQ60

Tabela 11 - Léxico 09: Ser atendido em canal de conversa (L09)

| L09           | Descrição                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------- |
| Classificação | Verbo                                                                                             |
| Noção         | Ação do estudante de se comunicar em fóruns e canais de conversas privados ou públicos            |
| Impacto       | Permite o estudante tirar dúvidas, responder e se comunicar com outros estudantes ou responsáveis |
| Dicionário    | Expressar, manifestar, declarar, perguntar, responder, expor, divulgar, relatar                   |

Fonte: [Camila Silva](https://github.com/CamilaSilvaC) e [Yan Matheus](https://github.com/Yanmatheus0812).

### L10: Oferecer serviços

O Léxico presente na Tabela 12, faz o uso dos seguintes requisitos de acordo com a [Tabela de requisitos elicitados](/docs/Elicitação/Requisitos-Elicitados.md): RQ41, RQ46, RQ53 e RQ54

Tabela 12 - Léxico 10: Oferecer serviços (L10)

| L10           | Descrição                                                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Classificação | Verbo                                                                                                                       |
| Noção         | Ação do sistema de oferecer diversos serviços ao Estudante do sistema                                                       |
| Impacto       | Permite o Estudante de receber serviços integrados ao aplicativo como tutorial, canal de suporte e ranqueamento de matérias |
| Dicionário    | Fornecer, disponibilizar, conceder, entregar                                                                                |

Fonte: [Camila Silva](https://github.com/CamilaSilvaC) e [Yan Matheus](https://github.com/Yanmatheus0812).

### L11:Estudante(perfis)

O lexico presente na Tabela 13, faz uso dos seguintes requisitos de acordo com a [Tabela de requisitos elicitados](/docs/Elicitação/Requisitos-Elicitados.md):RQ1,RQ4,RQ5,RQ42,RQ43

## Tabela 13- Léxico 11: Usuário (Perfis)

| **L11**           | **Descrição**                                                                                                                                                                                                                                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Classificação** | Objeto                                                                                                                                                                                                                                                                                                                                   |
| **Impacto**       | O aplicativo deve permitir o acesso do usuário através de autenticação gov.br (RQ1), possibilitando que ele visualize suas informações acadêmicas unificadas (RQ4), acompanhe o status do programa Pé-de-Meia (RQ5), tenha uma página de perfil com suas informações (RQ42) e possa editar essas informações na página de perfil (RQ43). |
| **Noção**         | O usuário representa uma pessoa cadastrada no sistema que possui credenciais de acesso via gov.br e pode ser estudante ou professor, tendo diferentes permissões conforme seu perfil.                                                                                                                                                    |
| **Dicionário**    | Pessoa, Usuário do sistema, Cadastrado, Autenticado ,Professor                                                                                                                                                                                                                                                                           |

---

**Fonte:** [Lara Souza](https://github.com/mel14-hub) e [Luisa de Souza](https://github.com/Luisa12ll).

### L12:Dados Acadêmicos e Avaliações

O lexico presente na Tabela 14, faz uso dos seguintes requisitos de acordo com a [Tabela de requisitos elicitados](/docs/Elicitação/Requisitos-Elicitados.md):RQ4,RQ17,RQ18,RQ20,RQ29,RQ11

## Tabela 14- Léxico 12: Dados Acadêmicos e Avaliações

| **L12**           | **Descrição**                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Classificação** | Objeto                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Impacto**       | O aplicativo deve permitir a visualização de cursos, disciplinas e progresso (RQ4), da disciplina e professor que ministra (RQ17), do horário e sala da disciplina (RQ18), de trabalhos e avaliações com data, peso e tipo (RQ19), das notas das avaliações e trabalhos (RQ20), do boletim (RQ29), além de possibilitar o acompanhamento de registros estudantis desde o ingresso até níveis superiores (RQ11). |
| **Noção**         | Representam informações sobre o desempenho e progresso do estudante, incluindo disciplinas, notas, avaliações e trabalhos que são gerenciados pelo sistema acadêmico da instituição.                                                                                                                                                                                                                            |
| **Dicionário**    | Curso, Disciplina, Matéria, Nota, Avaliação, Prova, Trabalho, Boletim, Desempenho acadêmico, Histórico                                                                                                                                                                                                                                                                                                          |

---

**Fonte:** [Lara Souza](https://github.com/mel14-hub) e [Luisa de Souza](https://github.com/Luisa12ll).

### L13: Infraestrutura Institucional

O lexico presente na Tabela 15, faz uso dos seguintes requisitos de acordo com a [Tabela de requisitos elicitados](/docs/Elicitação/Requisitos-Elicitados.md):RQ4,RQ16,RQ7,RQ10,RQ3

## Tabela 15- Léxico 13: Infraestrutura Institucional

| **L13**           | **Descrição**                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Classificação** | Objeto                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Impacto**       | O aplicativo deve unificar o acesso às informações acadêmicas das instituições (RQ4), possibilitar a integração da escola ou universidade dentro da plataforma (RQ16), apresentar dados conforme a última atualização recebida do sistema acadêmico (RQ7), ter disponibilidade gratuita nos sistemas operacionais Android e iOS (RQ10) e utilizar tecnologia blockchain para autenticação e disponibilização de documentos (RQ3). |
| **Noção**         | Representa o ambiente tecnológico e organizacional do sistema que engloba a instituição de ensino, plataforma e aplicativo, fornecendo a base para todas as operações acadêmicas.                                                                                                                                                                                                                                                 |
| **Dicionário**    | Instituição de ensino, Escola, Universidade, Sistema acadêmico, Plataforma, Aplicativo, Software educacional, Ambiente virtual                                                                                                                                                                                                                                                                                                    |

---

**Fonte:** [Lara Souza](https://github.com/mel14-hub) e [Luisa de Souza](https://github.com/Luisa12ll).

### L14: IAuxílio Financeiro Estudantil

## Tabela 16- Léxico 14: Auxílio Financeiro Estudantil

O lexico presente na Tabela 16, faz uso dos seguintes requisitos de acordo com a [Tabela de requisitos elicitados](/docs/Elicitação/Requisitos-Elicitados.md):RQ5,RQ9,RQ23,RQ31,RQ32,RQ33

| **L14**           | **Descrição**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Classificação** | Objeto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Impacto**       | O aplicativo deve permitir o acompanhamento do status do programa Pé-de-Meia (RQ5), apresentar atualizações referente ao pagamento do Pé-de-Meia disponível em até um mês (RQ9), notificar informações sobre o benefício incluindo parcelas e valores (RQ23), permitir visualizar parcelas pagas e que faltam do auxílio (RQ31), visualizar o valor total do auxílio (RQ32), a conta bancária cadastrada (RQ33), o dia do pagamento (RQ34) e visualizar programas estudantis como FIES e Prouni (RQ30). |
| **Noção**         | Representa o apoio financeiro oferecido aos estudantes através de programas de incentivo como o Pé-de-Meia, gerenciando valores, parcelas e pagamentos de forma centralizada.                                                                                                                                                                                                                                                                                                                           |
| **Dicionário**    | Auxílio, Benefício estudantil, Pé-de-Meia, Bolsa, Parcela, Incentivo financeiro, Apoio econômico, FIES, Prouni                                                                                                                                                                                                                                                                                                                                                                                          |

---

**Fonte:** [Lara Souza](https://github.com/mel14-hub) e [Luisa de Souza](https://github.com/Luisa12ll).

### L15: Documentação Oficial

## Tabela 17- Léxico 15: Documentação Oficial

O lexico presente na Tabela 17, faz uso dos seguintes requisitos de acordo com a [Tabela de requisitos elicitados](/docs/Elicitação/Requisitos-Elicitados.md):RQ27,RQ28,RQ59,RQ61,RQ3

| **L15**           | **Descrição**                                                                                                                                                                                                                                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Classificação** | Objeto                                                                                                                                                                                                                                                                                                               |
| **Impacto**       | O aplicativo deve possibilitar o usuário emitir a declaração de vínculo da instituição de ensino (RQ27), emitir seu histórico escolar (RQ28), permitir a emissão de diplomas (RQ59), permitir a visualização de certificados (RQ61), utilizando tecnologia blockchain para disponibilização desses documentos (RQ3). |
| **Noção**         | Representa documentos oficiais emitidos pela instituição que possuem validade legal e comprovam vínculo ou conclusão, sendo gerados automaticamente pelo sistema.                                                                                                                                                    |
| **Dicionário**    | Documento, Declaração, Atestado, Histórico escolar, Diploma, Certificado, Comprovante de matrícula, Comprovante de vínculo                                                                                                                                                                                           |

---

**Fonte:** [Lara Souza](https://github.com/mel14-hub) e [Luisa de Souza](https://github.com/Luisa12ll).

### L16: Comunicação e Interação

## Tabela 18- Léxico 16: Comunicação e Interação

O lexico presente na Tabela 18, faz uso dos seguintes requisitos de acordo com a [Tabela de requisitos elicitados](/docs/Elicitação/Requisitos-Elicitados.md):RQ12,RQ14,RQ35,RQ36,RQ57,RQ58,RQ60

| **L16**           | **Descrição**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Classificação** | Objeto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Impacto**       | O aplicativo deve ser um canal direto de comunicação entre o MEC e os estudantes (RQ12), possibilitar que os usuários recebam novidades do Governo Federal voltadas à educação através de um canal de comunicação (RQ14), possibilitar o usuário acessar um fórum de dúvidas sobre o auxílio (RQ35), ser atendido em um canal de conversa sobre o auxílio (RQ36), ter um fórum entre estudantes (RQ57), um fórum por disciplina entre estudantes e professores (RQ58) e ter um canal de suporte ao usuário (RQ60). |
| **Noção**         | Representa os canais de comunicação disponíveis no sistema que facilitam a interação entre estudantes, professores, suporte e MEC, permitindo troca de informações e esclarecimento de dúvidas.                                                                                                                                                                                                                                                                                                                    |
| **Dicionário**    | Fórum, Chat, Canal de comunicação, Mensagem, Discussão, Suporte técnico, Atendimento, Canal MEC                                                                                                                                                                                                                                                                                                                                                                                                                    |

**Fonte:** [Lara Souza](https://github.com/mel14-hub) e [Luisa de Souza](https://github.com/Luisa12ll).

### L17: Calendário e Eventos

## Tabela 19- Léxico 17: Calendário e Eventos

O lexico presente na Tabela 19, faz uso dos seguintes requisitos de acordo com a [Tabela de requisitos elicitados](/docs/Elicitação/Requisitos-Elicitados.md):RQ37,RQ46,RQ47,RQ48,RQ49,RQ51,RQ52,RQ50,RQ21,RQ56

| **L17**           | **Descrição**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Classificação** | Objeto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Impacto**       | O aplicativo deve possibilitar o usuário visualizar datas de eventos em um calendário (RQ37), possuir uma agenda para organização pessoal através de atividades (RQ46), permitindo que a agenda possua a opção do usuário inserir (RQ47), editar (RQ48) e excluir atividades (RQ49), inserir horário e data na criação de uma atividade (RQ51), avaliar suas atividades com grau de importância (RQ52), além de notificar o usuário sobre atividades inseridas com um dia de antecedência (RQ50), notificar avaliações com uma semana antes e dois dias de antecedência (RQ21) e notificar quando editais de vestibulares forem abertos (RQ56). |
| **Noção**         | Representa compromissos e datas importantes do calendário acadêmico incluindo eventos, provas, entregas e atividades institucionais que são gerenciados pelo usuário e sincronizados com o sistema.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Dicionário**    | Evento, Calendário, Agenda, Compromisso, Atividade, Data importante, Cronograma, Prazo, Lembrete                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

**Fonte:** [Lara Souza](https://github.com/mel14-hub) e [Luisa de Souza](https://github.com/Luisa12ll).

### L18: Estudante logado

O Léxico presente na Tabela 18 está associado ao requisito **RQ1**, que trata da autenticação de Estudantes para acesso ao aplicativo.

**Tabela 20 - Léxico 18: Estudante logado (L18)**

| L18               | Descrição                                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| **Classificação** | Estado                                                                                                       |
| **Noção**         | Condição em que o estudante acessou o aplicativo utilizando suas credenciais válidas de autenticação do Gov. |
| **Impacto**       | Permite o uso das funcionalidades do aplicativo de forma segura e personalizada.                             |
| **Dicionário**    | conectado, autenticado, sessão ativa                                                                         |

**Fonte:** [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Pedro Henrique](https://github.com/pedrohpsantos).

---

### L19: Conta ativa/inativa

O Léxico presente na Tabela 19 está relacionado aos requisitos **RQ1** e **RQ39**, que tratam da autenticação e segurança de dados do Estudante.

**Tabela 21 - Léxico 19: Conta ativa/inativa (L19)**

| L19               | Descrição                                                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Classificação** | Estado                                                                                                                                   |
| **Noção**         | Representa o estado de funcionamento da conta do estudante, podendo estar ativa (em uso) ou inativa (suspensa, bloqueada ou sem acesso). |
| **Impacto**       | Define se o Estudante pode realizar ações dentro do aplicativo. Uma conta inativa impede o login e uso das funcionalidades.              |
| **Dicionário**    | habilitada, desativada, suspensa                                                                                                         |

**Fonte:** [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Pedro Henrique](https://github.com/pedrohpsantos).

---

### L20: Informação atualizada/desatualizada

O Léxico presente na Tabela 20 está relacionado aos requisitos **RQ6** e **RQ7**, sobre a atualização e consistência dos dados exibidos no aplicativo.

**Tabela 22 - Léxico 20: Informação atualizada/desatualizada (L20)**

| L20               | Descrição                                                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Classificação** | Estado                                                                                                                                           |
| **Noção**         | Condição dos dados apresentados no aplicativo, indicando se estão de acordo com as informações mais recentes fornecidas pelos sistemas oficiais. |
| **Impacto**       | Informações desatualizadas podem causar bloqueio no programa Pé-de-Meia ou inconsistência nos registros.                                         |
| **Dicionário**    | sincronizada, recente, antiga, incorreta                                                                                                         |

**Fonte:** [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Pedro Henrique](https://github.com/pedrohpsantos).

---

### L21: Status do programa Pé-de-Meia (ativo/bloqueado)

O Léxico presente na Tabela 21 está relacionado ao requisito **RQ5**, que trata do acompanhamento do programa Pé-de-Meia.

**Tabela 23 - Léxico 21: Status do programa Pé-de-Meia (L21)**

| L21               | Descrição                                                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Classificação** | Estado                                                                                                                             |
| **Noção**         | Indica a situação do benefício Pé-de-Meia, podendo estar ativo (regular) ou bloqueado (pendente de atualização ou irregularidade). |
| **Impacto**       | Determina se o estudante pode continuar recebendo o benefício.                                                                     |
| **Dicionário**    | regular, suspenso, bloqueado, ativo                                                                                                |

**Fonte:** [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Pedro Henrique](https://github.com/pedrohpsantos).

---

### L22: Disponibilidade gratuita (Android/iOS)

O Léxico presente na Tabela 22 está relacionado ao requisito **RQ10**, sobre a disponibilidade do aplicativo nos principais sistemas operacionais.

**Tabela 24 - Léxico 22: Disponibilidade gratuita (L22)**

| L22               | Descrição                                                                                 |
| ----------------- | ----------------------------------------------------------------------------------------- |
| **Classificação** | Estado                                                                                    |
| **Noção**         | Define que o aplicativo está disponível para download gratuito em sistemas Android e iOS. |
| **Impacto**       | Garante acesso amplo e sem custo aos Estudantes de diferentes plataformas.                |
| **Dicionário**    | gratuito, acessível, multiplataforma                                                      |

**Fonte:** [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Pedro Henrique](https://github.com/pedrohpsantos).

---

### L23: Informações seguras/privadas

O Léxico presente na Tabela 23 está relacionado ao requisito **RQ39**, que aborda a proteção dos dados do Estudante.

**Tabela 25 - Léxico 23: Informações seguras/privadas (L23)**

| L23               | Descrição                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| **Classificação** | Estado                                                                                               |
| **Noção**         | Representa o nível de segurança e privacidade aplicado aos dados pessoais e acadêmicos do Estudante. |
| **Impacto**       | Garante confidencialidade e conformidade com políticas de segurança da informação.                   |
| **Dicionário**    | confidencial, protegido, reservado                                                                   |

**Fonte:** [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Pedro Henrique](https://github.com/pedrohpsantos).

---

### L24: Acessibilidade (cores, Libras, audiodescrição)

O Léxico presente na Tabela 24 está relacionado ao requisito **RQ40**, que trata da acessibilidade no aplicativo.

**Tabela 26 - Léxico 24: Acessibilidade (L24)**

| L24               | Descrição                                                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Classificação** | Estado                                                                                                                             |
| **Noção**         | Refere-se à capacidade do aplicativo de oferecer recursos de inclusão, como contraste de cores, suporte à Libras e audiodescrição. |
| **Impacto**       | Promove a inclusão digital e o acesso equitativo para todos os Estudantes.                                                         |
| **Dicionário**    | inclusivo, acessível, adaptado                                                                                                     |

**Fonte:** [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Pedro Henrique](https://github.com/pedrohpsantos).

---

### L25: Facilidade de uso/aprendizagem

O Léxico presente na Tabela 25 está associado ao requisito **RQ24**, referente à usabilidade e experiência do Estudante.

**Tabela 27 - Léxico 25: Facilidade de uso/aprendizagem (L25)**

| L25               | Descrição                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------- |
| **Classificação** | Estado                                                                                                  |
| **Noção**         | Representa o grau de simplicidade na utilização do aplicativo e na compreensão de suas funcionalidades. |
| **Impacto**       | Reduz a curva de aprendizado e melhora a satisfação do Estudante.                                       |
| **Dicionário**    | intuitivo, simples, amigável                                                                            |

**Fonte:** [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Pedro Henrique](https://github.com/pedrohpsantos).

---

### L26: Linguagem simples

O Léxico presente na Tabela 26 está relacionado ao requisito **RQ25**, que define a adequação da linguagem ao público estudantil.

**Tabela 28 - Léxico 26: Linguagem simples (L26)**

| L26               | Descrição                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------- |
| **Classificação** | Estado                                                                                            |
| **Noção**         | Refere-se à utilização de uma linguagem clara, objetiva e adequada ao público-alvo do aplicativo. |
| **Impacto**       | Facilita a compreensão e o engajamento do estudante com as funcionalidades do sistema.            |
| **Dicionário**    | clara, direta, compreensível                                                                      |

**Fonte:** [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Pedro Henrique](https://github.com/pedrohpsantos).

---

### L27: Tempo de resposta ≤ 3 segundos

O Léxico presente na Tabela 27 está relacionado ao requisito **RQ26**, sobre o desempenho do aplicativo.

**Tabela 29 - Léxico 27: Tempo de resposta ≤ 3 segundos (L27)**

| L27               | Descrição                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------- |
| **Classificação** | Estado                                                                                                    |
| **Noção**         | Representa o tempo máximo esperado para que o aplicativo carregue informações solicitadas pelo Estudante. |
| **Impacto**       | Garante uma experiência ágil e eficiente, reduzindo a frustração do Estudante.                            |
| **Dicionário**    | rápido, eficiente, responsivo                                                                             |

**Fonte:** [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Pedro Henrique](https://github.com/pedrohpsantos).

---

### L28: Funcionalidade encontrada ≤ 45 segundos

O Léxico presente na Tabela 28 está associado ao requisito **RQ55**, sobre a navegabilidade do aplicativo.

**Tabela 30 - Léxico 28: Funcionalidade encontrada ≤ 45 segundos (L28)**

| L28               | Descrição                                                                                                             |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Classificação** | Estado                                                                                                                |
| **Noção**         | Refere-se ao tempo limite em que o Estudante deve conseguir localizar qualquer funcionalidade desejada no aplicativo. |
| **Impacto**       | Mede a eficiência da navegação e da arquitetura da informação do sistema.                                             |
| **Dicionário**    | localizado, encontrado, acessível                                                                                     |

**Fonte:** [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Pedro Henrique](https://github.com/pedrohpsantos).

---

### L29: Design sem sobrecarga de informações

O Léxico presente na Tabela 29 está relacionado ao requisito **RQ45**, sobre o design limpo e objetivo do aplicativo.

**Tabela 31 - Léxico 29: Design sem sobrecarga de informações (L29)**

| L29               | Descrição                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------- |
| **Classificação** | Estado                                                                                                        |
| **Noção**         | Representa a característica visual do aplicativo de apresentar informações de forma organizada, sem excessos. |
| **Impacto**       | Facilita a leitura, reduz distrações e melhora a experiência do Estudante.                                    |
| **Dicionário**    | limpo, organizado, minimalista                                                                                |

**Fonte:** [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Pedro Henrique](https://github.com/pedrohpsantos).

## Bibliografia

> SERRANO, Milene. Requisitos – Aula 10. 2017. Apresentação de slides. Disponível em: [](). Acesso em: 04/10/2025.

## Referências Bibliográficas

> <a id="REF1" href="#anchor_1">1.</a> SAYÃO, Miriam, CARVALHO, Gustavo. Construção do léxico de aplicações. Information and Human Language Technology, 4th Workshop, Ribeirão Preto, 2006. Disponível em: <http://www-di.inf.puc-rio.br/~julio/bnncap3.pdf/>. Acesso em: 14/05/2023.

> MELO, Arthur e FERREIRA, Rafael. Léxicos. Repositório da disciplina de Requisitos de Software da Universidade de Brasília, 2023. Disponível em: [https://requisitos-de-software.github.io/2023.1-BilheteriaDigital/elicitacao/priorizacao/threeLvlScale/](https://requisitos-de-software.github.io/2023.1-BilheteriaDigital/elicitacao/priorizacao/threeLvlScale/). Acesso em: 04 out. 2025.

## Histórico de Versões

| Versão | Data       | Descrição                | Autor                                                                                                                                                                                                                                                                                                     | Revisor                                               |
| ------ | ---------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 1.0    | 04/10/2025 | Documentação dos léxicos | [Lara Souza](https://github.com/mel14-hub), [Pedro Henrique](https://github.com/pedrohpsantos), [Yan Matheus](https://github.com/Yanmatheus0812), [Geovanna Alves](https://github.com/GeovannaUmbelino), [Luisa de Souza](https://github.com/Luisa12ll) e [Camila Silva](https://github.com/CamilaSilvaC) | [Geovanna Alves](https://github.com/GeovannaUmbelino) |
