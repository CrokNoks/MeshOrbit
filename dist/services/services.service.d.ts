import { Redis } from 'ioredis';
import { ServiceDto } from './service.dto';
export declare class ServicesService {
    private readonly redis;
    constructor(redis: Redis);
    private key;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    create(service: ServiceDto): Promise<{
        id: string;
        name: string;
        url: string;
        status?: string;
    }>;
    update(id: string, service: ServiceDto): Promise<{
        id: string;
        name: string;
        url: string;
        status?: string;
    }>;
    remove(id: string): Promise<{
        id: string;
    }>;
}
