import Head from 'next/head';
import Image from 'next/image';
import Swiper from '../components/swiper';
import style from '../styles/Home.module.scss';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Fashion App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className={style.appContainer}>
				<div className={style.mainContainer}>
					<Swiper />
				</div>
			</div>
		</div>
	);
}
