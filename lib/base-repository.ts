import { Entity, Repository } from 'redis-om';
import connect, { client } from './redis';

export class BaseRepository {
	repository: Repository<Entity>;
	constructor(schema: any) {
		connect();
		this.repository = client.fetchRepository(schema);
		this.repository.createIndex();
	}
}
