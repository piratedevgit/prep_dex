import { Col, Row, Typography } from "antd";
import PrivateLayout from "../layouts/private";

const { Title } = Typography;
export default function Notfound() {
  return (
    <PrivateLayout>
      <Row className="h-full, w-full" justify="center" align="middle">
        <Col>
          <Title>This page do not exist</Title>
        </Col>
      </Row>
    </PrivateLayout>
  );
}
