import { NextComponentType } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Card: NextComponentType<{}, {}, { title: string; src: string; alt: string }> = ({
	title,
	src,
	alt,
}) => {
	return (
		<>
			<Link href={`/${title}`} passHref>
				<a>
					<Image
						src={src}
						alt={alt}
						objectFit="cover"
						width={150}
						height={200}
						className="cursor-pointer"
					/>
				</a>
			</Link>
			<div className="cursor-pointer hover:text-purple-600 font-semibold">
				<Link href={`/${title}`}>
					<a>{title}</a>
				</Link>
			</div>
		</>
	);
};

export default Card;
