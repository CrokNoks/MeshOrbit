
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServiceDto } from './service.dto';

@Controller('services')
export class ServicesController {
	constructor(private readonly servicesService: ServicesService) {}

	@Get()
	findAll() {
		return this.servicesService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.servicesService.findOne(id);
	}

	@Post()
	create(@Body() serviceDto: ServiceDto) {
		return this.servicesService.create(serviceDto);
	}

	@Put(':id')
	update(@Param('id') id: string, @Body() serviceDto: ServiceDto) {
		return this.servicesService.update(id, serviceDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.servicesService.remove(id);
	}
}
