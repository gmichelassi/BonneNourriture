import React, {
  createContext,
  PropsWithChildren,
  RefObject,
  useRef,
  useState,
} from "react";
import { createRenderer } from "fela";
import { RendererProvider as FelaProvider } from "react-fela";
import { ConfigProvider as AntdProvider } from "antd";
import { v4 as uuid } from "uuid";

import "antd/dist/antd.css";

import rendererConfig from "../fela/felaConfig";

export const ApplicationContext = createContext<{
  externalContainerId?: string;
  externalContainerRef?: RefObject<HTMLDivElement>;
}>({});

export default function ApplicationProvider({
  children,
}: PropsWithChildren<{}>) {
  const [externalContainerId] = useState(
    () => `antd-external-container-${uuid()}`
  );
  const externalContainerRef = useRef<HTMLDivElement>(null);

  const felaRendererConfig = rendererConfig({ selectorPrefix: "bonne" });
  const getPopupContainer = () => externalContainerRef.current || document.body;

  return (
    <AntdProvider getPopupContainer={getPopupContainer}>
      <FelaProvider renderer={createRenderer(felaRendererConfig)}>
        <div
          className="antd-local"
          style={{
            overflowY: "hidden",
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          <div id={externalContainerId} ref={externalContainerRef} />
          <ApplicationContext.Provider
            value={{ externalContainerId, externalContainerRef }}
          >
            {children}
          </ApplicationContext.Provider>
        </div>
      </FelaProvider>
    </AntdProvider>
  );
}
