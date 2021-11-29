import React from "react";
import { useFela } from "react-fela";

import { FelaStyle } from "../fela";
import ContentContainer from "./ContentContainer";

export default function ProjectInfo() {
  const { css } = useFela();

  return (
    <ContentContainer>
      <div className={css(rules.container)}>
        <h3 style={{ fontWeight: "bold" }}>Planejamento</h3>
        <p>
          A comunicação entre a equipe para o desenvolvimento do projeto será
          simples e clara com base no modelo interativo, com o intuito de
          facilitar o entendimento entre todas as partes e evitar possíveis
          confusões. O plano consiste em manter uma comunicação informal
          juntamente com uma comunicação formal, fazendo com que a finalização
          de cada etapa do projeto seja notificada para as partes interessadas.
          Dessa maneira, na parte informal, teremos encontros virtuais usando
          ferramentas de videoconferência, como Google Meets, em que todos terão
          um momento de compartilhar avançados, dúvidas sobre o projeto e
          debater soluções, deixando todos cientes das etapas em
          desenvolvimento. Além disso, mensagens de textos também estão no plano
          de comunicação, possibilitando uma conversa rápida, tendo em mente que
          reuniões podem quebrar o fluxo de trabalho e gastar tempo
          desnecessário ou simplesmente não precisam ser endereçadas para todos
          os membros. Já pensando em comunicação formal, relatórios diários
          curtos deverão ser anexados em um relatório semanal que, de maneira
          mais completa, evidencia tudo que foi realizado durante a semana.
          Assim, ao final de cada expediente serão reservados 10 minutos para o
          compartilhamento do relatório, ao final da semana, 1 hora do fim do
          dia para ver o progresso geral. Além disso, e-mails serão a forma
          principal da equipe se comunicar formalmente. As informações serão
          todas compartilhadas em português, já que é a língua comum de todos do
          projeto. Todo empregado deverá se responsabilizar por levar
          informações relevantes para o gestor do projeto e este, se achar
          necessário, deverá comunicar essas informações para o resto da equipe.
          Informações menos importantes deverão ser tratados entre a equipe, sem
          precisar passar pelo gestor, mas deverão ser comunicadas ao final do
          dia ou semana. O plano poderá ser alterado em todas as instâncias. Se
          surgir uma nova tecnologia que será utilizada como novo meio de
          comunicação, por exemplo, poderá ser discutida com a equipe a
          possibilidade de migração e, se concretizada, será implementada na
          dinâmica e alterada no plano de comunicação.
        </p>

        <h3 style={{ fontWeight: "bold" }}>Gerenciamento</h3>
        <p>
          Para gerir melhor a comunicação, teremos feedbacks do projeto e
          pessoal nos encontros ao final de cada semana, assim, críticas
          construtivas e elogios serão fornecidos à toda a equipe pelo gestor.
        </p>

        <h3 style={{ fontWeight: "bold" }}>Controle</h3>
        <p>
          Como controle, deverá ser atualizado ao plano quaisquer modificações
          decididas pela equipe e aprovadas pelo gestor. A partir disso, todos
          os documentos que são afetados pela mudança serão atualizados e as
          partes interessadas informadas disso, a fim de manter a consistência
          das informações no projeto.
        </p>

        <h3 style={{ fontWeight: "bold" }}>Informações</h3>
        <p>
          Comunicados serão armazenados nos e-mails que foram enviados para
          consulta. Os relatórios serão mantidos e armazenados de forma que
          todos possuirão acesso. Comunicados serão gerados a partir de reuniões
          ou pelo gestor. As reuniões deverão possuir uma ata com os principais
          pontos debatidos.
        </p>
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
