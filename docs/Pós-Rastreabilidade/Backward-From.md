# Elos Backward-From

## Introdução
O processo de rastreabilidade de requisitos é uma atividade essencial na engenharia de requisitos, pois permite estabelecer e acompanhar as ligações entre diferentes artefatos produzidos ao longo do desenvolvimento de software, conforme dito por Sayão e Leite (2005) <a id="RB1" href="https://aprender3.unb.br/pluginfile.php/3210698/mod_resource/content/3/05_20_sayao.pdf">1 </a>. Uma das direções fundamentais dessa prática é a pré-rastreabilidade, também conhecida como rastreabilidade backward-from (para trás). A rastreabilidade backward-from foca na origem dos requisitos. Ela documenta o contexto a partir do qual os requisitos emergem e estabelece as ligações entre um requisito e suas fontes. Essas fontes podem ser atas de reunião, documentos de legislação, entrevistas com stakeholders ou outros artefatos de elicitação.

A rastreabilidade backward-from é essencial para o gerenciamento eficaz dos requisitos, pois permite identificar a origem e a justificativa de cada um, facilitando a resolução de conflitos e garantindo que todos compreendam o contexto e as necessidades dos stakeholders. Ela também auxilia no gerenciamento de mudanças, avaliando o impacto das alterações sem comprometer os objetivos do projeto, fortalecendo o controle, a transparência e a tomada de decisões ao longo de todo o ciclo de vida.

Neste documento, serão apresentados os elos backward-from dos requisitos funcionais e não funcionais do sistema FGTS. Essa abordagem demonstrará como os requisitos foram originados e se relacionam com seus artefatos de origem e elicitação.

Para organizar esta análise, a equipe dividiu o conjunto de requisitos, de modo que cada integrante ficou responsável pelo rastreamento de 8 a 9 requisitos funcionais e 1 requisito não funcional. Para isso utilizamos os requisitos elaborados ao longo da disciplina, bem como dos registros de técnicas de elicitação e elementos de modelagem (como léxicos, cenários e casos de uso).


## Participantes

A seguir temos a tabela 1, onde indica todos os participantes que colaborou nos elos backward-from.

<font size="3"><p style="text-align: center">Tabela 1: Participantes</p></font>

<div align="center">
  <table border="1" cellspacing="0" cellpadding="5">
    <thead>
      <tr>
        <th>Nome</th>
        <th>quais etapas participou</th>
        <th>Data</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="https://github.com/CamilaSilvaC">Camila Silva</a></td>
        <td>Elaborou os elos <a href=""></a>  </td>
        <td>25/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/GeovannaUmbeliino">Geovanna Alves</a></td>
        <td>Elaborou o <a href="">Cartão de especificação do NFR54</a> e colaborou na confecção do grafo SIG </td>
        <td>25/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/mel14-hub">Lara Souza</a></td>
        <td>Elaborou o <a href="">Cartão de especificação do NFR03</a>  e colaborou na confecção do grafo SIG</td> 
        <td>25/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/luisa12ll">Luisa de Souza</a></td>
        <td>Elaborou o <a href="">Cartão de especificação do NFR40</a> e colaborou na confecção do grafo SIG</td>
        <td>25/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/pedrohpsantos">Pedro Henrique</a></td>
        <td>Elaborou o <a href="">Cartão de especificação do NFR24</a> e colaborou na confecção do grafo SIG</td>
        <td>25/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/Yanmatheus0812">Yan Matheus</a></td>
        <td>Elaborou o <a href="">Cartão de especificação do NFR26</a> e colaborou na confecção do grafo SIG</td>
        <td>25/10/2025</td>
      </tr>
    </tbody>
  </table>
</div>


<font size="3"><p style="text-align:center"> Autor: <a href="https://github.com/GeovannaUmbeliino">Geovanna Alves</a> </font>

## Metodologia
Utilizamos a metodologia Backward From, baseada na proposta de Toranzo, Castro e Mello (2002)<a id="RB2" href="">2.</a>. Essa abordagem nos ajuda a entender exatamente de onde cada requisito surgiu e quais artefatos contribuíram para sua criação e evolução. Assim, conseguimos enxergar toda a trajetória do requisito, desde a sua descoberta até a implementação.

Para organizar essas relações, o modelo define diferentes tipos de elos, que mostram como os artefatos estão conectados:

Satisfação: indica que um requisito depende de outro para ser cumprido.

Recurso: mostra que um item precisa de algo fornecido por outro artefato.

Responsabilidade: registra quem participou ou realizou ações sobre um artefato.

Representação: conecta o requisito à sua modelagem em diagramas, protótipos ou outras formas de representação.

Alocado: associa o requisito a um subsistema ou componente específico.

Agregação: demonstra como diferentes elementos se unem para formar um todo.

Além disso, organizamos as informações em quatro categorias, o que ajuda a ter uma visão clara do contexto de cada requisito:

Ambiental: tudo que vem do ambiente externo, como leis, normas e objetivos que podem influenciar o sistema.

Organizacional: informações internas da organização, como missão, regras e processos.

Gerencial: dados que ajudam a gerenciar o projeto, como tarefas, restrições e metas.

Desenvolvimento: artefatos gerados durante o desenvolvimento, incluindo requisitos, diagramas, códigos e testes.

No nosso trabalho, reunimos os requisitos funcionais e não funcionais, registros das técnicas de elicitação usadas (entrevistas, observações, introspecção e storytelling) e todos os elementos de modelagem associados, como casos de uso, cenários, histórias de usuário e NFRs. Depois, para cada requisito funcional, identificamos os elos Backward From, que mostram claramente de onde ele veio e qual técnica de elicitação o originou. Isso nos permite rastrear cada requisito desde sua origem, compreendendo seu propósito e sua relação com outros elementos do projeto.

Por fim, toda a informação foi organizada em tabelas, com hiperlinks para os artefatos correspondentes, e registramos a participação dos entrevistados ao longo do processo. Dessa forma, conseguimos ter uma visão completa, clara e confiável de todos os requisitos, suas origens e como se conectam no desenvolvimento do sistema.


## Modelo
A Tabela 1 a seguir apresenta o modelo padrão que será utilizado neste artefato para documentar a rastreabilidade dos requisitos. Esta estrutura foi desenhada para capturar a vida completa de um requisito, desde sua origem (pré-rastreabilidade) até sua implementação (pós-rastreabilidade).

A estrutura foi baseada em conceitos da literatura, como a classificação das informações em quatro níveis (Ambiental, Organizacional, Gerencial, Desenvolvimento), proposta por Toranzo, Castro e Mello (2002) <a id="RB2" href="">2.</a>.


 Itens  | Descrição    |  
| ------------- | ---- |
| [ID](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |  Descrição do requisito|
| Categoria | Classifica o requisito de acordo com as quatro categorias (Ambiental, Organizacional, Gerencial, Desenvolvimento) |
| Origem | Lista os artefatos de origem ou outros elementos que contribuíram para a elicitação ou refinamento do requisito.|
| Elos Backward-From | Origem do requisito. |
| Evidência|  Imagem da funcionalidade, caso tenha sido implementada. |

<p style="font-size: 14px;">Tabela 2 - Modelo da tabela de rastreabilidade</p>
Fonte:  <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a>, <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>, <a href="https://github.com/mel14-hub">Lara Mota</a>, <a href="https://github.com/luisa12ll">Luisa de Souza</a>, <a href="https://github.com/pedrohpsantos">Pedro Henrique</a> e <a href="https://github.com/Yanmatheus0812">Yan Matheus</a></p>

## Rastreabilidade Backward From - Requisitos Funcionais

### EB14 - Rastrebilidade Backward From do requisito RF14

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ14](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ14,-O%20aplicativo%20deve) | O aplicativo deve possibilitar que os usuários recebam, através de um canal de comunicação, novidades do Governo Federal voltadas à educação. |
| Categoria | Desenvolvimento |
| Origem |  [Análise de documento 17](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Analise_docs/#:~:text=link-,ADD017,-O%20aplicativo%20deve)   |
| Elos Backward-From | Agregação - O requisito originou-se da Técnica de análise de documentos [ADD017](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Analise_docs/#:~:text=link-,ADD017,-O%20aplicativo%20deve)   |
| Implementação | Implementado |
| Evidência|  [Imagem retirada diretamente do aplicativo.](https://ibb.co/LhnvDD6Q) |

<p style="font-size: 14px;">Tabela 10 - EF14 - Cartão do Requisito Funcional 14</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

### EB15 - Rastrebilidade Backward From do requisito RF15

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ15](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ15,-O%20aplicativo%20deve) | O aplicativo deve possibilitar acessar rapidamente serviços estudantis. |
| Categoria | Desenvolvimento |
| Origem |  [Análise de documento 18](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Analise_docs/#:~:text=link-,ADD018,-O%20aplicativo%20deve)   |
| Elos Backward-From | Agregação - O requisito originou-se da Técnica de análise de documentos [ADD018](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Analise_docs/#:~:text=link-,ADD018,-O%20aplicativo%20deve)   |
| Implementação | Implementado |
| Evidência|   [Imagem retirada diretamente do aplicativo.](https://ibb.co/v4s215LH) |

<p style="font-size: 14px;">Tabela 11 - EF15 - Cartão do Requisito Funcional 15</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

### EB16 - Rastrebilidade Backward From do requisito RF16

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ16](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ15,-O%20aplicativo%20deve) | O aplicativo deve possibilitar integração da escola ou universidade por dentro da plataforma. |
| Categoria | Desenvolvimento |
| Origem |  [Análise de documento 19](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Analise_docs/#:~:text=link-,ADD019,-O%20aplicativo%20n%C3%A3o)   |
| Elos Backward-From | Agregação - O requisito originou-se da Técnica de análise de documentos [ADD019](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Analise_docs/#:~:text=link-,ADD019,-O%20aplicativo%20n%C3%A3o)   |
| Implementação | Implementado |
| Evidência|   [Imagem retirada diretamente do aplicativo.](https://ibb.co/ksYn4ft1) |

<p style="font-size: 14px;">Tabela 12 - EF16 - Cartão do Requisito Funcional 16</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

### EB17 - Rastrebilidade Backward From do requisito RF17

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ17](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ17,-O%20aplicativo%20deve) | O aplicativo deve permitir a visualização da disciplina e o professor que ministra. |
| Categoria | Desenvolvimento |
| Origem |  [Entrevista 1](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Entrevista/#:~:text=Refer%C3%AAncia-,E01,-O%20aplicativo%20deve),  [Entrevista 3](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Entrevista/#:~:text=Entrevista%201-,E03,-O%20aplicativo%20deve), [Brainstorm 1](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Brainstorming/#:~:text=Refer%C3%AAncia-,B01,-O%20aplicativo%20deve) e [Brainstorm 3](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Brainstorming/#:~:text=elicita%C3%A7%C3%A3o%20de%20requisitos-,B03,-O%20aplicativo%20deve)  |
| Elos Backward-From | Agregação - O requisito originou-se da Técnica de Entrevista [E01](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Entrevista/#:~:text=Refer%C3%AAncia-,E01,-O%20aplicativo%20deve) <br> Agregação - O requisito originou-se da Técnica de Entrevista [E03](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Entrevista/#:~:text=Entrevista%201-,E03,-O%20aplicativo%20deve) <br> Agregação - O requisito originou-se da Técnica de Brainstorm [B01](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Brainstorming/#:~:text=Refer%C3%AAncia-,B01,-O%20aplicativo%20deve)<br> Agregação - O requisito originou-se da Técnica de Brainstorm [B03](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Brainstorming/#:~:text=elicita%C3%A7%C3%A3o%20de%20requisitos-,B03,-O%20aplicativo%20deve)  |
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 13 - EF17 - Cartão do Requisito Funcional 17</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

### EB18 - Rastrebilidade Backward From do requisito RF18

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ18](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=1%2C%20Brainstorming-,RQ18,-O%20aplicativo%20deve) | O aplicativo deve permitir a visualização do horário e sala da disciplina. |
| Categoria | Desenvolvimento |
| Origem |  [Entrevista 2](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Entrevista/#:~:text=Entrevista%201-,E02,-O%20aplicativo%20deve) e [Brainstorm 2](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Brainstorming/#:~:text=elicita%C3%A7%C3%A3o%20de%20requisitos-,B02,-O%20aplicativo%20deve)  |
| Elos Backward-From | Agregação - O requisito originou-se da Técnica de Entrevista [E02](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Entrevista/#:~:text=Entrevista%201-,E02,-O%20aplicativo%20deve) <br> Agregação - O requisito originou-se da Técnica de Brainstorm [B02](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Brainstorming/#:~:text=elicita%C3%A7%C3%A3o%20de%20requisitos-,B02,-O%20aplicativo%20deve)  |
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 14 - EF18 - Cartão do Requisito Funcional 18</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

### EB19 - Rastrebilidade Backward From do requisito RF19

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ19](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=1%2C%20Brainstorming-,RQ19,-O%20aplicativo%20deve) | O aplicativo deve permitir a visualização das informações e trabalhos da disciplina (data, peso e tipo de avaliação). |
| Categoria | Desenvolvimento |
| Origem |  [Entrevista 4](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Entrevista/#:~:text=Entrevista%201-,E04,-O%20aplicativo%20deve), [Questionário 11](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Question%C3%A1rio/#:~:text=Question%C3%A1rio-,Q11,-O%20aplicativo%20deve) e  [Brainstorming 4](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Brainstorming/#:~:text=elicita%C3%A7%C3%A3o%20de%20requisitos-,B04,-O%20aplicativo%20deve)  |
| Elos Backward-From | Agregação - O requisito originou-se da Técnica de Entrevista [E04](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Entrevista/#:~:text=Entrevista%201-,E04,-O%20aplicativo%20deve) <br> Agregação - O requisito originou-se da Técnica de Questionário [Q11](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Question%C3%A1rio/#:~:text=Question%C3%A1rio-,Q11,-O%20aplicativo%20deve) <br> Agregação - O requisito originou-se da Técnica de Brainstorm [B04](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Brainstorming/#:~:text=elicita%C3%A7%C3%A3o%20de%20requisitos-,B04,-O%20aplicativo%20deve)  |
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 15 - EF19 - Cartão do Requisito Funcional 19</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

### EB20 - Rastrebilidade Backward From do requisito RF20

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ20](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ20,-O%20aplicativo%20deve) | O aplicativo deve permitir a visualização das notas das avaliações e trabalhos da disciplina. |
| Categoria | Desenvolvimento |
| Origem |  [Entrevista 5](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Entrevista/#:~:text=Entrevista%201-,E05,-O%20aplicativo%20deve), [Questionário 12](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Question%C3%A1rio/#:~:text=Question%C3%A1rio-,Q12,-O%20aplicativo%20deve) e  [Brainstorming 5](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Brainstorming/#:~:text=elicita%C3%A7%C3%A3o%20de%20requisitos-,B05,-O%20aplicativo%20deve)  |
| Elos Backward-From | Agregação - O requisito originou-se da Técnica de Entrevista [E05](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Entrevista/#:~:text=Entrevista%201-,E05,-O%20aplicativo%20deve) <br> Representação - O requisito originou-se da Técnica de Questionário [Q12](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Question%C3%A1rio/#:~:text=Question%C3%A1rio-,Q12,-O%20aplicativo%20deve) <br> Agregação - O requisito originou-se da Técnica de Brainstorm [B05](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Brainstorming/#:~:text=elicita%C3%A7%C3%A3o%20de%20requisitos-,B05,-O%20aplicativo%20deve)  |
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 16 - EF20 - Cartão do Requisito Funcional 20</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

### EB21 - Rastrebilidade Backward From do requisito RF21

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ21](http://127.0.0.1:8000/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ21,-O%20aplicativo%20deve) | O aplicativo deve notificar avaliações com uma semana antes e dois dias de antecedência. |
| Categoria | Desenvolvimento |
| Origem |  [Entrevista 8](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Entrevista/#:~:text=Entrevista%201-,E08,-O%20aplicativo%20deve), [Questionário 14](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Question%C3%A1rio/#:~:text=Question%C3%A1rio-,Q14,-O%20aplicativo%20deve) e  [Brainstorming 9](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Brainstorming/#:~:text=elicita%C3%A7%C3%A3o%20de%20requisitos-,B09,-O%20aplicativo%20deve)  |
| Elos Backward-From | Agregação - O requisito originou-se da Técnica de Entrevista [E08](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Entrevista/#:~:text=Entrevista%201-,E08,-O%20aplicativo%20deve) <br> Satisfação - O requisito originou-se da Técnica de Questionário [Q14](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Question%C3%A1rio/#:~:text=Question%C3%A1rio-,Q14,-O%20aplicativo%20deve) <br> Agregação - O requisito originou-se da Técnica de Brainstorm [B09](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Brainstorming/#:~:text=elicita%C3%A7%C3%A3o%20de%20requisitos-,B09,-O%20aplicativo%20deve)  |
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 17 - EF21 - Cartão do Requisito Funcional 21</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

### EB22 - Rastrebilidade Backward From do requisito RF22

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ22](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ22,-O%20aplicativo%20deve) | O aplicativo deve notificar faltas após serem lançadas no aplicativo. |
| Categoria | Desenvolvimento |
| Origem |  [Entrevista 9](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Entrevista/#:~:text=Entrevista%201-,E09,-O%20aplicativo%20deve) e [Brainstorming 10](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Brainstorming/#:~:text=elicita%C3%A7%C3%A3o%20de%20requisitos-,B010,-O%20aplicativo%20deve)  |
| Elos Backward-From | Agregação - O requisito originou-se da Técnica de Entrevista [E09](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Entrevista/#:~:text=Entrevista%201-,E09,-O%20aplicativo%20deve) <br> Agregação - O requisito originou-se da Técnica de Brainstorm [B10](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Brainstorming/#:~:text=elicita%C3%A7%C3%A3o%20de%20requisitos-,B010,-O%20aplicativo%20deve)  |
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 18 - EF22 - Cartão do Requisito Funcional 22</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

## Rastreabilidade Forward From - Requisitos Não Funcionais

### EB02 - Rastrebilidade Forward From do requisito RNF24

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ24](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Entrevista%201-,RQ24,-O%20usu%C3%A1rio%20deve) | O usuário deve ser capaz de realizar as principais funções do aplicativo (cadastro, login, busca, e envio de dados) em até 8 minutos de uso, sem necessidade de treinamento prévio. |
| Categoria | Desenvolvimento |
 Origem |  [Entrevista 11](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Entrevista/#:~:text=Entrevista%201-,E011,-O%20aplicativo%20deve), [Questionário 15](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Question%C3%A1rio/#:~:text=Question%C3%A1rio-,Q15,-O%20aplicativo%20deve) e  [Brainstorming 12](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Brainstorming/#:~:text=elicita%C3%A7%C3%A3o%20de%20requisitos-,B012,-O%20aplicativo%20deve)  |
| Elos Backward-From | Agregação - O requisito originou-se da Técnica de Entrevista [E011](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Entrevista/#:~:text=Entrevista%201-,E011,-O%20aplicativo%20deve) <br> Agregação - O requisito originou-se da Técnica de Questionário [Q15](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Question%C3%A1rio/#:~:text=Question%C3%A1rio-,Q15,-O%20aplicativo%20deve) <br> Agregação - O requisito originou-se da Técnica de Brainstorm [B012](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Tecnicas/Brainstorming/#:~:text=elicita%C3%A7%C3%A3o%20de%20requisitos-,B012,-O%20aplicativo%20deve)  |
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 19 - EF02 - Cartão do Requisito Não Funcional 24</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>


## Referência bibliográfica
> <a name="RB2">2. </a>TORANZO, M.; CASTRO, J; MELLO, E. Uma proposta para melhorar o rastreamento de requisitos. PUC-Rio: Workshop em Engenharia de Requisitos, Rio de Janeiro, 2002. Disponível em: [https://www.researchgate.net/profile/Jaelson-Castro/publication/221235129_Uma_Proposta_para_Melhorar_o_Rastreamento_de_Requisitos/links/5b73e4af299bf14c6da6db79/Uma-Proposta-para-Melhorar-o-Rastreamento-de-Requisitos.pdf](https://www.researchgate.net/profile/Jaelson-Castro/publication/221235129_Uma_Proposta_para_Melhorar_o_Rastreamento_de_Requisitos/links/5b73e4af299bf14c6da6db79/Uma-Proposta-para-Melhorar-o-Rastreamento-de-Requisitos.pdf?origin=scientificContributions). Acesso em: 25 de outubro de 2025.

## Bibliográfica

> SAYÃO, Miriam; LEITE, Julio. Rastreabilidade de Requisitos. PUC-Rio: Departamento de Informática, ISSN 0103-9741, Rio de Janeiro, 2005. Disponível em:  [https://aprender3.unb.br/pluginfile.php/3210698/mod_resource/content/3/05_20_sayao.pdf](https://aprender3.unb.br/pluginfile.php/3210698/mod_resource/content/3/05_20_sayao.pdf). Acesso em: 25 de outubro de 2025.


> TORANZO, M.; CASTRO, J; MELLO, E. Uma proposta para melhorar o rastreamento de requisitos. PUC-Rio: Workshop em Engenharia de Requisitos, Rio de Janeiro, 2002. Disponível em: [https://www.researchgate.net/profile/Jaelson-Castro/publication/221235129_Uma_Proposta_para_Melhorar_o_Rastreamento_de_Requisitos/links/5b73e4af299bf14c6da6db79/Uma-Proposta-para-Melhorar-o-Rastreamento-de-Requisitos.pdf](https://www.researchgate.net/profile/Jaelson-Castro/publication/221235129_Uma_Proposta_para_Melhorar_o_Rastreamento_de_Requisitos/links/5b73e4af299bf14c6da6db79/Uma-Proposta-para-Melhorar-o-Rastreamento-de-Requisitos.pdf?origin=scientificContributions). Acesso em: 25 de outubro de 2025.


## Histórico de Versões 

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :-: | :-: | :-: | :-: | :-: |
| 1.0 | 26/10/2025 | Adicionando introdução, participantes e metodologia |[Camila Silva](https://github), [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Luisa de Souza](https://github.com/Luisa12ll). | [Yan Matheus](https://github.com/Yanmatheus0812) |