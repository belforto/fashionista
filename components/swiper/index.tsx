import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import style from './swiper.module.scss';
import { CardSwiper } from 'react-card-rotate-swiper';
import axios from 'axios';
import Image from 'next/image';

// const getConfigurableProps = () => ({
// 	showArrows: boolean('showArrows', true, tooglesGroupId),
// 	showStatus: boolean('showStatus', true, tooglesGroupId),
// 	showIndicators: boolean('showIndicators', true, tooglesGroupId),
// 	infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
// 	showThumbs: boolean('showThumbs', true, tooglesGroupId),
// 	useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
// 	autoPlay: boolean('autoPlay', true, tooglesGroupId),
// 	stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
// 	swipeable: boolean('swipeable', true, tooglesGroupId),
// 	dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
// 	emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
// 	autoFocus: boolean('autoFocus', false, tooglesGroupId),
// 	thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
// 	selectedItem: number('selectedItem', 0, {}, valuesGroupId),
// 	interval: number('interval', 2000, {}, valuesGroupId),
// 	transitionTime: number('transitionTime', 500, {}, valuesGroupId),
// 	swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
// 	ariaLabel: text('ariaLabel', undefined),
// });

const Swiper = (props: any) => {
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
		<div className="App">
			<CardSwiper
				onSwipe={handleSwipe}
				className={'swiper'}
				contents={
					//fill this your element
					<div>
						{images?.map((img: any, i: number) => (
							<Image
								key={i}
								src={img.backdrop_path}
								alt="img"
								width={360}
								height={600}
							/>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Swiper;
