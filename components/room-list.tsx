import { NextComponentType } from 'next';
import { useQuery } from 'react-query';
import { fetchRooms } from './room-api';
import Card from './ui/card';

const RoomList: NextComponentType = () => {
	const { data: rooms, status } = useQuery('rooms', fetchRooms);

	if (status === 'loading') {
		return <p>Loading...</p>;
	}

	return (
		<ul className="flex flex-wrap gap-4 mt-5">
			{rooms &&
				rooms.map((room) => (
					<li key={room.entityId}>
						<Card
							title={room.title}
							src="https://static-cdn.jtvnw.net/ttv-boxart/513143-285x380.jpg"
							alt="TFT"
						/>
					</li>
				))}
		</ul>
	);
};

export default RoomList;
