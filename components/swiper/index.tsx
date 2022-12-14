import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import style from './swiper.module.scss';
import { CardSwiper } from 'react-card-rotate-swiper';
import axios from 'axios';
import Card from '../card';
import IconButton from '../button/iconButton';
import { BsHeartFill, BsHandThumbsDown } from 'react-icons/bs';

const Swiper = (props: any) => {
	let IMG_BASE: any = null;

	if (typeof window !== 'undefined') {
		IMG_BASE = window.location.href;
	}
	const [images, setImages] = React.useState<any>();
	const [animateYes, setAnimateYes] = React.useState<any>(false);
	const [animateNo, setAnimateNo] = React.useState<any>(false);
	const [isLoading, setIsLoading] = React.useState<any>(true);

	const handleSwipe = (direction: string) => {
		//fill this your callback
		switch (direction) {
			case 'left':
				setAnimateYes(true);
				break;
			case 'right':
				setAnimateNo(true);
				break;

			default:
				break;
		}
	};
	React.useEffect(() => {
		axios
			.get(`${IMG_BASE}api/photos`)
			.then(
				(res: {
					data: { results: { reverse: () => React.SetStateAction<never[]> } };
				}) => {
					setImages(res.data.results.reverse());
				}
			);

		const interval = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(interval);
	}, []);

	return (
		<div className={style.swiperContainer}>
			<h1 className="title">Street Style</h1>

			<div className={style.swiperDeck}>
				{images?.map((img: any, i: number) => (
					<CardSwiper
						detectingSize={50}
						throwLimit={1000}
						key={i}
						onSwipe={handleSwipe}
						className={style.swiper}
						contents={
							<Card key={i} img={IMG_BASE + img} isLoading={isLoading} />
						}
					/>
				))}
				<p className="paragraphText">Loading photos...</p>
			</div>
			<div className={style.controlsContainer}>
				<IconButton
					triggerAnimation={animateYes}
					onAnimationEndHandler={() => setAnimateYes(false)}
					icon={<BsHeartFill />}
				/>
				<IconButton
					triggerAnimation={animateNo}
					onAnimationEndHandler={() => setAnimateNo(false)}
					icon={<BsHandThumbsDown />}
				/>
				{/* <Button icon={<FaBeer />} />  */}
			</div>
		</div>
	);
};

export default Swiper;
