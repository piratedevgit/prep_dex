import Icon from "@ant-design/icons";
import { ReactComponent as Feed } from "./feed.svg";
import { ReactComponent as Portfolio } from "./portfolio.svg";
import { ReactComponent as States } from "./states.svg";
import { ReactComponent as Trade } from "./trade.svg";
import { ReactComponent as GetFounded } from "./get-founded.svg";
import { ReactComponent as Heart } from "./heart.svg";
import { ReactComponent as Saved } from "./saved.svg";
import { ReactComponent as Comment } from "./comment.svg";

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
