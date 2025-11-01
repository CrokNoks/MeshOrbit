
import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@nestjs-modules/ioredis';
import { Redis } from 'ioredis';
import { ServiceDto } from './service.dto';

@Injectable()
export class ServicesService {
	constructor(@InjectRedis() private readonly redis: Redis) {}

	private key = 'services';

	async findAll() {
		const ids = await this.redis.smembers(this.key);
		const services = await Promise.all(ids.map(id => this.findOne(id)));
		return services.filter(Boolean);
	}

	async findOne(id: string) {
		const data = await this.redis.get(`${this.key}:${id}`);
		return data ? JSON.parse(data) : null;
	}

	async create(service: ServiceDto) {
		const id = service.id || Date.now().toString();
		await this.redis.set(`${this.key}:${id}`, JSON.stringify({ ...service, id }));
		await this.redis.sadd(this.key, id);
		return { ...service, id };
	}

	async update(id: string, service: ServiceDto) {
		await this.redis.set(`${this.key}:${id}`, JSON.stringify({ ...service, id }));
		return { ...service, id };
	}

	async remove(id: string) {
		await this.redis.del(`${this.key}:${id}`);
		await this.redis.srem(this.key, id);
		return { id };
	}
}
