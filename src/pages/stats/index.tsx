import {
  Card,
  Col,
  Progress,
  Row,
  Space,
  Typography,
} from "antd";
import PrivateLayout from "../../layouts/private";
import { PageTitle } from "../../components/custom";
import { TextProps } from "antd/es/typography/Text";
import { TitleProps } from "antd/es/typography/Title";
import { CSSProperties } from "react";

const { Title, Text } = Typography;

const CustomText = (props: TextProps) => {
  return <Text className="text-[17px]" {...props} />;
};

const CustomTitle = (props: TitleProps) => {
  return <Title className="!text-[18px]" level={4} {...props} />;
};

const CardTitle = (props: TitleProps) => {
  return <Title level={3} className="!mb-6" {...props} />;
};

export default function Stats() {
  const overview = [
    {
      title: "AUM",
      value: "$72.48",
    },
    {
      title: "GLP Pool",
      value: "0.00 GMX ($0.00)",
    },
    {
      title: "24h Volume",
      value: "0.00 GMX ($0.00)",
    },
    {
      title: "Long Positions",
      value: "0.00 GMX ($0.00)",
    },
    {
      title: "Short Positions",
      value: "0.00 GMX ($0.00)",
    },
    {
      title: "Fees since 19 Apr 2023",
      value: "0.00 GMX ($0.00)",
    },
    {
      title: "Fees since 20 Apr 2023",
      value: "0.00 GMX ($0.00)",
    },
    {
      title: "Fees since 21 Apr 2023",
      value: "0.00 GMX ($0.00)",
    },
    {
      title: "Fees since 22 Apr 2023",
      value: "0.00 GMX ($0.00)",
    },
    {
      title: "Fees since 23 Apr 2023",
      value: "0.00 GMX ($0.00)",
    },
    {
      title: "Fees since 24 Apr 2023",
      value: "0.00 GMX ($0.00)",
    },
  ];

  const second = [
    {
      title: "Indeed Total",
      value: "$72.48",
    },
    {
      title: "Amount",
      value: "0.00 GMX ($0.00)",
    },
    {
      title: "Pnef",
      value: "0.00 GMX ($0.00)",
    },
    {
      title: "Fee",
      value: "0.00 GMX ($0.00)",
    },
  ];
  const dex = ["BTC", "ETH", "CHENLE", "USDL", "USDT"];
  const dex1 = ["USDT", "USDC", "DOST", "Free"];
  return (
    <PrivateLayout>
      <Row gutter={30}>
        <Col span={12}>
          <PageTitle>Stats</PageTitle>
          <Space direction="vertical" size={30} className="w-full">
            <Card bodyStyle={styles.cardBodyStyle}>
              <CardTitle>Overview</CardTitle>
              {overview?.map((item) => {
                return (
                  <Row justify="space-between">
                    <Col>
                      <CustomTitle level={4}>{item?.title}</CustomTitle>
                    </Col>
                    <Col>
                      <CustomText>{item?.value}</CustomText>
                    </Col>
                  </Row>
                );
              })}
            </Card>
            <Card bodyStyle={styles.cardBodyStyle}>
              <Space direction="vertical" className="w-full" size={13}>
                {second?.map((item) => {
                  return (
                    <Row justify="space-between">
                      <Col>
                        <CustomTitle level={4}>{item?.title}</CustomTitle>
                      </Col>
                      <Col>
                        <CustomText>{item?.value}</CustomText>
                      </Col>
                    </Row>
                  );
                })}
              </Space>
            </Card>
          </Space>
        </Col>
        <Col span={12}>
          <PageTitle>Total</PageTitle>
          <Space direction="vertical" className="w-full" size={30}>
            <Card bodyStyle={styles.cardBodyStyle}>
              <Row justify="space-between">
                <CardTitle>DEEX</CardTitle>{" "}
                <Progress
                  strokeLinecap="round"
                  type="circle"
                  size={179}
                  trailColor="#1DE3F0"
                  strokeColor="#1D9BF0"
                  gapDegree={10}
                  percent={75}
                  gapPosition="top"
                  format={() => {
                    return (
                      <Title level={4} className="!mb-0">
                        Dxtool
                      </Title>
                    );
                  }}
                />
              </Row>
            </Card>
            <Card bodyStyle={styles.cardBodyStyle}>
              <Row justify="space-between">
                <CardTitle>DEX</CardTitle>
                <Progress
                  strokeLinecap="round"
                  type="circle"
                  size={179}
                  percent={75}
                  trailColor="#1DE3F0"
                  strokeColor="#1D9BF0"
                  gapDegree={10}
                  gapPosition="top"
                  format={() => {
                    return (
                      <Title level={4} className="!mb-0">
                        Pool
                      </Title>
                    );
                  }}
                />
              </Row>
            </Card>
            <Card bodyStyle={styles.cardBodyStyle}>
              <Row justify="space-between">
                <CardTitle>DEe</CardTitle>
                <Progress
                  strokeLinecap="round"
                  type="circle"
                  size={179}
                  trailColor="#1DE3F0"
                  strokeColor="#1D9BF0"
                  gapDegree={10}
                  percent={75}
                  gapPosition="top"
                  format={() => {
                    return (
                      <Title level={4} className="!mb-0">
                        Stake
                      </Title>
                    );
                  }}
                />
              </Row>
            </Card>
          </Space>
        </Col>
      </Row>
      <Space direction="vertical" size={30} className="w-full mt-7">
        <PageTitle className="!mb-0">DEX Index</PageTitle>
        <Card bodyStyle={styles.cardBodyStyle}>
          {dex.map((item) => {
            return <Title level={3}>{item}</Title>;
          })}
        </Card>
        <PageTitle className="!mb-0">DEX Index</PageTitle>
        <Card bodyStyle={styles.cardBodyStyle}>
          {dex1.map((item) => {
            return <Title level={3}>{item}</Title>;
          })}
        </Card>
      </Space>
    </PrivateLayout>
  );
}

interface Styles {
  cardBodyStyle: CSSProperties;
}

const styles: Styles = {
  cardBodyStyle: {
    padding: "20px",
    borderRadius: "12px",
  },
};
