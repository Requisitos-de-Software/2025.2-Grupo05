# Casos de Uso

## Introdução

Um caso de uso se refere a uma descrição detalhada de como o sistema será utilizado em uma determinada situação ou contexto. Ele descreve as interações entre os estudantes e o sistema, apresentando os passos necessários para alcançar um objetivo específico.
O objetivo dos casos de uso é auxiliar no processo de desenvolvimento de um sistema, fornecendo uma visão clara dos requisitos funcionais do sistema, descrevendo as ações que os estudantes podem realizar e as respostas do sistema a ações.

## Participantes

A seguir temos a tabela 1, onde indica todos os participantes do caso de uso, o horário e local da aplicação da técnica.

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
        <td>09/10/2025</td>
         </tr>
      <tr>
      <tr>
        <td><a href="https://github.com/GeovannaUmbelino">Geovanna Alves</a></td>
         <td>09/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/mel14-hub">Lara Souza</a></td>
        <td>09/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/luisa12ll">Luísa de Souza</a></td>
        <td>09/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/pedrohpsantos">Pedro Henrique</a></td>
         <td>09/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/Yanmatheus0812">Yan Matheus</a></td>
         <td>09/10/2025</td>
      </tr>
    </tbody>
  </table>
</div>

<font size="3"><p style="text-align: center">Tabela 1: Participantes Casos de uso</p></font>

<font size="3"><p style="text-align: center">Autor: <a href="https://github.com/Yanmatheus0812">Yan Matheus</a></font>

## Metodologia

<font size="3"><p style="text-align: center"><b>Figura 1</b>: Elementos do diagrama de casos de uso</p></font>

![Elementos](../img/elementos.png)

Fonte: Fonte: [Lara Souza](https://github.com/mel14-hub) e [Pedro Henrique](https://github.com/pedrohpsantos)


<font size="3"><p style="text-align: center"><b>Figura 2</b>: Elementos das relações do diagrama de casos de uso</p></font>

![Elementos - relações](../img/elementos_setas.png)


Fonte: [Lara Souza](https://github.com/mel14-hub) e [Pedro Henrique](https://github.com/pedrohpsantos)


## Diagrama de Casos de Uso

A figura 3 demonstra o diagrama de casos de uso.

<font size="3"><p style="text-align: center"><b>Figura 3</b>: Casos de uso do app Jornada do estudante</p></font>

![Casos de uso](../img/casoUso.png)

Fonte: [Lara Souza](https://github.com/mel14-hub), [Pedro Henrique](https://github.com/pedrohpsantos), [Yan Matheus](https://github.com/Yanmatheus0812), [Geovanna Alves](https://github.com/GeovannaUmbelino), [Luisa de Souza](https://github.com/Luisa12ll) e [Camila Silva](https://github.com/CamilaSilvaC)

## Especialização dos casos de uso

As tabelas de 2 a 15 apresentam a especialização dos casos de uso.

| UC01 | Informações |
| ----- | ---------- |
| Descrição | O estudante pode acessar um tutorial em vídeo demonstrando as funcionalidades do aplicativo |
| Atores envolvidos | Estudante (primário) |
| Ação | O estudante acessa o tutorial do aplicativo |
| Fluxo principal | entrar no aplicativo > acessar o tutorial em vídeo |
| Relacionamentos | Associação com estudante  |
| Data de Criação | 09/10/2025 |
| Rastreabilidade | [RQ54](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |

<font size="3"><p style="text-align: center">Tabela 2: Acessar tutorial</p></font>

Fonte: [Luisa de Souza](https://github.com/Luisa12ll) e [Geovanna Alves](https://github.com/GeovannaUmbelino)


| UC02 | Informações |
| ----- | ---------- |
| Descrição | O estudante pode visualizar informações da disciplina como notas, horários e professor responsável |
| Atores envolvidos | Estudante (primário) e professor (secundário) |
| Ação | O estudante visualiza informações da disciplinas |
| Fluxo principal | entrar no aplicativo > acessar a página da disciplina |
| Relacionamentos | Associação com estudante e extensão para "Acessar fórum da disciplina"  |
| Data de Criação | 09/10/2025 |
| Rastreabilidade | [RQ17](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/), [RQ18](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/), [RQ19](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) e [RQ20](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |

<font size="3"><p style="text-align: center">Tabela 3: Visualizar informações da disciplina</p></font>

Fonte: [Camila Silva](https://github.com/CamilaSilvaC) e [Luisa de Souza](https://github.com/Luisa12ll)


| UC03 | Informações |
| ----- | ---------- |
| Descrição | O estudante pode acessar o fórum da disciplina para ter um contato direto com o professor |
| Atores envolvidos | Estudante (primário) e professor (secundário) |
| Ação | O estudante acessa o fórum da disciplina para falar com o professor |
| Fluxo principal | entrar no aplicativo > acessar a página da disciplina > acessar fórum da disciplina |
| Relacionamentos | Extensão de "Visualizar informações da disciplina" e associação com professor  |
| Data de Criação | 09/10/2025 |
| Rastreabilidade | [RQ58](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |

<font size="3"><p style="text-align: center">Tabela 4: Acessar fórum da disciplina</p></font>

Fonte: [Camila Silva](https://github.com/CamilaSilvaC)


| UC04 | Informações |
| ----- | ---------- |
| Descrição | O estudante pode consultar a página de auxílio para verificar informações |
| Atores envolvidos | Estudante (primário) |
| Ação | O estudante acessa a página do auxílio |
| Fluxo principal | entrar no aplicativo > acessar a página do auxílio |
| Relacionamentos | Asociação com aluno e extensões com "Editar dados bancários", "Visualizar dia do pagamento do auxílio" e "Comunicar em um canal de conversa do auxílio"  |
| Data de Criação | 09/10/2025 |
| Rastreabilidade | [RQ31](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) [RQ32](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) [RQ33](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |

<font size="3"><p style="text-align: center">Tabela 5: Consultar auxílio</p></font>

Fonte: [Camila Silva](https://github.com/CamilaSilvaC)


| UC05 | Informações |
| ----- | ---------- |
| Descrição | O estudante pode editar seus dados bancários do recebimento do auxílio pelo Gov.br |
| Atores envolvidos | Estudante (primário) e Gov.br (secundário) |
| Ação | O estudante edita suas informações bancárias acessando um link do Gov.br |
| Fluxo principal | entrar no aplicativo > acessar a página do auxílio > Editar informações bancárias > Gov.br |
| Relacionamentos | Asociação com Gov.br e extensão de "Consultar auxílio"  |
| Data de Criação | 09/10/2025 |
| Rastreabilidade | [RQ31](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) [RQ32](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) [RQ33](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |

<font size="3"><p style="text-align: center">Tabela 6: Editar dados bancários</p></font>

Fonte: [Luisa de Souza](https://github.com/Luisa12ll)


| UC06 | Informações |
| ----- | ---------- |
| Descrição | O estudante pode visualizar o dia do pagamento do auxílio |
| Atores envolvidos | Estudante (primário) |
| Ação | O estudante visualiza o dia do pagamento do auxílio |
| Fluxo principal | entrar no aplicativo > acessar a página do auxílio > Visualizar dia do pagamento |
| Relacionamentos | Extensão de "Consultar auxílio"  |
| Data de Criação | 09/10/2025 |
| Rastreabilidade | [RQ34](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |

<font size="3"><p style="text-align: center">Tabela 7: Visualizar dia do pagamento do auxílio</p></font>

Fonte: [Luisa de Souza](https://github.com/Luisa12ll)


| UC07 | Informações |
| ----- | ---------- |
| Descrição | O estudante pode tirar dúvidas sobre o auxílio em um canal de conversa |
| Atores envolvidos | Estudante (primário) e atendente (secundário) |
| Ação | O estudante se comunica através de um canal com um atendente |
| Fluxo principal | entrar no aplicativo > acessar a página do auxílio > Falar com um atendente |
| Relacionamentos | Extensão de "Consultar auxílio" e associação com Atendente |
| Data de Criação | 09/10/2025 |
| Rastreabilidade | [RQ35](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |

<font size="3"><p style="text-align: center">Tabela 8: Comunicar em um canal de conversa do auxílio</p></font>

Fonte: [Yan Matheus](https://github.com/Yanmatheus0812)


| UC08 | Informações |
| ----- | ---------- |
| Descrição | O estudante pode criar, editar e excluir eventos na agenda |
| Atores envolvidos | Estudante (primário) |
| Ação | O estudante cadastra eventos na agenda, podendo edita-los e exclui-los |
| Fluxo principal | entrar no aplicativo > Agenda |
| Relacionamentos | Associação de Estudante, extensão para "Notificar atividades acadêmicas" e inclusão para "Adicionar grau de importância" |
| Data de Criação | 09/10/2025 |
| Rastreabilidade | [RQ46](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/), [RQ47](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) e [RQ48](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)|

<font size="3"><p style="text-align: center">Tabela 9: Cadastrar eventos na agenda </p></font>

Fonte: [Geovanna Alves](https://github.com/GeovannaUmbelino)

| UC09| Informações |
| ----- | ---------- |
| Descrição | O estudante pode receber notificações de atividades cadastradas na agenda |
| Atores envolvidos | Estudante (primário) |
| Ação | O estudante ativa as notificações ao criar o evento na agenda |
| Fluxo principal | entrar no aplicativo > Agenda > Criar/Editar evento > Ativar notificações? |
| Relacionamentos | Extensão de "Cadastrar eventos na agenda" |
| Data de Criação | 09/10/2025 |
| Rastreabilidade | [RQ50](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |

<font size="3"><p style="text-align: center">Tabela 10: Notificar atividades com antecedência </p></font>

Fonte: [Geovanna Alves](https://github.com/GeovannaUmbelino)

| UC010 | Informações |
| ----- | ---------- |
| Descrição | O estudante seleciona o grau de importância à atribuir para o evento criado na agenda |
| Atores envolvidos | Estudante (primário) |
| Ação | O estudante seleciona a importância da atividade criada |
| Fluxo principal | entrar no aplicativo > Agenda > Criar/Editar evento > Importância do evento |
| Relacionamentos | Inclusão de "Cadastrar eventos na agenda" |
| Data de Criação | 09/10/2025 |
| Rastreabilidade | [RQ52](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |

<font size="3"><p style="text-align: center">Tabela 11: Adicionar grau de importância </p></font>

Fonte: [Pedro Henrique](https://github.com/pedrohpsantos)

| UC011 | Informações |
| ----- | ---------- |
| Descrição | O estudante pode requerir documentos da instituição de ensino |
| Atores envolvidos | Estudante (primário) e Instituição de ensino (secundário) |
| Ação | O estudante requere documentos para sua instituição de ensino |
| Fluxo principal | entrar no aplicativo > Emitir documentos |
| Relacionamentos | Associação de estudante, associação de instituição de ensino e generalização para "Emitir histórico", "Emitir declaração de vínculo" e "Emitir certificados" |
| Data de Criação | 09/10/2025 |
| Rastreabilidade | [RQ27](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/), [RQ28](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) e [RQ61](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |

<font size="3"><p style="text-align: center">Tabela 12: Requerir documentos </p></font>

Fonte: [Pedro Henrique](https://github.com/pedrohpsantos) 


| UC012 | Informações |
| ----- | ---------- |
| Descrição | O estudante pode requerir seu histórico da instituição de ensino |
| Atores envolvidos | Estudante (primário) e Instituição de ensino (secundário) |
| Ação | O estudante requere seu histórico para sua instituição de ensino |
| Fluxo principal | entrar no aplicativo > Emitir documentos > Emtiir histórico escolar |
| Relacionamentos | Generalização de "Requerir documentos" |
| Data de Criação | 09/10/2025 |
| Rastreabilidade | [RQ28](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |

<font size="3"><p style="text-align: center">Tabela 13: Emitir histórico </p></font>

Fonte: [Lara Souza](https://github.com/mel14-hub) e [Yan Matheus](https://github.com/Yanmatheus0812)


| UC013 | Informações |
| ----- | ---------- |
| Descrição | O estudante pode requerir sua declaração de vínculo da instituição de ensino |
| Atores envolvidos | Estudante (primário) e Instituição de ensino (secundário) |
| Ação | O estudante requere sua declaração de vínculo para sua instituição de ensino |
| Fluxo principal | entrar no aplicativo > Emitir documentos > Emtiir declaração de vínculo |
| Relacionamentos | Generalização de "Requerir documentos" |
| Data de Criação | 09/10/2025 |
| Rastreabilidade | [RQ27](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |

<font size="3"><p style="text-align: center">Tabela 14: Emitir declaração de vínculo </p></font>

Fonte: [Pedro Henrique](https://github.com/pedrohpsantos) e [Yan Matheus](https://github.com/Yanmatheus0812)


| UC014 | Informações |
| ----- | ---------- |
| Descrição | O estudante pode requerir seus certificados da instituição de ensino |
| Atores envolvidos | Estudante (primário) e Instituição de ensino (secundário) |
| Ação | O estudante requere seus certificados para sua instituição de ensino |
| Fluxo principal | entrar no aplicativo > Emitir documentos > Emtiir certificados |
| Relacionamentos | Generalização de "Requerir documentos" |
| Data de Criação | 09/10/2025 |
| Rastreabilidade | [RQ61](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |

<font size="3"><p style="text-align: center">Tabela 15: Emitir certificados </p></font>

Fonte: [Lara Souza](https://github.com/mel14-hub) e [Yan Matheus](https://github.com/Yanmatheus0812)

## Gravação 

### Participantes 
A seguir temos a tabela 16, onde indica todos os participantes da sessão do caso de uso, o horário e local da aplicação da técnica.

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
        <td>09/10/2025</td>
         </tr>
      <tr>
      <tr>
        <td><a href="https://github.com/GeovannaUmbelino">Geovanna Alves</a></td>
         <td>09/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/mel14-hub">Lara Souza</a></td>
        <td>09/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/luisa12ll">Luísa de Souza</a></td>
        <td>09/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/pedrohpsantos">Pedro Henrique</a></td>
         <td>09/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/Yanmatheus0812">Yan Matheus</a></td>
         <td>09/10/2025</td>
      </tr>
    </tbody>
  </table>
</div>

<font size="3"><p style="text-align: center">Tabela 16: Participantes Casos de uso</p></font>

<font size="3"><p style="text-align: center">Autor: <a href="https://github.com/Yanmatheus0812">Yan Matheus</a></font>

### Video 

<iframe width="560" height="315" src="https://www.youtube.com/embed/WucrkTl8UE0?si=ZKRy98nzMAfoCrf5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Validação - Caso de uso

### Participantes 
A seguir temos a tabela 17, onde indica todos os participantes da validação da técnica, o horário e local da aplicação da técnica. O estudante corresponde ao perfil de estudante 2

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
        <td>10/10/2025</td>
        <td>18:30</td>
        <td>Faculdade de Ciências e Tecnologias em Engenharia – FCTE/UnB</td>
         </tr>
      <tr>
       <tr>
        <td>estudante</td>
        <td>Pedro Henrique</td>
         <td>10/10/2025</td>
        <td>18:30</td>
        <td>Faculdade de Ciências e Tecnologias em Engenharia – FCTE/UnB</td>
      </tr>
    </tbody>
  </table>
</div>

<font size="3"><p style="text-align: center">Tabela 17: Validação Caso de uso</p></font>

<font size="3"><p style="text-align: center">Autor: <a href="https://github.com/luisa12ll">Luísa de Souza</a></font>

### Video 

<iframe width="560" height="315" src="https://www.youtube.com/embed/mHScbBuDxsI?si=bq-b2UW7-_yEWmkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Bibliografia

> Lucidchart. Diagrama de Caso de Uso UML. Disponível em: <<https://www.lucidchart.com/pages/pt/diagrama-de-caso-de-uso-uml>>. Acesso em: 14 maio 2023.

> BARBOSA, S. D. J.; SILVA, B. S. Interação Humano-Computador. Rio de Janeiro: Elsevier, 2011.

> Fernando, Sidney. Casos de uso. Repositório da disciplina de Requisitos de Software da Universidade de Brasília, 2023. Disponível em: [hhttps://requisitos-de-software.github.io/2023.1-BilheteriaDigital/modelagem/useCase/](https://requisitos-de-software.github.io/2023.1-BilheteriaDigital/modelagem/useCase/). Acesso em: 10 out. 2025



## Histórico de Versões

| Versão | Data       | Descrição                | Autor                                                                                                                                                                                                                                                                                                     | Revisor                                               |
| ------ | ---------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 1.0    | 10/10/2025 | Documentação dos do caso de uso | [Lara Souza](https://github.com/mel14-hub), [Pedro Henrique](https://github.com/pedrohpsantos), [Yan Matheus](https://github.com/Yanmatheus0812), [Geovanna Alves](https://github.com/GeovannaUmbelino), [Luisa de Souza](https://github.com/Luisa12ll) e [Camila Silva](https://github.com/CamilaSilvaC) | [Geovanna Alves](https://github.com/GeovannaUmbelino) |
