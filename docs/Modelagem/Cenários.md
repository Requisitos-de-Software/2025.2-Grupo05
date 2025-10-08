# Cenários

## Introdução

Este documento descreve a especificação de cenários de uso relacionados à experiência do usuário no aplicativo Jornada do Estudante. Os cenários foram desenvolvidos a partir de requisitos funcionais ainda não implementados, identificados durante a análise das necessidades dos usuários, com ênfase na clareza das informações e na confiabilidade da interação.

O objetivo é apresentar, de forma organizada, como o sistema deve se comportar para atender às expectativas dos usuários, adotando uma abordagem centrada na experiência do usuário e na interação entre humanos e o sistema.

## Metodologia

Os requisitos levantados foram transformados em cenários descritivos com foco na melhoria da experiência do usuário. Cada cenário representa uma situação prática que pode ocorrer durante o uso do aplicativo Jornada do Estudante e apresenta a solução esperada com base no requisito correspondente.

Para escreve os cenários optamos pelo texto estruturado, que utiliza uma linguagem natural semi-estruturada, facilitando a compreensão de cada cenário e permitindo a validação dos requisitos pelo cliente [2].

Para garantir padronização e servir como referência na elaboração dos cenários, foi criado um modelo a ser seguido, apresentado na Tabela 1.

### **Título: identifica o cenário.**

Tabela 1 – Descrição dos itens dos cenários.

| Item      | Descrição |
| --------- | --------- |
| Objetivo  | Estabelece a finalidade de um cenário. O cenário deve descrever de que modo este objetivo deve ser alcançado. |
| Contexto  | Descreve o estado inicial de um cenário, suas précondições, o local (físico) e tempo. |
| Atores    | Pessoas ou estruturas organizacionais que tem um papel no cenário. |
| Recursos  | Identifica os objetos passivos com os quais lidam os atores. |
| Episódios | Cada episódio representa uma ação realizada por um ator onde participam outros atores utilizando recursos disponíveis. |
| Restrições | Possíveis impedimentos às ações dos usuários     |
| Exceção   | É o tratamento para uma situação excepcional ou de erro.|

<p style="text-align: center; font-size: 14px;">
Fonte: <a> Penha, Igor 2023 </a>.
</p>

Para facilitar o trabalho em equipe, [Geovanna Alves](https://github.com/GeovannaUmbelino), [Luisa de Souza](https://github.com/Luisa12ll) e [Camila Silva](https://github.com/CamilaSilvaC) decidiram dividir as tarefas, sendo assim cada uma deve elaborar  e apresentar doze cenários completos. Essa divisão permitiu a participação equilibrada e possibilitou uma análise mais detalhada de cada situação, promovendo uma compreensão coletiva dos requisitos e o desenvolvimento colaborativo da documentação.

### Cenário 1: Atualizações de pagamento do Pé-de-Meia


 | Item | Descrição |
|--------|----------|
| Título | Atualizações de pagamento do Pé-de-Meia |
| ID | [RQ9](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)       |
| Objetivo | Apresentar atualizações sobre o pagamento em até um mês. |
| Contexto | Estudante com benefício ativo. |
| Atores | Estudante, aplicativo |
| Recursos | Dados financeiros do benefício |
| Episódios | 1. Usuário acessa a seção de pagamentos. <br>2. Sistema mostra últimas atualizações. |
| Restrições | Dados atrasados |
| Exceção | Falha na atualização do sistema |

<p style="font-size: 14px;"> Tabela 2 – Cenário de atualização de pagamento do pé-de-meia.<br>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>.</p>


### Cenário 2: Visualização de disciplina e professor

| Item | Descrição |
|--------|----------|
| Título | Visualização de disciplina e professor |
| ID |   [RQ17](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)   |
| Objetivo | Permitir que o estudante veja quem ministra cada disciplina. |
| Contexto | Estudante matriculado. |
| Atores | Estudante, aplicativo |
| Recursos | Base de dados acadêmica |
| Episódios | 1. Usuário acessa informações da disciplina. <br>2. Sistema exibe professor responsável. |
| Restrições | Dados indisponíveis |
| Exceção | Professor não cadastrado |

<p style="font-size: 14px;"> Tabela 3 – Cenário de vizualização da diciplina e do professor.<br>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>.</p>

### Cenário 3: Visualização de horário e sala

| Item | Descrição |
|--------|----------|
| Título | Visualização de horário e sala |
| ID |   [RQ18](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)   |
| Objetivo | Permitir que o estudante confira horários e salas. |
| Contexto | Estudante matriculado. |
| Atores | Estudante, aplicativo |
| Recursos | Base de horários e salas |
| Episódios | 1. Usuário seleciona disciplina. <br>2. Sistema mostra horário e sala. |
| Restrições | Falta de atualização |
| Exceção | Informações incorretas |

<p style="font-size: 14px;"> Tabela 4 – Cenário de visualização de horário e sala.<br>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>.</p>

### Cenário 4: Visualização de informações e trabalhos da disciplina

| Item | Descrição |
|--------|----------|
| Título | Visualização de informações e trabalhos da disciplina |
| ID |   [RQ19](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)   |
| Objetivo | Mostrar datas, pesos e tipos de avaliações. |
| Contexto | Estudante com disciplinas cadastradas. |
| Atores | Estudante, aplicativo |
| Recursos | Banco de dados de avaliações |
| Episódios | 1. Usuário acessa disciplina. <br>2. Sistema exibe informações de trabalhos. |
| Restrições | Dados desatualizados |
| Exceção | Avaliações não lançadas |

<p style="font-size: 14px;"> Tabela 5 – Cenário de visualização de informações e trabalhos da disciplina.<br>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>.</p>

### Cenário 5: Visualização de notas das avaliações e trabalhos.

| Item | Descrição |
|--------|----------|
| Título | Visualização de notas das avaliações e trabalhos |
| Objetivo | Mostrar notas obtidas pelo estudante. |
| Contexto | Estudante com avaliações lançadas. |
| Atores | Estudante, aplicativo |
| Recursos | Base de notas |
| Episódios | 1. Usuário acessa disciplina. <br>2. Sistema exibe notas. |
| Restrições | Notas não lançadas |
| Exceção | Falha na consulta |

<p style="font-size: 14px;"> Tabela 6 – Cenário de visualização de  notas das avaliações e trabalhos.<br>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>.</p>

### Cenário 6: Emissão de histórico.

| Item | Descrição |
|--------|----------|
| Título | Emissão de histórico|
| Objetivo | Permitir que o estudante obtenha seu histórico acadêmico. |
| Contexto | Estudante cadastrado. |
| Atores | Estudante, aplicativo |
| Recursos | Dados acadêmicos |
| Episódios | 1. Usuário acessa opção de histórico.<br> 2. Sistema gera documento. |
| Restrições | Dados incompletos |
| Exceção | Falha na geração do histórico |

<p style="font-size: 14px;"> Tabela 7 – Cenário de Emissão de histórico.<br>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>.</p>

### Cenário 7: Visualização de boletim

| Item | Descrição |
|--------|----------|
| Título | Visualização de boletim|
| Objetivo | Permitir que o estudante veja seu boletim.|
| Contexto | Estudante cadastrado. |
| Atores | Estudante, aplicativo |
| Recursos | Dados acadêmicos |
| Episódios | 1. Usuário acessa opção de boletim. <br> 2. Sistema exibe notas. |
| Restrições |Notas não lançadas|
| Exceção | Falha na consulta|

<p style="font-size: 14px;"> Tabela 8 – Cenário de visualização de boletim.<br>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>.</p>

### Cenário 8: Notificação de parcelas do Pé-de-Meia

| Item | Descrição |
|--------|----------|
| Título |Notificação de parcelas do Pé-de-Meia|
| Objetivo | Informar parcelas e valores do benefício.|
| Contexto | Estudante beneficiário do programa. |
| Atores | Estudante, aplicativo |
| Recursos | Sistema de notificações, dados do benefício |
| Episódios | 1. Sistema atualiza pagamento. <br> 2. Aplicativo envia notificação ao estudante. |
| Restrições |Dados desatualizados|
| Exceção | Notificação não enviada|

<p style="font-size: 14px;"> Tabela 9 – Cenário de visualização de boletim.<br>
Fonte: <a  href="https://github.com/GeovannaUmbelino"> Geovanna Alves </a>.</p>

### Cenário 17: Inserir atividades na agenda

| Item | Descrição |
|--------|----------|
| Título | Inserir atividades na agenda |
| ID | [R47](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)       |
| Objetivo | Permitir que o usuário registre novas atividades. |
| Contexto | Usuário cadastrado. |
| Atores | Usuário, aplicativo |
| Recursos | Agenda digital |
| Episódios | 1. Usuário abre agenda. <br>2. Seleciona opção de adicionar atividade. <br>3. Preenche título, descrição e data/hora. <br>4. 4. Salva atividade.|
| Restrições | Dados incompletos |
| Exceção | Falha ao salvar atividade |

<p style="font-size: 14px;"> Tabela 17 – Inserir atividades na agenda.<br>
Fonte: <a  href="https://github.com/luisa12ll"> Luísa de Souza </a>.</p

*Tabela 17 – Cenário de inserir atividades na agenda.* *Fonte: [Luísa de Souza](https://github.com/luisa12ll)*


### Cenário 18: **Editar atividades na agenda.**

| Item | Descrição |
|--------|----------|
| Título | Editar atividades na agenda|
| ID | [R48](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)|
| Objetivo | Permitir que o usuário modifique atividades existentes. |
| Contexto | Usuário com atividades cadastradas. |
| Atores | Usuário, aplicativo |
| Recursos | Agenda digital |
| Episódios | 1. Usuário acessa atividade existente. <br>2. Faz alterações. <br>3. Salva mudanças. |
| Restrições | Falta de internet |
| Exceção | Falha ao atualizar atividade |         


*Tabela 18 – Cenário de editar atividades na agenda.* *Fonte: [Luísa de Souza](https://github.com/luisa12ll)*

                                                                     
### Cenário 19: Excluir atividades na agenda

| Item | Descrição |
|--------|----------|
| Título | Excluir atividades na agenda |
| ID | [R49](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)       |
| Objetivo | Permitir que o usuário remova atividades da agenda. |
| Contexto | Usuário com atividades cadastradas. |
| Atores | Usuário, aplicativo |
| Recursos | Agenda digital |
| Episódios | 1. Usuário abre agenda. <br>2. Usuário acessa atividade. <br>3. Seleciona excluir. <br>4. Sistema confirma exclusão. |
| Restrições | Falha de conexão |
| Exceção | Atividade não removida |

*Tabela 19 – Cenário de excluir atividades na agenda* *Fonte: [Luísa de Souza](https://github.com/luisa12ll)*

                                                                     
### Cenário 20: Inserir horário e data na atividade

| Item | Descrição |
|--------|----------|
| Título | Inserir horário e data na atividade |
| ID | [R51](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)       |
| Objetivo | Permitir que o usuário defina data e horário de cada atividade. |
| Contexto | Usuário adicionando ou editando atividade. |
| Atores | Usuário, aplicativo |
| Recursos | Agenda digital |
| Episódios | 1. Usuário seleciona atividade. <br>2. Define data e horário. <br>3. Salva alterações. |
| Restrições | Data/hora no passado ou conflito de horários |
| Exceção | Falha ao salvar atividade |

<p style="font-size: 14px;"> Tabela 20 – Cenário de inserir horário e data na atividade.<br>
Fonte: <a  href="https://github.com/luisa12ll"> Luísa de Souza </a>.</p

*Tabela 20 – Cenário de inserir horário e data na atividade* *Fonte: [Luísa de Souza](https://github.com/luisa12ll)*


### Cenário 21: Fórum entre estudantes

| Item | Descrição |
|--------|----------|
| Título | Fórum entre estudantes |
| ID | [R57](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)       |
| Objetivo | Permitir que estudantes troquem informações e dúvidas. |
| Contexto | Estudante logado no módulo de fóruns. |
| Atores | Estudante, aplicativo |
| Recursos | Fórum online |
| Episódios | 1. Estudante acessa fórum. <br>2. Visualiza perguntas e respostas. <br>3. Posta dúvida ou resposta. |
| Restrições | Mensagens ofensivas ou spam |
| Exceção | Falha na postagem |

*Tabela 21 – Cenário de fórum entre estudantes* *Fonte: [Luísa de Souza](https://github.com/luisa12ll)*


### Cenário 22: Emissão de diplomas

 Item | Descrição |
|--------|----------|
| Título | Emissão de diplomas |
| ID | [R59](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)       |
| Objetivo | Permitir que o estudante gere seu diploma digital. |
| Contexto | Estudante formado e cadastrado. |
| Atores | Estudantes, aplicativo |
| Recursos | Dados acadêmicos, gerador de diploma |
| Episódios | 1. Usuário solicita diploma. <br>2. Sistema gera documento. <br>3. Estudante salva ou imprime. |
| Restrições | Sistema indisponível |
| Exceção | Falha na geração do diploma |

*Tabela 22 – Cenário de emissão de diplomas* *Fonte: [Luísa de Souza](https://github.com/luisa12ll)*


### Cenário 23: Visualização de certificados

| Item | Descrição |
|--------|----------|
| Título | Visualização de certificados |
| ID | [R61](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/)       |
| Objetivo | Permitir que o usuário veja certificados de cursos e atividades. |
| Contexto | Estudante cadastrado. |
| Atores | Estudantes, aplicativo |
| Recursos | Base de certificados |
| Episódios | 1. Usuário acessa certificados. <br>2. Seleciona certificado. <br>3. Sistema exibe certificado. |
| Restrições | Falta de atualização |
| Exceção | Certificado não encontrado |

*Tabela 23 – Cenário de visualização de certificados.* *Fonte: [Luísa de Souza](https://github.com/luisa12ll)*
                                                                     
### Cenário 24: Visualização de ocorrências


| Item | Descrição |
|--------|----------|
| Título | Visualização de ocorrências |
| ID | [R62](https://requisitos-de-software.github.io/2025.2-Grupo05/Elicita%C3%A7%C3%A3o/Requisitos-Elicitados/) |
| Objetivo | Permitir que o estudantes visualize ocorrências registradas na instituição. |
| Contexto | Estudantes cadastrado. |
| Atores | Estudantes, aplicativo |
| Recursos | Base de ocorrências |
| Episódios | 1. Usuário acessa seção de ocorrências. <br>2. Sistema exibe ocorrências registradas. |
| Restrições | Falta de atualização |
| Exceção | Ocorrência não encontrada |

*Tabela 24 – Cenário de visualização de ocorrências* *Fonte: [Luísa de Souza](https://github.com/luisa12ll)*


# Histórico de Versões

| Versão | Data       | Descrição                    | Autor(es)                          | Revisor(es)                          |
|--------|------------|------------------------------|-----------------------------------|-------------------------------------|
| 1.0    | 06/10/2025 | Adicionando lista de verificação  | [Geovanna Alves](https://github.com/GeovannaUmbelino) |[Luisa de Souza](https://github.com/Luisa12ll) e [Camila Silva](https://github.com/CamilaSilvaC) |


