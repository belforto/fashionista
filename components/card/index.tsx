import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import style from './card.module.scss';
import { clsx } from 'clsx';
interface CardProps {
	img: string;
	isLoading: boolean;
}
const Card = ({ img, isLoading }: CardProps) => {
	return (
		<div
			className={clsx(
				style.card,
				style.shadow,
				isLoading && style.invisible,
				!isLoading && style.visible
			)}
		>
			<img src={img} />
		</div>
	);
};

export default Card;
