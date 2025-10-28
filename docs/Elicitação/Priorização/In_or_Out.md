# Técnica In or Out

## Introdução

A técnica "In or Out" (Dentro ou Fora) é um método de priorização binário e direto, focado em definir o escopo de um projeto ou de uma release específica. As partes interessadas (stakeholders) analisam cada requisito e decidem se ele está "Dentro" do escopo, sendo considerado essencial, ou "Fora" do escopo, sendo adiado para futuras versões ou descartado.

O principal objetivo desta técnica é criar uma fronteira clara entre o que é absolutamente necessário e o que não é, forçando decisões objetivas e evitando a inclusão de funcionalidades de baixa prioridade na entrega atual.

## Metodologia

A classificação dos requisitos é dividida em duas categorias simples e excludentes:

- **In (Dentro):** Requisitos que são indispensáveis para o sucesso da release atual. Sem eles, o produto não atenderia aos seus objetivos mínimos. Devem ser implementados.
- **Out (Fora):** Requisitos que não são essenciais para a release atual. Podem ser importantes, mas sua implementação é adiada para garantir o foco na entrega do que é mais valioso no momento.

Este método é especialmente útil para definir o escopo de um MVP (Minimum Viable Product), pois ajuda a equipe a se concentrar estritamente no núcleo de funcionalidades necessárias para lançar o produto.

## Participantes

Para a aplicação da técnica, foi realizada uma reunião com a participação de um usuário final para garantir que a priorização refletisse as necessidades reais. A sessão foi mediada por membros da equipe de desenvolvimento. A seguir temos a tabela 1, que mostra os participantes, o horário e local da aplicação da técnica.

<div align="center">
  <table>
    <thead>
      <tr>
        <th>Papel</th>
        <th>Nome</th>
        <th>Data</th>
        <th>Hora</th>
        <th>Local</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mediador</td>
        <td><a href="https://github.com/pedrohpsantos">Pedro Henrique</a></td>
        <td>26/09/2025</td>
        <td>11:00</td>
        <td>Faculdade de Ciências e Tecnologias em Engenharia – FCTE/UnB</td>
         </tr>
      <tr>
        <td>Usuário</td>
        <td>Gabriel</td>
        <td>26/09/2025</td>
        <td>11:00</td>
        <td>Faculdade de Ciências e Tecnologias em Engenharia – FCTE/UnB</td>
      </tr>
      <tr>
        <td>Usuário</td>
        <td>Lucas</td>
        <td>26/09/2025</td>
        <td>11:00</td>
        <td>Faculdade de Ciências e Tecnologias em Engenharia – FCTE/UnB</td>
      </tr>
      <tr>
        <td>Usuário</td>
        <td>Enzo</td>
        <td>26/09/2025</td>
        <td>11:00</td>
        <td>Faculdade de Ciências e Tecnologias em Engenharia – FCTE/UnB</td>
      </tr>
    </tbody>
  </table>
</div>

Tabela 1: Participantes In or Out
Autor: [Camila Silva](https://github.com/CamilaSilvaC)

## Tabela de Requisitos

A tabela 2 abaixo representa todos os requisitos levantados, identificados com 'RQ' + número do requisito, e classificados como "In" ou "Out".

| Identificação | Descrição                                                                                                                                                             | Categoria | Priorização | Versão | Referência                                                                                                                            |
| ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------: | :---------: | :----: | ------------------------------------------------------------------------------------------------------------------------------------- |
|           RQ1 | O aplicativo deve permitir o acesso do usuário através de uma autenticação com o gov.                                                                                 |    RF     |     In      |  1.1   | [Análise de documentação](../Tecnicas/Analise_docs.md)                                                                                |
|           RQ2 | O aplicativo deve ter uma interface intuitiva e fácil de navegar para que o estudante encontre as informações que precisa rapidamente.                                |    RI     |     In      |  1.0   | [Análise de documentação](../Tecnicas/Analise_docs.md)                                                                                |
|           RQ3 | O aplicativo deve ter uma tecnologia blockchain que é usada para a autenticação e disponibilização de documentos.                                                     |    RNF    |     In      |  1.0   | [Análise de documentação](../Tecnicas/Analise_docs.md)                                                                                |
|           RQ4 | O aplicativo deve permitir aos estudantes do Brasil unificar o acesso a suas informações acadêmicas, como dados de cursos, disciplinas e progresso.                   |    RF     |     In      |  1.0   | [Análise de documentação](../Tecnicas/Analise_docs.md)                                                                                |
|           RQ5 | O aplicativo deve permitir o acompanhamento o status do programa Pé-de-Meia.                                                                                          |    RF     |     In      |  1.0   | [Análise de documentação](../Tecnicas/Analise_docs.md)                                                                                |
|           RQ6 | O aplicativo não deve ter informações desatualizadas ou incorretas, que levem ao bloqueio do programa Pé-de-Meia.                                                     |    RR     |     Out     |  1.0   | [Análise de documentação](../Tecnicas/Analise_docs.md)                                                                                |
|           RQ7 | O aplicativo deve apresentar os dados do estudante conforme a ultima atualização recebida do sistema acadêmico, podendo haver divergência em relação ao status final. |    RR     |     Out     |  1.1   | [Análise de documentação](../Tecnicas/Analise_docs.md)                                                                                |
|           RQ8 | O aplicativo deve possibilitar a visualização de faltas do estudante.                                                                                                 |    RF     |     In      |  1.0   | [Análise de documentação](../Tecnicas/Analise_docs.md)                                                                                |
|           RQ9 | O aplicativo deve apresentar atualizações referente ao pagamento do Pé-de-Meia disponível em até um mês.                                                              |    RF     |     In      |  1.0   | [Análise de documentação](../Tecnicas/Analise_docs.md)                                                                                |
|          RQ10 | O aplicativo deve ter disponibilidade gratuita nos sistemas operacionais: Android e iOS.                                                                              |    RPR    |     In      |  1.0   | [Análise de documentação](../Tecnicas/Analise_docs.md)                                                                                |
|          RQ11 | O aplicativo deve possibilitar o acompanhamento de registros estudantis desde o ingresso até níveis superiores.                                                       |    RF     |     In      |  1.0   | [Análise de documentação](../Tecnicas/Analise_docs.md)                                                                                |
|          RQ12 | O aplicativo deve ser um canal direto de comunicação entre o MEC e os estudantes.                                                                                     |    RF     |     In      |  1.0   | [Análise de documentação](../Tecnicas/Analise_docs.md)                                                                                |
|          RQ13 | O aplicativo deve possibilitar informar um curso que você estudou ou está cursando.                                                                                   |    RF     |     In      |  1.0   | [Análise de documentação](../Tecnicas/Analise_docs.md)                                                                                |
|          RQ14 | O aplicativo deve possibilitar que os usuários recebam, através de um canal de comunicação, novidades do Governo Federal voltadas à educação.                         |    RF     |     In      |  1.0   | [Análise de documentação](../Tecnicas/Analise_docs.md)                                                                                |
|          RQ15 | O aplicativo deve possibilitar acessar rapidamente serviços estudantis.                                                                                               |    RF     |     In      |  1.0   | [Análise de documentação](../Tecnicas/Analise_docs.md)                                                                                |
|          RQ16 | O aplicativo deve possibilitar integração da escola ou universidade por dentro da plataforma.                                                                         |    RF     |     In      |  1.0   | [Análise de documentação](../Tecnicas/Analise_docs.md)                                                                                |
|          RQ17 | O aplicativo deve permitir a visualização da disciplina e o professor que ministra.                                                                                   |    RF     |     In      |  1.0   | [Entrevista 1](../Tecnicas/Entrevista.md), [Brainstorming](../Tecnicas/Brainstorming.md)                                              |
|          RQ18 | O aplicativo deve permitir a visualização do horário e sala da disciplina.                                                                                            |    RF     |     In      |  1.0   | [Entrevista 1](../Tecnicas/Entrevista.md), [Brainstorming](../Tecnicas/Brainstorming.md)                                              |
|          RQ19 | O aplicativo deve permitir a visualização das informações e trabalhos da disciplina (data, peso e tipo de avaliação).                                                 |    RF     |     In      |  1.0   | [Entrevista 1](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md), [Brainstorming](../Tecnicas/Brainstorming.md) |
|          RQ20 | O aplicativo deve permitir a visualização das notas das avaliações e trabalhos da disciplina.                                                                         |    RF     |     In      |  1.0   | [Entrevista 1](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md), [Brainstorming](../Tecnicas/Brainstorming.md) |
|          RQ21 | O aplicativo deve notificar avaliações com uma semana antes e dois dias de antecedência.                                                                              |    RF     |     In      |  1.0   | [Entrevista 1](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md), [Brainstorming](../Tecnicas/Brainstorming.md) |
|          RQ22 | O aplicativo deve notificar faltas após serem lançadas no aplicativo.                                                                                                 |    RF     |     In      |  1.0   | [Entrevista 1](../Tecnicas/Entrevista.md), [Brainstorming](../Tecnicas/Brainstorming.md)                                              |
|          RQ23 | O aplicativo deve notificar informações sobre o benefício Pé-de-Meia (parcelas e valores).                                                                            |    RF     |     In      |  1.0   | [Entrevista 1](../Tecnicas/Entrevista.md)                                                                                             |
|          RQ24 | O aplicativo deve ser fácil de usar e aprender suas funcionalidades.                                                                                                  |    RNF    |     In      |  1.0   | [Entrevista 1](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md), [Brainstorming](../Tecnicas/Brainstorming.md) |
|          RQ25 | O aplicativo deve ter uma linguagem simples adequada ao usuário.                                                                                                      |    RNF    |     In      |  1.0   | [Entrevista 1](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md), [Brainstorming](../Tecnicas/Brainstorming.md) |
|          RQ26 | O aplicativo deve carregar suas informações em no máximo 3 segundos.                                                                                                  |    RNF    |     In      |  1.0   | [Entrevista 1](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md), [Brainstorming](../Tecnicas/Brainstorming.md) |
|          RQ27 | O aplicativo deve possibilitar o usuário emitir a declaração de vínculo da instituição de ensino.                                                                     |    RF     |     In      |  1.0   | [Entrevista 2](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md), [Brainstorming](../Tecnicas/Brainstorming.md) |
|          RQ28 | O aplicativo deve possibilitar o usuário emitir seu histórico da instituição de ensino.                                                                               |    RF     |     In      |  1.0   | [Entrevista 2](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md), [Brainstorming](../Tecnicas/Brainstorming.md) |
|          RQ29 | O aplicativo deve possibilitar o usuário visualizar o boletim da instituição de ensino.                                                                               |    RF     |     In      |  1.0   | [Entrevista 2](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md), [Brainstorming](../Tecnicas/Brainstorming.md) |
|          RQ30 | O aplicativo deve possibilitar o usuário visualizar programas estudantis (FIES, Prouni, etc.).                                                                        |    RF     |     In      |  1.0   | [Entrevista 2](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md), [Brainstorming](../Tecnicas/Brainstorming.md) |
|          RQ31 | O aplicativo deve possibilitar o usuário visualizar parcelas pagas e que faltam do auxílio.                                                                           |    RF     |     In      |  1.0   | [Entrevista 2](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md)                                                |
|          RQ32 | O aplicativo deve possibilitar o usuário visualizar o valor total do auxílio.                                                                                         |    RF     |     In      |  1.0   | [Entrevista 2](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md)                                                |
|          RQ33 | O aplicativo deve possibilitar o usuário visualizar a conta bancária cadastrada do auxílio.                                                                           |    RF     |     In      |  1.0   | [Entrevista 2](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md)                                                |
|          RQ34 | O aplicativo deve possibilitar o usuário visualizar o dia do pagamento do auxílio.                                                                                    |    RF     |     In      |  1.0   | [Entrevista 2](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md)                                                |
|          RQ35 | O aplicativo deve possibilitar o usuário acessar um fórum de dúvidas sobre o auxílio.                                                                                 |    RF     |     Out     |  1.0   | [Entrevista 2](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md)                                                |
|          RQ36 | O aplicativo deve possibilitar o usuário ser atendido em um canal de conversa sobre o auxílio.                                                                        |    RF     |     In      |  1.0   | [Entrevista 2](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md)                                                |
|          RQ37 | O aplicativo deve possibilitar o usuário visualizar datas de eventos em um calendário.                                                                                |    RF     |     In      |  1.0   | [Entrevista 2](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md) [Brainstorming](../Tecnicas/Brainstorming.md)  |
|          RQ38 | O aplicativo deve ter informações unificadas sobre sua jornada escolar.                                                                                               |    RF     |     Out     |  1.0   | [Entrevista 2](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md), [Brainstorming](../Tecnicas/Brainstorming.md) |
|          RQ39 | O aplicativo deve manter as informações do usuário seguras e privadas.                                                                                                |    RR     |     In      |  1.0   | [Entrevista 2](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md), [Brainstorming](../Tecnicas/Brainstorming.md) |
|          RQ40 | O aplicativo deve ser acessível (contraste em cores, suporte à Libras e auto-descrição).                                                                              |    RNF    |     In      |  1.0   | [Entrevista 2](../Tecnicas/Entrevista.md), [Questionário](../Tecnicas/Questionário.md), [Brainstorming](../Tecnicas/Brainstorming.md) |
|          RQ41 | O aplicativo deve oferecer um ranqueamento de matérias por nota, para orientar o foco do estudante.                                                                   |    RF     |     Out     |  1.0   | [Entrevista 2](../Tecnicas/Entrevista.md)                                                                                             |
|          RQ42 | O aplicativo deve ter uma página de perfil com as informações do usuário (nome, instituição e ano/semestre).                                                          |    RF     |     In      |  1.0   | [Entrevista 2](../Tecnicas/Entrevista.md)                                                                                             |
|          RQ43 | O aplicativo deve possibilitar o usuário editar suas informações na página de perfil.                                                                                 |    RF     |     In      |  1.1   | [Entrevista 3](../Tecnicas/Entrevista.md)                                                                                             |
|          RQ44 | O aplicativo deve possibilirar o usuário conseguir editar suas informações bancárias pelo gov.                                                                        |    RF     |     In      |  1.1   | [Entrevista 3](../Tecnicas/Entrevista.md)                                                                                             |
|          RQ45 | O aplicativo deve possuir uma agenda para organização pessoal do usuário através de atividades.                                                                       |    RF     |     In      |  1.0   | [Questionário](../Tecnicas/Questionário.md)                                                                                           |
|          RQ46 | A agenda deve possuir a opção do usuário inserir atividades.                                                                                                          |    RF     |     In      |  1.0   | [Questionário](../Tecnicas/Questionário.md)                                                                                           |
|          RQ47 | A agenda deve possuir a opção do usuário editar atividades.                                                                                                           |    RF     |     In      |  1.0   | [Questionário](../Tecnicas/Questionário.md)                                                                                           |
|          RQ48 | A agenda deve possuir a opção do usuário excluir atividades.                                                                                                          |    RF     |     In      |  1.0   | [Questionário](../Tecnicas/Questionário.md)                                                                                           |
|          RQ49 | A agenda deve notificar o usuário sobre atividades inseridas com um dia de antecedência.                                                                              |    RF     |     In      |  1.0   | [Questionário](../Tecnicas/Questionário.md)                                                                                           |
|          RQ50 | A agenda deve permitir o usuário inserir um horário e data na criação de uma atividade.                                                                               |    RF     |     In      |  1.0   | [Questionário](../Tecnicas/Questionário.md)                                                                                           |
|          RQ51 | A agenda deve permitir o usuário avaliar suas atividades com grau de importância.                                                                                     |    RF     |     Out     |  1.0   | [Questionário](../Tecnicas/Questionário.md)                                                                                           |
|          RQ52 | O aplicativo deve oferecer integração na agenda entre outros aplicativos de organização pessoal.                                                                      |    RF     |     Out     |  1.0   | [Questionário](../Tecnicas/Questionário.md)                                                                                           |
|          RQ53 | O aplicativo deve oferecer um tutorial em vídeo sobre suas funcionalidades.                                                                                           |    RF     |     In      |  1.0   | [Questionário](../Tecnicas/Questionário.md)                                                                                           |
|          RQ54 | O aplicativo deve ter a possibilidade de encontrar qualquer funcionalidade desejada em até 45 segundos.                                                               |    RNF    |     In      |  1.0   | [Brainstorming](../Tecnicas/Brainstorming.md)                                                                                         |
|          RQ55 | O aplicativo deve notificar quando editais de vestibulares forem abertos.                                                                                             |    RF     |     In      |  1.0   | [Brainstorming](../Tecnicas/Brainstorming.md)                                                                                         |
|          RQ56 | O aplicativo deve ter um fórum entre estudantes.                                                                                                                      |    RF     |     Out     |  1.1   | [Brainstorming](../Tecnicas/Brainstorming.md)                                                                                         |
|          RQ57 | O aplicativo deve ter um fórum por disciplina entre estudantes e professores.                                                                                         |    RF     |     Out     |  1.0   | [Brainstorming](../Tecnicas/Brainstorming.md)                                                                                         |
|          RQ58 | O aplicativo deve permitir a emissão de diplomas.                                                                                                                     |    RF     |     Out     |  1.0   | [Brainstorming](../Tecnicas/Brainstorming.md)                                                                                         |
|          RQ59 | O aplicativo deve ter um canal de suporte ao usuário.                                                                                                                 |    RF     |     In      |  1.0   | [Brainstorming](../Tecnicas/Brainstorming.md)                                                                                         |
|          RQ60 | O aplicativo deve permitir a visualização de certificados.                                                                                                            |    RF     |     In      |  1.0   | [Brainstorming](../Tecnicas/Brainstorming.md)                                                                                         |
|          RQ61 | O aplicativo deve permitir a visualização de ocorrências.                                                                                                             |    RF     |     In      |  1.0   | [Brainstorming](../Tecnicas/Brainstorming.md)                                                                                         |

<p style="text-align: center; font-size: 14px;">
Tabela 2 – Tabela de priorização In or Out.<br>
Elaboração por <a href="https://github.com/pedrohpsantos">Pedro Henrique</a> e <a href="https://github.com/CamilaSilvaC">Camila Silva</a>.
</p>

## Gravação - In or Out

<iframe width="560" height="315" src="https://www.youtube.com/embed/o4UCSAHwcoY?si=XDYEEl0hVhrowNsw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Bibliografia

> WIEGERS, Karl; BEATTY, Joy. Software requirements. 3. ed. Redmond: Microsoft Press, 2013.

## Histórico de Versões

| Versão | Data       | Descrição                                     | Autor                                                                                                | Revisor                                          |
| ------ | ---------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 1.0    | 30/09/2025 | Criação do documento de priorização In or Out | [Pedro Henrique](https://github.com/pedrohpsantos) e [Camila Silva](https://github.com/CamilaSilvaC) | [Yan Matheus](https://github.com/Yanmatheus0812) |
| 1.1    | 02/10/2025 | Adição da tabela de participantes             | [Camila Silva](https://github.com/CamilaSilvaC)                                                      | [Yan Matheus](https://github.com/Yanmatheus0812) |
| 1.2    | 20/10/2025 | Atualização da tabela                         | [Pedro Henrique](https://github.com/pedrohpsantos)                                                   | [Lara Souza](https://github.com/mel14-hub)       |
