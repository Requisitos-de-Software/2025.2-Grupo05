# Técnica de elicitação de requisitos - Entrevista

## Introdução
- A entrevista com usuários é um meio de elicitar requisitos através de uma entrevista roteirizada. Neste trabalho a entrevista seguiu como roteiro as perguntas realizadas no questionário e realizada com três usuários, todos com livre consentimento do uso da imagem e participação das entrevistas como mostrados nos vídeos [Entrevista 1](https://youtu.be/zYS0moDR_gI?si=_CXI-84XV1co8_DG), [Entrevista 2](https://youtu.be/KCEM_y5eoc4?si=S2LVFfK09lZO_iUp) e [video3](https://youtu.be/Jo30F-G7l6Q?si=YI3Yf0jy8h9t7Unz). As entrevistas tinham em torno de X questões também sobre aspectos gerais de possíveis usuários do aplicativo. As entrevistas foram realizadas com 2 estudantes da Universidade de Brasília e um aluno do ensino médio, entre o período de 22 a 24 de setembro de 2025.

## Vídeos

### Entrevista 1

[Entrevista 1](https://youtu.be/zYS0moDR_gI?si=_CXI-84XV1co8_DG)

Fonte: [Geovanna Alves](https://github.com/GeovannaUmbelino).

PERGUNTAS E RESPOSTAS DA ENTREVISTA

### Entrevista 2

[Entrevista 2](https://youtu.be/KCEM_y5eoc4?si=S2LVFfK09lZO_iUp)

Fonte: [Yan Matheus](https://github.com/Yanmatheus0812).

PERGUNTAS E RESPOSTAS DA ENTREVISTA

### Entrevista 3

[Entrevista 3](https://youtu.be/Jo30F-G7l6Q?si=YI3Yf0jy8h9t7Unz)

Fonte: [Lara Souza](https://github.com/mel14-hub), [Pedro Henrique](https://github.com/pedrohpsantos) e [Yan Matheus](https://github.com/Yanmatheus0812).

PERGUNTAS E RESPOSTAS DA ENTREVISTA

## Tabela de Requisitos

 A tabela 1 disposta abaixo representa todos os requisitos levantados durante a análise de documentos, identificados com 'E' + numero do requisito, e com a seguinte legenda de categoria:

- RF: Requisitos Funcionais - Descrevem o comportamento ou a funcionalidade que o software deve ter para atender às necessidades do usuário.
- RNF: Requisitos Não-Funcionais - Descrevem os atributos que o software deve ter, como desempenho, segurança e usabilidade, mas não descrevem o comportamento do software em si.

- RI: Requisitos de Interface - Descrevem as características da interface do usuário, como layout, navegação e personalização.
- RPR: Requisitos de Produto - Descrevem as características do produto, como compatibilidade, desempenho e custo.
- RR: Riscos - São os riscos associados ao desenvolvimento e uso do software.
- RT: Testes e Validações - Descrevem as atividades necessárias para testar e validar o software antes de sua implantação.

| Identificação | Descrição                        | Categoria | Implementado | Versão | Referência | 
|---------------|-----------------------------------------------------------------------|-----------|-----|---|-------|
| E01         |  O aplicativo deve permitir a visualização do professor das diciplinas | RF       | Não | 1.0    | Entrevista 1 |
| E02         |  O aplicativo deve permitir a visualização do horário e sala da disciplina.                                       | RF       | Não | 1.0    | Entrevista 1 |
| E03         |  O aplicativo deve permitir a visualização da disciplina.                                       | RF       | Sim | 1.0    | Entrevista 1 |
| E04         |  O aplicativo deve permitir a visualização das informações e trabalhos da disciplina (data, peso e tipo de avaliação).       | RF       | Não | 1.0    | Entrevista 1 |
| E05         |  O aplicativo deve permitir a visualização das notas das avaliações e trabalhos da disciplina.       | RF       | Não | 1.0    | Entrevista 1 |
| E06         | O aplicativo deve permitir a visualização de datas importantes em um calendário.               | RF       | Não | 1.0    | Entrevista 1 |
| E07         | O aplicativo deve permitir a visualização das faltas em cada disciplina. | RF       | Sim | 1.0    | Entrevista 1 |
| E08         |  O aplicativo deve notificar notas e avaliações com dois dias e uma semana antes.       | RF       | Não |  1.0    | Entrevista 1 |
| E09         |  O aplicativo deve notificar faltas após serem lançadas no aplicativo.       | RF       | Não |  1.0    | Entrevista 1 |
| E010         |   O aplicativo deve notificar informações sobre o benefício pé de meia sobre parcelas e valores.| RF       | Não | 1.0    | Entrevista 1 |
| E011         | O aplicativo deve ser fácil de usar e aprender suas funcionalidades.              | RNF        | Sim | 1.0    | Entrevista 1 |
| E012 | O aplicativo deve ter uma linguagem simples adequada ao usuário. | RNF | Sim | 1.0 | Entrevista 1 | 
| E013 | O aplicativo deve carregar suas informações em no máximo 3 segundos. | RNF | Não | 1.0 | Entrevista 1 | 
| E014 | O aplicativo deve possibilitar o usuário emitir a declaração de vínculo da instituição de ensino. | RF | Não | 1.0 | Entrevista 2 | 
| E015 | O aplicativo deve possibilitar o usuário visualizar seu histórico da instituição de ensino. | RF | Não | 1.0 | Entrevista 2 | 
| E016 | O aplicativo deve possibilitar o usuário visualizar boletim da instituição de ensino. | RF | Não | 1.0 | Entrevista 2 | 
| E017 | O aplicativo deve possibilitar o usuário visualizar programas estudantis (FIES, Prouni, etc.). | RF | Sim | 1.0 | Entrevista 2 | 
| E018 | O aplicativo deve possibilitar o usuário visualizar parcelas pagas e que faltam do auxílio. | RF | Sim | 1.0 | Entrevista 2 | 
| E019 | O aplicativo deve possibilitar o usuário visualizar o valor total do auxílio. | RF | Não | 1.0 | Entrevista 2 | 
| E020 | O aplicativo deve possibilitar o usuário visualizar a conta bancária cadastrada do auxílio. | RF | Não | 1.0 | Entrevista 2 | 
| E021 | O aplicativo deve possibilitar o usuário visualizar o dia do pagamento do auxílio. | RF | Não | 1.0 | Entrevista 2 | 
| E022 | O aplicativo deve possibilitar o usuário acessar um fórum de dúvidas sobre o auxílio. | RF | Não | 1.0 | Entrevista 2 | 
| E023 | O aplicativo deve possibilitar o usuário ser atendido em um canal de conversa sobre o auxílio. | RF | Não | 1.0 | Entrevista 2 | 
| E024 | O aplicativo deve possibilitar o usuário visualizar datas de eventos e atividades escolares em um calendário. | RF | Não | 1.0 | Entrevista 2 | 
| E025 | O aplicativo deve ter informações unificadas sobre sua jornada escolar. | RF | Sim | 1.0 | Entrevista 2 | 
| E026 | O aplicativo deve manter as informações do usuário seguras e privadas. | RR | Sim | 1.0 | Entrevista 2 | 
| E027 | O aplicativo deve ser acessível (contraste em cores, suporte à libras e auto-descrição ). | RNF | Não | 1.0 | Entrevista 2 | 
| E028 | O aplicativo deve oferecer um ranqueamento de  matérias por nota, para orienta-lo de qual foco seguir. | RF | Não | 1.0 | Entrevista 2 | 
| E029 | O aplicativo deve ter uma página de perfil com as informações do usuário (nome, instituição e ano/semestre). | RF | Sim | 1.0 | Entrevista 2 | 
| E030 | O aplicativo deve conseguir editar suas informações na página de perfil. | RF | Sim | 1.0 | Entrevista 3 | 
| E031 | O aplicativo deve conseguir editar suas informações bancárias pelo gov. | RF | Não | 1.0 | Entrevista 3 | 
| E032 | O aplicativo deve ter um design sem sobrecarga de informações na tela | RI | sim | 1.0 | Entrevista 3 | 


<p style="text-align: center; font-size: 14px;">
Tabela 1 – Conjunto de requisitos elicitados nas entrevistas.<br>
Elaboração por <a href="https://github.com/CamilaSilvaC">Camila Silva</a>, 
<a href="https://github.com/GeovannaUmbelino">Geovanna Alves</a> e 
<a href="https://github.com/Yanmatheus0812">Yan Matheus</a>.
</p>



## Histórico de Versões

| Versão | Data       | Descrição           | Autor                                                      | Revisor                                                 |
|--------|------------|--------------------|------------------------------------------------------------|----------------------------------------------------------|
| 1.0    | 25/09/2025 | Documentação dos requisitos da entrevista | [Camila Silva](https://github.com/CamilaSilvaC), [Geovanna Alves](https://github.com/GeovannaUmbelino) e [Yan Matheus](https://github.com/Yanmatheus0812) | [Lara Souza](https://github.com/mel14-hub)  |
