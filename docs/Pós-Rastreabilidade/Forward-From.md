# Elos Forward-From

## Introdução

A rastreabilidade de requisitos é a capacidade de acompanhar a vida de um requisito em ambas as direções ao longo do ciclo de desenvolvimento. Conforme discutido por Sayão e Leite (2005) <a id="RB1" href="https://aprender3.unb.br/pluginfile.php/3210698/mod_resource/content/3/05_20_sayao.pdf">1.</a>, existem diferentes tipos de rastreabilidade que contribuem para a completude e a consistência do projeto.

Um dos tipos fundamentais é a rastreabilidade forward-from, consiste na técnica que conecta os requisitos aos artefatos de desenho e implementação gerados posteriormente. Essencialmente, ela cria um vínculo “para frente”, partindo da especificação do requisito e apontando para os componentes de design, o código e os casos de teste desenvolvidos para atendê-lo. Essa técnica permite acompanhar cada requisito desde sua especificação até sua implementação e verificação final, garantindo que o sistema atenda corretamente ao que foi definido.

Neste documento, serão apresentadas as ligações forward-from dos requisitos funcionais e não funcionais do sistema Jornada do Estudante. Cada integrante ficou responsável por cerca de 8 a 9 requisitos funcionais e um requisito não funcional, e essa divisão pode ser visualizada na tabela de participação. Essa forma de rastreabilidade mostra como os requisitos evoluem e se conectam com as partes de design e implementação do sistema.

## Participantes

A seguir temos a tabela 1, onde indica todos os participantes que colaborou nos elos  forward-from.

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
        <td>Elaborou o <a href=""></a>  e elaborou</td>
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

Para a definição de nossa metodologia de rastreabilidade, adotamos como base a proposta de Toranzo, Castro e Mello (2002)<a id="RB2" href="">2.</a> . Esta abordagem compreende diversas estratégias para o rastreamento de requisitos, começando pela classificação das informações a serem rastreadas em quatro níveis:

Ambiental: Congrega informações oriundas do contexto ambiental onde a organização está inserida e que podem afetar o sistema sendo desenvolvido.

Organizacional: Reúne informações relacionadas à organização (como missão, objetivos, metas e padrões) e que podem impactar os requisitos do sistema.

Gerencial: Agrega informações que permitem associar tarefas a requisitos e que podem auxiliar a gerência do projeto.

Desenvolvimento: Abarca informações relacionadas aos diversos artefatos gerados no processo de desenvolvimento, como documento de requisitos, diagramas, programas e casos de testes.

Além de classificar as informações, o modelo de Toranzo, Castro e Mello (2002)<a id="RB2" href="">2.</a> também define os tipos de "elos" que conectam os artefatos e dão suporte à rastreabilidade. Esses elos mostram as relações e dependências entre os vários elementos do projeto.Os principais tipos de elos são:

Satisfação: Mostra que um item depende de outro para ser satisfeito ou concluído.

Recurso: Indica que um item precisa de um recurso que é fornecido por outro.

Responsabilidade: Registra quem (pessoa) participou ou agiu sobre um determinado artefato.

Representação: Conecta o requisito à sua modelagem em outras linguagens (como diagramas ou protótipos).

Alocado: Vincula um item a um subsistema específico, indicando onde ele "mora".

Agregação: Descreve como diferentes elementos se juntam para formar um conjunto ou um todo (composição).

Neste artefato, apresentamos os resultados da aplicação desse modelo em todos os requisitos elicitados, garantindo assim uma cobertura completa e uma visão clara de suas origens, classificações e conexões ao longo do desenvolvimento.


## Modelo

A Tabela 1 a seguir apresenta o modelo de rastreabilidade que será adotado neste artefato, servindo como padrão para o processo. A estrutura foi definida com base na proposta de Toranzo, Castro e Mello (2002)<a id="RB2" href="">2.</a>, que fundamenta a classificação das informações e os tipos de elos de rastreabilidade.

| Itens  | Descrição    |  
| ------------- | ---- |
| [ID](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |  Descrição do requisito|
| Categoria | Classifica o requisito de acordo com as quatro categorias (Ambiental, Organizacional, Gerencial, Desenvolvimento) |
| Elementos | Lista os artefatos de origem ou outros elementos que contribuíram para a elicitação ou refinamento do requisito.|
| Elos Forward-From | Descrição das ligações do requisito com os elementos e etapas posteriores do ciclo de vida. |
| Implementação | Informa se o requisito está "implementado" ou "não implementado"|
| Evidência|  Imagem da funcionalidade, caso tenha sido implementada. |

<p style="font-size: 14px;">Tabela 2 - Modelo da tabela de rastreabilidade</p>
Fonte:  <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a>, <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>, <a href="https://github.com/mel14-hub">Lara Mota</a>, <a href="https://github.com/luisa12ll">Luisa de Souza</a>, <a href="https://github.com/pedrohpsantos">Pedro Henrique</a> e <a href="https://github.com/Yanmatheus0812">Yan Matheus</a></p>


## Rastreabilidade Forward From - Requisitos Funcionais

### EF14 - Rastrebilidade Forward From do requisito RF14

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ14](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ14,-O%20aplicativo%20deve) | O aplicativo deve possibilitar que os usuários recebam, através de um canal de comunicação, novidades do Governo Federal voltadas à educação. |
| Categoria | Desenvolvimento |
| Elementos |  [Lexico 7](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L07%3A%20Notificar%20eventos,-O%20L%C3%A9xico%20presente) e [História de Usuario 9](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Geovanna%20Alves-,HU09%20%2D%20Novidades%20e%20programas%20do%20Governo%20Federal,-A%20tabela%2010)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ14,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ14,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $1 na técnica [$100](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=1-,RQ14,-O%20aplicativo%20deve)<br> Satisfação - O requisito recebeu prioridade alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=M%C3%A9dia-,RQ14,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 6 - Notificar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=HU14%20%2D%20Avalia%C3%A7%C3%B5es%20e%20Trabalhos%20da%20Disciplina)|
| Implementação | Implementado |
| Evidência|  [Imagem retirada diretamente do aplicativo.](https://ibb.co/LhnvDD6Q) |

<p style="font-size: 14px;">Tabela 10 - EF14 - Cartão do Requisito Funcional 14</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>


## Rastreabilidade Forward From - Requisitos Não Funcionais





## Referência bibliográfica
> <a name="RB1">1. </a>SAYÃO, Miriam; LEITE, Julio. Rastreabilidade de Requisitos. PUC-Rio: Departamento de Informática, ISSN 0103-9741, Rio de Janeiro, 2005. Disponível em:  [https://aprender3.unb.br/pluginfile.php/3210698/mod_resource/content/3/05_20_sayao.pdf](https://aprender3.unb.br/pluginfile.php/3210698/mod_resource/content/3/05_20_sayao.pdf). Acesso em: 25 de outubro de 2025.


> <a name="RB2">2. </a>TORANZO, M.; CASTRO, J; MELLO, E. Uma proposta para melhorar o rastreamento de requisitos. PUC-Rio: Workshop em Engenharia de Requisitos, Rio de Janeiro, 2002. Disponível em: [https://www.researchgate.net/profile/Jaelson-Castro/publication/221235129_Uma_Proposta_para_Melhorar_o_Rastreamento_de_Requisitos/links/5b73e4af299bf14c6da6db79/Uma-Proposta-para-Melhorar-o-Rastreamento-de-Requisitos.pdf](https://www.researchgate.net/profile/Jaelson-Castro/publication/221235129_Uma_Proposta_para_Melhorar_o_Rastreamento_de_Requisitos/links/5b73e4af299bf14c6da6db79/Uma-Proposta-para-Melhorar-o-Rastreamento-de-Requisitos.pdf?origin=scientificContributions). Acesso em: 25 de outubro de 2025.

## Bibliográfica

> SAYÃO, Miriam; LEITE, Julio. Rastreabilidade de Requisitos. PUC-Rio: Departamento de Informática, ISSN 0103-9741, Rio de Janeiro, 2005. Disponível em:  [https://aprender3.unb.br/pluginfile.php/3210698/mod_resource/content/3/05_20_sayao.pdf](https://aprender3.unb.br/pluginfile.php/3210698/mod_resource/content/3/05_20_sayao.pdf). Acesso em: 25 de outubro de 2025.


> TORANZO, M.; CASTRO, J; MELLO, E. Uma proposta para melhorar o rastreamento de requisitos. PUC-Rio: Workshop em Engenharia de Requisitos, Rio de Janeiro, 2002. Disponível em: [https://www.researchgate.net/profile/Jaelson-Castro/publication/221235129_Uma_Proposta_para_Melhorar_o_Rastreamento_de_Requisitos/links/5b73e4af299bf14c6da6db79/Uma-Proposta-para-Melhorar-o-Rastreamento-de-Requisitos.pdf](https://www.researchgate.net/profile/Jaelson-Castro/publication/221235129_Uma_Proposta_para_Melhorar_o_Rastreamento_de_Requisitos/links/5b73e4af299bf14c6da6db79/Uma-Proposta-para-Melhorar-o-Rastreamento-de-Requisitos.pdf?origin=scientificContributions). Acesso em: 25 de outubro de 2025.




## Histórico de Versões 

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :-: | :-: | :-: | :-: | :-: |
| 1.0 | 26/10/2025 | Adicionando introdução, participantes e metodologia |[Camila Silva](https://github) e [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Luisa de Souza](https://github.com/Luisa12ll). | [Yan Matheus](https://github.com/Yanmatheus0812) |
