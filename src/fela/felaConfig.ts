import important from "fela-plugin-important";
import typescript from "fela-plugin-typescript";

const rendererConfig = ({ selectorPrefix = "fela_" }) => ({
  selectorPrefix,
  plugins: [important(), typescript()],
});

export default rendererConfig;
