# Especificação Suplementar

## Introdução

Este documento apresenta a Especificação Suplementar do aplicativo Jornada do Estudante, com o objetivo de complementar os requisitos funcionais previamente definidos. A especificação suplementar é um documento utilizado para descrever os requisitos não funcionais e outras restrições ou características que não estão diretamente relacionadas às funcionalidades do sistema, mas que influenciam fortemente sua qualidade e comportamento.

Esse tipo de especificação é importante porque garante uma visão mais completa do sistema, permitindo que a equipe de desenvolvimento compreenda não apenas o que o sistema deve fazer, mas também como ele deve se comportar em diferentes contextos de uso.

O conteúdo foi estruturado com base no modelo FURPS+, que serve para organizar e classificar os requisitos de qualidade de software em categorias como Funcionalidade, Usabilidade, Confiabilidade, Desempenho e Suportabilidade, além de incluir outros aspectos complementares.

A técnica utilizada para elaboração desse documento foi feita conforme sugerido por Milena Serrano <a id="RP1" href="https://aprender3.unb.br/pluginfile.php/3210637/mod_resource/content/1/Requisitos%20-%20Aula%20013a.pdf">1.</a>, e os itens necessários abordados aqui incluem todos os aspectos não funcionais e complementares que devem ser considerados durante o desenvolvimento do sistema.

## Participantes

A seguir temos a tabela 1, onde indica todos os participantes da especificação suplementar.

<font size="3"><p style="text-align: center">Tabela 1: Participantes</p></font>

<div align="center">
  <table border="1" cellspacing="0" cellpadding="5">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Etapas que participou</th>
        <th>Data</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="https://github.com/CamilaSilvaC">Camila Silva</a></td>
        <td>Elaborou a especificações do <a href="https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Especificacao/#:~:text=Luisa%20de%20Souza-,RQ40,-Usabilidade%20(U)">RQ40 </td>
        <td>26/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/GeovannaUmbeliino">Geovanna Alves</a></td>
        <td>Elaborou a especificações do <a href="https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Especificacao/#:~:text=Autor-,RQ3,-Confiabilidade%20(R)">RQ3   </td>
        <td>26/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/mel14-hub">Lara Souza</a></td>
        <td>Elaborou a especificações do <a href="https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Especificacao/#:~:text=Pedro%20Henrique-,RQ25,-Usabilidade%20(U)">RQ25 </td>
        <td>26/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/luisa12ll">Luisa de Souza</a></td>
        <td>Elaborou a especificações do <a href="https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Especificacao/#:~:text=Lara%20Souza-,RQ26,-Performance%20(P)">RQ26  </td>
        <td>26/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/pedrohpsantos">Pedro Henrique</a></td>
        <td>Elaborou a especificações do <a href="https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Especificacao/#:~:text=Geovanna%20Alves-,RQ24,-Usabilidade%20(U)">RQ24  </td>
        <td>28/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/Yanmatheus0812">Yan Matheus</a></td>
        <td>Elaborou a especificações do <a href="https://requisitos-de-software.github.io/2025.2-Grupo05/Modelagem/Especificacao/#:~:text=Camila%20Silva-,RQ54,-Performance%20(P)">RQ54  </td>
        <td>28/10/2025</td>
      </tr>
    </tbody>
  </table>
</div>

<font size="3"><p style="text-align: center">Autor: <a href="https://github.com/GeovannaUmbeliino">Geovanna Alves</a></font>

## Metodologia

A elaboração da especificação suplementar seguiu os seguintes passos <a id="RP1" href="https://aprender3.unb.br/pluginfile.php/3210637/mod_resource/content/1/Requisitos%20-%20Aula%20013a.pdf">1.</a>:

1. **Levantamento dos Requisitos Não Funcionais** por meio da análise dos objetivos do sistema e padrões de qualidade esperados.
2. **Classificação dos Requisitos** segundo o modelo FURPS+, que contempla: Funcionalidade, Usabilidade, Confiabilidade, Desempenho, Suporte e extensões (como restrições e interfaces).
3. **Preenchimento de Tabelas** com os requisitos descritos de forma clara, justificando sua inclusão e indicando prioridade e status.
4. **Consulta à bibliografia técnica**, garantindo conformidade com boas práticas de Engenharia de Software.

<br>

---

## Modelo

Este documento segue o modelo **FURPS+**, organizando os requisitos de software em categorias:

- **F (Functionality):** Funcionalidades e regras de negócio
- **U (Usability):** Usabilidade e acessibilidade
- **R (Reliability):** Confiabilidade e disponibilidade
- **P (Performance):** Desempenho e tempo de resposta
- **S (Supportability):** Manutenibilidade e portabilidade
- **+ (Extensões):** Interfaces, restrições técnicas e legais

---

## Requisitos Não Funcionais

A seguir, temos a Tabela 2, referente à Especificação Suplementar, na qual a equipe realizou a definição e o detalhamento dos requisitos não funcionais do sistema.

| Código                                                                                                      | Categoria          | Requisito Não Funcional                                                                                                                                                             | Descrição                                                                                                                                                                                                         | Justificativa                                                                                                                                                           | Prioridade | Implementado | Autor                                                 |
| ----------------------------------------------------------------------------------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------ | ----------------------------------------------------- |
| [RQ3](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=An%C3%A1lise%20de%20documenta%C3%A7%C3%A3o-,RQ3,-O%20aplicativo%20deve)  | Confiabilidade (R) | O aplicativo deve ter uma tecnologia blockchain que é usada para a autenticação e disponibilização de documentos.                                                                   | O aplicativo deve usar blockchain para tornar a autenticação de estudantes e a disponibilização de documentos seguras, confiáveis e imutáveis, garantindo a integridade e autenticidade das informações.            | O uso da tecnologia blockchain oferece um alto nível de qualidade e segurança, protegendo o sistema contra fraudes e alterações indevidas nos documentos.               | Alta       | Sim          | [Geovanna Alves](https://github.com/GeovannaUmbelino) |
| [RQ24](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Entrevista%201-,RQ24,-O%20usu%C3%A1rio%20deve) | Usabilidade (U)    | O estudante deve ser capaz de realizar as principais funções do aplicativo (cadastro, login, busca, e envio de dados) em até 8 minutos de uso, sem necessidade de treinamento prévio. | O aplicativo deve oferecer uma interface clara e intuitiva, permitindo que os estudantes naveguem de forma simples e natural. As funcionalidades devem ser fáceis de entender, com instruções diretas e acessíveis. | Um aplicativo fácil de usar melhora a experiência dos estudantes, reduz a ocorrência de erros e permite que eles naveguem pela plataforma de forma mais rápida e simples. | Alta       | Sim          | [Pedro Henrique](https://github.com/pedrohpsantos)    |
| [RQ25](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ25,-O%20aplicativo%20deve) | Usabilidade (U)    | O aplicativo deve ter uma linguagem simples e adequada ao estudante (sem termos técnicos)                                                                                             | O aplicativo deve usar uma linguagem clara, acessível e adequada ao perfil dos estudantes, evitando termos técnicos complexos e promovendo uma comunicação eficiente.                                               | Uma linguagem simples facilita a compreensão das funcionalidades e conteúdos pelo estudantes, melhorando a experiência de uso e reduzindo dúvidas e erros.                 | Alta       | Sim          | [Lara Souza](https://github.com/mel14-hub)            |
| [RQ26](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ26,-O%20aplicativo%20deve) | Performance (P)    | O aplicativo deve carregar suas informações em no máximo 3 segundos.                                                                                                                | O sistema deve garantir tempos de carregamento rápidos para páginas e funcionalidades, com tempo máximo de 3 segundos para o carregamento completo das informações.                                               | Garantir rapidez no carregamento melhora a experiência do estudantes e evita desistência, especialmente em redes lentas ou dispositivos com menor capacidade.              | Alta       | Não          | [Luisa de Souza](https://github.com/Luisa12ll)        |
| [RQ40](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio%2C%20Brainstorming-,RQ40,-O%20aplicativo%20deve) | Usabilidade (U)    | O aplicativo deve ser acessível (contraste em cores, suporte à Libras e auto-descrição).                                                                                            | Garantir que o aplicativo siga boas práticas de acessibilidade, oferecendo contraste adequado, suporte à tradução em Libras e auto-descrição para pessoas com deficiência visual.                                 | Promover a inclusão digital e o cumprimento de normas de acessibilidade (Lei Brasileira de Inclusão e WCAG 2.1).                                                        | Alta       | Sim          | [Camila Silva](https://github.com/CamilaSilvaC)       |
| [RQ54](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/#:~:text=Question%C3%A1rio-,RQ54,-O%20aplicativo%20deve) | Performance (P)    | O aplicativo deve ter a possibilidade de encontrar qualquer funcionalidade desejada em até 45 segundos.                                                                             | O sistema deve oferecer uma navegação intuitiva e mecanismos de busca eficientes que permitam localizar rapidamente qualquer funcionalidade.                                                                      | Facilitar o uso e reduzir o tempo de aprendizado, melhorando a experiência do estudantes.                                                                                  | Média      | Não          | [Yan Matheus](https://github.com/Yanmatheus0812)      |

Tabela 2 – Requisitos Não Funcionais classificados de acordo com o modelo FURPS+. <br>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a>, <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>, <a href="https://github.com/mel14-hub">Lara Mota</a>,
<a href="https://github.com/luisa12ll">Luisa de Souza</a>, <a href="https://github.com/pedrohpsantos">Pedro Henrique</a> e <a href="https://github.com/Yanmatheus0812">Yan Matheus</a>

## Gravação

### Participantes 1

A seguir temos a tabela 3, onde indica todos os menbros da equipe que participaram da gravação.

<font size="3"><p style="text-align: center">Tabela 3: Participantes</p></font>

<div align="center">
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Data</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="https://github.com/CamilaSilvaC">Camila Silva</a></td>
        <td>11/10/2025</td>
         </tr>
      <tr>
        <td><a href="https://github.com/GeovannaUmbeliino">Geovanna Alves</a></td>
        <td>11/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/mel14-hub">Lara Souza</a></td>
        <td>11/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/luisa12ll">Luisa de Souza</a></td>
        <td>11/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/pedrohpsantos">Pedro Henrique</a></td>
        <td>11/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/Yanmatheus0812">Yan Matheus</a></td>
        <td>11/10/2025</td>
      </tr>
    </tbody>
  </table>
</div>

<font size="3"><p style="text-align: center">Autor: <a href="https://github.com/GeovannaUmbeliino">Geovanna Alves</a></font>

### Vídeo 1

A seguir, apresentamos a gravação referente à elaboração da **especificação suplementar**.

<iframe width="560" height="315" src="https://www.youtube.com/embed/A_6FJ9gH3F0?si=Dq85LAq3XjP_Z1bD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Vídeo 2

A seguir, apresentamos a gravação referente à **verificação da especificação suplementar**.

<iframe width="560" height="315" src="https://www.youtube.com/embed/8Ftv27sXi84?si=a5Nmri1FrK-mMkQN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Referência bibliográfica

> <a id="RP1" href="#tec1">1.</a> SERRANO, Milene; SERRANO, Maurício. Requisitos – Aula 13. UnB, 2025. Disponível em: <[https://aprender3.unb.br/pluginfile.php/3210637/mod_resource/content/1/Requisitos%20-%20Aula%20013a.pdf](https://aprender3.unb.br/pluginfile.php/3210637/mod_resource/content/1/Requisitos%20-%20Aula%20013a.pdf)>. Acesso em: 11 de outubro de 2025. p. 27–30.

## Histórico de Versões

| Versão |    Data    |                      Descrição                      |                                                                Autor(es)                                                                |                   Revisor(es)                    |
| :----: | :--------: | :-------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------: |
|  1.0   | 11/10/2025 | Adicionando introdução, participantes e metodologia | [Camila Silva](https://github), [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Luisa de Souza](https://github.com/Luisa12ll). | [Yan Matheus](https://github.com/Yanmatheus0812) |
|  1.1   | 20/10/2025 |                Atualização da tabela                |                                           [Pedro Henrique](https://github.com/pedrohpsantos)                                            |    [Lara Souza](https://github.com/mel14-hub)    |
