import React, { useState } from "react";
import { Image, Layout, Menu } from "antd";

import { FelaStyle } from "./fela";
import { useFela } from "react-fela";
import About from "./components/About";
import background from "./img/bg2.jpeg";
import Canvas from "./components/Canvas";
import colors from "./contants/colors";
import Abertura from "./components/TermoAbertura";
import Cronograma from "./components/Cronograma";
import EAP from "./components/EAP";
import logo from "./img/written-logo.png";
import Qualidade from "./components/Qualidade";
import Orcamento from "./components/Orcamento";
import ProjectInfo from "./components/ProjectInfo";
import RecursosHumanos from "./components/RecursosHumanos";
import Riscos from "./components/Riscos";
import Integracoes from "./components/Integracoes";
import Interessadas from "./components/Interessadas";
import Aquisicoes from "./components/Aquisicoes";
import Comunicacoes from "./components/Comunicacoes";

const { Header, Content, Footer } = Layout;

function App() {
  const [content, setContent] = useState("home");
  const { css } = useFela();

  return (
    <Layout className="layout" style={{ height: "100vh", width: "100%" }}>
      <Header
        style={{ display: "flex", alignItems: "center" }}
        className={css(rules.header)}
      >
        <Image
          preview={false}
          height={40}
          src={logo}
          onClick={() => {
            setContent("home");
          }}
          style={{ cursor: "pointer" }}
        />
        <Menu
          style={{ marginLeft: "12px", width: "100%" }}
          className={css(rules.header)}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
        >
          <Menu.Item
            onClick={() => {
              setContent("home");
            }}
            className={css(rules.menuItem)}
          >
            Home
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setContent("eap");
            }}
            className={css(rules.menuItem)}
          >
            EAP
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setContent("canvas");
            }}
            className={css(rules.menuItem)}
          >
            Canvas
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setContent("abertura");
            }}
            className={css(rules.menuItem)}
          >
            Termo de Abertura
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setContent("orcamento");
            }}
            className={css(rules.menuItem)}
          >
            Orçamento
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setContent("rh");
            }}
            className={css(rules.menuItem)}
          >
            Recursos Humanos
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setContent("qualidade");
            }}
            className={css(rules.menuItem)}
          >
            Gerenciamento de Qualidade
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setContent("cronograma");
            }}
            className={css(rules.menuItem)}
          >
            Cronograma
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setContent("comunicacoes");
            }}
            className={css(rules.menuItem)}
          >
            Comunicações
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setContent("riscos");
            }}
            className={css(rules.menuItem)}
          >
            Riscos
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setContent("aquisicoes");
            }}
            className={css(rules.menuItem)}
          >
            Aquisições
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setContent("interessadas");
            }}
            className={css(rules.menuItem)}
          >
            Partes Interessadas
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setContent("integracoes");
            }}
            className={css(rules.menuItem)}
          >
            Integrações
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setContent("about");
            }}
            className={css(rules.menuItem)}
          >
            Sobre nós
          </Menu.Item>
        </Menu>
      </Header>
      <Content className={css(rules.content)}>
        {content === "home" && <ProjectInfo />}
        {content === "eap" && <EAP />}
        {content === "canvas" && <Canvas />}
        {content === "orcamento" && <Orcamento />}
        {content === "cronograma" && <Cronograma />}
        {content === "qualidade" && <Qualidade />}
        {content === "rh" && <RecursosHumanos />}
        {content === "abertura" && <Abertura />}
        {content === "about" && <About />}
        {content === "riscos" && <Riscos />}
        {content === "integracoes" && <Integracoes />}
        {content === "interessadas" && <Interessadas />}
        {content === "aquisicoes" && <Aquisicoes />}
        {content === "comunicacoes" && <Comunicacoes />}
      </Content>
      <Footer className={css(rules.footer)}>
        © Copyright - ACH2027 Gestão de Projetos e Tecnologia da Informação
      </Footer>
    </Layout>
  );
}

const rules: FelaStyle = {
  content: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${background})`,
    // backgroundRepeat: "no-repeat",
  },
  footer: {
    textAlign: "center",
    backgroundColor: colors.secondary,
    color: colors.text.light,
    fontWeight: "bold",
  },
  header: {
    backgroundColor: colors.primary,
    color: colors.text.light,
    fontWeight: "bold",
  },
  menuItem: {
    backgroundColor: colors.primary,
    ":hover": {
      backgroundColor: colors.secondary,
    },
  },
};

export default App;
