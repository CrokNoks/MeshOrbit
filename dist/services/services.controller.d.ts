import { ServicesService } from './services.service';
import { ServiceDto } from './service.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    create(serviceDto: ServiceDto): Promise<{
        id: string;
        name: string;
        url: string;
        status?: string;
    }>;
    update(id: string, serviceDto: ServiceDto): Promise<{
        id: string;
        name: string;
        url: string;
        status?: string;
    }>;
    remove(id: string): Promise<{
        id: string;
    }>;
}
