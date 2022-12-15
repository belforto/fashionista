import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import style from './iconButton.module.scss';
import { clsx } from 'clsx';

interface IconButtonProps {
	icon?: any;
	onAnimationEndHandler?: any;
	triggerAnimation?: boolean;
}
const IconButton = ({
	icon,
	onAnimationEndHandler,
	triggerAnimation = false,
}: IconButtonProps) => {
	return (
		<button
			className={clsx(style.button, triggerAnimation && style.animateBtn)}
			onClick={(x) => console.log(x)}
			onAnimationEnd={onAnimationEndHandler}
		>
			{icon}
		</button>
	);
};

export default IconButton;
