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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entities/user.entity");
const typeorm_2 = require("typeorm");
const blog_entity_1 = require("./entities/blog.entity");
let BlogService = class BlogService {
    constructor(blogRepo) {
        this.blogRepo = blogRepo;
    }
    async createBlog(username, blogDto) {
        let blogEntity = new blog_entity_1.BlogEntity();
        blogEntity.title = blogDto.title;
        blogEntity.content = blogDto.content;
        let userEntity = new user_entity_1.UserEntity();
        userEntity.username = username;
        blogEntity.createdBy = userEntity;
        return this.blogRepo.save(blogEntity);
    }
    async getAllBlogs() {
        return this.blogRepo
            .find({ relations: ['createdBy'] })
            .then((blogs) => {
            blogs.map((blog) => {
                blog.createdBy.passwordHash = null;
                return blog;
            });
            return blogs;
        });
    }
    async getBlogById(id) {
        return this.blogRepo
            .findOne(id, {
            relations: ['createdBy'],
        })
            .then((blog) => {
            blog.createdBy.passwordHash = null;
            return blog;
        });
    }
    async deleteBlogById(id) {
        return this.blogRepo.delete(id);
    }
    async updateBlogById(id, blogDto) {
        return this.blogRepo.update(id, blogDto);
    }
};
BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(blog_entity_1.BlogEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map