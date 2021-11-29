import React from "react";
import { useFela } from "react-fela";

import { FelaStyle } from "../fela";
import ContentContainer from "./ContentContainer";

export default function Riscos() {
  const { css } = useFela();

  return (
    <ContentContainer>
      <div className={css(rules.container)}>
        <h3 style={{ fontWeight: "bold" }}>Riscos</h3>
        <p>
          Este documento tem como função descrever os riscos considerados para o
          projeto Bonne Nouriturre.
        </p>

        <h3 style={{ fontWeight: "bold" }}>
          Riscos individuais (condições incertas que influenciam pequenas partes
          do projeto)
        </h3>

        <ul>
          <li> Falta de tempo para a implementação de funcionalidades;</li>
          <li> Inviabilidade de implementação de funcionalidades;</li>
          <li>Desistência de membros da equipe do projeto;</li>
          <li>Dependência da utilização do aplicativo pelos funcionários;</li>
          <li>Conflito de utilização pelos funcionários;</li>
          <li>Falta de comunicação com restaurantes fornecedores;</li>
          <li>
            Contratação de serviços para implementação do produto que sejam
            insuficientes para apoiar o desenvolvimento e a entrega;
          </li>
          <li>
            Não implementação de processos legais, como por exemplo, adesão a
            Lei Geral de Proteção de Dados (LGPD);
          </li>
        </ul>

        <h3 style={{ fontWeight: "bold" }}>
          Riscos gerais (riscos que interferem no projeto como um todo)
        </h3>
        <ul>
          <li> Não adesão de restaurantes ao sistema proposto;</li>
          <li>
            Não funcionamento do gerenciamento de estoque sem auxílio humano;
          </li>
          <li>Perda da relevância de cardápios virtuais pós pandemia;</li>
          <li>
            Surgimento de concorrentes com um serviço com mais funcionalidades e
            com preço mais acessível;
          </li>
        </ul>
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
