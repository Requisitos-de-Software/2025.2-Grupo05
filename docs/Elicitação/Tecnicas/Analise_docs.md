# Técnica de elicitação de requisitos - Análise de documentos

## Introdução

- A analise de documentos é um meio de elicitar requisitos pelo o estudo da documentação do aplicativo jornada do Estudante.O apicativo é uma iniciativa do Mec que busca facilitar o acesso às políticas educacionais, apoiar a tomada de decisão e promover a inclusão digital, tornando-se um instrumento essencial para a vida acadêmica do estudante no Brasil.

## Participantes

A seguir temos a tabela 1, onde indica todos os participantes da técnica de elicitação de análise de documentação e a data da análise.

<div align="center">
  <table>
    <thead>
      <tr>
        <th>Nome</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="https://github.com/mel14-hub">Lara Souza</a></td>
        <td>20/09/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/luisa12ll">Luisa de Souza</a></td>
        <td>20/09/2025</td>
      </tr>
      <tr>
        <td><a href="https://github.com/Yanmatheus0812">Yan Matheus</a></td>
        <td>19/09/2025</td>
      </tr>
    </tbody>
  </table>
</div>

Tabela 1: Participantes análise de documentação

Autor: [Yan Matheus](https://github.com/Yanmatheus0812)

## Tabela de Requisitos

A tabela 2 disposta abaixo representa todos os requisitos levantados durante a análise de documentos, identificados com 'ADD' + numero do requisito, e com a seguinte legenda de categoria:

- RF: Requisitos Funcionais - Descrevem o comportamento ou a funcionalidade que o software deve ter para atender às necessidades do usuário.
- RNF: Requisitos Não-Funcionais - Descrevem os atributos que o software deve ter, como desempenho, segurança e usabilidade, mas não descrevem o comportamento do software em si.

- RI: Requisitos de Interface - Descrevem as características da interface do usuário, como layout, navegação e personalização.
- RPR: Requisitos de Produto - Descrevem as características do produto, como compatibilidade, desempenho e custo.
- RR: Riscos - São os riscos associados ao desenvolvimento e uso do software.
- RT: Testes e Validações - Descrevem as atividades necessárias para testar e validar o software antes de sua implantação.

| Identificação | Descrição                                                                                                                                           | Categoria | Implementado | Versão | Referência            | Foto                                            |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------ | ------ | --------------------- | ----------------------------------------------- |
| ADD01         | O aplicativo deve permitir o acesso do usuário através de uma autenticação com o gov.                                                               | RF        | Sim          | 1.1    | VAZQUES; SIMÕES, 2016 | [Foto]()                                        |
| ADD02         | O aplicativo deve possibilitar o envio de dados de forma simplificada.                                                                              | RF        | Sim          | 1.0    | VAZQUES; SIMÕES, 2016 | [Foto]()                                        |
| ADD03         | O aplicativo deve ter uma interface intuitiva e fácil de navegar para que o estudante encontre as informações que precisa rapidamente.              | RI        | Sim          | 1.0    | VAZQUES; SIMÕES, 2016 | [Foto]()                                        |
| ADD04         | O aplicativo deve ter uma tecnologia blockchain que é usada para a autenticação e disponibilização de documentos                                    | RNF       | Sim          | 1.0    | VAZQUES; SIMÕES, 2016 | [Foto]()                                        |
| ADD05         | O aplicativo deve permitir aos estudantes do Brasil unificar o acesso a suas informações acadêmicas, como dados de cursos, disciplinas e progresso. | RF        | sim          | 1.0    | VAZQUES; SIMÕES, 2016 | [Foto]()                                        |
| ADD06         | O aplicativo deve permitir o acompanhamento do programa Pé-de-Meia.                                                                                 | RF        | Sim          | 1.0    | VAZQUES; SIMÕES, 2016 | [Foto]()                                        |
| ADD07         | O aplicativo não deve ter informações desatualizadas ou incorretas, que levem ao bloqueio do programa Pé-de-Meia.                                   | RR        | Não          | 1.0    | Google, 2025          | [Foto](https://i.postimg.cc/59vNG3rf/doc7.png)  |
| ADD8          | A página do aplicativo pode não refletir a situação atualizada do estudante.                                                                        | RR        | Sim          | 1.0    | Google, 2025          | [Foto](https://i.postimg.cc/QN5xPbyv/doc8.png)  |
| ADD09         | O aplicativo deve possibilitar a visualização de faltas do estudante                                                                                | RF        | Sim          | 1.0    | Google, 2025          | [Foto]()                                        |
| ADD010        | O aplicativo deve apresentar atualizações referente ao pagamento do pé de meia disponível em até um mês.                                            | RF        | Não          | 1.0    | VAZQUES; SIMÕES, 2016 | [Foto]()                                        |
| ADD011        | O aplicativo deve possibilitar a visualização de documentos digitais estudantis autenticados, como, diplomas e histórico escolar.                   | RF        | Não          | 1.0    | VAZQUES; SIMÕES, 2016 | [Foto]()                                        |
| ADD012        | O aplicativo deve ter disponibilidade gratuita nos sistemas operacionias: Android e iOS.                                                            | RPR       | Sim          | 1.0    | VAZQUES; SIMÕES, 2016 | [Foto]()                                        |
| ADD013        | O aplicativo deve possibilitar o acompanhamento de registros estudantis desde o ingresso até níveis superiores.                                     | RF        | Sim          | 1.0    | VAZQUES; SIMÕES, 2016 | [Foto]()                                        |
| ADD014        | O aplicativo não deve possibilitar riscos de vazamentos de dados por meio de uma segurança adequada.                                                | RR        | Sim          | 1.0    | VAZQUES; SIMÕES, 2016 | [Foto]()                                        |
| ADD015        | O aplicativo deve ser um canal direto de comunicação entre o MEC e os estudantes.                                                                   | RF        | Sim          | 1.0    | UFSC, 2023            | [Foto](https://i.postimg.cc/fWXTFKPZ/doc15.png) |
| ADD016        | O aplicativo deve possibilitar informar um curso que você estudou ou está cursando.                                                                 | RF        | Sim          | 1.0    | UFSC, 2023            | [Foto](https://i.postimg.cc/2jv8JwtY/doc16.png) |
| ADD017        | O aplicativo deve possibilitar os usuários recebam através de um canal de comunicação novidades do Governo Federal voltadas à educação.             | RF        | Sim          | 1.0    | UFSC, 2023            | [Foto](https://i.postimg.cc/mZM2qwns/doc17.png) |
| ADD018        | O aplicativo deve possibilitar acessar rapidamente serviços estudantis.                                                                             | RF        | Sim          | 1.0    | UFSC, 2023            | [Foto](https://i.postimg.cc/d38sysC1/doc18.png) |
| ADD019        | O aplicativo não deve possibilitar integração da escola ou universidade por dentro da plataforma.                                                   | RF        | Sim          | 1.0    | UFSC, 2023            | [Foto](https://i.postimg.cc/5yw4C4z4/doc19.png) |

<p style="text-align: center; font-size: 14px;">
Tabela 2 – Conjunto de requisitos elicitados na análise documental.<br>
Elaboração por <a href="https://github.com/mel14-hub">Lara Mota</a>,
<a href="https://github.com/luisa12ll">Luisa de Souza</a> e
<a href="https://github.com/Yanmatheus0812">Yan Matheus</a>.
</p>

## Bibliografia

- BRASIL. Ministério da Educação. **Jornada do Estudante**. Disponível em:  
  <https://www.gov.br/mec/pt-br/jornadadoestudante>. Acesso em: 20 set. 2025.

- Carlos Eduardo Vazques,Guilherme Siqueira Simões.**Engenharia de Requisitos**. 1.ed. BRASPORT,2016
- GOOGLE. Jornada do Estudante. Disponível em: <https://play.google.com/store/apps/details?id=br.gov.mec.jornada.estudante>. Acesso em: 20 set. 2025.
- UNIVERSIDADE FEDERAL DE SANTA CATARINA. Laboratório Bridge. **Conheça o aplicativo Jornada do Estudante**. Disponível em: <https://portal.bridge.ufsc.br/2023/04/18/conheca-o-aplicativo-jornada-do-estudante/>. Acesso em: 20 set. 2025.

## Gravação

<iframe width="560" height="315" src="https://www.youtube.com/embed/AjYSbjo5K38?si=gf3J6suWy9BUUFwr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Histórico de Versões

| Versão | Data       | Descrição                                              | Autor                                                                                                                                         | Revisor                                               |
| ------ | ---------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 1.0    | 25/09/2025 | Documentação dos requisitos da analise de documentação | [Lara Souza](https://github.com/mel14-hub), [Luísa de Souza](https://github.com/luisa12ll) e [Yan Matheus](https://github.com/Yanmatheus0812) | [Pedro Henrique](https://github.com/pedrohpsantos)    |
| 1.1    | 09/10/2025 | Adicionado a tabela de contribuição                    | [Yan Matheus](https://github.com/Yanmatheus0812)                                                                                              | [Geovanna Alves](https://github.com/GeovannaUmbelino) |
| 1.2    | 09/10/2025 | Colocando Fotos com referências                        | [Yan Matheus](https://github.com/Yanmatheus0812)                                                                                              | [Luísa de Souza](https://github.com/luisa12ll)        |
