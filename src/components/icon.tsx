import Icons from "@/assets/icons";
import type { FC, JSX, SVGProps } from "react";

// Define proper types for icon props
type IconSvgProps = SVGProps<SVGSVGElement>;

type IconProps = {
  [key: string]: (props: IconSvgProps) => JSX.Element;
};

const allIcons: IconProps = Icons;

interface IconComponentProps extends IconSvgProps {
  id: string;
}

const Icon: FC<IconComponentProps> = ({ id, ...props }) => {
  const selectedIcon = allIcons[id];
  return selectedIcon ? selectedIcon(props) : null;
};

export default Icon;