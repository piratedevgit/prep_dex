import Icon from "@ant-design/icons";
import { ReactComponent as Feed } from "./feed.svg";
import { ReactComponent as Portfolio } from "./portfolio.svg";
import { ReactComponent as States } from "./states.svg";
import { ReactComponent as Trade } from "./trade.svg";
import { ReactComponent as GetFounded } from "./get-founded.svg";
import { ReactComponent as Heart } from "./heart.svg";
import { ReactComponent as Saved } from "./saved.svg";
import { ReactComponent as Comment } from "./comment.svg";
import { ReactComponent as Earn } from "./earn.svg";
import { ReactComponent as Chart } from "./chart.svg";
import { ReactComponent as Mint } from "./mint.svg";
import { ReactComponent as Tradepad } from "./tradapad.svg";
import { ReactComponent as Profile } from "./profile.svg";
import { ReactComponent as Docs } from "./docs.svg";

interface IconProps {
  height?: number | string;
  width?: number | string;
  fill?: string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  spin?: boolean;
  rotate?: number;
}

export const FeedIcon = (props: IconProps) => {
  return <Icon component={Feed} {...props} />;
};
export const PortfolioIcon = (props: IconProps) => {
  return <Icon component={Portfolio} {...props} />;
};
export const StatesIcon = (props: IconProps) => {
  return <Icon component={States} {...props} />;
};
export const TradeIcon = (props: IconProps) => {
  return <Icon component={Trade} {...props} />;
};
export const GetFoundedIcon = (props: IconProps) => {
  return <Icon component={GetFounded} {...props} />;
};
export const HeartIcon = (props: IconProps) => {
  return <Icon component={Heart} {...props} />;
};
export const CommentIcon = (props: IconProps) => {
  return <Icon component={Comment} {...props} />;
};
export const SavedIcon = (props: IconProps) => {
  return <Icon component={Saved} {...props} />;
};
export const EarnIcon = (props: IconProps) => {
  return <Icon component={Earn} {...props} />;
};
export const ChartIcon = (props: IconProps) => {
  return <Icon component={Chart} {...props} />;
};
export const TradepadIcon = (props: IconProps) => {
  return <Icon component={Tradepad} {...props} />;
};
export const ProfileIcon = (props: IconProps) => {
  return <Icon component={Profile} {...props} />;
};
export const DocsIcon = (props: IconProps) => {
  return <Icon component={Docs} {...props} />;
};
export const MintIcon = (props: IconProps) => {
  return <Icon component={Mint} {...props} />;
};
