import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import style from './card.module.scss';
import { clsx } from 'clsx';
interface CardProps {
	img: any;
}
const Card = ({ img }: CardProps) => {
	return (
		<div className={clsx(style.card, style.shadow)}>
			<img src={img} />
		</div>
	);
};

export default Card;
