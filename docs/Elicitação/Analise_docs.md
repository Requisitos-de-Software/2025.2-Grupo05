# Técnica de elicitação de requisitos - Análise de documentos

## Introdução
- A analise de documentos é um meio de elicitar requisitos pelo o estudo da documentação do aplicativo jornada do Estudante.O apicativo é uma iniciativa do Mec que busca facilitar  o acesso às políticas educacionais, apoiar a tomada de decisão e promover a inclusão digital, tornando-se um instrumento essencial para a vida acadêmica do estudante no Brasil.

## Tabela de Requisitos

 A tabela 1 disposta abaixo representa todos os requisitos levantados durante a análise de documentos, identificados com 'ADD' + numero do requisito, e com a seguinte legenda de categoria:

- RF: Requisitos Funcionais - Descrevem o comportamento ou a funcionalidade que o software deve ter para atender às necessidades do usuário.
- RNF: Requisitos Não-Funcionais - Descrevem os atributos que o software deve ter, como desempenho, segurança e usabilidade, mas não descrevem o comportamento do software em si.

- RI: Requisitos de Interface - Descrevem as características da interface do usuário, como layout, navegação e personalização.
- RPR: Requisitos de Produto - Descrevem as características do produto, como compatibilidade, desempenho e custo.
- RR: Riscos - São os riscos associados ao desenvolvimento e uso do software.
- RT: Testes e Validações - Descrevem as atividades necessárias para testar e validar o software antes de sua implantação.

| Identificação | Descrição                                                                                      | Categoria | Versão |
|---------------|------------------------------------------------------------------------------------------------|-----------|--------|
| ADD01         |   O acesso ao aplicativo é necessário autenticação  com o gov. | RNF       | 1.0    |
| ADD02         | Disponibilização do diploma digital do estudante por meio da tecnologia.| RF        | 1.0    |
| ADD03         |  Software para inserção e envio de dados de forma simplificada;                                       | RF       | 1.0    |
| ADD04         |      O design é simples e prático, com navegação fácil para que o estudante encontre as informações que precisa rapidamente.       | RI       | 1.0    |
| ADD05         |  A tecnologia blockchain é usada para a autenticação e disponibilização de documentos, garantindo maior confiabilidade e transparência.            | RNF       | 1.0    |
| ADD06         |permite aos estudantes do Brasil unificar o acesso a suas informações acadêmicas, como dados de cursos, disciplinas e progresso.               | RPF       | 1.0    |
| ADD07         |  O aplicativo "Jornada do Estudante" é gratuito e está disponível para download tanto na Google Play Store para Android quanto na App Store para iOS | RPR       | 1.0    |
| ADD08         |  O aplicativo Jornada do Estudante está relacionado à sua funcionalidade de centralizar dados acadêmicos e permitir o acompanhamento da vida estudantil, incluindo o programa Pé-de-Meia.       | RPR       | 1.0    |
| ADD09         |  informação desatualizada ou incorreta, que pode levar ao bloqueio do programa Pé-de-Meia, e a possíveis falhas na segurança e privacidade dos dados de usuários.     | RR       | 1.0    |
| ADD10         | A página do aplicativo pode não refletir a situação atualizada do estudante.              | RR        | 1.0    |
| ADD011 | O aplicativo possui uma nterace amigável para crianças e adultos | RI | 1.0 |
| ADD012 | O aplicativo apresenta consistência na contagem de faltas | RNF | 1.0 |
| ADD013 | O aplicativo apresenta atualizações referente ao pagamento do pé de meia disponível em até um mês | RNF | 1.0 | 
| ADD014 | Autenticação via Gov.br | RNF | 1.0 | 
| ADD015 | Visualização de documentos digitais estudantis autenticados, como, diplomas e histórico escolar. | RF | 1.0 | 
| ADD016 | Disponibilidade gratuita nos sistemas operacionias: Android e iOS.| RNF | 1.0 | 
| ADD017 | Acompanhar registros estudantis desde o ingresso até níveis superiores.| RF | 1.0 | 
| ADD018 | Interface intuitiva e fácil de navegar.| RI | 1.0 | 
| ADD019 | Risco de vazamento de dados caso não haja segurança adequada.| RR| 1.0 | 
| ADD020 | O aplicativo é um canal direto de comunicação entre o MEC e os estudantes.| RF| 1.0 | 
| ADD021 | O aplicativo pode ser usado por qualquer ccidadão brasileiro que tenha um CPF válido.| RF| 1.0 | 
| ADD022 | O aplicativo possibilita informar um curso que você estudou ou está cursando.| RF| 1.0 | 
| ADD023 | O aplicativo possibilita os usuários recebam através de um canal de comunicação novidades do Governo Federal voltadas à educação.| RF| 1.0 | 
| ADD024 | O aplicativo possibilita acessar rapidamente serviços como ENEM, FIES, ProUni, Sisu e Capes.| RF| 1.0 | 
| ADD025 | O aplicativo possibilita acessar rapidamente mídias digitais com conteúdos e palestras transmitidas ao vivo.| RF| 1.0 | 
| ADD026 | O aplicativo não possibilita integração do colégio ou universidade por dentro da plataforma.| RF| 1.0 | 

<p style="text-align: center; font-size: 14px;">
Tabela 1 – Conjunto de requisitos levantados na análise documental.<br>
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




## Histórico de Versões

| Versão | Data       | Descrição           | Autor                                                      | Revisor                                                 |
|--------|------------|--------------------|------------------------------------------------------------|----------------------------------------------------------|
| 1.0    | 25/09/2025 | Documentação dos requisitos da analise de documentação | [Lara Souza](https://github.com/mel14-hub), [Luísa de Souza](https://github.com/luisa12ll) e [Yan Matheus](https://github.com/Yanmatheus0812) | [Pedro Henrique](https://github.com/pedrohpsantos)  |
