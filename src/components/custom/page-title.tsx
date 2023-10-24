import { Typography } from "antd";
import { TitleProps } from "antd/es/typography/Title";

const { Title } = Typography;
export function PageTitle(props: TitleProps) {
  return <Title level={2} {...props} />;
}
