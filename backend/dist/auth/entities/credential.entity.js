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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialEntity = void 0;
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let CredentialEntity = class CredentialEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], CredentialEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password_hash', nullable: false }),
    __metadata("design:type", String)
], CredentialEntity.prototype, "passwordHash", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.UserEntity, (user) => {
        user.credential;
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], CredentialEntity.prototype, "user", void 0);
CredentialEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'credentials' })
], CredentialEntity);
exports.CredentialEntity = CredentialEntity;
//# sourceMappingURL=credential.entity.js.map