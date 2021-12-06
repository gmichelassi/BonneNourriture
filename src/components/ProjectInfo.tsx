import React from "react";
import { useFela } from "react-fela";
import { Image } from "antd";

import { FelaStyle } from "../fela";
import ContentContainer from "./ContentContainer";

import logo from "../img/logo.png";
import colors from "../contants/colors";

export default function ProjectInfo() {
  const { css } = useFela();

  return (
    <ContentContainer>
      <div className={css(rules.container)}>
        <Image
          className={css(rules.image)}
          preview={false}
          src={logo}
          width={250}
        />
        <span className={css(rules.text)}>
          A proposta do Bonne Nourriture consiste em um software de
          gerenciamento de restaurantes e de seus respectivos cardápios, que,
          além de possibilitar a criação e visualização deles, visa também
          facilitar a administração do estoque, fornecendo um cardápio
          personalizado baseado nos ingredientes sazonais e atuais estocados,
          possibilitando assim refeições apenas com ingredientes frescos vindos
          de produtores locais. Através da plataforma os clientes poderão
          acessar o cardápio e verificar os itens disponíveis e estes serão
          computados pelo garçom responsável pelo atendimento em seu aplicativo.
        </span>

        <span className={css(rules.text)}>
          PITCH:{" "}
          <a href="https://drive.google.com/file/d/1jHtx9RtIbADTMYVZn4vdKGGGlt0SQPF0/view?usp=sharing">
            Disponível via Google Drive
          </a>
        </span>
      </div>
    </ContentContainer>
  );
}

const rules: FelaStyle = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  image: {
    margin: "24px 0px",
    borderRadius: "12px",
  },
  text: {
    color: colors.text.dark,
    margin: "4px 50px",
    textAlign: "justify",
    fontSize: "16px",
    fontWeight: "bold",
  },
};
