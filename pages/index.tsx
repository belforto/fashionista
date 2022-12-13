import Head from 'next/head';
import Image from 'next/image';
import Swiper from '../components/swiper';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div style={{ width: '100%', display: 'flex' }}>
			<Swiper />
		</div>
	);
}
