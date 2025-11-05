# Técnica de elicitação de requisitos - Questionário

## Introdução

- O questionário é um meio de elicitar requisitos de diversas perguntas para usuários<a id="anchor_1" href="#FRM1">[1]</a>. Neste trabalho o resultado no questionário teve um total de 55 respostas todas de acordo com o [termo de consentimento](../Termo_de_consentimento_questionario.pdf). O questionário foi elaborado pelo Google Forms, possuía 13 questões sobre aspectos gerais de possíveis usuários do aplicativo, e foi foi divulgado amplamente em grupos dos aplicativos WhatsApp e Telegram entre o período de 22 a 24 de setembro de 2025.
- A estrutura do questionário pode ser visualizada [clicando aqui](../Questionario.pdf)

## Participantes

A seguir temos a tabela 1, onde indica todos os participantes da técnica de elicitação do questionário e a data da elaboração.

<div align="center">
  <table>
    <thead>
      <tr>
        <th>Nome</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="https://github.com/CamilaSilvaC">Camila Souza</a></td>
        <td>21/09/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/GeovannaUmbelino">Geovanna Alves</a></td>
        <td>21/09/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/Yanmatheus0812">Yan Matheus</a></td>
        <td>21/09/2025</td>
      </tr>
    </tbody>
  </table>
</div>

Tabela 1: Participantes do questionário

Autor: [Yan Matheus](https://github.com/Yanmatheus0812)

## Tabela de Requisitos

A tabela 1 disposta abaixo representa todos os requisitos levantados durante a análise de documentos, identificados com 'Q' + numero do requisito, e com a seguinte legenda de categoria:

- RF: Requisitos Funcionais - Descrevem o comportamento ou a funcionalidade que o software deve ter para atender às necessidades do usuário.
- RNF: Requisitos Não-Funcionais - Descrevem os atributos que o software deve ter, como desempenho, segurança e usabilidade, mas não descrevem o comportamento do software em si.

- RI: Requisitos de Interface - Descrevem as características da interface do usuário, como layout, navegação e personalização.
- RPR: Requisitos de Produto - Descrevem as características do produto, como compatibilidade, desempenho e custo.
- RR: Riscos - São os riscos associados ao desenvolvimento e uso do software.
- RT: Testes e Validações - Descrevem as atividades necessárias para testar e validar o software antes de sua implantação.

| Identificação | Descrição                                                                                                             | Categoria | Implementado | Versão | Referência   |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | --------- | ------------ | ------ | ------------ |
| Q01           | O aplicativo deve possuir uma agenda para organização pessoal do usuário através de atividades                        | RF        | Não          | 1.0    | Questionário |
| Q02           | A agenda deve possuir a opção do usuário inserir atividades                                                           | RF        | Não          | 1.0    | Questionário |
| Q03           | A agenda deve possuir a opção do usuário editar atividades                                                            | RF        | Não          | 1.0    | Questionário |
| Q04           | A agenda deve possuir a opção do usuário excluir atividades                                                           | RF        | Não          | 1.0    | Questionário |
| Q05           | A agenda deve notificar o usuário sobre atividades inseridas com um dia de antecedência                               | RF        | Não          | 1.0    | Questionário |
| Q06           | A agenda deve permitir o usuário inserir um horário e data na criação de uma atividade                                | RF        | Não          | 1.0    | Questionário |
| Q07           | A agenda deve permitir o usuário avaliar suas atividades com grau de importância                                      | RF        | Não          | 1.0    | Questionário |
| Q08           | O aplicativo deve oferecer integração na agenda entre outros aplicativos de organização pessoal                       | RF        | Não          | 1.0    | Questionário |
| Q09           | O aplicativo deve oferecer um tutorial em vídeo sobre suas funcionalidades                                            | RF        | Não          | 1.0    | Questionário |
| Q10           | O aplicativo deve permitir a visualização da disciplina.                                                              | RF        | Sim          | 1.0    | Questionário |
| Q11           | O aplicativo deve permitir a visualização das informações e trabalhos da disciplina (data, peso e tipo de avaliação). | RF        | Não          | 1.0    | Questionário |
| Q12           | O aplicativo deve permitir a visualização das notas das avaliações e trabalhos da disciplina.                         | RF        | Não          | 1.0    | Questionário |
| Q13           | O aplicativo deve permitir a visualização de datas importantes em um calendário.                                      | RF        | Não          | 1.0    | Questionário |
| Q14           | O aplicativo deve notificar notas e avaliações com dois dias e uma semana antes.                                      | RF        | Não          | 1.0    | Questionário |
| Q15           | O aplicativo deve ser fácil de usar e aprender suas funcionalidades.                                                  | RNF       | Sim          | 1.0    | Questionário |
| Q16           | O aplicativo deve ter uma linguagem simples e adequada ao usuário (sem termos técnicos).                              | RNF       | Sim          | 1.0    | Questionário |
| Q17           | O aplicativo deve carregar suas informações em no máximo 3 segundos.                                                  | RNF       | Não          | 1.0    | Questionário |
| Q18           | O aplicativo deve possibilitar o usuário emitir a declaração de vínculo da instituição de ensino.                     | RF        | Não          | 1.0    | Questionário |
| Q19           | O aplicativo deve possibilitar o usuário visualizar seu histórico da instituição de ensino.                           | RF        | Não          | 1.0    | Questionário |
| Q20           | O aplicativo deve possibilitar o usuário visualizar boletim da instituição de ensino.                                 | RF        | Não          | 1.0    | Questionário |
| Q21           | O aplicativo deve possibilitar o usuário visualizar programas estudantis (FIES, Prouni, etc.).                        | RF        | Sim          | 1.0    | Questionário |
| Q22           | O aplicativo deve possibilitar o usuário visualizar parcelas pagas e que faltam do auxílio.                           | RF        | Sim          | 1.0    | Questionário |
| Q23           | O aplicativo deve possibilitar o usuário visualizar o valor total do auxílio.                                         | RF        | Não          | 1.0    | Questionário |
| Q24           | O aplicativo deve possibilitar o usuário visualizar a conta bancária cadastrada do auxílio.                           | RF        | Não          | 1.0    | Questionário |
| Q25           | O aplicativo deve possibilitar o usuário visualizar o dia do pagamento do auxílio.                                    | RF        | Não          | 1.0    | Questionário |
| Q26           | O aplicativo deve possibilitar o usuário acessar um fórum de dúvidas sobre o auxílio.                                 | RF        | Não          | 1.0    | Questionário |
| Q27           | O aplicativo deve possibilitar o usuário ser atendido em um canal de conversa sobre o auxílio.                        | RF        | Não          | 1.0    | Questionário |
| Q28           | O aplicativo deve possibilitar o usuário visualizar datas de eventos e atividades escolares em um calendário.         | RF        | Não          | 1.0    | Questionário |
| Q29           | O aplicativo deve ter informações unificadas sobre sua jornada escolar.                                               | RF        | Sim          | 1.0    | Questionário |
| Q30           | O aplicativo deve manter as informações do usuário seguras e privadas.                                                | RR        | Sim          | 1.0    | Questionário |
| Q31           | O aplicativo deve ser acessível (contraste em cores, suporte à libras e auto-descrição ).                             | RNF       | Não          | 1.0    | Questionário |
| Q32           | O aplicativo deve ter um design sem sobrecarga de informações na tela                                                 | RI        | sim          | 1.0    | Questionário |

<p style="text-align: center; font-size: 14px;">
Tabela 2 – Conjunto de requisitos elicitados no questionário<br>
Elaboração por <a href="https://github.com/CamilaSilvaC">Camila Silva</a>,
<a href="https://github.com/GeovannaUmbelino">Geovanna Alves</a> e
<a href="https://github.com/Yanmatheus0812">Yan Matheus</a>.
</p>

## Gravação

<iframe width="560" height="315" src="https://www.youtube.com/embed/c44olQN8pug?si=VH4QXBdKK0m8hxhD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Agradecimentos

<div style="text-align:left; font-size:0.9em; color:#6c757d; margin-top:1em;">
  Queremos agradecer o <b>Gemini e ChatGPT</b>, ferramenta de Inteligência Artificial Generativa, pelo apoio durante o desenvolvimento deste projeto Jornada do Estudante. Sua ajuda foi essencial na revisão de textos, na organização das ideias e na pesquisa de conteúdos complementares que contribuíram para deixar nossa documentação mais clara e completa.

De acordo com o Código de Conduta da Sociedade Brasileira de Computação (SBC), destacamos que a ferramenta foi utilizada apenas como apoio técnico e linguístico.
Todo o conteúdo apresentado é de autoria do Grupo 05, que assume total responsabilidade por sua originalidade e precisão.

</div>

## Referências Bibliográficas

<a id="FRM1" href="#anchor_1">1.</a> Carlos Eduardo Vazques,Guilherme Siqueira Simões.**Engenharia de Requisitos**. 1.ed. BRASPORT,2016

## Histórico de Versões

| Versão | Data       | Descrição                                   | Autor                                                                                                                                                     | Revisor                                               |
| ------ | ---------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 1.0    | 25/09/2025 | Documentação dos requisitos do questionário | [Camila Silva](https://github.com/CamilaSilvaC), [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Yan Matheus](https://github.com/Yanmatheus0812) | [Lara Souza](https://github.com/mel14-hub)            |
| 1.1    | 07/10/2025 | Adicionado o questionário na página         | [Yan Matheus](https://github.com/Yanmatheus0812)                                                                                                          | [Geovanna Alves](https://github.com/GeovannaUmbelino) |
| 1.2    | 09/10/2025 | Adicionado a tabela de contribuição         | [Yan Matheus](https://github.com/Yanmatheus0812)                                                                                                          | [Geovanna Alves](https://github.com/GeovannaUmbelino) |
