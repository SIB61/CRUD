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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt_1 = require("bcrypt");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async createUser(userDto) {
        let userEntity = new user_entity_1.UserEntity();
        userEntity.username = userDto.username;
        userEntity.email = userDto.email;
        userEntity.firstName = userDto.firstname;
        userEntity.lastName = userDto.lastname;
        userEntity.passwordHash = await (0, bcrypt_1.hash)(userDto.password, 8);
        return this.userRepo.save(userEntity);
    }
    async getMyProfile(username) {
        const user = await this.userRepo.findOne(username);
        if (user)
            return user;
        else
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
    }
    async getUserProfile(username) {
        const user = await this.userRepo.findOne(username, {
            select: ['username', 'firstName', 'lastName'],
        });
        if (user)
            return user;
        else
            throw new common_1.HttpException('User not fount', common_1.HttpStatus.NOT_FOUND);
    }
    async updateUser(username, userDto) {
        let userEntity = this.userRepo.create({
            firstName: userDto.firstname,
            lastName: userDto.lastname,
            email: userDto.email,
        });
        return this.userRepo.update(username, userEntity);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map