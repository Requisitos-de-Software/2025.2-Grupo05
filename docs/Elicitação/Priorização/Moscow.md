# Técnica MoSCoW

## Introdução
Em projetos de desenvolvimento de software, é comum que surjam muitos requisitos, mas nem todos possuem a mesma relevância ou urgência. Para lidar com isso, é necessário aplicar métodos de priorização que auxiliem na escolha do que deve ser feito primeiro.

Seus principais objetivos são:

>1 Definir o grau de prioridade das tarefas em um projeto.

>2 Alinhar expectativas entre stakeholders sobre o que deve ou não ser entregue.

## Participantes

A seguir temos a tabela 1, onde indica todos os participantes da aplicação da técnica, o horário e local da aplicação da técnica. 

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
        <td><a href="https://github.com/CamilaSilvaC">Camila Silva</a></td>
        <td>29/09/2025</td>
        <td>14:40</td>
        <td>Faculdade de Ciências e Tecnologias em Engenharia – FCTE/UnB</td>
         </tr>
      <tr>
      <tr>
        <td>Mediador</td>
        <td><a href="https://github.com/GeovannaUmbeliino">Geovanna Alves</a></td>
        <td>29/09/2025</td>
        <td>14:40</td>
        <td>Faculdade de Ciências e Tecnologias em Engenharia – FCTE/UnB</td>
      </tr>
       <tr>
        <td>Usuário</td>
        <td>Ana Paula</td>
         <td>29/09/2025</td>
        <td>14:40</td>
        <td>Faculdade de Ciências e Tecnologias em Engenharia – FCTE/UnB</td>
      </tr>
    </tbody>
  </table>
</div>

Tabela 1: Participantes MoSCoW
Autor: [Camila Silva](https://github.com/CamilaSilvaC)

## Metodologia - MoSCoW

O nome da técnica vem das iniciais de quatro categorias de priorização:

- **M**ust-Have 
- **S**hould 
- **Co**uld-Have 
- **W**ould/Want/Won't-Have

### Must-Have

São os requisitos indispensáveis para o sucesso do projeto. Sem eles, o produto não atinge seus objetivos mínimos. São iniciativas de alto impacto, de maior urgência, e que precisam ser priorizadas em primeiro lugar.

### Should-Have

Requisitos importantes, mas não essenciais. Eles contribuem para a qualidade e experiência do produto, mas podem ser postergados sem comprometer a entrega principal.

### Could-Have

Requisitos desejáveis, que agregam valor adicional ao projeto. Entretanto, sua ausência não gera grandes prejuízos. Geralmente são implementados apenas se houver tempo e recursos disponíveis.

### Would/Want/Won’t-Have

Requisitos de baixa prioridade, que não impactam o resultado final caso não sejam implementados nesta fase do projeto. Podem ser considerados para versões futuras, mas não são indispensáveis

Na _tabela 2_ estão identificados os requisitos elicitados respectivamente priorizados:

| Identificação | Descrição                                                                                                                                                  | Categoria | Priorização | Versão | Referência                                                                                       |
|--------------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------:|:------------:|:------:|--------------------------------------------------------------------------------------------------|
| RQ1          | O aplicativo deve permitir o acesso do usuário através de uma autenticação com o gov.                                                                    | RF        | Should         | 1.1    | [Análise de documentação](./Tecnicas/Analise_docs.md)                                            |
| RQ2          | O aplicativo deve ter uma interface intuitiva e fácil de navegar para que o estudante encontre as informações que precisa rapidamente.                       | RI        | Must        | 1.0    | [Análise de documentação](./Tecnicas/Analise_docs.md)                                            |
| RQ3          | O aplicativo deve ter uma tecnologia blockchain que é usada para a autenticação e disponibilização de documentos.                                            | RNF       | Should          | 1.0    | [Análise de documentação](./Tecnicas/Analise_docs.md)                                            |
| RQ4          | O aplicativo deve permitir aos estudantes do Brasil unificar o acesso a suas informações acadêmicas, como dados de cursos, disciplinas e progresso.          | RF        | Must         | 1.0    | [Análise de documentação](./Tecnicas/Analise_docs.md)                                            |
| RQ5          | O aplicativo deve permitir o acompanhamento o status do programa Pé-de-Meia.                                                                                         | RF        | Should         | 1.0    | [Análise de documentação](./Tecnicas/Analise_docs.md)                                            |
| RQ6          | O aplicativo não deve ter informações desatualizadas ou incorretas, que levem ao bloqueio do programa Pé-de-Meia.                                           | RR        | Must         | 1.0    | [Análise de documentação](./Tecnicas/Analise_docs.md)                                            |
| RQ7          | O aplicativo deve apresentar os dados do estudante conforme a ultima atualização recebida do sistema acadêmico, podendo haver divergência em relação ao status final.                                                                                 | RR        | Should        | 1.1    | [Análise de documentação](./Tecnicas/Analise_docs.md)                                            |
| RQ8          | O aplicativo deve possibilitar a visualização de faltas do estudante.                                                                                        | RF        |     Should      | 1.0    | [Análise de documentação](./Tecnicas/Analise_docs.md)                                            |
| RQ9          | O aplicativo deve apresentar atualizações referente ao pagamento do Pé-de-Meia disponível em até um mês.                                                     | RF        | Should         | 1.0    | [Análise de documentação](./Tecnicas/Analise_docs.md)                                            |
| RQ10         | O aplicativo deve ter disponibilidade gratuita nos sistemas operacionais: Android e iOS.                                                                     | RPR       |  Must       | 1.0    | [Análise de documentação](./Tecnicas/Analise_docs.md)                                            |
| RQ11         | O aplicativo deve possibilitar o acompanhamento de registros estudantis desde o ingresso até níveis superiores.                                              | RF        | Should       | 1.0    | [Análise de documentação](./Tecnicas/Analise_docs.md)                                            |
| RQ12         | O aplicativo deve ser um canal direto de comunicação entre o MEC e os estudantes.                                                                            | RF        | Should        | 1.0    | [Análise de documentação](./Tecnicas/Analise_docs.md)                                            |
| RQ13         | O aplicativo deve possibilitar informar um curso que você estudou ou está cursando.                                                                          | RF        | Must         | 1.0    | [Análise de documentação](./Tecnicas/Analise_docs.md)                                            |
| RQ14         | O aplicativo deve possibilitar que os usuários recebam, através de um canal de comunicação, novidades do Governo Federal voltadas à educação.               | RF        | Must         | 1.0    | [Análise de documentação](./Tecnicas/Analise_docs.md)                                            |
| RQ15         | O aplicativo deve possibilitar acessar rapidamente serviços estudantis.                                                                                      | RF        | Must          | 1.0    | [Análise de documentação](./Tecnicas/Analise_docs.md)                                            |
| RQ16         | O aplicativo deve possibilitar integração da escola ou universidade por dentro da plataforma.                                                            | RF        | Should        | 1.0    | [Análise de documentação](./Tecnicas/Analise_docs.md)                                            |
| RQ17          | O aplicativo deve permitir a visualização da disciplina e o professor que ministra.                                                                                       | RF        | Must         | 1.0    | [Entrevista 1](./Tecnicas/Entrevista.md), [Brainstorming](./Tecnicas/Brainstorming.md)                                                         |
| RQ18          | O aplicativo deve permitir a visualização do horário e sala da disciplina.                                                                                   | RF        | Must         | 1.0    | [Entrevista 1](./Tecnicas/Entrevista.md), [Brainstorming](./Tecnicas/Brainstorming.md)                                                          |
| RQ19          | O aplicativo deve permitir a visualização das informações e trabalhos da disciplina (data, peso e tipo de avaliação).                                        | RF        | Must          | 1.0    | [Entrevista 1](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md), [Brainstorming](./Tecnicas/Brainstorming.md)              |
| RQ20          | O aplicativo deve permitir a visualização das notas das avaliações e trabalhos da disciplina.                                                                 | RF        | Must        | 1.0    | [Entrevista 1](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md), [Brainstorming](./Tecnicas/Brainstorming.md)              |
| RQ21          | O aplicativo deve notificar avaliações com uma semana antes e dois dias de antecedência.                                                                             | RF        |    Must     | 1.0    | [Entrevista 1](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md), [Brainstorming](./Tecnicas/Brainstorming.md)              |
| RQ22          | O aplicativo deve notificar faltas após serem lançadas no aplicativo.                                                                                        | RF        | Should          | 1.0    | [Entrevista 1](./Tecnicas/Entrevista.md), [Brainstorming](./Tecnicas/Brainstorming.md)                                                          |
| RQ23          | O aplicativo deve notificar informações sobre o benefício Pé-de-Meia (parcelas e valores).                                                                   | RF        | Must         | 1.0    | [Entrevista 1](./Tecnicas/Entrevista.md)                                                         |
| RQ24          | O aplicativo deve ser fácil de usar e aprender suas funcionalidades.                                                                                         | RNF       | Must        | 1.0    | [Entrevista 1](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md), [Brainstorming](./Tecnicas/Brainstorming.md)              |
| RQ25          | O aplicativo deve ter uma linguagem simples adequada ao usuário.                                                                                             | RNF       | Must          | 1.0    | [Entrevista 1](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md), [Brainstorming](./Tecnicas/Brainstorming.md)              |
| RQ26          | O aplicativo deve carregar suas informações em no máximo 3 segundos.                                                                                        | RNF       | Should         | 1.0    | [Entrevista 1](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md), [Brainstorming](./Tecnicas/Brainstorming.md)              |
| RQ27          | O aplicativo deve possibilitar o usuário emitir a declaração de vínculo da instituição de ensino.                                                            | RF        | Must          | 1.0    | [Entrevista 2](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md), [Brainstorming](./Tecnicas/Brainstorming.md)              |
| RQ28          | O aplicativo deve possibilitar o usuário emitir seu histórico da instituição de ensino.                                                                  | RF        | Must       | 1.0    | [Entrevista 2](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md), [Brainstorming](./Tecnicas/Brainstorming.md)              |
| RQ29          | O aplicativo deve possibilitar o usuário visualizar o boletim da instituição de ensino.                                                                        | RF        | Must         | 1.0    | [Entrevista 2](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md), [Brainstorming](./Tecnicas/Brainstorming.md)              |
| RQ30          | O aplicativo deve possibilitar o usuário visualizar programas estudantis (FIES, Prouni, etc.).                                                               | RF        | Should       | 1.0    | [Entrevista 2](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md), [Brainstorming](./Tecnicas/Brainstorming.md)              |
| RQ31          | O aplicativo deve possibilitar o usuário visualizar parcelas pagas e que faltam do auxílio.                                                                  | RF        |     Must      | 1.0    | [Entrevista 2](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md)             |
| RQ32          | O aplicativo deve possibilitar o usuário visualizar o valor total do auxílio.                                                                                | RF        |  Must        | 1.0    | [Entrevista 2](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md)             |
| RQ33          | O aplicativo deve possibilitar o usuário visualizar a conta bancária cadastrada do auxílio.                                                                  | RF        | Must         | 1.0    | [Entrevista 2](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md)             |
| RQ34          | O aplicativo deve possibilitar o usuário visualizar o dia do pagamento do auxílio.                                                                           | RF        | Must         | 1.0    | [Entrevista 2](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md)             |
| RQ35          | O aplicativo deve possibilitar o usuário acessar um fórum de dúvidas sobre o auxílio.                                                                        | RF        | Should         | 1.0    | [Entrevista 2](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md)             |
| RQ36          | O aplicativo deve possibilitar o usuário ser atendido em um canal de conversa sobre o auxílio.                                                               | RF        | Must         | 1.0    | [Entrevista 2](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md)             |
| RQ37          | O aplicativo deve possibilitar o usuário visualizar datas de eventos em um calendário.                                                | RF        | Should         | 1.0    | [Entrevista 2](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md) [Brainstorming](./Tecnicas/Brainstorming.md)           |
| RQ38          | O aplicativo deve ter informações unificadas sobre sua jornada escolar.                                                                                      | RF        | Could       | 1.0    | [Entrevista 2](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md), [Brainstorming](./Tecnicas/Brainstorming.md)              |
| RQ39          | O aplicativo deve manter as informações do usuário seguras e privadas.                                                                                       | RR        | Must         | 1.0    | [Entrevista 2](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md), [Brainstorming](./Tecnicas/Brainstorming.md)              |
| RQ40          | O aplicativo deve ser acessível (contraste em cores, suporte à Libras e auto-descrição).                                                                     | RNF       | Must          | 1.0    | [Entrevista 2](./Tecnicas/Entrevista.md), [Questionário](./Tecnicas/Questionário.md), [Brainstorming](./Tecnicas/Brainstorming.md)              |
| RQ41          | O aplicativo deve oferecer um ranqueamento de matérias por nota, para orientar o foco do estudante.                                                          | RF        | Could        | 1.0    | [Entrevista 2](./Tecnicas/Entrevista.md)                                                         |
| RQ42          | O aplicativo deve ter uma página de perfil com as informações do usuário (nome, instituição e ano/semestre).                                                 | RF        | Should         | 1.0    | [Entrevista 2](./Tecnicas/Entrevista.md)                                                         |
| RQ43          | O aplicativo deve possibilitar o usuário editar suas informações na página de perfil.                                                                                     | RF        | Should         | 1.1    | [Entrevista 3](./Tecnicas/Entrevista.md)                                                         |
| RQ44          | O aplicativo deve possibilirar o usuário conseguir editar suas informações bancárias pelo gov.                                                                                | RF        | Must         | 1.1   | [Entrevista 3](./Tecnicas/Entrevista.md)                                                         |
| RQ45          | O aplicativo deve ter um design sem sobrecarga de informações na tela.                                                                                       | RI        |     Must     | 1.0    | [Entrevista 3](./Tecnicas/Entrevista.md), [Brainstorming](./Tecnicas/Brainstorming.md)                                                          |
| RQ46          | O aplicativo deve possuir uma agenda para organização pessoal do usuário através de atividades.                                                               | RF        | Should        | 1.0    | [Questionário](./Tecnicas/Questionário.md)                                                       |
| RQ47          | A agenda deve possuir a opção do usuário inserir atividades.                                                                                                  | RF        | Must         | 1.0    | [Questionário](./Tecnicas/Questionário.md)                                                       |
| RQ48          | A agenda deve possuir a opção do usuário editar atividades.                                                                                                   | RF        | Must          | 1.0    | [Questionário](./Tecnicas/Questionário.md)                                                       |
| RQ49          | A agenda deve possuir a opção do usuário excluir atividades.                                                                                                  | RF        | Must        | 1.0    | [Questionário](./Tecnicas/Questionário.md)                                                       |
| RQ50          | A agenda deve notificar o usuário sobre atividades inseridas com um dia de antecedência.                                                                     | RF        | Should       | 1.0    | [Questionário](./Tecnicas/Questionário.md)                                                       |
| RQ51          | A agenda deve permitir o usuário inserir um horário e data na criação de uma atividade.                                                                      | RF        |Must       | 1.0    | [Questionário](./Tecnicas/Questionário.md)                                                       |
| RQ52          | A agenda deve permitir o usuário avaliar suas atividades com grau de importância.                                                                            | RF        | Should       | 1.0    | [Questionário](./Tecnicas/Questionário.md)                                                       |
| RQ53          | O aplicativo deve oferecer integração na agenda entre outros aplicativos de organização pessoal.                                                              | RF        |  Should     | 1.0    | [Questionário](./Tecnicas/Questionário.md)                                                       |
| RQ54          | O aplicativo deve oferecer um tutorial em vídeo sobre suas funcionalidades.                                                                                  | RF        | Must      | 1.0    | [Questionário](./Tecnicas/Questionário.md)                                                       |
| RQ55          | O aplicativo deve ter a possibilidade de encontrar qualquer funcionalidade desejada em até 45 segundos.                                                      | RNF       | Should    | 1.0    | [Brainstorming](./Tecnicas/Brainstorming.md)          |
| RQ56          | O aplicativo deve notificar quando editais de vestibulares forem abertos.                                                                                      | RF        |    Must  | 1.0    | [Brainstorming](./Tecnicas/Brainstorming.md)          |
| RQ57          | O aplicativo deve ter um fórum entre estudantes.                                                                                                            | RF        | Should      | 1.1    | [Brainstorming](./Tecnicas/Brainstorming.md)  |
| RQ58          | O aplicativo deve ter um fórum por disciplina entre estudantes e professores.                                                                                  | RF        | Should      | 1.0    | [Brainstorming](./Tecnicas/Brainstorming.md)  |
| RQ59          | O aplicativo deve permitir a emissão de diplomas.                                                                                                            | RF        |   Cold     | 1.0    | [Brainstorming](./Tecnicas/Brainstorming.md)       |
| RQ60          | O aplicativo deve ter um canal de suporte ao usuário.                                                                  | RF        | Must        | 1.0    | [Brainstorming](./Tecnicas/Brainstorming.md)  |
| RQ61          | O aplicativo deve permitir a visualização de certificados.                                                             | RF        |     Should      | 1.0    | [Brainstorming](./Tecnicas/Brainstorming.md)          |
| RQ62          | O aplicativo deve permitir a visualização de ocorrências.                                                              | RF        | Must         | 1.0    | [Brainstorming](./Tecnicas/Brainstorming.md)          |

<p style="text-align: center; font-size: 14px;">
Tabela 2 – Tabela de priorização.<br>
Elaboração por <a href="https://github.com/CamilaSilvaC">Camila Silva</a> e  
<a href="https://github.com/GeovannaUmbeliino">Geovanna Alves</a>.</p>

## Gravação - MoSCoW

<iframe width="560" height="315" src="https://www.youtube.com/embed/aiG-DHzA-i4?si=cJWGSQPhYFBb4xHP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Bibliografia

[1] WIEGERS Karl E. First Things First: Prioritizing Requirements. Setembro de 1999. Disponível no [Link](https://aprender3.unb.br/pluginfile.php/3210609/mod_resource/content/3/PriorizaA%CC%83%C2%A7A%CC%83%C2%A3o%20de%20Req.pdf)

## Histórico de Versões

| Versão | Data       | Descrição           | Autor                                                      | Revisor                                                 |
|--------|------------|--------------------|------------------------------------------------------------|----------------------------------------------------------|
| 1.0    | 30/09/2025 | Adição dá técnica de Moscow | [Camila Silva](https://github.com/CamilaSilvaC) e  [Geovanna Alves](https://github.com/GeovannaUmbelino) | [Luísa de Souza](https://github.com/luisa12ll)  |
| 1.1   | 02/10/2025 | Adição da tabela de participantes| [Camila Silva](https://github.com/CamilaSilvaC)| [Yan Matheus](https://github.com/Yanmatheus0812)
