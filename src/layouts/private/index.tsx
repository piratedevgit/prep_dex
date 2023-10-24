import { Layout } from "antd";
import { ReactNode } from "react";
import Sidebar from "./sidebar";
const { Header, Footer, Content } = Layout;

interface PrivateLayoutProps {
  children: ReactNode;
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <Layout className="h-full">
      <Sidebar />
      <Layout className="h-full">
        <Header style={styles.header}>Header</Header>
        <Content>{children}</Content>
        <Footer style={styles.header}>Footer</Footer>
      </Layout>
    </Layout>
  );
}

const styles = {
  header: {
    background: "white",
  },
};
