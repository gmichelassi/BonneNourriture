import React from "react";
import { useFela } from "react-fela";
import { Col, Image, Row } from "antd";

import { FelaStyle } from "../fela";
import ContentContainer from "./ContentContainer";

import gabs from "../img/rsz_gabs.jpg";
import seiji from "../img/rsz_rafa-seiji.jpg";
import rafa from "../img/rsz_rafa-silva.jpg";
import yasmin from "../img/rsz_yasmin.jpg";
import colors from "../contants/colors";

export default function ProjectInfo() {
  const { css } = useFela();

  return (
    <ContentContainer>
      <Row gutter={[48, 8]}>
        <Col span={12}>
          <div className={css(rules.container)}>
            <span className={css(rules.title)}>
              Gabriel de Castro Michelassi
            </span>
            <Image preview={false} height={200} src={gabs} />
            <span className={css(rules.text)}>
              Estagiário em engenharia de software, futuro pesquisador e
              estusiasta de ciência de dados. Amante de gatos, vídeo games,
              física e tecnologia, especialmente aquelas com uma maçã atrás.
            </span>
          </div>
        </Col>
        <Col span={12}>
          <div className={css(rules.container)}>
            <span className={css(rules.title)}>
              Rafael Seiji do Amaral Tomanari
            </span>
            <Image preview={false} height={200} src={seiji} />
            <span className={css(rules.text)}>
              Estudante, ainda não trabalhando, mas à procura de estágio. Gosta
              de se reunir online no fim do dia com amigos para conversar e
              joguinhos. Passou a vida inteira odiando tomate, mas está
              lentamente aprendendo a admirar seu valor.
            </span>
          </div>
        </Col>

        <Col span={12}>
          <div className={css(rules.container)}>
            <span className={css(rules.title)}>Rafael Silva de Lima</span>
            <Image preview={false} height={200} src={rafa} />
            <span className={css(rules.text)}>
              Estagiário em engenharia de software backend. Gosta muito de jogar
              videogames, de tocar contrabaixo e de comer hambúrguer.
            </span>
          </div>
        </Col>

        <Col span={12}>
          <div className={css(rules.container)}>
            <span className={css(rules.title)}>Yasmin Sanches</span>
            <Image preview={false} height={200} src={yasmin} />
            <span className={css(rules.text)}>
              Analista de dados, doida dos gatos, grande apreciadora de miojo e
              aspirante a artista. Passo meu tempo livre pintando e passando
              raiva nos jogos online.
            </span>
          </div>
        </Col>
      </Row>
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
  text: {
    color: colors.text.dark,
    margin: "12px 50px",
    textAlign: "justify",
    fontSize: "12px",
    maxWidth: "500px",
  },
  title: {
    color: colors.primary,
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
};
