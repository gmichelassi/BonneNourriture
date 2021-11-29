import React from "react";
import { useFela } from "react-fela";

import { FelaStyle } from "../fela";
import ContentContainer from "./ContentContainer";

export default function ProjectInfo() {
  const { css } = useFela();

  return (
    <ContentContainer>
      <div className={css(rules.container)}>
        <h3 style={{ fontWeight: "bold" }}>Objetivo do documento</h3>
        <p>
          Este documento busca explicitar as principais diretrizes para
          realização do projeto que estamos desenvolvendo, Bonne Nourriture.
        </p>

        <h3 style={{ fontWeight: "bold" }}>
          Identificação das partes interessadas
        </h3>
        <p>
          Os principais interessados neste projeto são os administradores de
          restaurantes pequenos que irão contratar o sistema. Os stakeholders,
          aqueles que serão impactados pelo projeto de alguma forma são os
          funcionários, clientes e produtores.
        </p>

        <h3 style={{ fontWeight: "bold" }}>Justificativa</h3>
        <p>
          No Brasil existem muitos restaurantes locais que produzem seus
          produtos a partir de ingredientes comprados/adquiridos de pequenos
          produtores locais. Entretanto, muitas vezes esse público acaba tendo
          dificuldades em continuar seu negócio por problemas gerenciais e/ou
          econômicos. Dessa forma, o Bonne Nourriture surge como uma proposta
          para dar suporte a estes restaurantes se auto gerenciarem de forma
          simples, prática e eficiente, ao mesmo tempo que beneficia pequenos
          negócios indiretamente relacionados com os restaurantes.
        </p>

        <h3 style={{ fontWeight: "bold" }}>Objetivo do projeto</h3>
        <p>
          Este projeto tem como objetivo principal desenvolver um sistema de
          gerenciamento de restaurantes e de seus respectivos cardápios, que,
          além de possibilitar a criação e visualização deles, visa também
          facilitar a administração do estoque, fornecendo um cardápio
          personalizado baseado nos ingredientes sazonais e atuais estocados,
          possibilitando assim refeições apenas com ingredientes frescos vindos
          de produtores locais.
        </p>

        <h3 style={{ fontWeight: "bold" }}>Critérios de aceitação</h3>
        <p>
          Para considerarmos o projeto concluído com sucesso, precisamos que os
          pontos principais do projeto, levantados como críticos, sejam
          concluídos. Estes seriam tanto o sistema que faz a ligação entre
          estoque e cardápio, utilizado para ter uma anotação dos níveis de
          inventário, quanto o próprio cardápio, que anotaria pedidos de maneira
          virtual e levando em consideração a quantidade em estoque, ambos com
          interfaces amigáveis e funcionais. Além disso, não deverá extrapolar o
          limite de gastos e tempo estipulados.
        </p>

        <h3 style={{ fontWeight: "bold" }}>Estruturação do projeto</h3>
        <p>Pode ser visto na aba EAP, no menu principal.</p>

        <h3 style={{ fontWeight: "bold" }}>Premissas do projeto</h3>
        <p>
          O projeto será teórico e nenhuma implementação será realizada Porém se
          não fosse é possível manter uma anotação de estoque completamente
          automática; é possível desenvolver e implementar as funcionalidades
          com os recursos disponíveis; a segurança e integridade do projeto é
          garantida.
        </p>

        <h3 style={{ fontWeight: "bold" }}>Riscos do projeto</h3>
        <p>
          Alguns riscos desse projeto são: a não adesão de restaurantes ao nosso
          sistema, optando por alternativas de outros sistemas de gerenciamento
          de estoque mais convencionais e mais utilizados; Gerenciamento de
          estoque não funcionar sem auxílio humano, perdendo valor do produto;
          Cardápios virtuais podem perder a relevância pós-pandemia; A análise
          mais completa de riscos está descrita em seu documento próprio.
        </p>

        <h3 style={{ fontWeight: "bold" }}>Restrições do projeto</h3>
        <p>
          O aplicativo será desenvolvido para mobile, não havendo opção web; O
          aplicativo não contará com opções de seleção de linguagem, sendo feito
          apenas em português; O uso será restrito aos funcionários do
          estabelecimento, sendo necessária sua identificação para login; O
          cadastro dos ingredientes do estoque deverá ser feito manualmente.
        </p>

        <h3 style={{ fontWeight: "bold" }}>Recursos e Orçamento do projeto</h3>
        <p>Disponível na aba de orçamento.</p>
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
