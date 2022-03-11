// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { RoomRepository } from '../../repositories/room/room.repository';

type Data =
	| {
			id: string;
	  }
	| { rooms: any };

const roomRepository = new RoomRepository();

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method === 'POST') {
		const id = await roomRepository.createRoom(req.body);
		res.status(201).json({ id });
	} else if (req.method === 'GET') {
		const rooms = await roomRepository.getRooms();
		res.status(200).json({ rooms });
	}
}
