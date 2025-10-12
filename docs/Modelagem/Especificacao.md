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
        <td>12/09/2025</td>
         </tr>
      <tr>
        <td><a href="https://github.com/GeovannaUmbeliino">Geovanna Alves</a></td>
        <td>12/09/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/mel14-hub">Lara Souza</a></td>
        <td>12/09/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/luisa12ll">Luisa de Souza</a></td>
        <td>12/09/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/pedrohpsantos">Pedro Henrique</a></td>
        <td>12/09/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/Yanmatheus0812">Yan Matheus</a></td>
        <td>12/09/2025</td>
      </tr>
    </tbody>
  </table>
</div>

<font size="3"><p style="text-align: center">Autor: <a href="https://github.com/GeovannaUmbeliino">Geovanna Alves</a></font>

## Metodologia

A elaboração da especificação suplementar seguiu os seguintes passos <a id="RP1" href="#TEC1">1.</a>:

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
| Código | Categoria | Requisito Não Funcional | Descrição | Justificativa | Prioridade | Status | Autor |
|--------|------------|-------------------------|------------|----------------|-------------|---------|--------|
|[RQ3](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |  | O aplicativo deve ter uma tecnologia blockchain que é usada para a autenticação e disponibilização de documentos. |  |  |  |  |  |
|[RQ24](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |  | O aplicativo deve ser fácil de usar e aprender suas funcionalidades. |  |  |  |  |  |
|[RQ25](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)|  | O aplicativo deve ter uma linguagem simples adequada ao usuário. |  |  |  |  |  |
|[RQ26](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)|  | O aplicativo deve carregar suas informações em no máximo 3 segundos. |  |  |  |  |  |
|[RQ40](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) | Usabilidade (U) | O aplicativo deve ser acessível (contraste em cores, suporte à Libras e auto-descrição). | Garantir que o aplicativo siga boas práticas de acessibilidade, oferecendo contraste adequado, suporte à tradução em Libras e auto-descrição para pessoas com deficiência visual. | Promover a inclusão digital e o cumprimento de normas de acessibilidade (Lei Brasileira de Inclusão e WCAG 2.1). | Alta | Sim|[Camila Silva](https://github.com/CamilaSilvaC)|
|[RQ55](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)| Performance (P) | O aplicativo deve ter a possibilidade de encontrar qualquer funcionalidade desejada em até 45 segundos. | O sistema deve oferecer uma navegação intuitiva e mecanismos de busca eficientes que permitam localizar rapidamente qualquer funcionalidade. | Facilitar o uso e reduzir o tempo de aprendizado, melhorando a experiência do usuário. | Média | Não | [Yan Matheus](https://github.com/Yanmatheus0812) |

Tabela 2 – Requisitos Não Funcionais classificados de acordo com o modelo FURPS+. <br>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a>, <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>, <a href="https://github.com/mel14-hub">Lara Mota</a>,
<a href="https://github.com/luisa12ll">Luisa de Souza</a>, <a href="https://github.com/pedrohpsantos">Pedro Henrique</a> e <a href="https://github.com/Yanmatheus0812">Yan Matheus</a>



## Referência bibliográfica

> <a id="RP1" href="#tec1">1.</a> SERRANO, Milene; SERRANO, Maurício. Requisitos – Aula 13. UnB, 2025. Disponível em: <[https://aprender3.unb.br/pluginfile.php/3210637/mod_resource/content/1/Requisitos%20-%20Aula%20013a.pdf](https://aprender3.unb.br/pluginfile.php/3210637/mod_resource/content/1/Requisitos%20-%20Aula%20013a.pdf)>. Acesso em: 12 de outubro 2025. p. 27–30.



## Histórico de Versões

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :-: | :-: | :-: | :-: | :-: |
| `1.0` | 12/10/2025 | Adicionando introdução, participantes e metodologia | [Geovanna Alves](https://github.com/GeovannaUmbelino) , [Camila Silva](https://github) e [Luisa de Souza](https://github.com/Luisa12ll). | [Yan Matheus](https://github.com/Yanmatheus0812) |
