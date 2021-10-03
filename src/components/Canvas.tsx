import React from "react";
import { useFela } from "react-fela";
import { Image } from "antd";

import { FelaStyle } from "../fela";
import ContentContainer from "./ContentContainer";

import logo from "../img/logo.png";

export default function ProjectInfo() {
  const { css } = useFela();

  return (
    <ContentContainer>
      <div className={css(rules.container)}>
        <Image
          className={css(rules.image)}
          preview={false}
          src={logo}
          width={400}
        />
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
