import { Layout } from "antd";
import { ReactNode, CSSProperties } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
const { Footer, Content } = Layout;

interface PrivateLayoutProps {
  children: ReactNode;
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <Layout className="h-full">
      <Sidebar />
      <Layout className="h-full">
        <Header />
        <Content className="h-[calc(100%-151px)] overflow-y-auto">
          {children}
        </Content>
        <Footer style={styles.footer}>Footer</Footer>
      </Layout>
    </Layout>
  );
}

interface Styles {
  footer: CSSProperties;
}

const styles: Styles = {
  footer: {
    background: "white",
    height: "68px",
  },
};
