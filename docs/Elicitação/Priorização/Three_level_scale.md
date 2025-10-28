# Three Level Scale

## Introdução

A técnica de priorização _Three Level Scale_<a id="FTF1" href="#FTF1Ref">[1]</a> envolve a categorização dos requisitos em três categorias de acordo com sua prioridade relativa: alta, média e baixa prioridade. Nesse projeto, essa técnica foi utilizada por um desenvolvedor e um usuário, com o primeiro servindo de mediador e guiando o segundo durante o processo.

## Metodologia

A utilidade do método depende de que as partes interessadas concordem sobre o que cada nível de prioridade da escala signifique, sendo assim, levamos em conta a urgência e importância de cada requisito para formar sua prioridade. Logo, as três categorias ficaram da seguinte forma:

- Alta prioridade: requisitos importantes e urgentes, devem estar implementados na release mais próxima.
- Média prioridade: requisitos importantes, mas não urgentes, logo podem esperar uma release mais distante.
- Baixa prioridade: requisitos nem importantes, nem urgentes, sua implementação pode demorar muito tempo.

Requisitos classificados como não importante e urgentes foram realocados para baixa prioridade ou eliminados.

Não há um ranqueamento numérico dos requisitos, mas sim uma classificação em grupos de prioridade. Embora o método não aborde explicitamente as dependências entre requisitos, é importante considerá-las durante a avaliação e atribuição de prioridades. As dependências podem influenciar a importância e o impacto dos requisitos. É recomendado levar em conta as dependências ao avaliar os requisitos e tomar decisões informadas sobre a priorização.

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
        <td><a href="https://github.com/Yanmatheus0812">Yan Matheus</a></td>
        <td>26/09/2025</td>
        <td>15:40</td>
        <td>Faculdade de Ciências e Tecnologias em Engenharia – FCTE/UnB</td>
         </tr>
      <tr>
      <tr>
        <td>Mediador</td>
        <td><a href="https://github.com/mel14-hub">Lara Souza</a></td>
        <td>26/09/2025</td>
        <td>15:40</td>
        <td>Faculdade de Ciências e Tecnologias em Engenharia – FCTE/UnB</td>
      </tr>
       <tr>
        <td>Usuário</td>
        <td>Héllen</td>
         <td>26/09/2025</td>
        <td>15:40</td>
        <td>Faculdade de Ciências e Tecnologias em Engenharia – FCTE/UnB</td>
      </tr>
    </tbody>
  </table>
</div>

Tabela 1: Participantes Three Level Scale<br>
Autor: [Camila Silva](https://github.com/CamilaSilvaC)

## Tabela de Requisitos

A tabela 2 disposta abaixo representa todos os requisitos levantados durante a análise de documentos, identificados com 'RQ' + numero do requisito, e com a seguinte legenda de categoria:

- RF: Requisitos Funcionais - Descrevem o comportamento ou a funcionalidade que o software deve ter para atender às necessidades do usuário.
- RNF: Requisitos Não-Funcionais - Descrevem os atributos que o software deve ter, como desempenho, segurança e usabilidade, mas não descrevem o comportamento do software em si.

- RI: Requisitos de Interface - Descrevem as características da interface do usuário, como layout, navegação e personalização.
- RPR: Requisitos de Produto - Descrevem as características do produto, como compatibilidade, desempenho e custo.
- RR: Riscos - São os riscos associados ao desenvolvimento e uso do software.
- RT: Testes e Validações - Descrevem as atividades necessárias para testar e validar o software antes de sua implantação.

| Identificação | Descrição                                                                                                                                                             | Categoria | Implementado | Versão | Prioridade |
| ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------: | :----------: | :----: | ---------- |
|           RQ1 | O aplicativo deve permitir o acesso do usuário através de uma autenticação com o gov.                                                                                 |    RF     |     Sim      |  1.1   | Alta       |
|           RQ2 | O aplicativo deve ter uma interface intuitiva e fácil de navegar para que o estudante encontre as informações que precisa rapidamente.                                |    RI     |     Sim      |  1.0   | Média      |
|           RQ3 | O aplicativo deve ter uma tecnologia blockchain que é usada para a autenticação e disponibilização de documentos.                                                     |    RNF    |     Sim      |  1.0   | Média      |
|           RQ4 | O aplicativo deve permitir aos estudantes do Brasil unificar o acesso a suas informações acadêmicas, como dados de cursos, disciplinas e progresso.                   |    RF     |     Sim      |  1.0   | Alta       |
|           RQ5 | O aplicativo deve permitir o acompanhamento do programa Pé-de-Meia.                                                                                                   |    RF     |     Sim      |  1.0   | Média      |
|           RQ6 | O aplicativo não deve ter informações desatualizadas ou incorretas, que levem ao bloqueio do programa Pé-de-Meia.                                                     |    RR     |     Não      |  1.0   | Baixa      |
|           RQ7 | O aplicativo deve apresentar os dados do estudante conforme a ultima atualização recebida do sistema acadêmico, podendo haver divergência em relação ao status final. |    RR     |     Sim      |  1.1   | Média      |
|           RQ8 | O aplicativo deve possibilitar a visualização de faltas do estudante.                                                                                                 |    RF     |     Sim      |  1.0   | Alta       |
|           RQ9 | O aplicativo deve apresentar atualizações referente ao pagamento do Pé-de-Meia disponível em até um mês.                                                              |    RF     |     Não      |  1.0   | Média      |
|          RQ10 | O aplicativo deve ter disponibilidade gratuita nos sistemas operacionais: Android e iOS.                                                                              |    RPR    |     Sim      |  1.0   | Alta       |
|          RQ11 | O aplicativo deve possibilitar o acompanhamento de registros estudantis desde o ingresso até níveis superiores.                                                       |    RF     |     Sim      |  1.0   | Alta       |
|          RQ12 | O aplicativo deve ser um canal direto de comunicação entre o MEC e os estudantes.                                                                                     |    RF     |     Sim      |  1.0   | Média      |
|          RQ13 | O aplicativo deve possibilitar informar um curso que você estudou ou está cursando.                                                                                   |    RF     |     Sim      |  1.0   | Média      |
|          RQ14 | O aplicativo deve possibilitar que os usuários recebam, através de um canal de comunicação, novidades do Governo Federal voltadas à educação.                         |    RF     |     Sim      |  1.0   | Alta       |
|          RQ15 | O aplicativo deve possibilitar acessar rapidamente serviços estudantis.                                                                                               |    RF     |     Sim      |  1.0   | Média      |
|          RQ16 | O aplicativo não deve possibilitar integração da escola ou universidade por dentro da plataforma.                                                                     |    RF     |     Sim      |  1.0   | Média      |
|          RQ17 | O aplicativo deve permitir a visualização do professor das disciplinas.                                                                                               |    RF     |     Não      |  1.0   | Alta       |
|          RQ18 | O aplicativo deve permitir a visualização do horário e sala da disciplina.                                                                                            |    RF     |     Não      |  1.0   | Alta       |
|          RQ19 | O aplicativo deve permitir a visualização da disciplina.                                                                                                              |    RF     |     Sim      |  1.0   | Média      |
|          RQ20 | O aplicativo deve permitir a visualização das informações e trabalhos da disciplina (data, peso e tipo de avaliação).                                                 |    RF     |     Não      |  1.0   | Alta       |
|          RQ21 | O aplicativo deve permitir a visualização das notas das avaliações e trabalhos da disciplina.                                                                         |    RF     |     Não      |  1.0   | Alta       |
|          RQ22 | O aplicativo deve permitir a visualização de datas importantes em um calendário.                                                                                      |    RF     |     Não      |  1.0   | Alta       |
|          RQ23 | O aplicativo deve permitir a visualização das faltas em cada disciplina.                                                                                              |    RF     |     Sim      |  1.0   | Alta       |
|          RQ24 | O aplicativo deve notificar notas e avaliações com dois dias e uma semana antes.                                                                                      |    RF     |     Não      |  1.0   | Média      |
|          RQ25 | O aplicativo deve notificar faltas após serem lançadas no aplicativo.                                                                                                 |    RF     |     Não      |  1.0   | Média      |
|          RQ26 | O aplicativo deve notificar informações sobre o benefício Pé-de-Meia (parcelas e valores).                                                                            |    RF     |     Não      |  1.0   | Alta       |
|          RQ27 | O aplicativo deve ser fácil de usar e aprender suas funcionalidades.                                                                                                  |    RNF    |     Sim      |  1.0   | Alta       |
|          RQ28 | O aplicativo deve ter uma linguagem simples adequada ao usuário.                                                                                                      |    RNF    |     Sim      |  1.0   | Alta       |
|          RQ29 | O aplicativo deve carregar suas informações em no máximo 3 segundos.                                                                                                  |    RNF    |     Não      |  1.0   | Média      |
|          RQ30 | O aplicativo deve possibilitar o usuário emitir a declaração de vínculo da instituição de ensino.                                                                     |    RF     |     Não      |  1.0   | Alta       |
|          RQ31 | O aplicativo deve possibilitar o usuário emitir seu histórico da instituição de ensino.                                                                               |    RF     |     Não      |  1.0   | Alta       |
|          RQ32 | O aplicativo deve possibilitar o usuário visualizar o boletim da instituição de ensino.                                                                               |    RF     |     Não      |  1.0   | Média      |
|          RQ33 | O aplicativo deve possibilitar o usuário visualizar programas estudantis (FIES, Prouni, etc.).                                                                        |    RF     |     Sim      |  1.0   | Alta       |
|          RQ34 | O aplicativo deve possibilitar o usuário visualizar parcelas pagas e que faltam do auxílio.                                                                           |    RF     |     Sim      |  1.0   | Média      |
|          RQ35 | O aplicativo deve possibilitar o usuário visualizar o valor total do auxílio.                                                                                         |    RF     |     Não      |  1.0   | Alta       |
|          RQ36 | O aplicativo deve possibilitar o usuário visualizar a conta bancária cadastrada do auxílio.                                                                           |    RF     |     Não      |  1.0   | Alta       |
|          RQ37 | O aplicativo deve possibilitar o usuário visualizar o dia do pagamento do auxílio.                                                                                    |    RF     |     Não      |  1.0   | Alta       |
|          RQ38 | O aplicativo deve possibilitar o usuário acessar um fórum de dúvidas sobre o auxílio.                                                                                 |    RF     |     Não      |  1.0   | Alta       |
|          RQ39 | O aplicativo deve possibilitar o usuário ser atendido em um canal de conversa sobre o auxílio.                                                                        |    RF     |     Não      |  1.0   | Alta       |
|          RQ40 | O aplicativo deve possibilitar o usuário visualizar datas de eventos e atividades escolares em um calendário.                                                         |    RF     |     Não      |  1.0   | Alta       |
|          RQ41 | O aplicativo deve ter informações unificadas sobre sua jornada escolar.                                                                                               |    RF     |     Sim      |  1.0   | Alta       |
|          RQ42 | O aplicativo deve manter as informações do usuário seguras e privadas.                                                                                                |    RR     |     Sim      |  1.0   | Alta       |
|          RQ43 | O aplicativo deve ser acessível (contraste em cores, suporte à Libras e auto-descrição).                                                                              |    RNF    |     Não      |  1.0   | Alta       |
|          RQ44 | O aplicativo deve oferecer um ranqueamento de matérias por nota, para orientar o foco do estudante.                                                                   |    RF     |     Não      |  1.0   | Média      |
|          RQ45 | O aplicativo deve ter uma página de perfil com as informações do usuário (nome, instituição e ano/semestre).                                                          |    RF     |     Sim      |  1.0   | Alta       |
|          RQ46 | O aplicativo deve possibilitar o usuário editar suas informações na página de perfil.                                                                                 |    RF     |     Sim      |  1.1   | Média      |
|          RQ47 | O aplicativo deve possibilirar o usuário conseguir editar suas informações bancárias pelo gov.                                                                        |    RF     |     Não      |  1.1   | Média      |
|          RQ48 | O aplicativo deve possuir uma agenda para organização pessoal do usuário através de atividades.                                                                       |    RF     |     Não      |  1.0   | Média      |
|          RQ49 | A agenda deve possuir a opção do usuário inserir atividades.                                                                                                          |    RF     |     Não      |  1.0   | Alta       |
|          RQ50 | A agenda deve possuir a opção do usuário editar atividades.                                                                                                           |    RF     |     Não      |  1.0   | Média      |
|          RQ51 | A agenda deve possuir a opção do usuário excluir atividades.                                                                                                          |    RF     |     Não      |  1.0   | Média      |
|          RQ52 | A agenda deve notificar o usuário sobre atividades inseridas com um dia de antecedência.                                                                              |    RF     |     Não      |  1.0   | Alta       |
|          RQ53 | A agenda deve permitir o usuário inserir um horário e data na criação de uma atividade.                                                                               |    RF     |     Não      |  1.0   | Alta       |
|          RQ54 | A agenda deve permitir o usuário avaliar suas atividades com grau de importância.                                                                                     |    RF     |     Não      |  1.0   | Alta       |
|          RQ55 | O aplicativo deve oferecer integração na agenda entre outros aplicativos de organização pessoal.                                                                      |    RF     |     Não      |  1.0   | Alta       |
|          RQ56 | O aplicativo deve oferecer um tutorial em vídeo sobre suas funcionalidades.                                                                                           |    RF     |     Não      |  1.0   | Média      |
|          RQ57 | O aplicativo deve ter a possibilidade de encontrar qualquer funcionalidade desejada em até 45 segundos.                                                               |    RNF    |     Não      |  1.0   | Média      |
|          RQ58 | O aplicativo deve notificar quando editais de vestibulares forem abertos.                                                                                             |    RF     |     Não      |  1.0   | Alta       |
|          RQ59 | O aplicativo deve ter um fórum entre estudantes.                                                                                                                      |    RF     |     Não      |  1.1   | Alta       |
|          RQ60 | O aplicativo deve ter um fórum por disciplina entre estudantes e professores.                                                                                         |    RF     |     Não      |  1.0   | Média      |
|          RQ61 | O aplicativo deve permitir a emissão de diplomas.                                                                                                                     |    RF     |     Não      |  1.0   | Alta       |
|          RQ62 | O aplicativo deve ter um canal de suporte ao usuário.                                                                                                                 |    RF     |     Sim      |  1.0   | Alta       |
|          RQ63 | O aplicativo deve permitir a visualização de certificados.                                                                                                            |    RF     |     Não      |  1.0   | Alta       |
|          RQ64 | O aplicativo deve permitir a visualização de ocorrências.                                                                                                             |    RF     |     Não      |  1.0   | Média      |

<p style="text-align: center; font-size: 14px;">
Tabela 2 – Conjunto de requisitos priorizados.<br>
Elaboração por
<a href="https://github.com/mel14-hub">Lara Souza</a> e
<a href="https://github.com/Yanmatheus0812">Yan Matheus</a>.

</p>

## Gravação - Three Level Scale

<iframe width="560" height="315" src="https://www.youtube.com/embed/FXYmCWNle4E?si=m5bHl31t__NAOlbT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Validação - Three Level Scale

A seguir temos a tabela 3, onde indica todos os participantes da validação da técnica, o horário e local da aplicação da técnica. O usuário corresponde ao perfil de usuário 2

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
        <td><a href="https://github.com/Yanmatheus0812)">Yan Matheus</a></td>
        <td>30/09/2025</td>
        <td>13:30</td>
        <td>Faculdade de Ciências e Tecnologias em Engenharia – FCTE/UnB</td>
         </tr>
      <tr>
       <tr>
        <td>Usuário</td>
        <td>Bryan</td>
         <td>30/09/2025</td>
        <td>13:30</td>
        <td>Faculdade de Ciências e Tecnologias em Engenharia – FCTE/UnB</td>
      </tr>
    </tbody>
  </table>
</div>

Tabela 3: Validação Three Level Scale<br>
Autor: [Yan Matheus](https://github.com/Yanmatheus0812)

<iframe width="560" height="315" src="https://www.youtube.com/embed/7dHSH_HDoe8?si=3MS1eDxreI3A8g83" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Referências Bibliográficas

> <a id="FTF1Ref" href="#FTF1">1.</a> WIEGERS, Karl; BEATTY, Joy. Software requirements. 3. ed. Redmond: Microsoft
> Press, 2013. Cap. 13 “Three-level scale”, p. 319

## Bibliografia

> ALVES, Douglas. Three Level Scale. Repositório da disciplina de Requisitos de Software da Universidade de Brasília, 2023. Disponível em: [https://requisitos-de-software.github.io/2023.1-BilheteriaDigital/elicitacao/priorizacao/threeLvlScale/](https://requisitos-de-software.github.io/2023.1-BilheteriaDigital/elicitacao/priorizacao/threeLvlScale/). Acesso em: 26 set. 2025.

## Histórico de Versões

| Versão | Data       | Descrição                               | Autor                                                                                         | Revisor                                          |
| ------ | ---------- | --------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 1.0    | 25/09/2025 | Documentação dos requisitos priorizados | [Lara Souza](https://github.com/mel14-hub) e [Yan Matheus](https://github.com/Yanmatheus0812) | [Camila Silva](https://github.com/CamilaSilvaC)  |
| 1.1    | 02/10/2025 | Adição da tabela de participantes       | [Camila Silva](https://github.com/CamilaSilvaC)                                               | [Yan Matheus](https://github.com/Yanmatheus0812) |
| 1.2    | 03/10/2025 | Adição da tabela de validação           | [Yan Matheus](https://github.com/Yanmatheus0812)                                              | [Camila Silva](https://github.com/CamilaSilvaC)  |
| 1.3    | 20/10/2025 | Atualização da tabela                   | [Pedro Henrique](https://github.com/pedrohpsantos)                                            | [Lara Souza](https://github.com/mel14-hub)       |
