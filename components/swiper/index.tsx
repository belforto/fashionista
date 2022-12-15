import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import style from './swiper.module.scss';
import { CardSwiper } from 'react-card-rotate-swiper';
import axios from 'axios';
import Card from '../card';
import IconButton from '../button/iconButton';
import { BsHeartFill, BsHandThumbsDown } from 'react-icons/bs';

const Swiper = (props: any) => {
	const IMG_BASE = 'https://image.tmdb.org/t/p/w500';
	const [images, setImages] = React.useState<any>();
	const [animateYes, setAnimateYes] = React.useState<any>(false);
	const [animateNo, setAnimateNo] = React.useState<any>(false);

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
			.get(
				'https://api.themoviedb.org/3/discover/movie?api_key=360a9b5e0dea438bac3f653b0e73af47&with_genres=10749'
			)
			.then(
				(res: {
					data: { results: { reverse: () => React.SetStateAction<never[]> } };
				}) => {
					setImages(res.data.results.reverse());
				}
			);
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
						contents={<Card key={i} img={IMG_BASE + img.backdrop_path} />}
					/>
				))}
				<p className="paragraphText">That was all, reload for more.</p>
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
