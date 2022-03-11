import { Entity, Schema } from 'redis-om';

interface Room {
	title: string;
	description: string;
}

class Room extends Entity {}

export default new Schema(Room, {
	title: { type: 'string' },
	description: { type: 'string' },
});
