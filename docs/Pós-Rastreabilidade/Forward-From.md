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

Itens | Descrição
| ------------- | ---- |
| [RQ01](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Refer%C3%AAncia-,RQ1,-O%20aplicativo%20deve) | O aplicativo deve permitir o acesso do usuário através de uma autenticação com o gov. |
| Categoria | Desenvolvimento. |
| Elementos | [Léxico 01](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Tabela%20de%20L%C3%A9xicos-,L01%3A%20Autenticar%20Estudante,-O%20L%C3%A9xico%20presente), [Léxico 11](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L11%3A%20Estudante,-O%20L%C3%A9xico%20presente), [Léxico 19](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L19%3A%20Estudante%20logado,-O%20L%C3%A9xico%20presente), [Léxico 20](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Pedro%20Henrique.-,L20%3A%20Conta%20ativa/inativa,-O%20L%C3%A9xico%20presente) e [História de Usuário 01](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=HU01%20%2D%20Poder%20escolher%20fazer%20login%20com%20Gov.br%20na%20tela%20inicial%2C%20para%20acessar%20o%20aplicativo%20de%20forma%20r%C3%A1pida%20e%20segura%20utilizando%20a%20conta%20do%20gov.)|
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Should na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Refer%C3%AAncia-,RQ1,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ4,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $15,50 na técnica [$100 dólares](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=17-,RQ1,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Prioridade-,RQ1,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 3 - Autenticar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=Alta-,%C3%89pico%203%20%2D%20Autenticar,-Feature%201%20%2D%20Autentica%C3%A7%C3%A3o)  |
| Implementação | Implementado. |
| Evidência | [link](https://www.gov.br/mec/pt-br/jornadadoestudante#:~:text=Na%20Figura%201,com%20o%20estudante) |

<p style="font-size: 14px;">Tabela 3 - EF01 - Cartão do Requisito Funcional 01</p>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a>

Itens | Descrição
| ------------- | ---- |
| [RQ03](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ3,-O%20aplicativo%20deve) | O aplicativo deve ter tecnologia blockchain para autenticação e disponibilização de documentos. |
| Categoria | Desenvolvimento. |
| Elementos | [Léxico 14](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L14%3A%20Infraestrutura%20Institucional,-O%20lexico%20presente), [Léxico 16](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L16%3A%20Documenta%C3%A7%C3%A3o%20Oficial,-O%20lexico%20presente)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Should na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ3,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ3,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $29 na técnica [$100 dólares](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=31%2C50-,RQ3,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=M%C3%A9dia-,RQ3,-O%20aplicativo%20deve)  |
| Implementação | Implementado. |
| Evidência | [link](https://www.gov.br/mec/pt-br/jornadadoestudante#:~:text=Concep%C3%A7%C3%A3o%2C%20desenvolvimento%20e%20manuten%C3%A7%C3%A3o%20da%20rede%20Blockchain%20que%20trata%20dos%20contratos%20de%20hist%C3%B3rico%2C%20portaria%20e%20livro%20de%20registro.%20Esta%20etapa%20ser%C3%A1%20utilizada%20na%20trajet%C3%B3ria%20acad%C3%AAmica%20do%20estudante%20para%20autentica%C3%A7%C3%A3o%20e%20disponibiliza%C3%A7%C3%A3o%20dos%20documentos%20digitais%20do%20aluno.) |

<p style="font-size: 14px;">Tabela 4 - EF03 - Cartão do Requisito Não Funcional 03</p>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a>

Itens | Descrição
| ------------- | ---- |
| [RQ04](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ4,-O%20aplicativo%20deve) | Unificar acesso a cursos, disciplinas e progresso. |
| Categoria | Desenvolvimento. |
| Elementos | [Léxico 11](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L11%3A%20Estudante,-O%20L%C3%A9xico%20presente), [Léxico 13](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L13%3A%20Dados%20Acad%C3%AAmicos%20e%20Avalia%C3%A7%C3%B5es,-O%20lexico%20presente), [Léxico 14](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L14%3A%20Infraestrutura%20Institucional,-O%20lexico%20presente) e [História de Usuário 02](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=HU02%20%2D%20Visualizar%20informa%C3%A7%C3%B5es%20consolidadas%20de%20diferentes%20institui%C3%A7%C3%B5es%20de%20ensino%20em%20uma%20%C3%BAnica%20interface) |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ4,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ4,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $17 na técnica [$100 dólares](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=17-,RQ4,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=M%C3%A9dia-,RQ4,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 2 - Unificar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=Feature%202%20%2D%20Informa%C3%A7%C3%B5es%20acad%C3%AAmicas) |
| Implementação | Implementado. |
| Evidência | [link](https://www.gov.br/mec/pt-br/jornadadoestudante#:~:text=Com%20o%20aplicativo%2C%20espera%2Dse%20unificar%20o%20acesso%20%C3%A0s%20informa%C3%A7%C3%B5es%20estudantis%20que%20s%C3%A3o%20captadas%20ao%20longo%20da%20vida.%20Al%C3%A9m%20disso%2C%20o%20app%20tamb%C3%A9m%20servir%C3%A1%20como%20canal%20direto%20de%20comunica%C3%A7%C3%A3o%20entre%20o%20MEC%20e%20a%20sociedade%2C%20de%20modo%20que%20os%20estudantes%20recebam%20as%20novidades%20do%20Governo%20Federal%20voltadas%20%C3%A0%20educa%C3%A7%C3%A3o.) |

<p style="font-size: 14px;">Tabela 5 - EF04 - Cartão do Requisito Funcional 04</p>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a>

Itens | Descrição
| ------------- | ---- |
| [RQ05](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ5,-O%20aplicativo%20deve) | Acompanhar status do programa Pé‑de‑Meia. |
| Categoria | Desenvolvimento. |
| Elementos | [Léxico 03](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L03%3A%20Consultar%20informa%C3%A7%C3%B5es,-O%20L%C3%A9xico%20presente), [Léxico 11](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L11%3A%20Estudante,-O%20L%C3%A9xico%20presente), [Léxico 15](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L15%3A%20Aux%C3%ADlio%20Financeiro%20Estudantil,-O%20lexico%20presente), [Léxico 22](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Pedro%20Henrique.-,L22%3A%20Status%20do%20programa%20P%C3%A9%2Dde%2DMeia%20(ativo/bloqueado),-O%20L%C3%A9xico%20presente) e [História de Usuário 03](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Lu%C3%ADsa%20de%20Souza-,HU03%20%2D%20Acompanhamento%20P%C3%A9%2Dde%2DMeia,-A%20tabela%204)|
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Should na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ5,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ5,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $33,50 na técnica [$100 dólares](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=39-,RQ5,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ5,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 1 - Acompanhar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=HU03%20%2D%20Acompanhar%20p%C3%A9%20de%20meia) |
| Implementação | Implementado. |
| Evidência | [link](https://www.gov.br/mec/pt-br/jornadadoestudante#:~:text=O%20P%C3%A9%2Dde,f%C3%A1cil%20e%20r%C3%A1pida.) |

<p style="font-size: 14px;">Tabela 6 - EF05 - Cartão do Requisito Funcional 05</p>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a>

Itens | Descrição
| ------------- | ---- |
| [RQ08](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ8,-O%20aplicativo%20deve) | Visualização de faltas do estudante. |
| Categoria | Desenvolvimento. |
| Elementos | [Léxico 08](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L03%3A%20Consultar%20informa%C3%A7%C3%B5es,-O%20L%C3%A9xico%20presente) e [História de Usuário 04](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Lu%C3%ADsa%20de%20Souza-,HU04%20%2D%20Visualiza%C3%A7%C3%A3o%20de%20faltas,-A%20tabela%205) |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Should na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ8,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ8,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $1,50 na técnica [$100 dólares](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=2-,RQ8,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=M%C3%A9dia-,RQ8,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 1 - Acompanhar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=HU04%20%2D%20Classificar%20eventos%20por%20modalidade) |
| Implementação | Implementado. |
| Evidência | Requisito marcado como implementado. |

<p style="font-size: 14px;">Tabela 7 - EF08 - Cartão do Requisito Funcional 08</p>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a>

Itens | Descrição
| ------------- | ---- |
| [RQ09](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ9,-O%20aplicativo%20deve) | Atualizações sobre pagamento do Pé‑de‑Meia em até um mês. |
| Categoria | Desenvolvimento (RF). |
| Elementos | [Cenário 1](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Cen%C3%A1rios/#cenario-1-atualizacoes-de-pagamento-do-pe-de-meia:~:text=Cen%C3%A1rio%201%3A-,Atualiza%C3%A7%C3%B5es%20de%20pagamento%20do%20P%C3%A9%2Dde%2DMeia,-Item), [Léxico 03](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L03%3A%20Consultar%20informa%C3%A7%C3%B5es,-O%20L%C3%A9xico%20presente), [Léxico 15](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L15%3A%20Aux%C3%ADlio%20Financeiro%20Estudantil,-O%20lexico%20presente) e [História de Usuário 05](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Lara%20Souza-,HU05%20%2D%20Atualiza%C3%A7%C3%B5es%20de%20pagamento%20P%C3%A9%2Dde%2DMeia,-A%20tabela%206)|
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Should na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ9,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ9,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $1 na técnica [$100 dólares](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=1%2C50-,RQ9,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ9,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 6 - Notificar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=HU05%20%2D%20Atualiza%C3%A7%C3%B5es%20de%20pagamento%20P%C3%A9%2Dde%2DMeia) |
| Implementação | Não implementado. |
| Evidência | Nenhuma |

<p style="font-size: 14px;">Tabela 8 - EF09 - Cartão do Requisito Funcional 09</p>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a>

Itens | Descrição
| ------------- | ---- |
| [RQ11](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ11,-O%20aplicativo%20deve) | Acompanhar registros desde o ingresso até níveis superiores. |
| Categoria | Desenvolvimento. |
| Elementos | [Léxico 03](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L03%3A%20Consultar%20informa%C3%A7%C3%B5es,-O%20L%C3%A9xico%20presente), [Léxico 13](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L13%3A%20Dados%20Acad%C3%AAmicos%20e%20Avalia%C3%A7%C3%B5es,-O%20lexico%20presente) e [História de Usuário 06](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Lara%20Souza-,HU06%20%2D%20Acompanhamento%20da%20vida%20estudantil,-A%20tabela%207)|
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Should na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ11,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ11,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $10 na técnica [$100 dólares](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=10-,RQ11,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ11,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 1 - Acompanhar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=HU06%20%2D%20Acompanhamento%20da%20vida%20estudantil) |
| Implementação | Implementado. |
| Evidência | Requisito marcado como implementado. |

<p style="font-size: 14px;">Tabela 9 - EF11 - Cartão do Requisito Funcional 11</p>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a>

Itens | Descrição
| ------------- | ---- |
| [RQ12](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ12,-O%20aplicativo%20deve) | Canal direto de comunicação entre MEC e estudantes. |
| Categoria | Desenvolvimento. |
| Elementos | [Léxico 17](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L17%3A%20Comunica%C3%A7%C3%A3o%20e%20Intera%C3%A7%C3%A3o,-O%20lexico%20presente) e [História de Usuário 07](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Geovanna%20Alves-,HU07%20%2D%20Comunica%C3%A7%C3%A3o%20do%20MEC%20com%20estudante,-A%20tabela%208) |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Should na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ12,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ12,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $7 na técnica [$100 dólares](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=8-,RQ12,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ12,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 7 - Comunicar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=HU07%20%2D%20Visualizar%20as%20mensagens%20enviadas%20pelo%20MEC) |
| Implementação | Implementado. |
| Evidência | [link](https://i.postimg.cc/fWXTFKPZ/doc15.png) |

<p style="font-size: 14px;">Tabela 10 - EF12 - Cartão do Requisito Funcional 12</p>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a>

Itens | Descrição
| ------------- | ---- |
| [RQ13](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ13,-O%20aplicativo%20deve) | Informar um curso estudado ou em andamento. |
| Categoria | Desenvolvimento. |
| Elementos | [Léxico 02](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L02%3A%20Cadastrar%20informa%C3%A7%C3%B5es,-O%20L%C3%A9xico%20presente) e [História de Usuário 08](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Pedro%20Henrique-,HU08%20%2D%20Registro%20de%20curso,-A%20tabela%209)|
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ13,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ13,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $0 na técnica [$100 dólares](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=1-,RQ13,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=M%C3%A9dia-,RQ13,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 4 - Editar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=HU08%20%2D%20Editar%20dados%20pessoais%20do%20usu%C3%A1rio) |
| Implementação | Implementado. |
| Evidência | [link](https://i.postimg.cc/2jv8JwtY/doc16.png) |

<p style="font-size: 14px;">Tabela 11 - EF13 - Cartão do Requisito Funcional 13</p>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a>

### EF14 - Rastrebilidade Forward From do requisito RF14

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ14](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ14,-O%20aplicativo%20deve) | O aplicativo deve possibilitar que os usuários recebam, através de um canal de comunicação, novidades do Governo Federal voltadas à educação. |
| Categoria | Desenvolvimento |
| Elementos |  [Lexico 7](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L07%3A%20Notificar%20eventos,-O%20L%C3%A9xico%20presente),  [Lexico 17](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L17%3A%20Comunica%C3%A7%C3%A3o%20e%20Intera%C3%A7%C3%A3o,-O%20lexico%20presente) e [História de Usuario 9](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Geovanna%20Alves-,HU09%20%2D%20Novidades%20e%20programas%20do%20Governo%20Federal,-A%20tabela%2010)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ14,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ14,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $1 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=1-,RQ14,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=M%C3%A9dia-,RQ14,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 6 - Notificar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=HU14%20%2D%20Avalia%C3%A7%C3%B5es%20e%20Trabalhos%20da%20Disciplina)|
| Implementação | Implementado |
| Evidência|  [Imagem retirada diretamente do aplicativo.](https://ibb.co/LhnvDD6Q) |

<p style="font-size: 14px;">Tabela 10 - EF14 - Cartão do Requisito Funcional 14</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

### EF15 - Rastrebilidade Forward From do requisito RF15

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ15](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ15,-O%20aplicativo%20deve) | O aplicativo deve possibilitar acessar rapidamente serviços estudantis. |
| Categoria | Desenvolvimento |
| Elementos |  [Lexico 8](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L08%3A%20Acessar%20p%C3%A1ginas,-O%20L%C3%A9xico%20presente) e [História de Usuario 10](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#hu10-programas-estudantis-do-governo-federal:~:text=Fonte%3A%20Yan%20Matheus-,HU10%20%2D%20Programas%20estudantis%20do%20Governo%20Federal,-A%20tabela%2011)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](http://127.0.0.1:8000/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ15,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ15,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $0 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=0-,RQ15,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ15,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 6 - Notificar](http://127.0.0.1:8000/Modelagem/%C3%81gil/Backlog/#:~:text=HU10%20%2D%20Acessar%20os%20servi%C3%A7os%20estudantis%20(como%20FIES%2C%20ENEM%2C%20ProUni%2C%20etc.)%20pelo%20aplicativo.)|
| Implementação | Implementado |
| Evidência|  [Imagem retirada diretamente do aplicativo.](https://ibb.co/v4s215LH) |

<p style="font-size: 14px;">Tabela 11 - EF15 - Cartão do Requisito Funcional 15</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

### EF16 - Rastrebilidade Forward From do requisito RF16

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ16](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ15,-O%20aplicativo%20deve) | O aplicativo deve possibilitar integração da escola ou universidade por dentro da plataforma. |
| Categoria | Desenvolvimento |
| Elementos |  [Lexico 14](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L14%3A%20Infraestrutura%20Institucional,-O%20lexico%20presente) e [História de Usuario 11](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Geovanna%20Alves-,HU11%20%2D%20Integra%C3%A7%C3%A3o%20com%20a%20Institui%C3%A7%C3%A3o%20de%20Ensino,-A%20tabela%2012)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ16,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ16,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $0 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=0-,RQ16,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=M%C3%A9dia-,RQ16,-O%20aplicativo%20n%C3%A3o) <br>Agregação - O requisito é classificado no [Épico 2 - Unificar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=HU11%20%2D%20Visualizar%20informa%C3%A7%C3%B5es%20acad%C3%AAmicas%20e%20pessoais%20diretamente%20pelo%20aplicativo.)|
| Implementação | Implementado |
| Evidência|  [Imagem retirada diretamente do aplicativo.](https://ibb.co/ksYn4ft1) |

<p style="font-size: 14px;">Tabela 12 - EF16 - Cartão do Requisito Funcional 16</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

### EF17 - Rastrebilidade Forward From do requisito RF17

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ17](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ17,-O%20aplicativo%20deve) | O aplicativo deve permitir a visualização da disciplina e o professor que ministra. |
| Categoria | Desenvolvimento |
| Elementos | [Cenário 2](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Cen%C3%A1rios/#:~:text=ID-,RQ17,-Objetivo), [Lexico 3](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L03%3A%20Consultar%20informa%C3%A7%C3%B5es,-O%20L%C3%A9xico%20presente), [Léxico 12](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L12%3A%20Professor,-O%20lexico%20presente), [Léxico 13](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L13%3A%20Dados%20Acad%C3%AAmicos%20e%20Avalia%C3%A7%C3%B5es,-O%20lexico%20presente), [Caso de uso 2](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Casos-de-uso/#:~:text=e%20Geovanna%20Alves-,UC02,-Informa%C3%A7%C3%B5es) e [História de Usuario 12](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Camila%20Silva-,HU12%20%2D%20Visualizar%20disciplina%20e%20professor,-A%20tabela%2013)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ17,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ17,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $8 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=8%2C50-,RQ17,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=M%C3%A9dia-,RQ17,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 1 - Acompanhar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=HU12%20%2DVisualizar%20disciplina%20e%20professor)|
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 13 - EF17 - Cartão do Requisito Funcional 17</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

### EF18 - Rastrebilidade Forward From do requisito RF18

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ18](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=1%2C%20Brainstorming-,RQ18,-O%20aplicativo%20deve) | O aplicativo deve permitir a visualização do horário e sala da disciplina. |
| Categoria | Desenvolvimento |
| Elementos | [Cenário 3](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Cen%C3%A1rios/#:~:text=ID-,RQ18,-Objetivo), [Lexico 3](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L03%3A%20Consultar%20informa%C3%A7%C3%B5es,-O%20L%C3%A9xico%20presente), [Léxico 13](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L13%3A%20Dados%20Acad%C3%AAmicos%20e%20Avalia%C3%A7%C3%B5es,-O%20lexico%20presente), [Caso de uso 2](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Casos-de-uso/#:~:text=e%20Geovanna%20Alves-,UC02,-Informa%C3%A7%C3%B5es) e [História de Usuario 13](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Geovanna%20Alves-,HU13%20%2D%20Hor%C3%A1rio%20e%20sala%20de%20aula,-A%20tabela%2014)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=1%2C%20Brainstorming-,RQ18,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=1%2C%20Brainstorming-,RQ18,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $2 na técnica [$100 dólares](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=2%2C50-,RQ18,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ18,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 1 - Acompanhar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=HU13%20%2D%20Visualizar%20hor%C3%A1rio%20e%20sala%20de%20aula)|
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 14 - EF18 - Cartão do Requisito Funcional 18</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

### EF19 - Rastrebilidade Forward From do requisito RF19

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ19](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=1%2C%20Brainstorming-,RQ19,-O%20aplicativo%20deve) | O aplicativo deve permitir a visualização das informações e trabalhos da disciplina (data, peso e tipo de avaliação). |
| Categoria | Desenvolvimento |
| Elementos | [Cenário 4](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Cen%C3%A1rios/#:~:text=ID-,RQ19,-Objetivo), [Lexico 3](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L03%3A%20Consultar%20informa%C3%A7%C3%B5es,-O%20L%C3%A9xico%20presente), [Léxico 13](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L13%3A%20Dados%20Acad%C3%AAmicos%20e%20Avalia%C3%A7%C3%B5es,-O%20lexico%20presente), [Caso de uso 2](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Casos-de-uso/#:~:text=e%20Geovanna%20Alves-,UC02,-Informa%C3%A7%C3%B5es) e [História de Usuario 14](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Geovanna%20Alves-,HU14%20%2D%20Avalia%C3%A7%C3%B5es%20e%20Trabalhos%20da%20Disciplina,-A%20tabela%2015)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=1%2C%20Brainstorming-,RQ19,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=1%2C%20Brainstorming-,RQ19,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $0 na técnica [$100 dólares](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=0-,RQ19,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ19,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 6 - Notificar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=HU14%20%2D%20Avalia%C3%A7%C3%B5es%20e%20Trabalhos%20da%20Disciplina)|
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 15 - EF19 - Cartão do Requisito Funcional 19</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

### EF20 - Rastrebilidade Forward From do requisito RF20

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ20](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ20,-O%20aplicativo%20deve) | O aplicativo deve permitir a visualização das notas das avaliações e trabalhos da disciplina. |
| Categoria | Desenvolvimento |
| Elementos | [Cenário 5](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Cen%C3%A1rios/#:~:text=ID-,RQ20,-Objetivo), [Lexico 3](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L03%3A%20Consultar%20informa%C3%A7%C3%B5es,-O%20L%C3%A9xico%20presente), [Léxico 13](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L13%3A%20Dados%20Acad%C3%AAmicos%20e%20Avalia%C3%A7%C3%B5es,-O%20lexico%20presente), [Caso de uso 2](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Casos-de-uso/#:~:text=e%20Geovanna%20Alves-,UC02,-Informa%C3%A7%C3%B5es) e [História de Usuario 15](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Geovanna%20Alves-,HU15%3A%20Visualiza%C3%A7%C3%A3o%20de%20Notas,-A%20tabela%2016)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ20,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ20,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $0 na técnica [$100 dólares](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=0-,RQ20,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](http://127.0.0.1:8000/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ20,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 6 - Notificar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=HU15%20%2D%20Visualiza%C3%A7%C3%A3o%20de%20notas)|
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 16 - EF20 - Cartão do Requisito Funcional 20</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

### EF21 - Rastrebilidade Forward From do requisito RF21

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ21](http://127.0.0.1:8000/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ21,-O%20aplicativo%20deve) | O aplicativo deve notificar avaliações com uma semana antes e dois dias de antecedência. |
| Categoria | Desenvolvimento |
| Elementos |  [Lexico 7](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L07%3A%20Notificar%20eventos,-O%20L%C3%A9xico%20presente), [Léxico 18](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L18%3A%20Calend%C3%A1rio%20e%20Eventos,-O%20lexico%20presente) e [História de Usuario 16](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Pedro%20Henrique-,HU16%3A%20Notifica%C3%A7%C3%A3o%20de%20Avalia%C3%A7%C3%B5es,-A%20tabela%2017)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ21,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ21,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $08na técnica [$100 dólares](<http://127.0.0.1:8000/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=8-,RQ21,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média na técnica [Three-Level Scale](http://127.0.0.1:8000/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ21,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 6 - Notificar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=HU16%20%2D%20Notifica%C3%A7%C3%A3o%20de%20Avalia%C3%A7%C3%B5es)|
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 17 - EF21 - Cartão do Requisito Funcional 21</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

### EF22 - Rastrebilidade Forward From do requisito RF22

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ22](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ22,-O%20aplicativo%20deve) | O aplicativo deve notificar faltas após serem lançadas no aplicativo. |
| Categoria | Desenvolvimento |
| Elementos |  [Lexico 7](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L07%3A%20Notificar%20eventos,-O%20L%C3%A9xico%20presente) e [História de Usuario 17](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Pedro%20Henrique-,HU17%3A%20Notifica%C3%A7%C3%A3o%20de%20Faltas,-A%20tabela%2018)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Should na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ22,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ22,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $17,50 na técnica [$100 dólares](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=18-,RQ22,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média na técnica [Three-Level Scale](http://127.0.0.1:8000/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=M%C3%A9dia-,RQ22,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 6 - Notificar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=HU17%20%2D%20Notifica%C3%A7%C3%A3o%20de%20Faltas)|
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 18 - EF22 - Cartão do Requisito Funcional 22</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

### EF23 - Rastrebilidade Forward From do requisito RF23

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ23](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ23,-O%20aplicativo%20deve) | O aplicativo deve notificar informações sobre o benefício Pé-de-Meia. |
| Categoria | Alocado |
| Elementos |  [Lexico 15](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l15-auxilio-financeiro-estudantil) e [História de Usuario 10](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#hu18-notificacao-do-beneficio-pe-de-meia)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#wouldwantwont-have) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=O%20aplicativo%20deve%20notificar%20informa%C3%A7%C3%B5es%20sobre%20o%20benef%C3%ADcio%20P%C3%A9%2Dde%2DMeia%20(parcelas%20e%20valores).)<br>Satisfação - O requisito recebeu $0 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#aplicacao-da-tecnica:~:text=2-,RQ23,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ23,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 1 - Acompanhar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#hu23-visualizar-parcelas-do-auxilio)|
| Implementação | Implementado |
| Evidência|[imagem do aplicativo](https://ibb.co/tMHF4nNY)|

<p style="font-size: 14px;">Tabela 19- EF23 - Cartão do Requisito Funcional 23</p>
Fonte: <a  href="https://github.com/mel14-hub"> Lara Mota </a>

### EF27 - Rastrebilidade Forward From do requisito RF27

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ27](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ23,-O%20aplicativo%20deve) | O aplicativo deve possibilitar o usuário emitir a declaração de vínculo da instituição de ensino. |
| Categoria | Desenvolvimento  |
| Elementos |  [Lexico 16](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l16-documentacao-oficial) e [História de Usuario 10](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#hu19-emissao-de-declaracao-de-vinculo)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#wouldwantwont-have:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ27,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ27,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $0 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#aplicacao-da-tecnica:~:text=0-,RQ27,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ27,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 7 - Comunicar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#epico-7-comunicar)|
| Implementação | Implementado |
| Evidência|[imagem do aplicativo](https://ibb.co/kgBG0m1Q)|

<p style="font-size: 14px;">Tabela 23 - EF27 - Cartão do Requisito Funcional 27</p>
Fonte: <a  href="https://github.com/mel14-hub"> Lara Mota </a>

### EF28 - Rastrebilidade Forward From do requisito RF28

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ28](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ28,-O%20aplicativo%20deve) | O aplicativo deve possibilitar o usuário emitir seu histórico da instituição de ensino. |
| Categoria | Desenvolvimento  |
| Elementos |  [Lexico 16](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l16-documentacao-oficial) e [História de Usuario 10](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#hu20-emissao-de-historico-escolar)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#wouldwantwont-have:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ28,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ28,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $0 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#aplicacao-da-tecnica:~:text=0-,RQ28,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ28,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 1 - Comunicar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#epico-1-acompanhar)|
| Implementação | Implementado |
| Evidência|Não implementado|

<p style="font-size: 14px;">Tabela 24 - EF28 - Cartão do Requisito Funcional 28</p>
Fonte: <a  href="https://github.com/mel14-hub"> Lara Mota </a>

### EF29 - Rastrebilidade Forward From do requisito RF29

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ29](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ29,-O%20aplicativo%20deve) | O aplicativo deve possibilitar o usuário visualizar o boletim da instituição de ensino. |
| Categoria | Desenvolvimento  |
| Elementos |  [Lexico 04](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l04-emitir-documentos) e [História de Usuario 10](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#hu21-visualizacao-de-boletim)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#wouldwantwont-have:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ29,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ29,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $2 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#aplicacao-da-tecnica:~:text=2-,RQ29,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ29,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 8 - Emitir](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#epico-8-emitir)|
| Implementação | Não Implementado |
| Evidência|Nenhuma|

<p style="font-size: 14px;">Tabela 25 - EF29 - Cartão do Requisito Funcional 29</p>
Fonte: <a  href="https://github.com/mel14-hub"> Lara Mota </a>

### EF30 - Rastrebilidade Forward From do requisito RF30

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ30](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ30,-O%20aplicativo%20deve) | O aplicativo deve possibilitar o usuário visualizar programas estudantis (FIES, Prouni, etc.). |
| Categoria | Desenvolvimento  |
| Elementos |  [Lexico 03](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l03-consultar-informacoes) e [História de Usuario 10](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#hu22-visualizacao-de-programas-estudantis)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Should na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#wouldwantwont-have:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ30,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ30,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $0 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#aplicacao-da-tecnica:~:text=0-,RQ30,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=M%C3%A9dia-,RQ30,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 2 - Unificar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#epico-2-unificar)|
| Implementação | Implementado |
| Evidência|[imagem do aplicativo](https://ibb.co/8DSHbqFw)|

<p style="font-size: 14px;">Tabela 26 - EF30 - Cartão do Requisito Funcional 30</p>
Fonte: <a  href="https://github.com/mel14-hub"> Lara Mota </a>

### EF31 - Rastrebilidade Forward From do requisito RF31

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ31](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ31,-O%20aplicativo%20deve) | O aplicativo deve possibilitar o usuário visualizar parcelas pagas e que faltam do auxílio.. |
| Categoria | Desenvolvimento  |
| Elementos |  [Lexico 03](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l03-consultar-informacoes) e [História de Usuario 10](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#hu23-visualizar-parcelas-do-auxilio)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#wouldwantwont-have:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ31,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ31,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $0 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#aplicacao-da-tecnica:~:text=0-,RQ31,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ31,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 2 - Unificar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#epico-2-unificar)|
| Implementação | Implementado |
| Evidência|[imagem do aplicativo](https://ibb.co/5hwWHV7g)|

<p style="font-size: 14px;">Tabela 27- EF31 - Cartão do Requisito Funcional 31</p>
Fonte: <a  href="https://github.com/mel14-hub"> Lara Mota </a>

### EF32 - Rastrebilidade Forward From do requisito RF32

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ32](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=2%2C%20Question%C3%A1rio-,RQ32,-O%20aplicativo%20deve) | O aplicativo deve possibilitar o usuário visualizar o valor total do auxílio.|
| Categoria | Desenvolvimento  |
| Elementos |  [Lexico 03](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l03-consultar-informacoes) e [História de Usuario 10](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#hu24-visualizar-valor-total-do-auxilio)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#wouldwantwont-have:~:text=2%2C%20Question%C3%A1rio-,RQ32,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=2%2C%20Question%C3%A1rio-,RQ32,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $0 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#aplicacao-da-tecnica:~:text=0-,RQ32,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ32,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 4 - Editar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#epico-4-editar)|
| Implementação | Não Implementado |
| Evidência|Nenhuma|

<p style="font-size: 14px;">Tabela 28 - EF32 - Cartão do Requisito Funcional 32</p>
Fonte: <a  href="https://github.com/mel14-hub"> Lara Mota </a>

### EF33 - Rastrebilidade Forward From do requisito RF33

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ33](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=2%2C%20Question%C3%A1rio-,RQ33,-O%20aplicativo%20deve) | O aplicativo deve possibilitar o usuário visualizar a conta bancária cadastrada do auxílio.|
| Categoria | Desenvolvimento  |
| Elementos |  [Lexico 03](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l03-consultar-informacoes) e [História de Usuario 10](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#hu25-visualizar-conta-bancaria-cadastrada)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#wouldwantwont-have:~:text=2%2C%20Question%C3%A1rio-,RQ33,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=2%2C%20Question%C3%A1rio-,RQ33,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $5,50 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#aplicacao-da-tecnica:~:text=5%2C50-,RQ33,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ34,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 4 - Editar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#epico-4-editar)|
| Implementação |Não Implementado |
| Evidência|Nenhuma|

<p style="font-size: 14px;">Tabela 29 - EF33 - Cartão do Requisito Funcional 33</p>
Fonte: <a  href="https://github.com/mel14-hub"> Lara Mota </a>

### EF34 - Rastrebilidade Forward From do requisito RF34

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ34](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=2%2C%20Question%C3%A1rio-,RQ34,-O%20aplicativo%20deve) | O aplicativo deve possibilitar o usuário visualizar o dia do pagamento do auxílio..|
| Categoria | Desenvolvimento  |
| Elementos |  [Lexico 03](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l03-consultar-informacoes) e [História de Usuario 10](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#hu26-visualizar-dia-do-pagamento-do-auxilio)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#wouldwantwont-have:~:text=2%2C%20Question%C3%A1rio-,RQ34,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=2%2C%20Question%C3%A1rio-,RQ34,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $2,50 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#aplicacao-da-tecnica:~:text=4-,RQ34,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ34,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 2 - Unificar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#epico-2-unificar)|
| Implementação | Não Implementado |
| Evidência|Nenhuma|

<p style="font-size: 14px;">Tabela 30 - EF34 - Cartão do Requisito Funcional 34</p>
Fonte: <a  href="https://github.com/mel14-hub"> Lara Mota </a>

### EF35 - Rastrebilidade Forward From do requisito RF35

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ35](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=2%2C%20Question%C3%A1rio-,RQ35,-O%20aplicativo%20deve) | O aplicativo deve possibilitar o usuário acessar um fórum de dúvidas sobre o auxílio.|
| Categoria | Desenvolvimento  |
| Elementos | [Cenário 12](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Cen%C3%A1rios/#:~:text=ID-,RQ35,-Objetivo), [Léxico 09](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=requisitos%20elicitados%3A-,RQ35,-%2C%20RQ36%2C%20RQ55%2C%20RQ56), [Léxico 17](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=%3ARQ12%2CRQ14%2C-,RQ35,-%2CRQ36%2CRQ55%2CRQ56), [Caso de Uso 7](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Casos-de-uso/#:~:text=Luisa%20de%20Souza-,UC07,-Informa%C3%A7%C3%B5es) e [História de Usuario 27](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=de%20usu%C3%A1rio%2027.-,HU27,-Informa%C3%A7%C3%B5es)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Should na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=2%2C%20Question%C3%A1rio-,RQ35,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade OUT na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=2%2C%20Question%C3%A1rio-,RQ35,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $7 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=7-,RQ35,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=M%C3%A9dia-,RQ35,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 7 - Comunicar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=M%C3%A9dia-,%C3%89pico%207%20%2D%20Comunicar,-Feature%201%20%2D%20F%C3%B3rum)|
| Implementação | Não Implementado |
| Evidência|Nenhuma|

<p style="font-size: 14px;">Tabela 31 - EF35 - Cartão do Requisito Funcional 35</p>
Fonte: <a  href="https://github.com/luisa12ll"> Luisa de Souza </a>

### EF36 - Rastrebilidade Forward From do requisito RF36

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ36](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=2%2C%20Question%C3%A1rio-,RQ36,-O%20aplicativo%20deve) | O aplicativo deve possibilitar o usuário ser atendido em um canal de conversa sobre o auxílio.|
| Categoria | Desenvolvimento  |
| Elementos | [Cenário 13](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Cen%C3%A1rios/#:~:text=ID-,RQ36,-Objetivo), [Léxico 09](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L09%3A%20Comunicar%20em%20canais,-O%20L%C3%A9xico%20presente), [Léxico 17](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L17%3A%20Comunica%C3%A7%C3%A3o%20e%20Intera%C3%A7%C3%A3o,-O%20lexico%20presente), [Caso de Uso 7](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Casos-de-uso/#:~:text=Luisa%20de%20Souza-,UC07,-Informa%C3%A7%C3%B5es) e [História de Usuario 28](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Camila%20Silva-,HU28%20%E2%80%93%20Atendimento%20via%20Canal%20de%20Conversa,-A%20tabela%2029)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=2%2C%20Question%C3%A1rio-,RQ36,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=2%2C%20Question%C3%A1rio-,RQ36,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $4,25 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=4%2C50-,RQ36,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ36,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 2 - Unificar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=Alta-,%C3%89pico%202%20%2D%20Unificar,-Feature%201%20%2D%20Eventos)|
| Implementação | Não Implementado |
| Evidência|Nenhuma|

<p style="font-size: 14px;">Tabela 32 - EF36 - Cartão do Requisito Funcional 36</p>
Fonte: <a  href="https://github.com/luisa12ll"> Luisa de Souza </a>

### EF37 - Rastrebilidade Forward From do requisito RF37

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ37](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=2%2C%20Question%C3%A1rio-,RQ37,-O%20aplicativo%20deve) | O aplicativo deve possibilitar o usuário visualizar datas de eventos em um calendário.|
| Categoria | Desenvolvimento  |
| Elementos | [Cenário 14](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Cen%C3%A1rios/#:~:text=e%20Yan%20Matheus-,Cen%C3%A1rio%2014%3A%20Visualiza%C3%A7%C3%A3o%20de%20calend%C3%A1rio%20de%20eventos,-Item), [Léxico 03](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L03%3A%20Consultar%20informa%C3%A7%C3%B5es,-O%20L%C3%A9xico%20presente), [Léxico 18](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=de%20Souza.-,L18%3A%20Calend%C3%A1rio%20e%20Eventos,-O%20lexico%20presente) e [História de Usuario 29](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Camila%20Silva-,HU29%20%E2%80%93%20Visualizar%20Eventos%20em%20Calend%C3%A1rio,-A%20tabela%2030)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Should na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=2%2C%20Question%C3%A1rio-,RQ37,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=2%2C%20Question%C3%A1rio-,RQ37,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $1,50 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=1%2C50-,RQ37,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ37,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 2 - Unificar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=Alta-,%C3%89pico%202%20%2D%20Unificar,-Feature%201%20%2D%20Eventos)|
| Implementação | Não Implementado |
| Evidência|Nenhuma|

<p style="font-size: 14px;">Tabela 33 - EF37 - Cartão do Requisito Funcional 37</p>
Fonte: <a  href="https://github.com/luisa12ll"> Luisa de Souza </a>

### EF38 - Rastrebilidade Forward From do requisito RF38

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ38](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=%2C%20Question%C3%A1rio%20Brainstorming-,RQ38,-O%20aplicativo%20deve) | O aplicativo deve ter informações unificadas sobre sua jornada escolar.|
| Categoria | Desenvolvimento  |
| Elementos | [História de Usuario 30](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Camila%20Silva-,HU30%20%E2%80%93%20Informa%C3%A7%C3%B5es%20Unificadas%20sobre%20Jornada%20Escolar,-A%20tabela%2031)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Could na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=%2C%20Question%C3%A1rio%20Brainstorming-,RQ38,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade OUT na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=%2C%20Question%C3%A1rio%20Brainstorming-,RQ38,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $26 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=29-,RQ38,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ38,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 1 - Acompanhar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=Prioriza%C3%A7%C3%A3o-,%C3%89pico%201%20%2D%20Acompanhar,-Feature%201%20%2D%20Oportunidades)|
| Implementação | Implementado |
| Evidência|[Link do site](https://www.gov.br/mec/pt-br/jornadadoestudante#:~:text=Com%20o%20aplicativo%2C%20espera%2Dse%20unificar%20o%20acesso%20%C3%A0s%20informa%C3%A7%C3%B5es%20estudantis%20que%20s%C3%A3o%20captadas%20ao%20longo%20da%20vida.%20Al%C3%A9m%20disso%2C%20o%20app%20tamb%C3%A9m%20servir%C3%A1%20como%20canal%20direto%20de%20comunica%C3%A7%C3%A3o%20entre%20o%20MEC%20e%20a%20sociedade%2C%20de%20modo%20que%20os%20estudantes%20recebam%20as%20novidades%20do%20Governo%20Federal%20voltadas%20%C3%A0%20educa%C3%A7%C3%A3o)|

<p style="font-size: 14px;">Tabela 34 - EF38 - Cartão do Requisito Funcional 38</p>

Fonte: <a  href="https://github.com/luisa12ll"> Luisa de Souza </a>

### EF39 - Rastrebilidade Forward From do requisito RF39

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ39](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ39,-O%20aplicativo%20deve) | O aplicativo deve manter as informações do usuário seguras e privadas.|
| Categoria | Desenvolvimento  |
| Elementos | [Léxico 20](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Pedro%20Henrique.-,L20%3A%20Conta%20ativa/inativa,-O%20L%C3%A9xico%20presente) e [Léxico 24](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Pedro%20Henrique.-,L24%3A%20Informa%C3%A7%C3%B5es%20seguras/privadas,-O%20L%C3%A9xico%20presente)|
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ39,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ39,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $25,50 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=26-,RQ39,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ39,-O%20aplicativo%20deve).|
| Implementação | Implementado |
| Evidência|[Link do site](https://www.gov.br/mec/pt-br/jornadadoestudante#:~:text=A%20Jornada%20do%20Estudante%20%C3%A9,Prote%C3%A7%C3%A3o%20de%20Dados%20Pessoais%20%2D%20LGPD.)|

<p style="font-size: 14px;">Tabela 35 - EF39 - Cartão do Requisito Funcional 39</p>

Fonte: <a  href="https://github.com/luisa12ll"> Luisa de Souza </a>

### EF41 - Rastrebilidade Forward From do requisito RF41

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ41](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ41,-O%20aplicativo%20deve) | O aplicativo deve oferecer um ranqueamento de matérias por nota, para orientar o foco do estudante.|
| Categoria | Desenvolvimento  |
| Elementos | [Cenário 15](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Cen%C3%A1rios/#:~:text=e%20Yan%20Matheus-,Cen%C3%A1rio%2015%3A%20Ranqueamento%20de%20mat%C3%A9rias%20por%20nota,-Item), [Léxico 10](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L10%3A%20Oferecer%20servi%C3%A7os,-O%20L%C3%A9xico%20presente) e [História de Usuario 31](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Camila%20Silva-,HU31%20%E2%80%93%20Ranqueamento%20de%20Mat%C3%A9rias%20por%20Nota,-A%20tabela%2032)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Could na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ41,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade OUT na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ41,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $7 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ41,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ41,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 2 - Unificar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=Alta-,%C3%89pico%202%20%2D%20Unificar,-Feature%201%20%2D%20Eventos)|
| Implementação | Não Implementado |
| Evidência|Nenhuma|

<p style="font-size: 14px;">Tabela 36 - E41 - Cartão do Requisito Funcional 41</p>

Fonte: <a  href="https://github.com/luisa12ll"> Luisa de Souza </a>

### EF42 - Rastrebilidade Forward From do requisito RF42

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ42](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Entrevista%202-,RQ42,-O%20aplicativo%20deve) | O aplicativo deve ter uma página de perfil com as informações do usuário (nome, instituição e ano/semestre).|
| Categoria | Desenvolvimento  |
| Elementos | [Léxico 08](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L08%3A%20Acessar%20p%C3%A1ginas,-O%20L%C3%A9xico%20presente), [Léxico 11](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L11%3A%20Estudante,-O%20L%C3%A9xico%20presente) e [História de Usuario 32](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Geovanna%20Alves-,HU32%20%2D%20P%C3%A1gina%20de%20perfil%20do%20estudante,-A%20tabela%2033)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Should na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Entrevista%202-,RQ42,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Entrevista%202-,RQ42,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $10 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=11%2C50-,RQ42,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ42,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 4 - Editar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=Alta-,%C3%89pico%204%20%2D%20Editar,-Feature%201%20%2D%20Edi%C3%A7%C3%A3o)|
| Implementação | Implementado |
| Evidência|[imagem do aplicativo](https://ibb.co/7xS50MtL)|

<p style="font-size: 14px;">Tabela 37 - E42 - Cartão do Requisito Funcional 42</p>

Fonte: <a  href="https://github.com/luisa12ll"> Luisa de Souza </a>

### EF43 - Rastrebilidade Forward From do requisito RF43

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ43](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Entrevista%202-,RQ43,-O%20aplicativo%20deve) | O aplicativo deve possibilitar o usuário editar suas informações na página de perfil.|
| Categoria | Desenvolvimento  |
| Elementos |[Léxico 05](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Pedro%20Henrique.-,L05%3A%20Editar%20informa%C3%A7%C3%B5es,-O%20L%C3%A9xico%20presente), [Léxico 11](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=Yan%20Matheus.-,L11%3A%20Estudante,-O%20L%C3%A9xico%20presente) e [História de Usuario 33](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Yan%20Matheus-,HU33%20%2D%20Editar%20informa%C3%A7%C3%B5es%20do%20perfil%20do%20estudante,-A%20tabela%2034)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Should na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Entrevista%202-,RQ43,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Entrevista%202-,RQ43,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $2 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=2-,RQ43,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ43,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 4 - Editar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=Alta-,%C3%89pico%204%20%2D%20Editar,-Feature%201%20%2D%20Edi%C3%A7%C3%A3o)|
| Implementação | Implementado |
| Evidência|[imagem do aplicativo](https://ibb.co/XrYCfSgd)|

<p style="font-size: 14px;">Tabela 38 - E43 - Cartão do Requisito Funcional 43</p>

Fonte: <a  href="https://github.com/luisa12ll"> Luisa de Souza </a>

### EF53 - Rastrebilidade Forward From do requisito RF53

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ53](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio-,RQ53,-O%20aplicativo%20deve) | O aplicativo deve oferecer um tutorial em vídeo sobre suas funcionalidades. |
| Categoria | Desenvolvimento  |
| Elementos |[Léxico 10](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l10-oferecer-servicos:~:text=Yan%20Matheus.-,L10%3A%20Oferecer%20servi%C3%A7os,-O%20L%C3%A9xico%20presente) e [História de Usuario 43](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Lu%C3%ADsa%20de%20Souza-,HU43%20%2D%20Tutorial%20em%20v%C3%ADdeo%20sobre%20funcionalidades,-A%20tabela%2044)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Question%C3%A1rio-,RQ53,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Question%C3%A1rio-,RQ53,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $18 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=2-,RQ43,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ56,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 1 - Acompanhar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=Prioriza%C3%A7%C3%A3o-,%C3%89pico%201%20%2D%20Acompanhar,-Feature%201%20%2D%20Oportunidades)|
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 47 - E53 - Cartão do Requisito Funcional 53</p>

Fonte: <a  href="https://github.com/Yanmatheus0812"> Yan Matheus </a>

### EF55 - Rastrebilidade Forward From do requisito RF55

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ55](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Brainstorming-,RQ55,-O%20aplicativo%20deve) | O aplicativo deve notificar quando editais de vestibulares forem abertos. |
| Categoria | Desenvolvimento  |
| Elementos |[Léxico 07](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l07-notificar-eventos:~:text=de%20Souza.-,L07%3A%20Notificar%20eventos,-O%20L%C3%A9xico%20presente) e [História de Usuario 44](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Lu%C3%ADsa%20de%20Souza-,HU44%20%2D%20Notifica%C3%A7%C3%A3o%20sobre%20abertura%20de%20editais%20de%20vestibulares,-A%20tabela%2045)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Brainstorming-,RQ55,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Brainstorming-,RQ55,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $18 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=18-,RQ55,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=M%C3%A9dia-,RQ58,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 6 - Notificar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=M%C3%A9dia-,%C3%89pico%206%20%2D%20Notificar,-Feature%201%20%2D%20Benef%C3%ADcio)|
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 48 - E55 - Cartão do Requisito Funcional 55</p>

Fonte: <a  href="https://github.com/Yanmatheus0812"> Yan Matheus </a>

### EF56 - Rastrebilidade Forward From do requisito RF56

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ56](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Brainstorming-,RQ56,-O%20aplicativo%20deve) | O aplicativo deve ter um fórum entre estudantes. |
| Categoria | Desenvolvimento  |
| Elementos |[Léxico 08](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l07-notificar-eventos:~:text=Yan%20Matheus.-,L08%3A%20Acessar%20p%C3%A1ginas,-O%20L%C3%A9xico%20presente), [Léxico 11](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l19-estudante-logado:~:text=Yan%20Matheus.-,L11%3A%20Estudante,-O%20L%C3%A9xico%20presente) e [História de Usuario 45](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Lu%C3%ADsa%20de%20Souza-,HU45%20%2D%20F%C3%B3rum%20entre%20estudantes,-A%20tabela%2046)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Should na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Brainstorming-,RQ56,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade OUT na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Brainstorming-,RQ56,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $0 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=0-,RQ56,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ59,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 7 - Comunicar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=M%C3%A9dia-,%C3%89pico%207%20%2D%20Comunicar,-Feature%201%20%2D%20F%C3%B3rum)|
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 49 - E56 - Cartão do Requisito Funcional 56</p>

Fonte: <a  href="https://github.com/Yanmatheus0812"> Yan Matheus </a>

### EF57 - Rastrebilidade Forward From do requisito RF57

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ57](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Brainstorming-,RQ57,-O%20aplicativo%20deve) | O aplicativo deve ter um fórum por disciplina entre estudantes e professores. |
| Categoria | Desenvolvimento  |
| Elementos |[Léxico 08](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l07-notificar-eventos:~:text=Yan%20Matheus.-,L08%3A%20Acessar%20p%C3%A1ginas,-O%20L%C3%A9xico%20presente), [Léxico 11](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l19-estudante-logado:~:text=Yan%20Matheus.-,L11%3A%20Estudante,-O%20L%C3%A9xico%20presente), [Léxico 12](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l19-estudante-logado:~:text=de%20Souza.-,L12%3A%20Professor,-O%20lexico%20presente) e [História de Usuario 46](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Lu%C3%ADsa%20de%20Souza-,HU46%20%2D%20F%C3%B3rum%20por%20disciplina%20entre%20estudantes%20e%20professores,-A%20tabela%2047)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Should na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Brainstorming-,RQ57,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade OUT na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Brainstorming-,RQ57,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $11,50 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=12-,RQ57,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ60,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 7 - Comunicar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=M%C3%A9dia-,%C3%89pico%207%20%2D%20Comunicar,-Feature%201%20%2D%20F%C3%B3rum)|
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 50 - E57 - Cartão do Requisito Funcional 57</p>

Fonte: <a  href="https://github.com/Yanmatheus0812"> Yan Matheus </a>

### EF58 - Rastrebilidade Forward From do requisito RF58

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ58](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Brainstorming-,RQ58,-O%20aplicativo%20deve) | O aplicativo deve permitir a emissão de diplomas. |
| Categoria | Desenvolvimento  |
| Elementos |[Léxico 16](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l16-documentacao-oficial:~:text=de%20Souza.-,L16%3A%20Documenta%C3%A7%C3%A3o%20Oficial,-O%20lexico%20presente), [Léxico 04](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l04-emitir-documentos:~:text=Pedro%20Henrique.-,L04%3A%20Emitir%20documentos,-O%20L%C3%A9xico%20presente) e [História de Usuario 47](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Lu%C3%ADsa%20de%20Souza-,HU47%20%2D%20Emiss%C3%A3o%20de%20diplomas,-A%20tabela%2048)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Could na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Brainstorming-,RQ58,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade OUT na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Brainstorming-,RQ58,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $2 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=2-,RQ58,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=M%C3%A9dia-,RQ61,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 8 - Emitir](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=M%C3%A9dia-,%C3%89pico%208%20%2D%20Emitir,-Feature%201%20%2D%20Documentos)|
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 51 - E58 - Cartão do Requisito Funcional 58</p>

Fonte: <a  href="https://github.com/Yanmatheus0812"> Yan Matheus </a>

### EF59 - Rastrebilidade Forward From do requisito RF59

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ59](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Brainstorming-,RQ59,-O%20aplicativo%20deve) | O aplicativo deve ter um canal de suporte ao usuário. |
| Categoria | Desenvolvimento  |
| Elementos |[Léxico 10](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l10-oferecer-servicos:~:text=Yan%20Matheus.-,L10%3A%20Oferecer%20servi%C3%A7os,-O%20L%C3%A9xico%20presente), [Léxico 04](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l04-emitir-documentos:~:text=Pedro%20Henrique.-,L04%3A%20Emitir%20documentos,-O%20L%C3%A9xico%20presente) e [História de Usuario 48](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Lara%20Souza-,HU48%20%2D%20Canal%20de%20suporte%20ao%20usu%C3%A1rio,-A%20tabela%2049)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Brainstorming-,RQ59,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Brainstorming-,RQ59,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $8,50 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=10-,RQ59,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ62,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 7 - Comunicar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=M%C3%A9dia-,%C3%89pico%207%20%2D%20Comunicar,-Feature%201%20%2D%20F%C3%B3rum)|
| Implementação | Não implementado |
| Evidência| Nenhumma |

<p style="font-size: 14px;">Tabela 52 - E59 - Cartão do Requisito Funcional 59</p>

Fonte: <a  href="https://github.com/Yanmatheus0812"> Yan Matheus </a>

### EF60 - Rastrebilidade Forward From do requisito RF60

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ60](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Brainstorming-,RQ60,-O%20aplicativo%20deve) | O aplicativo deve permitir a visualização de certificados. |
| Categoria | Desenvolvimento |
| Elementos |[Léxico 16](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l16-documentacao-oficial:~:text=de%20Souza.-,L16%3A%20Documenta%C3%A7%C3%A3o%20Oficial,-O%20lexico%20presente) e [História de Usuario 49](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Lu%C3%ADsa%20de%20Souza-,HU49%20%2D%20Visualiza%C3%A7%C3%A3o%20de%20certificados,-A%20tabela%2050)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Should na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Brainstorming-,RQ60,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Brainstorming-,RQ60,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $40 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=4%2C25-,RQ60,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ63,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 1 - Acompanhar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=Prioriza%C3%A7%C3%A3o-,%C3%89pico%201%20%2D%20Acompanhar,-Feature%201%20%2D%20Oportunidades)|
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 53 - E60 - Cartão do Requisito Funcional 60</p>

Fonte: <a  href="https://github.com/Yanmatheus0812"> Yan Matheus </a>

### EF61 - Rastrebilidade Forward From do requisito RF61

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ61](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Brainstorming-,RQ61,-O%20aplicativo%20deve) | O aplicativo deve permitir a visualização de ocorrências. |
| Categoria | Desenvolvimento |
| Elementos |[Léxico 16](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l16-documentacao-oficial:~:text=de%20Souza.-,L16%3A%20Documenta%C3%A7%C3%A3o%20Oficial,-O%20lexico%20presente) e [História de Usuario 50](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/HistoriaUsuario/#:~:text=Fonte%3A%20Lara%20Souza-,HU50%20%2D%20Visualiza%C3%A7%C3%A3o%20de%20ocorr%C3%AAncias,-A%20tabela%2051)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Brainstorming-,RQ61,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Brainstorming-,RQ61,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $0 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=0-,RQ61,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=Alta-,RQ64,-O%20aplicativo%20deve) <br>Agregação - O requisito é classificado no [Épico 1 - Acompanhar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/Backlog/#:~:text=Prioriza%C3%A7%C3%A3o-,%C3%89pico%201%20%2D%20Acompanhar,-Feature%201%20%2D%20Oportunidades)|
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 54 - E61 - Cartão do Requisito Funcional 61</p>

Fonte: <a  href="https://github.com/Yanmatheus0812"> Yan Matheus </a>

## Rastreabilidade Forward From - Requisitos Não Funcionais

### EF02 - Rastrebilidade Forward From do requisito RNF24

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ24](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Entrevista%201-,RQ24,-O%20usu%C3%A1rio%20deve) | O usuário deve ser capaz de realizar as principais funções do aplicativo (cadastro, login, busca, e envio de dados) em até 8 minutos de uso, sem necessidade de treinamento prévio. |
| Categoria | Desenvolvimento |
| Elementos | -  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](http://127.0.0.1:8000/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Entrevista%201-,RQ24,-O%20usu%C3%A1rio%20deve)<br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out]()<br>Satisfação - O requisito recebeu $12,25 na técnica [$100 dólares](<http://127.0.0.1:8000/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=13%2C50-,RQ24,-O%20usu%C3%A1rio%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale]() <br>Satisfação - O requisito não funcional é satisfeito pelo NFR framework[Cartão de Especificação 2](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/NFR-Framework/#:~:text=Rastreabilidade-,RQ24,-Classifica%C3%A7%C3%A3o) <br> Alocação - O requisito não funcional foi alocado na categoria de Usabilidade na [Especificação Suplementar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Especificacao/#:~:text=Geovanna%20Alves-,RQ24,-Usabilidade%20(U)). <br>
| Implementação | Implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 31 - EF02 - Cartão do Requisito Não Funcional 24</p>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>

### EF03- Rastrebilidade Forward From do requisito RNF25

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ25](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ25,-O%20aplicativo%20deve) | O aplicativo deve ter uma linguagem simples e adequada ao usuário (sem termos técnicos) |
| Categoria | Organizacional |
| Elementos | -  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#wouldwantwont-have:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ25,-O%20aplicativo%20deve)<br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ25,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $3,00 na técnica [$100 dólares](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#aplicacao-da-tecnica:~:text=8-,RQ25,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média na técnica [Three-Level Scale]() <br>Satisfação - O requisito não funcional é satisfeito pelo NFR framework[Cartão de Especificação 2](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=M%C3%A9dia-,RQ25,-O%20aplicativo%20deve) <br> Alocação - O requisito não funcional foi alocado na categoria de Usabilidade na [Especificação Suplementar](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/). <br>
| Implementação | Implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 32 - EF03 - Cartão do Requisito Funcional 25</p>
Fonte: <a  href="https://github.com/mel14-hub"> Lara Mota </a>

### EF04 - Rastrebilidade Forward From do requisito RNF26

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ26](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ26,-O%20aplicativo%20deve) | O aplicativo deve carregar suas informações em no máximo 3 segundos. |
| Categoria | Desenvolvimento |
| Elementos | [Lexico 27](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#:~:text=O%20L%C3%A9xico%20presente%20na%20Tabela%2027%20est%C3%A1%20relacionado%20ao%20requisito%20RQ26%2C%20sobre%20o%20desempenho%20do%20aplicativo%2C%20de%20acordo%20com%20a%20Tabela%20de%20requisitos%20elicitados) e [NFR](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/NFR-Framework/#:~:text=Rastreabilidade-,RQ26,-Classifica%C3%A7%C3%A3o) |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Must na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ26,-O%20aplicativo%20deve)<br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ26,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $1,00 na técnica [$100 dólares](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=1-,RQ26,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Alta na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=M%C3%A9dia-,RQ26,-O%20aplicativo%20deve) <br>Satisfação - O requisito não funcional é satisfeito pelo NFR framework [Cartão de Especificação 2](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/NFR-Framework/#:~:text=Rastreabilidade-,RQ26,-Classifica%C3%A7%C3%A3o) <br> Alocação - O requisito não funcional foi alocado na categoria de Performace na [Especificação Suplementar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Especificacao/#:~:text=Lara%20Souza-,RQ26,-Performance%20(P)). <br>
| Implementação | Não Implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 33 - EF04 - Cartão do Requisito Não Funcional 26</p>
Fonte: <a  href="https://github.com/Luisa12ll"> Luísa de Souza </a>


### EF05 - Rastrebilidade Forward From do requisito RF54

| Itens  | Descrição    |  
| ------------- | ---- |
| [RQ54](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio-,RQ54,-O%20aplicativo%20deve) | O aplicativo deve ter a possibilidade de encontrar qualquer funcionalidade desejada em até 45 segundos. |
| Categoria | Desenvolvimento  |
| Elementos |[Léxico 29](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/L%C3%A9xicos/#l29-funcionalidade-encontrada-45-segundos:~:text=Pedro%20Henrique.-,L29%3A%20Funcionalidade%20encontrada%20%E2%89%A4%2045%20segundos,-O%20L%C3%A9xico%20presente) e [NFR](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/NFR-Framework/#:~:text=RNF-,O%20aplicativo%20deve%20ter%20a%20possibilidade%20de%20encontrar%20qualquer%20funcionalidade%20desejada%20em%20at%C3%A9%2045%20segundos.,-Rastriabilidade)  |
| Elos Forward-From | Satisfação - O requisito recebeu uma priorização de Should na técnica [MoSCoW](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Moscow/#:~:text=Question%C3%A1rio-,RQ54,-O%20aplicativo%20deve) <br> Satisfação - O requisito recebeu prioridade IN na técnica [In or Out](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/In_or_Out/#:~:text=Question%C3%A1rio-,RQ54,-O%20aplicativo%20deve)<br>Satisfação - O requisito recebeu $13,50 na técnica [$100](<https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/100_dolares/#:~:text=15%2C50-,RQ54,-O%20aplicativo%20deve>)<br> Satisfação - O requisito recebeu prioridade Média na técnica [Three-Level Scale](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Prioriza%C3%A7%C3%A3o/Three_level_scale/#:~:text=M%C3%A9dia-,RQ57,-O%20aplicativo%20deve) <br>Satisfação - O requisito não funcional é satisfeito pelo NFR framework [Cartão de Especificação 2](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/%C3%81gil/NFR-Framework/#:~:text=Rastriabilidade-,RQ54,-Classifica%C3%A7%C3%A3o) <br> Alocação - O requisito não funcional foi alocado na categoria de Performace na [Especificação Suplementar](https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Especificacao/#:~:text=Camila%20Silva-,RQ54,-Performance%20(P)). <br> |
| Implementação | Não implementado |
| Evidência| Nenhuma |

<p style="font-size: 14px;">Tabela 34 - EF05 - Cartão do Requisito Funcional 54</p>

Fonte: <a  href="https://github.com/Yanmatheus0812"> Yan Matheus </a>

>>>>>>>
## Referência bibliográfica
>
> <a name="RB1">1. </a>SAYÃO, Miriam; LEITE, Julio. Rastreabilidade de Requisitos. PUC-Rio: Departamento de Informática, ISSN 0103-9741, Rio de Janeiro, 2005. Disponível em:  [https://aprender3.unb.br/pluginfile.php/3210698/mod_resource/content/3/05_20_sayao.pdf](https://aprender3.unb.br/pluginfile.php/3210698/mod_resource/content/3/05_20_sayao.pdf). Acesso em: 25 de outubro de 2025.

> <a name="RB2">2. </a>TORANZO, M.; CASTRO, J; MELLO, E. Uma proposta para melhorar o rastreamento de requisitos. PUC-Rio: Workshop em Engenharia de Requisitos, Rio de Janeiro, 2002. Disponível em: [https://www.researchgate.net/profile/Jaelson-Castro/publication/221235129_Uma_Proposta_para_Melhorar_o_Rastreamento_de_Requisitos/links/5b73e4af299bf14c6da6db79/Uma-Proposta-para-Melhorar-o-Rastreamento-de-Requisitos.pdf](https://www.researchgate.net/profile/Jaelson-Castro/publication/221235129_Uma_Proposta_para_Melhorar_o_Rastreamento_de_Requisitos/links/5b73e4af299bf14c6da6db79/Uma-Proposta-para-Melhorar-o-Rastreamento-de-Requisitos.pdf?origin=scientificContributions). Acesso em: 25 de outubro de 2025.

## Bibliográfica

> SAYÃO, Miriam; LEITE, Julio. Rastreabilidade de Requisitos. PUC-Rio: Departamento de Informática, ISSN 0103-9741, Rio de Janeiro, 2005. Disponível em:  [https://aprender3.unb.br/pluginfile.php/3210698/mod_resource/content/3/05_20_sayao.pdf](https://aprender3.unb.br/pluginfile.php/3210698/mod_resource/content/3/05_20_sayao.pdf). Acesso em: 25 de outubro de 2025.

> TORANZO, M.; CASTRO, J; MELLO, E. Uma proposta para melhorar o rastreamento de requisitos. PUC-Rio: Workshop em Engenharia de Requisitos, Rio de Janeiro, 2002. Disponível em: [https://www.researchgate.net/profile/Jaelson-Castro/publication/221235129_Uma_Proposta_para_Melhorar_o_Rastreamento_de_Requisitos/links/5b73e4af299bf14c6da6db79/Uma-Proposta-para-Melhorar-o-Rastreamento-de-Requisitos.pdf](https://www.researchgate.net/profile/Jaelson-Castro/publication/221235129_Uma_Proposta_para_Melhorar_o_Rastreamento_de_Requisitos/links/5b73e4af299bf14c6da6db79/Uma-Proposta-para-Melhorar-o-Rastreamento-de-Requisitos.pdf?origin=scientificContributions). Acesso em: 25 de outubro de 2025.

## Histórico de Versões

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :-: | :-: | :-: | :-: | :-: |
| 1.0 | 26/10/2025 | Adicionando introdução, participantes e metodologia |[Camila Silva](https://github) e [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Luisa de Souza](https://github.com/Luisa12ll). | [Yan Matheus](https://github.com/Yanmatheus0812) |
