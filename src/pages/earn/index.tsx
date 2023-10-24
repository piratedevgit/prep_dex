import { CSSProperties } from "react";
import { PageTitle } from "../../components/custom";
import PrivateLayout from "../../layouts/private";
import {
  Button,
  Card,
  Col,
  Divider,
  DividerProps,
  Row,
  Space,
  Typography,
} from "antd";
import { TextProps } from "antd/es/typography/Text";
import { TitleProps } from "antd/es/typography/Title";

const { Text, Title } = Typography;

const CustomText = (props: TextProps) => {
  return <Text className="text-[17px]" {...props} />;
};

const CustomTitle = (props: TitleProps) => {
  return <Title className="!text-[18px]" level={4} {...props} />;
};

const CardTitle = (props: TitleProps) => {
  return <Title level={3} className="!mb-6" {...props} />;
};
const CustomDivider = (props: DividerProps) => {
  return <Divider className="my-5" {...props} />;
};

const renderList = (data: { title: string; value: string }[]) => {
  return data?.map((item) => {
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
  });
};

export default function Earn() {
  const deex1 = [
    {
      title: "Price",
      value: "$72.48",
    },
    {
      title: "Wallet",
      value: "0.00 GMX ($0.00)",
    },
    {
      title: "Staked",
      value: "0.00 GMX ($0.00)",
    },
  ];
  const deex2 = [
    {
      title: "APR",
      value: "$72.48",
    },
    {
      title: "Rewards",
      value: "0.00 GMX ($0.00)",
    },
    {
      title: "StaMultiplier Points APRked",
      value: "0.00 GMX ($0.00)",
    },
    {
      title: "Boost Percentage",
      value: "0.00 GMX ($0.00)",
    },
  ];
  const deex3 = [
    {
      title: "Total Staked",
      value: "$72.48",
    },
    {
      title: "Total Supply",
      value: "0.00 GMX ($0.00)",
    },
  ];

  const rewards1 = [
    {
      title: "ETH (WETH)",
      value: "$72.48",
    },
    {
      title: "DEEX",
      value: "0.00 GMX ($0.00)",
    },
    {
      title: "Escrowed GMX",
      value: "0.00 GMX ($0.00)",
    },
  ];
  const rewards2 = [
    {
      title: "Multiplier Points",
      value: "$72.48",
    },
    {
      title: "Staked Multiplier Points",
      value: "0.00 GMX ($0.00)",
    },
    {
      title: "Total",
      value: "0.00 GMX ($0.00)",
    },
  ];

  const vault = [
    {
      title: "Staked Tokens",
      value: "$72.48",
    },
    {
      title: "Reserved for Vesting",
      value: "0.00 GMX ($0.00)",
    },
    {
      title: "Vesting Status",
      value: "0.00 GMX ($0.00)",
    },
  ];

  return (
    <PrivateLayout>
      <PageTitle className="!mb-0">Earn</PageTitle>
      <Text type="secondary">Stake DEEX and GLP to earn rewards</Text>
      <Row gutter={[30, 30]} className="mt-5">
        <Col span={12}>
          <Card bodyStyle={styles.cardBodyStyle}>
            <CardTitle>DEEX</CardTitle>
            {renderList(deex1)}
            <CustomDivider />
            {renderList(deex2)}
            <CustomDivider />
            {renderList(deex3)}
            <Button type="primary">Buy DEEX</Button>
          </Card>
        </Col>
        <Col span={12}>
          <Card bodyStyle={styles.cardBodyStyle} className="!h-full">
            <CardTitle>Total Rewards</CardTitle>
            {renderList(rewards1)}
            <CustomDivider />
            {renderList(rewards2)}
            <Button type="primary" className="absolute bottom-5">
              Connect Wallet
            </Button>
          </Card>
        </Col>
        <Col span={12}>
          <Card bodyStyle={styles.cardBodyStyle}>
            <CardTitle>DEX (Arbitrum)</CardTitle>
            {renderList(deex1)}
            <CustomDivider />
            {renderList(deex2)}
            <CustomDivider />
            {renderList(deex3)}
            <Space>
              <Button type="primary">Buy DEX</Button>
              <Button type="primary">Sell DEX</Button>
              <Button type="primary">Purchase</Button>
            </Space>
          </Card>
        </Col>
        <Col span={12}>
          <Card bodyStyle={styles.cardBodyStyle}>
            <CardTitle>Escrowed DEEX</CardTitle>
            {renderList(deex1)}
            <CustomDivider />
            {renderList(deex2)}
            <CustomDivider />
            {renderList(deex3)}
            <Space>
              <Button type="primary">Buy DEX</Button>
              <Button type="primary">Sell DEX</Button>
              <Button type="primary">Purchase Insurance</Button>
            </Space>
          </Card>
        </Col>
        <Col span={24}>
          <PageTitle className="!mb-0">Vest</PageTitle>
          <Space direction="vertical" size={3}>
            <Text type="secondary">Convert esDEEX tokens to DEEX tokens.</Text>
            <Text type="secondary">
              Please read the vesting details before using the vaults.
            </Text>
          </Space>
        </Col>
        <Col span={12}>
          <Card bodyStyle={styles.cardBodyStyle}>
            <CardTitle>DEEX Vault</CardTitle>
            {renderList(vault)}
            <Button type="primary">Connect Wallet</Button>
          </Card>
        </Col>
        <Col span={12}>
          <Card bodyStyle={styles.cardBodyStyle}>
            <CardTitle>DEEX Vault</CardTitle>
            {renderList(vault)}
            <Button type="primary">Connect Wallet</Button>
          </Card>
        </Col>
      </Row>
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
