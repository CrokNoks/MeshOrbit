"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = require("@nestjs-modules/ioredis");
const ioredis_2 = require("ioredis");
let ServicesService = class ServicesService {
    redis;
    constructor(redis) {
        this.redis = redis;
    }
    key = 'services';
    async findAll() {
        const ids = await this.redis.smembers(this.key);
        const services = await Promise.all(ids.map(id => this.findOne(id)));
        return services.filter(Boolean);
    }
    async findOne(id) {
        const data = await this.redis.get(`${this.key}:${id}`);
        return data ? JSON.parse(data) : null;
    }
    async create(service) {
        const id = service.id || Date.now().toString();
        await this.redis.set(`${this.key}:${id}`, JSON.stringify({ ...service, id }));
        await this.redis.sadd(this.key, id);
        return { ...service, id };
    }
    async update(id, service) {
        await this.redis.set(`${this.key}:${id}`, JSON.stringify({ ...service, id }));
        return { ...service, id };
    }
    async remove(id) {
        await this.redis.del(`${this.key}:${id}`);
        await this.redis.srem(this.key, id);
        return { id };
    }
};
exports.ServicesService = ServicesService;
exports.ServicesService = ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, ioredis_1.InjectRedis)()),
    __metadata("design:paramtypes", [ioredis_2.Redis])
], ServicesService);
//# sourceMappingURL=services.service.js.map