import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import style from './swiper.module.scss';
import { CardSwiper } from 'react-card-rotate-swiper';
import axios from 'axios';
import Card from '../card';

const Swiper = (props: any) => {
	const IMG_BASE = 'https://image.tmdb.org/t/p/w500';
	const [images, setImages] = React.useState<any>();
	const handleSwipe = (d: any) => {
		console.log('d: ', d);
		//fill this your callback
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
					console.log('res.data.results: ', res.data.results);
					setImages(res.data.results.reverse());
				}
			);
	}, []);

	return (
		<div className={style.swiperContainer}>
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
			</div>
		</div>
	);
};

export default Swiper;
