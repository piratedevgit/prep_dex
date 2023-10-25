import { Button, Layout, Menu, MenuProps } from "antd";
import {
  ChartIcon,
  DocsIcon,
  EarnIcon,
  FeedIcon,
  GetFoundedIcon,
  MintIcon,
  PortfolioIcon,
  ProfileIcon,
  StatesIcon,
  TradeIcon,
  TradepadIcon,
} from "../../components/SVG";
import { Link, useLocation } from "react-router-dom";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label: <Link to={key as string}>{label}</Link>,
  } as MenuItem;
}

export default function Sidebar() {
  const location = useLocation();
  const items: MenuItem[] = [
    getItem("Feed", "/", <FeedIcon />),
    getItem("Portfolio", "/portfolio", <PortfolioIcon />),
    getItem("Stats", "/stats", <StatesIcon />),
    getItem("Trade", "/trade", <TradeIcon />),
    getItem("Get Founded", "/get-founded", <GetFoundedIcon />),
    getItem("Earn", "/earn", <EarnIcon />),
    getItem("Mint", "/mint", <MintIcon />),
    getItem("Tradapad", "/tradepad", <TradepadIcon />),
    getItem("Profile", "/profile", <ProfileIcon />),
    getItem("Docs", "/docs", <DocsIcon />),
  ];

  return (
    <Sider theme="light" className="h-full py-4" width={250}>
      <div className="w-[206px] h-[80px] text-[#1D9BF0] text-[24px] font-[600] flex justify-center items-center pb-2 -ml-3">
        LOGO HERE
      </div>
      <Menu selectedKeys={[location?.pathname]} mode="inline" items={items} />

      <div className="px-5 pt-5">
        <Button
          size="large"
          block
          ghost
          type="primary"
          className="flex justify-start  items-center"
        >
          <ChartIcon className="mr-3" /> Chart
        </Button>
      </div>
    </Sider>
  );
}
