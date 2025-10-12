# Cenários

## Introdução

Este documento descreve a especificação de cenários de uso relacionados à experiência do usuário no aplicativo Jornada do Estudante. Os cenários foram desenvolvidos a partir de requisitos funcionais ainda não implementados, identificados durante a análise das necessidades dos usuários, com ênfase na clareza das informações e na confiabilidade da interação.

O objetivo é apresentar, de forma organizada, como o sistema deve se comportar para atender às expectativas dos usuários, adotando uma abordagem centrada na experiência do usuário e na interação entre humanos e o sistema.

## Metodologia

Os requisitos levantados foram transformados em cenários descritivos com foco na melhoria da experiência do usuário. Cada cenário representa uma situação prática que pode ocorrer durante o uso do aplicativo Jornada do Estudante e apresenta a solução esperada com base no requisito correspondente.

Para escreve os cenários optamos pelo texto estruturado, que utiliza uma linguagem natural semi-estruturada, facilitando a compreensão de cada cenário e permitindo a validação dos requisitos pelo cliente.

Para garantir padronização e servir como referência na elaboração dos cenários, foi criado um modelo a ser seguido, apresentado na Tabela 1.

### **Título: identifica o cenário.**

Tabela 1 – Descrição dos itens dos cenários.

| Item       | Descrição                                                                                                              |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| Objetivo   | Estabelece a finalidade de um cenário. O cenário deve descrever de que modo este objetivo deve ser alcançado.          |
| Contexto   | Descreve o estado inicial de um cenário, suas précondições, o local (físico) e tempo.                                  |
| Atores     | Pessoas ou estruturas organizacionais que tem um papel no cenário.                                                     |
| Recursos   | Identifica os objetos passivos com os quais lidam os atores.                                                           |
| Episódios  | Cada episódio representa uma ação realizada por um ator onde participam outros atores utilizando recursos disponíveis. |
| Restrições | Possíveis impedimentos às ações dos usuários                                                                           |
| Exceção    | É o tratamento para uma situação excepcional ou de erro.                                                               |

<p style="text-align: center; font-size: 14px;">
Fonte: <a>  </a>.
</p>

Para facilitar o trabalho em equipe, o grupo decidiu dividir de dividir em duplas, sendo assim cada uma deve elaborar e apresentar 8 cenários completos. Essa divisão permitiu a participação equilibrada e possibilitou uma análise mais detalhada de cada situação, promovendo uma compreensão coletiva dos requisitos e o desenvolvimento colaborativo da documentação.

## Participantes

A seguir temos a tabela 2, onde indica todos os participantes da elaboração dos cenários.

<font size="3"><p style="text-align: center">Tabela 2: Participantes</p></font>

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
        <td>06/10/2025</td>
         </tr>
      <tr>
        <td><a href="https://github.com/GeovannaUmbeliino">Geovanna Alves</a></td>
        <td>06/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/mel14-hub">Lara Souza</a></td>
        <td>06/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/luisa12ll">Luisa de Souza</a></td>
        <td>06/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/pedrohpsantos">Pedro Henrique</a></td>
        <td>06/10/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/Yanmatheus0812">Yan Matheus</a></td>
        <td>06/10/2025</td>
      </tr>
    </tbody>
  </table>
</div>

<font size="3"><p style="text-align:center"> Autor: <a href="https://github.com/CamilaSilvaC"> Camila Silva</a></font>


### Cenário 1: Atualizações de pagamento do Pé-de-Meia

| Item       | Descrição                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| Título     | Atualizações de pagamento do Pé-de-Meia                                                                    |
| ID         | [RQ9](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |
| Objetivo   | Apresentar atualizações sobre o pagamento em até um mês.                                                   |
| Contexto   | Estudante com benefício ativo.                                                                             |
| Atores     | Estudante, aplicativo                                                                                      |
| Recursos   | Dados financeiros do benefício                                                                             |
| Episódios  | 1. Estudante acessa a seção de pagamentos. <br>2. Sistema mostra últimas atualizações.                       |
| Restrições | Dados atrasados                                                                                            |
| Exceção    | Falha na atualização do sistema                                                                            |

<p style="font-size: 14px;"> Tabela 3 – Cenário de atualização de pagamento do pé-de-meia.<br>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a> e <a href="https://github.com/pedrohpsantos">Pedro Henrique</a></p>

### Cenário 2: Visualização de disciplina e professor

| Item       | Descrição                                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------------------------- |
| Título     | Visualização de disciplina e professor                                                                      |
| ID         | [RQ17](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |
| Objetivo   | Permitir que o estudante veja quem ministra cada disciplina.                                                |
| Contexto   | Estudante matriculado.                                                                                      |
| Atores     | Estudante, aplicativo                                                                                       |
| Recursos   | Base de dados acadêmica                                                                                     |
| Episódios  | 1. Estudante acessa informações da disciplina. <br>2. Sistema exibe professor responsável.                    |
| Restrições | Dados indisponíveis                                                                                         |
| Exceção    | Professor não cadastrado                                                                                    |

<p style="font-size: 14px;"> Tabela 4 – Cenário de vizualização da diciplina e do professor.<br>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a> e <a href="https://github.com/pedrohpsantos">Pedro Henrique</a></p>

### Cenário 3: Visualização de horário e sala

| Item       | Descrição                                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------------------------- |
| Título     | Visualização de horário e sala                                                                              |
| ID         | [RQ18](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |
| Objetivo   | Permitir que o estudante confira horários e salas.                                                          |
| Contexto   | Estudante matriculado.                                                                                      |
| Atores     | Estudante, aplicativo                                                                                       |
| Recursos   | Base de horários e salas                                                                                    |
| Episódios  | 1. Estudante seleciona disciplina. <br>2. Sistema mostra horário e sala.                                      |
| Restrições | Falta de atualização                                                                                        |
| Exceção    | Informações incorretas                                                                                      |

<p style="font-size: 14px;"> Tabela 5 – Cenário de visualização de horário e sala.<br>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a> e <a href="https://github.com/pedrohpsantos">Pedro Henrique</a></p>

### Cenário 4: Visualização de informações e trabalhos da disciplina

| Item       | Descrição                                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------------------------- |
| Título     | Visualização de informações e trabalhos da disciplina                                                       |
| ID         | [RQ19](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |
| Objetivo   | Mostrar datas, pesos e tipos de avaliações.                                                                 |
| Contexto   | Estudante com disciplinas cadastradas.                                                                      |
| Atores     | Estudante, aplicativo                                                                                       |
| Recursos   | Banco de dados de avaliações                                                                                |
| Episódios  | 1. Estudante acessa disciplina. <br>2. Sistema exibe informações de trabalhos.                                |
| Restrições | Dados desatualizados                                                                                        |
| Exceção    | Avaliações não lançadas                                                                                     |

<p style="font-size: 14px;"> Tabela 6 – Cenário de visualização de informações e trabalhos da disciplina.<br>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a> e <a href="https://github.com/pedrohpsantos">Pedro Henrique</a></p>

### Cenário 5: Visualização de notas das avaliações e trabalhos.

| Item       | Descrição                                                 |
| ---------- | --------------------------------------------------------- |
| Título     | Visualização de notas das avaliações e trabalhos          |
| ID         | [RQ20](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |
| Objetivo   | Mostrar notas obtidas pelo estudante.                     |
| Contexto   | Estudante com avaliações lançadas.                        |
| Atores     | Estudante, aplicativo                                     |
| Recursos   | Base de notas                                             |
| Episódios  | 1. Estudante acessa disciplina. <br>2. Sistema exibe notas. |
| Restrições | Notas não lançadas                                        |
| Exceção    | Falha na consulta                                         |

<p style="font-size: 14px;"> Tabela 7 – Cenário de visualização de  notas das avaliações e trabalhos.<br>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a> e <a href="https://github.com/pedrohpsantos">Pedro Henrique</a></p>

### Cenário 6: Emissão de histórico.

| Item       | Descrição                                                            |
| ---------- | -------------------------------------------------------------------- |
| Título     | Emissão de histórico                                                 |
| ID         | [RQ23](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |
| Objetivo   | Permitir que o estudante obtenha seu histórico acadêmico.            |
| Contexto   | Estudante cadastrado.                                                |
| Atores     | Estudante, aplicativo                                                |
| Recursos   | Dados acadêmicos                                                     |
| Episódios  | 1. Estudante acessa opção de histórico.<br> 2. Sistema gera documento. |
| Restrições | Dados incompletos                                                    |
| Exceção    | Falha na geração do histórico                                        |

<p style="font-size: 14px;"> Tabela 8 – Cenário de Emissão de histórico.<br>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a> e <a href="https://github.com/pedrohpsantos">Pedro Henrique</a></p>

### Cenário 7: Visualização de boletim

| Item       | Descrição                                                        |
| ---------- | ---------------------------------------------------------------- |
| Título     | Visualização de boletim                                          |
| ID         | [RQ28](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |
| Objetivo   | Permitir que o estudante veja seu boletim.                       |
| Contexto   | Estudante cadastrado.                                            |
| Atores     | Estudante, aplicativo                                            |
| Recursos   | Dados acadêmicos                                                 |
| Episódios  | 1. Estudante acessa opção de boletim. <br> 2. Sistema exibe notas. |
| Restrições | Notas não lançadas                                               |
| Exceção    | Falha na consulta                                                |

<p style="font-size: 14px;"> Tabela 9 – Cenário de visualização de boletim.<br>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a> e <a href="https://github.com/pedrohpsantos">Pedro Henrique</a></p>

### Cenário 8: Notificação de parcelas do Pé-de-Meia

| Item       | Descrição                                                                         |
| ---------- | --------------------------------------------------------------------------------- |
| Título     | Notificação de parcelas do Pé-de-Meia                                             |
| ID         | [RQ29](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |
| Objetivo   | Informar parcelas e valores do benefício.                                         |
| Contexto   | Estudante beneficiário do programa.                                               |
| Atores     | Estudante, aplicativo                                                             |
| Recursos   | Sistema de notificações, dados do benefício                                       |
| Episódios  | 1. Sistema atualiza pagamento. <br> 2. Aplicativo envia notificação ao estudante. |
| Restrições | Dados desatualizados                                                              |
| Exceção    | Notificação não enviada                                                           |

<p style="font-size: 14px;"> Tabela 10 – Cenário de visualização de boletim.<br>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a> e <a href="https://github.com/pedrohpsantos">Pedro Henrique</a></p>

### Cenário 9: Visualizar valor total do auxílio

| Item       | Descrição                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------                          |
| Título     |  Visualização do valor total  do auxílio                                                                   |
| ID         | [RQ32](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)|
| Objetivo   | Permitir que o estudante veja o valor total recebido do auxílio.                                             |
| Contexto   | Estudante beneficiário acessando informações financeiras do programa.                                      |
| Atores     | Estudante beneficiário, aplicativo                                                                                      |
| Recursos   | Banco de dados de pagamentos, interface de exibição de valores.                                            |
| Episódios  | 1. Estudante acessa a área de benefícios. <br> 2. Sistema recupera o valor total acumulado. <br> 3. Valor é exibido ao estudante.|
| Restrições | Necessidade de conexão com o servidor do programa.                                                         |
| Exceção    |   Falha na recuperação de dados financeiros.                                                               |


<p style="font-size: 14px;"> Tabela 11 – Cenário de visualização do valor total do auxílio<br>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a> e <a href="https://github.com/Yanmatheus0812">Yan Matheus</a></p>

### Cenário 10: Visualizar conta bancária cadastrada

| Item       | Descrição                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------                          |
| Título     | Visualização da conta bancária cadastrada                                                                  |
| ID         | [RQ33](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)|
| Objetivo   | Exibir os dados da conta bancária onde o auxílio é depositado.                                             |
| Contexto   | Estudante beneficiário consultando suas informações bancárias.                                             |
| Atores     | Estudante beneficiário, aplicativo                                                                                      |
| Recursos   | Base de dados bancária, autenticação do estudante                                                            |
| Episódios  | 1. Estudante acessa o menu “Conta bancária”. <br> 2. Sistema recupera os dados cadastrados. <br> 3. Informações são exibidas na tela. |
| Restrições | Informações sensíveis devem ser parcialmente ocultadas (ex: número da conta).                              |
| Exceção    | Conta bancária não encontrada ou não cadastrada.                                                           |


<p style="font-size: 14px;"> Tabela 12 – Cenário de visualização da conta bancária cadastrada. <br>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a> e <a href="https://github.com/Yanmatheus0812">Yan Matheus</a></p>

### Cenário 11: Visualizar dia do pagamento

| Item       | Descrição                                                                                                               |
| ---------- | ---------------------------------------------------------------------------------                                       |
| Título     | Visualização do dia de pagamento do auxílio                                                                             |
| ID         | [RQ34](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)             |
| Objetivo   | Informar ao estudante a data prevista para o pagamento do benefício.                                                      |
| Contexto   | Estudante beneficiário acessando informações sobre o cronograma de pagamentos.                                          |
| Atores     | Estudante beneficiário, aplicativo                                                                                                   |
| Recursos   | Base de dados de cronogramas                                                                                            |
| Episódios  | 1. Estudante acessa a aba “Pagamentos”. <br> 2. Sistema busca a próxima data de pagamento. <br> 3. Data é exibida na tela.|
| Restrições | Datas sujeitas a alteração conforme calendário do programa.                                                             |
| Exceção    | Data de pagamento indisponível.                                                                                         |


<p style="font-size: 14px;"> Tabela 13 – Cenário de visualização do dia do pagamento. <br>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a> e <a href="https://github.com/Yanmatheus0812">Yan Matheus</a></p>

### Cenário 12: Acesso a fórum de dúvidas

| Item       | Descrição                                                                                                               |
| ---------- | ---------------------------------------------------------------------------------                                       |
| Título     | Acesso ao fórum de dúvidas                                                                                              |
| ID         | [RQ35](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)             |
| Objetivo   | Permitir que o estudante participe de discussões e tire dúvidas sobre o auxílio.                                          |
| Contexto   | Estudante buscando suporte e informações sobre o benefício.                                                             |
| Atores     | Estudante,aplicativo                                                                                                    |
| Recursos   | Plataforma de fórum, sistema de login, conexão com internet                                                             |
| Episódios  | 1. Estudante acessa o menu “Fórum de dúvidas”. <br> 2. Sistema exibe tópicos disponíveis.  <br> 3. Estudante interage com as postagens.|
| Restrições | Requer autenticação.                                                                                                    |
| Exceção    | Fórum temporariamente fora do ar.                                                                                       |


<p style="font-size: 14px;"> Tabela 14 – Cenário de acesso a fórum de dúvidas. <br>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a> e <a href="https://github.com/Yanmatheus0812">Yan Matheus</a></p>

### Cenário 13: Canal de conversa sobre o auxílio

| Item       | Descrição                                                                                                          | 
| ---------- | ---------------------------------------------------------------------------------                                  |
| Título     | Atendimento em canal de conversa                                                                                   |
| ID         | [RQ36](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)        |
| Objetivo   | Possibilitar que o estudante receba atendimento via chat sobre o auxílio.                                            |
| Contexto   | Estudante com dúvidas ou problemas relacionados ao benefício.                                                      |
| Atores     | Estudante, atendente virtual ou humano, aplicativo                                                                 |
| Recursos   | Sistema de chat, base de dados de atendimento, conexão à internet                                                  |
| Episódios  | 1. Estudante acessa o canal de conversa. <br> 2. Sistema inicia sessão de chat. <br> 3. Estudante envia dúvida e recebe resposta.|
| Restrições | Disponibilidade limitada a horários de atendimento.                                                                |
| Exceção    | Chat indisponível ou sem atendentes disponíveis.                                                                   |


<p style="font-size: 14px;"> Tabela 15 – Cenário de acesso a canal de conversa sobre o auxílio. <br>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a> e <a href="https://github.com/Yanmatheus0812">Yan Matheus</a></p>

### Cenário 14: Visualização de calendário de eventos

| Item       | Descrição                                                                                                                 |
| ---------- | ---------------------------------------------------------------------------------                                         |
| Título     | Visualização de eventos em calendário                                                                                     |
| ID         | [RQ37](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)               |
| Objetivo   | Permitir ao estudante consultar as datas de eventos importantes.                                                            |
| Contexto   | Estudante interessado em eventos escolares.                                                                               |
| Atores     | Estudante, aplicativo                                                                                                     |
| Recursos   | Sistema de calendário, base de dados de eventos                                                                           |
| Episódios  | 1. Estudante acessa o menu “Calendário”. <br> 2. Sistema exibe eventos programados. <br> 3. Estudante seleciona um evento para mais detalhes.|
| Restrições | Eventos precisam estar previamente cadastrados.                                                                           |
| Exceção    | Nenhum evento disponível para o período selecionado.                                                                      |


<p style="font-size: 14px;"> Tabela 16 – Cenário de visualização de calendário de eventos.<br>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a> e <a href="https://github.com/Yanmatheus0812">Yan Matheus</a></p>

### Cenário 15: Ranqueamento de matérias por nota

| Item       | Descrição                                                                                                               |
| ---------- | ---------------------------------------------------------------------------------                                       |
| Título     | Ranqueamento de matérias por nota                                                                                       |
| ID         | [RQ41](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)             |
| Objetivo   | Exibir uma lista das matérias do estudante ordenadas por desempenho.                                                    |
| Contexto   | Estudante acompanhando seu rendimento escolar.                                                                          |
| Atores     | Estudante, aplicativo                                                                                                   |
| Recursos   | Base de dados de notas, sistema de ordenação e exibição                                                                 |
| Episódios  | 1. Estudante acessa a aba “Desempenho”. <br> 2. Sistema calcula e ordena as matérias por nota. <br> 3. Resultado é exibido em forma de ranking.|
| Restrições | Requer atualização periódica das notas.                                                                                 |
| Exceção    | Dados de notas incompletos ou inconsistentes.                                                                           |


<p style="font-size: 14px;"> Tabela 17 – Cenário de ranqueamento de matérias por nota.<br>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a> e <a href="https://github.com/Yanmatheus0812">Yan Matheus</a></p>

### Cenário 16: Edição de informações bancárias pelo gov.br

| Item       | Descrição                                                                                                              |
| ---------- | ---------------------------------------------------------------------------------                                      |
| Título     | Edição de informações bancárias pelo gov.br                                                                            |
| ID         | [RQ44](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)            |
| Objetivo   | Permitir que o estudante altere suas informações bancárias por meio do portal gov.br.                                    |
| Contexto   | Estudante que precisa atualizar sua conta bancária vinculada ao auxílio.                                               |
| Atores     | Estudante beneficiário, aplicativo, sistema gov.br                                                                                  |
| Recursos   | Integração com gov.br, autenticação segura                                                                             |
| Episódios  | 1. Estudante acessa a opção “Editar dados bancários”. <br> 2. Sistema redireciona para o gov.br.  <br> 3. Estudante realiza login e faz a atualização. |
| Restrições | A alteração só é válida após confirmação no gov.br.                                                                    |
| Exceção    | Erro na integração com o gov.br ou falha de autenticação.                                                              |


<p style="font-size: 14px;"> Tabela 18 – Cenário de edição de informações bancárias pelo gov.br.<br>
Fonte: <a  href="https://github.com/CamilaSilvaC"> Camila Silva</a> e <a href="https://github.com/Yanmatheus0812">Yan Matheus</a></p>

### Cenário 17: Inserir atividades na agenda

| Item       | Descrição                                                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Título     | Inserir atividades na agenda                                                                                                                     |
| ID         | [R47](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)                                       |
| Objetivo   | Permitir que o estudante registre novas atividades.                                                                                                |
| Contexto   | Estudante cadastrado.                                                                                                                              |
| Atores     | Estudante, aplicativo                                                                                                                              |
| Recursos   | Agenda digital                                                                                                                                   |
| Episódios  | 1. Estudante abre agenda. <br>2. Seleciona opção de adicionar atividade. <br>3. Preenche título, descrição e data/hora. <br>4. Salva atividade. |
| Restrições | Dados incompletos                                                                                                                                |
| Exceção    | Falha ao salvar atividade                                                                                                                        |

Tabela 19 – Cenário de inserir atividades na agenda. <br>
Fonte: <a href="https://github.com/mel14-hub">Lara Mota</a> e
<a href="https://github.com/luisa12ll">Luisa de Souza</a>

### Cenário 18: Editar atividades na agenda.

| Item       | Descrição                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| Título     | Editar atividades na agenda                                                                                |
| ID         | [R48](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |
| Objetivo   | Permitir que o estudante modifique atividades existentes.                                                    |
| Contexto   | Estudante com atividades cadastradas.                                                                        |
| Atores     | Estudante, aplicativo                                                                                        |
| Recursos   | Agenda digital                                                                                             |
| Episódios  | 1. Estudante acessa atividade existente. <br>2. Faz alterações. <br>3. Salva mudanças.                       |
| Restrições | Falta de internet                                                                                          |
| Exceção    | Falha ao atualizar atividade                                                                               |

Tabela 20 – Cenário de editar atividades na agenda. <br>
Fonte: <a href="https://github.com/mel14-hub">Lara Mota</a> e
<a href="https://github.com/luisa12ll">Luisa de Souza</a>

### Cenário 19: Excluir atividades na agenda

| Item       | Descrição                                                                                                            |
| ---------- | -------------------------------------------------------------------------------------------------------------------- |
| Título     | Excluir atividades na agenda                                                                                         |
| ID         | [R49](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)           |
| Objetivo   | Permitir que o estudante remova atividades da agenda.                                                                  |
| Contexto   | Estudante com atividades cadastradas.                                                                                  |
| Atores     | Estudante, aplicativo                                                                                                  |
| Recursos   | Agenda digital                                                                                                       |
| Episódios  | 1. Estudante abre agenda. <br>2. Estudante acessa atividade. <br>3. Seleciona excluir. <br>4. Sistema confirma exclusão. |
| Restrições | Falha de conexão                                                                                                     |
| Exceção    | Atividade não removida                                                                                               |

Tabela 21 – Cenário de excluir atividades na agenda <br>
Fonte: <a href="https://github.com/mel14-hub">Lara Mota</a> e
<a href="https://github.com/luisa12ll">Luisa de Souza</a>
### Cenário 20: Inserir horário e data da atividade

| Item       | Descrição                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| Título     | Inserir horário e data da atividade                                                                        |
| ID         | [R51](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |
| Objetivo   | Permitir que o estudante defina data e horário de cada atividade.                                            |
| Contexto   | Estudante adicionando ou editando atividade.                                                                 |
| Atores     | Estudante, aplicativo                                                                                        |
| Recursos   | Agenda digital                                                                                             |
| Episódios  | 1. Estudante seleciona atividade. <br>2. Define data e horário. <br>3. Salva alterações.                     |
| Restrições | Data/hora no passado ou conflito de horários                                                               |
| Exceção    | Falha ao salvar atividade                                                                                  |

Tabela 22 – Cenário de inserir horário e data na atividade<br>
Fonte: <a href="https://github.com/mel14-hub">Lara Mota</a> e
<a href="https://github.com/luisa12ll">Luisa de Souza</a>

### Cenário 21: Fórum entre estudantes

| Item       | Descrição                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| Título     | Fórum entre estudantes                                                                                     |
| ID         | [R57](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |
| Objetivo   | Permitir que estudantes troquem informações e dúvidas.                                                     |
| Contexto   | Estudante logado no módulo de fóruns.                                                                      |
| Atores     | Estudante, aplicativo                                                                                      |
| Recursos   | Fórum online                                                                                               |
| Episódios  | 1. Estudante acessa fórum. <br>2. Visualiza perguntas e respostas. <br>3. Posta dúvida ou resposta.        |
| Restrições | Mensagens ofensivas ou spam                                                                                |
| Exceção    | Falha na postagem                                                                                          |

Tabela 23 – Cenário de fórum entre estudantes <br>
Fonte: <a href="https://github.com/mel14-hub">Lara Mota</a> e
<a href="https://github.com/luisa12ll">Luisa de Souza</a>

### Cenário 22: Emissão de diplomas

| Item       | Descrição                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| Título     | Emissão de diplomas                                                                                        |
| ID         | [R59](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |
| Objetivo   | Permitir que o estudante gere seu diploma digital.                                                         |
| Contexto   | Estudante formado e cadastrado.                                                                            |
| Atores     | Estudantes, aplicativo                                                                                     |
| Recursos   | Dados acadêmicos, gerador de diploma                                                                       |
| Episódios  | 1. Estudante solicita diploma. <br>2. Sistema gera documento. <br>3. Estudante salva ou imprime.             |
| Restrições | Sistema indisponível                                                                                       |
| Exceção    | Falha na geração do diploma                                                                                |

Tabela 24 – Cenário de emissão de diplomas <br>
Fonte: <a href="https://github.com/mel14-hub">Lara Mota</a> e
<a href="https://github.com/luisa12ll">Luisa de Souza</a>

### Cenário 23: Visualização de certificados

| Item       | Descrição                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| Título     | Visualização de certificados                                                                               |
| ID         | [R61](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |
| Objetivo   | Permitir que o estudante veja certificados de cursos e atividades.                                           |
| Contexto   | Estudante cadastrado.                                                                                      |
| Atores     | Estudantes, aplicativo                                                                                     |
| Recursos   | Base de certificados                                                                                       |
| Episódios  | 1. Estudante acessa certificados. <br>2. Seleciona certificado. <br>3. Sistema exibe certificado.            |
| Restrições | Falta de atualização                                                                                       |
| Exceção    | Certificado não encontrado                                                                                 |

Tabela 25 – Cenário de visualização de certificados. <br>
Fonte: <a href="https://github.com/mel14-hub">Lara Mota</a> e
<a href="https://github.com/luisa12ll">Luisa de Souza</a>

### Cenário 24: Visualização de ocorrências

| Item       | Descrição                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| Título     | Visualização de ocorrências                                                                                |
| ID         | [R62](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |
| Objetivo   | Permitir que o estudantes visualize ocorrências registradas na instituição.                                |
| Contexto   | Estudantes cadastrado.                                                                                     |
| Atores     | Estudantes, aplicativo                                                                                     |
| Recursos   | Base de ocorrências                                                                                        |
| Episódios  | 1. Estudante acessa seção de ocorrências. <br>2. Sistema exibe ocorrências registradas.                      |
| Restrições | Falta de atualização                                                                                       |
| Exceção    | Ocorrência não encontrada                                                                                  |

Tabela 26 – Cenário de visualização de ocorrências <br>
Fonte: <a href="https://github.com/mel14-hub">Lara Mota</a> e
<a href="https://github.com/luisa12ll">Luisa de Souza</a>

## Gravação 

### Participantes 
A seguir temos a tabela 27, onde indica todos os menbros da equipe que participaram da gravação.

<font size="3"><p style="text-align: center">Tabela 27: Participantes</p></font>

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


### Vídeo
A seguir, apresentamos a gravação referente à elaboração dos **cenários**.

<iframe width="560" height="315" src="https://www.youtube.com/embed/iwwYGksRwcY?si=Ef5OWspuIle-WEXJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Referência bibliográfica



## Histórico de Versões

| Versão | Data       | Descrição                        | Autor(es)                                             | Revisor(es)                                                                                      |
| ------ | ---------- | -------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 1.0    | 06/10/2025 | Adicionando lista de verificação | [Geovanna Alves](https://github.com/GeovannaUmbelino) | [Luisa de Souza](https://github.com/Luisa12ll) e [Camila Silva](https://github.com/CamilaSilvaC) |
