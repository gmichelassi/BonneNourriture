import React, { PropsWithChildren } from "react";
import { useFela } from "react-fela";
import colors from "../contants/colors";

import { FelaStyle } from "../fela";

export default function ContentContainer({ children }: PropsWithChildren<{}>) {
  const { css } = useFela();

  return <div className={css(rules.container)}>{children}</div>;
}

const rules: FelaStyle = {
  container: {
    backgroundColor: colors.background.light,
    borderRadius: "16px",
    border: "1px solid black",
    height: "80%",
    width: "65%",
    overflowY: "auto",
    overflowX: "hidden",
  },
};
