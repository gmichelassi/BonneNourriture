import React from "react";
import { useFela } from "react-fela";
import { Image } from "antd";

import { FelaStyle } from "../fela";
import ContentContainer from "./ContentContainer";

import ferramentas from "../img/ferramentas-qualidade.png";
import metricas from "../img/metricas-qualidade.png";

export default function ProjectInfo() {
  const { css } = useFela();

  return (
    <ContentContainer>
      <div className={css(rules.container)}>
        <h3 style={{ fontWeight: "bold" }}>Métricas de Qualidade</h3>
        <Image className={css(rules.image)} src={metricas} width={650} />

        <h3 style={{ fontWeight: "bold" }}>Ferramentas de qualidade</h3>
        <Image className={css(rules.image)} src={ferramentas} width={650} />

        <h3 style={{ fontWeight: "bold" }}>Entregas e Critério de Aceitação</h3>

        <h4 style={{ fontWeight: "bold" }}>Adição de itens ao cardápio</h4>
        <ol>
          <li>Adição de ingredientes por tipo e quantidade</li>
          <li>
            Adição dos pratos ao cardápio contando seus respectivos ingredientes
            e quantidades utilizadas
          </li>
        </ol>

        <h4 style={{ fontWeight: "bold" }}>Exclusão de itens ao cardápio</h4>
        <ol>
          <li>
            Os ingredientes e suas respectivas quantidades devem ser excluídas
            do estoque
          </li>
          <li>
            O item deverá ser excluído do cardápio quando um de seus
            ingredientes não estiver mais disponível no estoque
          </li>
        </ol>

        <h4 style={{ fontWeight: "bold" }}>Controle do Estoque</h4>
        <ol>
          <li>
            A contagem dos ingredientes deve ser atualizada conforme sua adição
            e exclusão feita pelos funcionários responsáveis
          </li>
        </ol>

        <h4 style={{ fontWeight: "bold" }}>Atualização do cardápio</h4>
        <ol>
          <li>
            Os pratos disponíveis no cardápio devem respeitar a quantidade de
            ingredientes disponíveis, sendo excluídos caso um dos ingredientes
            acabe
          </li>
          <li>
            Os pratos poderão ter seus ingredientes modificados pelos
            funcionários
          </li>
          <li>
            Os pratos poderão ser adicionados e excluídos do cardápio pelos
            funcionários
          </li>
        </ol>

        <h4 style={{ fontWeight: "bold" }}>Cardápio digital</h4>
        <ol>
          <li>
            O cardápio deve mostrar todos os pratos disponíveis, sua descrição e
            seus valores
          </li>
        </ol>

        <h4 style={{ fontWeight: "bold" }}>Confirmação de pedido</h4>
        <ol>
          <li>
            Após a adição de todos os pratos de uma determinada mesa o pedido
            deve ser confirmado, subtraindo do estoque os ingredientes dos
            pratos.
          </li>
          <li>
            Os pratos do pedido serão enviados ao chefe responsável por seu
            preparo
          </li>
        </ol>

        <h4 style={{ fontWeight: "bold" }}>Encerramento de conta</h4>
        <ol>
          <li>
            Todos os pedidos confirmados terão seus valores somados no
            encerramento da conta
          </li>
          <li>O valor total da conta será calculado e aparecerá na tela</li>
          <li>Ao finalizar os pagamentos a conta deve ser encerrada</li>
        </ol>

        <h4 style={{ fontWeight: "bold" }}>
          Gerenciamento e controle de um pedido
        </h4>
        <ol>
          <li>
            O aplicativo deverá mostrar todos os pedidos por etapa (enviado, em
            preparação, pronto, entregue)
          </li>
        </ol>

        <h4 style={{ fontWeight: "bold" }}>Balanço financeiro</h4>
        <ol>
          <li>Todos os valores das contas encerradas deverão ser somados</li>
          <li>
            Todos os valores gastos em ingredientes do estoque deverão ser
            somados
          </li>
          <li>
            O valor dos gastos deverão ser subtraídos dos valores recebidos e
            gerar um valor final do balanço financeiro
          </li>
          <li>Os cálculos devem ser contabilizados diariamente</li>
          <li>Deverá ser possível verificar o balanço total do mês</li>
        </ol>
      </div>
    </ContentContainer>
  );
}

const rules: FelaStyle = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  image: {
    borderRadius: "12px",
  },
};
