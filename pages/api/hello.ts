// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
const fs = require('fs');

type Data = {
	name: string;
};

const URL_PHOTOS = 'https://www.instagram.com/style.seconds/';
export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const photosDir = path.join(process.cwd(), 'public/photos');
	console.log('jsonDirectory: ', photosDir);
	const images = fs
		.readdirSync(photosDir, { withFileTypes: true })
		.filter((item: any) => !item.isDirectory())
		.map((item: any) => '/photos/' + item.name);
	console.log('images: ', images);
	return res.status(200).json(images);
}
