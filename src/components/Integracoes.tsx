import React from "react";
import { useFela } from "react-fela";
import { Image } from "antd";

import { FelaStyle } from "../fela";
import ContentContainer from "./ContentContainer";

import ciclovida from "../img/ciclovida.png";

export default function Integracoes() {
  const { css } = useFela();

  return (
    <ContentContainer>
      <div className={css(rules.container)}>
        <h3 style={{ fontWeight: "bold" }}>Ciclo de Vida do Projeto</h3>
        <Image className={css(rules.image)} src={ciclovida} width={900} />

        <h3 style={{ fontWeight: "bold" }}>Diretrizes do projeto</h3>
        <ul>
          <li>
            O projeto deverá ser gerenciado utilizando as melhores práticas
            comumente utilizadas nas metodologias ágeis (como no SCRUM e Kanban)
          </li>
          <li>
            A execução do projeto deve ser acompanhada e testada por clientes e
            donos de restaurantes/lojas de forma contínua ao longo da execução
            do projeto, de forma que a cada entrega, eles acompanhem a validem a
            utilidade e eficiência de cada uma das features
          </li>
          <li>
            O aplicativo, mesmo quando terminado, ainda precisará de algumas
            checagens eventuais para verificar se a infraestrutura e o ambiente
            em que o aplicativo está utilizando estão com um comportamento
            aceitável.
          </li>
          <li>
            O aplicativo deverá ser disponibilizado na play store de forma
            gratuita tanto para os clientes de restaurantes quanto para os donos
            de restaurantes.
          </li>
          <li>
            O orçamento disponível para o projeto é de R$250.000,00 (duzentos e
            cinquenta mil reais)
          </li>
        </ul>

        <h3 style={{ fontWeight: "bold" }}>
          Plano de gerenciamento de mudanças
        </h3>
        <p>
          Se por algum acaso, ao longo da validação do projeto com os clientes
          (donos de alguns restaurantes selecionados) alguma mudança
          considerável no escopo for pedida durante o desenvolvimento do
          projeto, a equipe de desenvolvimento deverá ser consultada para
          verificar se isso irá impactar de forma grave ou não no andamento do
          projeto. Isso deverá ser feito através de uma estimativa do prazo que
          os ajustes necessários levarão e também no prazo que levará para a
          nova funcionalidade ou alteração de uma regra de negócio levará para
          ser implementada.
        </p>

        <h3 style={{ fontWeight: "bold" }}>
          Plano de gerenciamento de configuração
        </h3>
        <p>
          O gestor/gerente do projeto é responsável pela administração,
          supervisão, controle e integridade de todas as linhas de base do
          projeto, além de todas as versões das entregas e dos documentos que
          fazem parte do projeto. Ele também é responsável pela implementação
          das solicitações de mudanças aprovadas, uma vez que elas são também
          validadas com o time de desenvolvimento. A verificação do atendimento
          ou não dos requisitos de produto final relacionados às entregas do
          projeto parciais e finais do projeto será executada pelo gestor do
          projeto, uma vez que elas também tenham sido validadas pelos clientes,
          que participarão também dessas verificações ao longo do projeto.
        </p>

        <h3 style={{ fontWeight: "bold" }}>
          Manutenção da integridade das linhas de base de medição do desempenho
        </h3>
        <p>
          As linhas de base de cronograma e desempenho de custos serão mantidas
          com os recursos de software de gerenciamento de projetos escolhidos. A
          linha de base de escopo será controlada pelas versões dos documentos
          associados ao escopo, e sua manutenção será de responsabilidade do
          gestor do projeto.
        </p>

        <h3 style={{ fontWeight: "bold" }}>
          Necessidades técnicas para a comunicação entre as partes interessadas
        </h3>
        <p></p>

        <h3 style={{ fontWeight: "bold" }}>
          Revisões chave para o gerenciamento de conteúdo, prorrogações, prazos
          para tratamento, questões abertas e decisões pendentes
        </h3>
        <p>Já constado na página de comunicação do site.</p>

        <h3 style={{ fontWeight: "bold" }}>Premissas do projeto</h3>
        <p>
          Dado o caráter do projeto, é recomendado que a equipe de
          desenvolvimento do software também participe das reuniões e revisões
          chave do projeto. Serão realizadas reuniões semanais. Deverão ser
          realizadas reuniões preferencialmente online.
        </p>

        <h3 style={{ fontWeight: "bold" }}>Linha de base do escopo</h3>
        <p>Já constado na página da estrutura analítica do projeto (EAP).</p>

        <h3 style={{ fontWeight: "bold" }}>Linha de base do cronograma</h3>
        <p>Já constado na página de Cronograma do projeto.</p>

        <h3 style={{ fontWeight: "bold" }}>Linha de base dos custos</h3>
        <p>Já constado na página de Custos do projeto.</p>
      </div>
    </ContentContainer>
  );
}

const rules: FelaStyle = {
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 50px",
  },
  image: {
    borderRadius: "12px",
  },
};
