import { Client } from 'redis-om';

export const client = new Client();

export default async function connect() {
	if (!client.isOpen()) {
		await client.open(process.env.REDIS_URL);
	}
}
