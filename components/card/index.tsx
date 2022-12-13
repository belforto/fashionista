import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import style from './card.module.scss';
import { CardSwiper } from 'react-card-rotate-swiper';
import axios from 'axios';
import Image from 'next/image';

interface CardProps {
	img: any;
}
const Card = ({ img }: CardProps) => {
	return (
		<div className={style.card}>
			<img src={img} />
		</div>
	);
};

export default Card;