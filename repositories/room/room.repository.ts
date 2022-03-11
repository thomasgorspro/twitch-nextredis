import { BaseRepository } from '../../lib/base-repository';
import roomSchema from './room.schema';

export class RoomRepository extends BaseRepository {
	constructor() {
		super(roomSchema);
	}

	async createRoom(data: { title: string; description: string }) {
		const room = this.repository.createEntity(data);
		return this.repository.save(room);
	}

	async getRooms() {
		return this.repository.search().return.all();
		// return this.repository.fetch('01FXQVQ3D4Q7KH0KWD6ZPG92J3');
	}
}
