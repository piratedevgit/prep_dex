import { Layout, Menu, MenuProps } from "antd";
import {
  FeedIcon,
  GetFoundedIcon,
  PortfolioIcon,
  StatesIcon,
  TradeIcon,
} from "../../components/SVG";
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
    label,
  } as MenuItem;
}

export default function Sidebar() {
  const items: MenuItem[] = [
    getItem("Feed", "feed", <FeedIcon />),
    getItem("Portfolio", "portfolio", <PortfolioIcon />),
    getItem("Stats", "stats", <StatesIcon />),
    getItem("Trade", "trade", <TradeIcon />),
    getItem("Get Founded", "getFounded", <GetFoundedIcon />),
  ];

  return (
    <Sider theme="light" className="h-full py-4" width={250}>
      <div className="w-[206px] h-[80px] text-[#1D9BF0] text-[24px] font-[600] flex justify-center items-center pb-2 -ml-3">
        LOGO HERE
      </div>
      <Menu defaultSelectedKeys={["feed"]} mode="inline" items={items} />
    </Sider>
  );
}
