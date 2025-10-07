# Cenários

## Introdução

Este documento descreve a especificação de cenários de uso relacionados à experiência do usuário no aplicativo Jornada do Estudante. Os cenários foram desenvolvidos a partir de requisitos funcionais ainda não implementados, identificados durante a análise das necessidades dos usuários, com ênfase na clareza das informações e na confiabilidade da interação.

O objetivo é apresentar, de forma organizada, como o sistema deve se comportar para atender às expectativas dos usuários, adotando uma abordagem centrada na experiência do usuário e na interação entre humanos e o sistema.

## Metodologia

Os requisitos levantados foram transformados em cenários descritivos com foco na melhoria da experiência do usuário. Cada cenário representa uma situação prática que pode ocorrer durante o uso do aplicativo Jornada do Estudante e apresenta a solução esperada com base no requisito correspondente.

Para escreve os cenários optamos pelo texto estruturado, que utiliza uma linguagem natural semi-estruturada, facilitando a compreensão de cada cenário e permitindo a validação dos requisitos pelo cliente [2].

Para garantir padronização e servir como referência na elaboração dos cenários, foi criado um modelo a ser seguido, apresentado na Tabela 1.

### **Título: identifica o cenário.**

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
Tabela 1 – Descrição dos itens dos cenários.<br>
Fonte <a> Penha, Igor 2023 </a>.
</p>

Para facilitar o trabalho em equipe, [Geovanna Alves](https://github.com/GeovannaUmbelino), [Luisa de Souza](https://github.com/Luisa12ll) e [Camila Silva](https://github.com/CamilaSilvaC) decidiram dividir as tarefas, sendo assim cada uma deve elaborar  e apresentar doze cenários completos. Essa divisão permitiu a participação equilibrada e possibilitou uma análise mais detalhada de cada situação, promovendo uma compreensão coletiva dos requisitos e o desenvolvimento colaborativo da documentação.


 Item | Descrição |
|--------|----------|
| Título | Unificação de informações acadêmicas |
| Objetivo | Permitir que estudantes visualizem todos os dados de cursos, disciplinas e progresso em um só lugar. |
| Contexto | Estudante matriculado em uma instituição de ensino, com conta ativa no aplicativo. |
| Atores | Estudante, aplicativo |
| Recursos | Base de dados acadêmica, aplicativo |
| Episódios | 1. Estudante acessa o aplicativo. <br>2. Seleciona opção de visualizar histórico acadêmico. <br>3. Sistema apresenta cursos, disciplinas e progresso. |
| Restrições | Dados desatualizados ou indisponíveis |
| Exceção | Falha na sincronização com sistema acadêmico |

| Item | Descrição |
|--------|----------|
| Título | Acompanhamento do programa Pé-de-Meia |
| Objetivo | Permitir ao estudante acompanhar o status de seu benefício. |
| Contexto | Estudante inscrito no programa, com acesso ao aplicativo. |
| Atores | Estudante, aplicativo |
| Recursos | Dados do programa Pé-de-Meia |
| Episódios | 1. Usuário abre o aplicativo. <br>2. Seleciona a opção de Pé-de-Meia. <br>3. Sistema mostra status atual do benefício. |
| Restrições | Sistema do programa fora do ar |
| Exceção | Dados do estudante não encontrados |

| Item | Descrição |
|--------|----------|
| Título | Visualização de faltas do estudante |
| Objetivo | Permitir que o estudante confira suas faltas em cada disciplina. |
| Contexto | Estudante matriculado e com histórico de presença no sistema. |
| Atores | Estudante, aplicativo |
| Recursos | Registro de presença |
| Episódios | 1. Usuário acessa a opção de faltas. <br>2. Sistema exibe faltas por disciplina. |
| Restrições | Falha de sincronização |
| Exceção | Histórico de faltas indisponível |

| Item | Descrição |
|--------|----------|
| Título | Atualizações de pagamento do Pé-de-Meia |
| Objetivo | Apresentar atualizações sobre o pagamento em até um mês. |
| Contexto | Estudante com benefício ativo. |
| Atores | Estudante, aplicativo |
| Recursos | Dados financeiros do benefício |
| Episódios | 1. Usuário acessa a seção de pagamentos. <br>2. Sistema mostra últimas atualizações. |
| Restrições | Dados atrasados |
| Exceção | Falha na atualização do sistema |

| Item | Descrição |
|--------|----------|
| Título | Informar curso estudado |
| Objetivo | Permitir que o usuário registre cursos que está cursando ou já cursou. |
| Contexto | Estudante cadastrado no aplicativo. |
| Atores | Estudante, aplicativo |
| Recursos | Banco de dados de cursos |
| Episódios | 1. Usuário abre seção de cursos. <br>2. Seleciona opção de adicionar curso. <br>3. Preenche informações e salva. |
| Restrições | Curso não listado |
| Exceção | Falha ao salvar dados |

| Item | Descrição |
|--------|----------|
| Título | Recebimento de novidades do Governo Federal |
| Objetivo | Notificar usuários sobre novidades em educação. |
| Contexto | Estudante cadastrado e com acesso à internet. |
| Atores | Estudante, aplicativo, sistema de comunicação |
| Recursos | Canal de comunicação, notificações |
| Episódios | 1. Sistema envia novidades. <br>2. Aplicativo recebe e exibe para usuário. |
| Restrições | Falta de internet |
| Exceção | Mensagem não entregue |

| Item | Descrição |
|--------|----------|
| Título | Visualização de disciplina e professor |
| Objetivo | Permitir que o estudante veja quem ministra cada disciplina. |
| Contexto | Estudante matriculado. |
| Atores | Estudante, aplicativo |
| Recursos | Base de dados acadêmica |
| Episódios | 1. Usuário acessa informações da disciplina. <br>2. Sistema exibe professor responsável. |
| Restrições | Dados indisponíveis |
| Exceção | Professor não cadastrado |

| Item | Descrição |
|--------|----------|
| Título | Visualização de horário e sala |
| Objetivo | Permitir que o estudante confira horários e salas. |
| Contexto | Estudante matriculado. |
| Atores | Estudante, aplicativo |
| Recursos | Base de horários e salas |
| Episódios | 1. Usuário seleciona disciplina. <br>2. Sistema mostra horário e sala. |
| Restrições | Falta de atualização |
| Exceção | Informações incorretas |

| Item | Descrição |
|--------|----------|
| Título | Visualização de informações e trabalhos da disciplina |
| Objetivo | Mostrar datas, pesos e tipos de avaliações. |
| Contexto | Estudante com disciplinas cadastradas. |
| Atores | Estudante, aplicativo |
| Recursos | Banco de dados de avaliações |
| Episódios | 1. Usuário acessa disciplina. <br>2. Sistema exibe informações de trabalhos. |
| Restrições | Dados desatualizados |
| Exceção | Avaliações não lançadas |

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

| Item | Descrição |
|--------|----------|
| Título | Notificação de avaliações |
| Objetivo | Avisar sobre avaliações uma semana antes e dois dias antes. |
| Contexto | Estudante com disciplina ativa. |
| Atores | Estudante, aplicativo |
| Recursos | Sistema de notificações |
| Episódios | 1. Sistema agenda notificações. <br>2. Aplicativo envia alertas. |
| Restrições | Falta de conexão |
| Exceção | Notificação não entregue |

| Item | Descrição |
|--------|----------|
| Título | Inserir atividades na agenda |
| Objetivo | Permitir que o usuário registre novas atividades. |
| Contexto | Usuário cadastrado. |
| Atores | Usuário, aplicativo |
| Recursos | Agenda digital |
| Episódios | 1. Usuário abre agenda. <br>2. Seleciona opção de adicionar atividade. <br>3. Preenche informações e salva. |
| Restrições | Dados incompletos |
| Exceção | Falha ao salvar atividade |

| Item | Descrição |
|--------|----------|
| Título | Editar atividades na agenda |
| Objetivo | Permitir que o usuário modifique atividades existentes. |
| Contexto | Usuário com atividades cadastradas. |
| Atores | Usuário, aplicativo |
| Recursos | Agenda digital |
| Episódios | 1. Usuário acessa atividade existente. <br>2. Faz alterações. <br>3. Salva mudanças. |
| Restrições | Falta de internet |
| Exceção | Falha ao atualizar atividade |

| Item | Descrição |
|--------|----------|
| Título | Excluir atividades na agenda |
| Objetivo | Permitir que o usuário remova atividades da agenda. |
| Contexto | Usuário com atividades cadastradas. |
| Atores | Usuário, aplicativo |
| Recursos | Agenda digital |
| Episódios | 1. Usuário acessa atividade. <br>2. Seleciona excluir. <br>3. Sistema confirma exclusão. |
| Restrições | Falha de conexão |
| Exceção | Atividade não removida |

| Item | Descrição |
|--------|----------|
| Título | Notificação de atividades |
| Objetivo | Avisar o usuário sobre atividades com um dia de antecedência. |
| Contexto | Usuário com atividades cadastradas. |
| Atores | Usuário, aplicativo |
| Recursos | Sistema de notificações, agenda digital |
| Episódios | 1. Sistema agenda notificação. <br>2. Aplicativo envia alerta ao usuário. |
| Restrições | Falta de internet |
| Exceção | Notificação não entregue |

| Item | Descrição |
|--------|----------|
| Título | Inserir horário e data na atividade |
| Objetivo | Permitir que o usuário defina data e horário de cada atividade. |
| Contexto | Usuário adicionando ou editando atividade. |
| Atores | Usuário, aplicativo |
| Recursos | Agenda digital |
| Episódios | 1. Usuário seleciona atividade. <br>2. Define data e horário. <br>3. Salva alterações. |
| Restrições | Dados incompletos |
| Exceção | Falha ao salvar informações de horário |

| Item | Descrição |
|--------|----------|
| Título | Avaliação de grau de importância |
| Objetivo | Permitir que o usuário atribua importância às atividades. |
| Contexto | Usuário cadastrando ou editando atividade. |
| Atores | Usuário, aplicativo |
| Recursos | Agenda digital |
| Episódios | 1. Usuário seleciona atividade. <br>2. Atribui grau de importância. <br>3. Salva alterações. |
| Restrições | Falha de internet |
| Exceção | Alteração não salva |

| Item | Descrição |
|--------|----------|
| Título | Tutorial em vídeo |
| Objetivo | Apresentar funcionalidades do aplicativo em vídeo. |
| Contexto | Usuário cadastrado e com acesso à internet. |
| Atores | Usuário, aplicativo |
| Recursos | Vídeo tutorial, reprodutor do aplicativo |
| Episódios | 1. Usuário acessa seção de tutorial. <br>2. Seleciona vídeo. <br>3. Assiste vídeo. |
| Restrições | Falta de internet |
| Exceção | Vídeo não carregado |

| Item | Descrição |
|--------|----------|
| Título | Notificação de editais de vestibular |
| Objetivo | Informar usuário sobre abertura de editais. |
| Contexto | Usuário cadastrado. |
| Atores | Usuário, aplicativo, sistema de notificações |
| Recursos | Base de editais, notificações |
| Episódios | 1. Sistema registra novo edital. <br>2. Aplicativo envia notificação ao usuário. |
| Restrições | Falta de internet |
| Exceção | Notificação não entregue |

| Item | Descrição |
|--------|----------|
| Título | Fórum entre estudantes |
| Objetivo | Permitir interação e troca de dúvidas entre estudantes. |
| Contexto | Usuário cadastrado. |
| Atores | Estudante, aplicativo |
| Recursos | Fórum online |
| Episódios | 1. Usuário acessa fórum. <br>2. Visualiza perguntas e respostas. <br>3. Posta dúvida ou resposta. |
| Restrições | Falta de internet |
| Exceção | Fórum indisponível |

| Item | Descrição |
|--------|----------|
| Título | Fórum por disciplina |
| Objetivo | Permitir interação entre estudantes e professores por disciplina. |
| Contexto | Usuário cadastrado em disciplina. |
| Atores | Estudante, professor, aplicativo |
| Recursos | Fórum online |
| Episódios | 1. Usuário acessa fórum da disciplina. <br>2. Visualiza perguntas e respostas. <br>3. Posta dúvida ou resposta. |
| Restrições | Falta de internet |
| Exceção | Fórum indisponível |

| Item | Descrição |
|--------|----------|
| Título | Emissão de diplomas |
| Objetivo | Permitir que o usuário gere seu diploma digital. |
| Contexto | Usuário formado e cadastrado. |
| Atores | Usuário, aplicativo |
| Recursos | Dados acadêmicos, gerador de diploma |
| Episódios | 1. Usuário solicita diploma. <br>2. Sistema gera documento. <br>3. Usuário salva ou imprime. |
| Restrições | Sistema indisponível |
| Exceção | Falha na geração do diploma |

| Item | Descrição |
|--------|----------|
| Título | Visualização de certificados |
| Objetivo | Permitir que o usuário veja certificados de cursos e atividades. |
| Contexto | Usuário cadastrado. |
| Atores | Usuário, aplicativo |
| Recursos | Base de certificados |
| Episódios | 1. Usuário acessa seção de certificados. <br>2. Visualiza certificados disponíveis. |
| Restrições | Falta de atualização |
| Exceção | Certificado não encontrado |

| Item | Descrição |
|--------|----------|
| Título | Visualização de ocorrências |
| Objetivo | Permitir que o usuário visualize ocorrências registradas na instituição. |
| Contexto | Usuário cadastrado. |
| Atores | Usuário, aplicativo |
| Recursos | Base de ocorrências |
| Episódios | 1. Usuário acessa seção de ocorrências. <br>2. Sistema exibe ocorrências registradas. |
| Restrições | Falta de atualização |
| Exceção | Ocorrência não encontrada |




# Histórico de Versões

| Versão | Data       | Descrição                    | Autor(es)                          | Revisor(es)                          |
|--------|------------|------------------------------|-----------------------------------|-------------------------------------|
| 1.0    | 06/10/2025 | Adicionando lista de verificação  | [Geovanna Alves](https://github.com/GeovannaUmbelino) |[Luisa de Souza](https://github.com/Luisa12ll) e [Camila Silva](https://github.com/CamilaSilvaC) |


