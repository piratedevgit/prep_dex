import { Layout } from "antd";
import { ReactNode } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";
const { Content } = Layout;

interface PrivateLayoutProps {
  children: ReactNode;
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <Layout className="h-full">
      <Layout>
        <Sidebar />
        <Layout className="h-full">
          <Header />
          <Content className="h-[calc(100%-151px)] overflow-y-auto px-[30px] py-4">
            {children}
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  );
}
