import React, { useState } from "react";
import { Image, Layout, Menu } from "antd";

import logo from "./img/written-logo.png";
import background from "./img/restaurant2-bg.jpeg";
import ProjectInfo from "./components/ProjectInfo";
import EAP from "./components/EAP";
import Canvas from "./components/Canvas";
import About from "./components/About";
import colors from "./contants/colors";
import { useFela } from "react-fela";
import { FelaStyle } from "./fela";

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
          style={{ marginLeft: "12px" }}
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
        {content === "about" && <About />}
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
    backgroundRepeat: "no-repeat",
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
