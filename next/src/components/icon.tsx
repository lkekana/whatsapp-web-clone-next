import Icons from "@/assets/icons";
import { FC, JSX } from "react";

type IconProps = {
	[key: string]: (props: any) => JSX.Element;
};

const allIcons: IconProps = Icons;

interface IconComponentProps {
	id: string;
	[key: string]: any;
}

const Icon: FC<IconComponentProps> = ({ id, ...props }) => {
	const selectedIcon = allIcons[id];
	return selectedIcon ? selectedIcon(props) : null;
};

export default Icon;
