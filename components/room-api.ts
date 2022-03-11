export interface Room {
	entityId: string;
	description: string;
	title: string;
}

export interface RoomPayload {
	description: string;
	title: string;
}

export const fetchRooms = async (): Promise<Room[]> => {
	const res = await fetch('api/rooms');
	const { rooms } = await res.json();
	return rooms;
};

export const postRoom = async (formData: RoomPayload) => {
	await fetch('/api/rooms', {
		body: JSON.stringify(formData),
		headers: {
			'Content-type': 'application/json',
		},
		method: 'POST',
	});
};
