import {
  Avatar,
  Card,
  Col,
  Divider,
  Image,
  Row,
  Space,
  Typography,
} from "antd";
import PrivateLayout from "../../layouts/private";
import { CommentIcon, HeartIcon, SavedIcon } from "../../components/SVG";
import { PageTitle } from "../../components/custom";

const { Title, Paragraph, Text, Link } = Typography;

function Feeds() {
  const feeds = new Array(2).fill(null);
  const trades = [
    {
      key: "GMS",
      text: "Give MeSort",
    },
    {
      key: "MARVEL",
      text: "Marvel Entertainment",
    },
    {
      key: "WB",
      text: "Warner Bros Entertainment",
    },
  ];

  const cardFooterText = "text-[15px]";
  return (
    <PrivateLayout>
      <Row justify="center">
        <Col span={20}>
          <PageTitle> Feed </PageTitle>
          <Row gutter={50}>
            <Col span={14}>
              {feeds.map((_, index) => {
                return (
                  <Card
                    key={index}
                    className="mb-[30px]"
                    bodyStyle={{ padding: "0" }}
                  >
                    <Image
                      src="/images/feed.jpg"
                      preview={false}
                      id="feed-image"
                    />
                    <div className="px-6 pt-2">
                      <div className="text-[#1D9BF0] pb-2">
                        #Feed #insurance #dex #deex
                      </div>

                      <Title level={4}>
                        Best insurance for you better life
                      </Title>
                      <Paragraph>
                        Lorem ipsum dolor sit amet consectetur. Vestibulum
                        tortor sed lectus pretium egestas orci. Hac amet diam
                        dignissim aliquet aliquam congue gravida. Nulla nibh
                        vulputate rhoncus aliquam platea sit a. Sed ac risus
                        quam tempus facilisis rutrum congue...
                      </Paragraph>
                    </div>
                    <div className="px-4 pb-5">
                      <Divider />
                      <Row justify="space-between" className="px-1">
                        <Text className={cardFooterText}>Bullish</Text>
                        <Text className={cardFooterText}>Bearish</Text>
                        <Space align="center" size={10}>
                          <CommentIcon className="text-[18px]" />
                          <Text className={cardFooterText}>25 Comments</Text>
                        </Space>
                        <Space align="center" size={10}>
                          <HeartIcon className="text-[18px]" />
                          <Text className={cardFooterText}>120K Likes</Text>
                        </Space>
                        <Space align="center" size={10}>
                          <SavedIcon className="text-[18px]" />
                          <Text className={cardFooterText}>12 Saved</Text>
                        </Space>
                      </Row>
                    </div>
                  </Card>
                );
              })}
            </Col>
            <Col span={10}>
              <Card bodyStyle={{ padding: "20px" }}>
                <div className="bg-[#F7F9F9] h-[70px] px-4">
                  <Row
                    className="bg-[#F7F9F9] h-[70px]"
                    align="middle"
                    gutter={20}
                    justify="space-between"
                  >
                    {["Positions", "Orders", "History"].map((item, index) => {
                      return (
                        <Col
                          span={index === 2 ? 7 : 8}
                          key={item}
                          className="bg-white flex justify-center items-center h-[58px]"
                        >
                          {item}
                        </Col>
                      );
                    })}
                  </Row>
                </div>

                <Row justify="space-between" align="middle" className="py-4">
                  <Title level={5}>Trades Suggest</Title> <Link>See All</Link>
                </Row>
                <Row gutter={[0, 30]}>
                  {trades.map((trade) => {
                    return (
                      <Col span={24}>
                        <Space size={15}>
                          <Avatar src={`/logos/${trade.key}.jpg`} size={56} />
                          <Text> {trade.text}</Text>
                        </Space>
                      </Col>
                    );
                  })}
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </PrivateLayout>
  );
}

export default Feeds;
