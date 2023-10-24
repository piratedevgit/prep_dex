import { Avatar, Button, Col, Layout, Row, Space } from "antd";
import { CSSProperties } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
const { Header: AntdHeader } = Layout;

export default function Header() {
  return (
    <AntdHeader style={styles.header}>
      <Row className="h-full" justify="end" align="middle">
        <Col>
          <Space size={20} align="center">
            <Button type="primary" danger>
              Connect Wallet
            </Button>
            <Space size={10} align="center">
              <Avatar
                size={36}
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              />
              <CaretDownOutlined className="text-gray-500 text-[18px]" />
            </Space>
          </Space>
        </Col>
      </Row>
    </AntdHeader>
  );
}

interface Styles {
  header: CSSProperties;
}

const styles: Styles = {
  header: {
    background: "white",
    height: "83px",
    marginLeft: "30px",
    borderBottomLeftRadius: "24px",
  },
};
