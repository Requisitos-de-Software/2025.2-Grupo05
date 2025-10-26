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


## Referência bibliográfica
> <a name="RB2">2. </a>TORANZO, M.; CASTRO, J; MELLO, E. Uma proposta para melhorar o rastreamento de requisitos. PUC-Rio: Workshop em Engenharia de Requisitos, Rio de Janeiro, 2002. Disponível em: [https://www.researchgate.net/profile/Jaelson-Castro/publication/221235129_Uma_Proposta_para_Melhorar_o_Rastreamento_de_Requisitos/links/5b73e4af299bf14c6da6db79/Uma-Proposta-para-Melhorar-o-Rastreamento-de-Requisitos.pdf](https://www.researchgate.net/profile/Jaelson-Castro/publication/221235129_Uma_Proposta_para_Melhorar_o_Rastreamento_de_Requisitos/links/5b73e4af299bf14c6da6db79/Uma-Proposta-para-Melhorar-o-Rastreamento-de-Requisitos.pdf?origin=scientificContributions). Acesso em: 25 de outubro de 2025.

## Bibliográfica

> SAYÃO, Miriam; LEITE, Julio. Rastreabilidade de Requisitos. PUC-Rio: Departamento de Informática, ISSN 0103-9741, Rio de Janeiro, 2005. Disponível em:  [https://aprender3.unb.br/pluginfile.php/3210698/mod_resource/content/3/05_20_sayao.pdf](https://aprender3.unb.br/pluginfile.php/3210698/mod_resource/content/3/05_20_sayao.pdf). Acesso em: 25 de outubro de 2025.


> TORANZO, M.; CASTRO, J; MELLO, E. Uma proposta para melhorar o rastreamento de requisitos. PUC-Rio: Workshop em Engenharia de Requisitos, Rio de Janeiro, 2002. Disponível em: [https://www.researchgate.net/profile/Jaelson-Castro/publication/221235129_Uma_Proposta_para_Melhorar_o_Rastreamento_de_Requisitos/links/5b73e4af299bf14c6da6db79/Uma-Proposta-para-Melhorar-o-Rastreamento-de-Requisitos.pdf](https://www.researchgate.net/profile/Jaelson-Castro/publication/221235129_Uma_Proposta_para_Melhorar_o_Rastreamento_de_Requisitos/links/5b73e4af299bf14c6da6db79/Uma-Proposta-para-Melhorar-o-Rastreamento-de-Requisitos.pdf?origin=scientificContributions). Acesso em: 25 de outubro de 2025.


## Histórico de Versões 

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :-: | :-: | :-: | :-: | :-: |
| 1.0 | 26/10/2025 | Adicionando introdução, participantes e metodologia |[Camila Silva](https://github), [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Luisa de Souza](https://github.com/Luisa12ll). | [Yan Matheus](https://github.com/Yanmatheus0812) |