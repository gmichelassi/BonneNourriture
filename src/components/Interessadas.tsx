import React from "react";
import { useFela } from "react-fela";
import { Image } from "antd";

import { FelaStyle } from "../fela";
import ContentContainer from "./ContentContainer";

import interessadas from "../img/interessadas.jpg";

export default function Interessadas() {
  const { css } = useFela();

  return (
    <ContentContainer>
      <div className={css(rules.container)}>
        <Image className={css(rules.image)} src={interessadas} width={700} />
      </div>
    </ContentContainer>
  );
}

const rules: FelaStyle = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  image: {
    borderRadius: "12px",
  },
};
