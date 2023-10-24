import { Col, Layout, Row, Space, Typography } from "antd";
import { CSSProperties } from "react";
const { Footer: AntdFooter } = Layout;

const { Text } = Typography;
export default function Footer() {
  const date = new Date();
  return (
    <AntdFooter style={styles.footer} className="px-[30px]">
      <Row justify="space-between">
        <Col>Copyright @ {date.getFullYear()}, All rights reserved by ...</Col>
        <Col>
          <Space size={20}>
            <Text>Dark Mode</Text>
            <Text>Support</Text>
            <Text>Terms</Text>
            <Text>Privacy</Text>
          </Space>
        </Col>
      </Row>
    </AntdFooter>
  );
}

interface Styles {
  footer: CSSProperties;
}

const styles: Styles = {
  footer: {
    background: "white",
    height: "68px",
    boxShadow: "0px -1px 0px 0px #F3F6F6;",
  },
};
