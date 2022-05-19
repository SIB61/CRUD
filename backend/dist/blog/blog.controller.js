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
exports.BlogController = void 0;
const common_1 = require("@nestjs/common");
const jwtAuth_guard_1 = require("../auth/guards/jwtAuth.guard");
const blog_service_1 = require("./blog.service");
const blog_dto_1 = require("./dto/blog.dto");
const updateBlog_dto_1 = require("./dto/updateBlog.dto");
let BlogController = class BlogController {
    constructor(blogService) {
        this.blogService = blogService;
    }
    createBlog(blogDto, req) {
        const jwtPayload = req.user;
        const username = jwtPayload.username;
        return this.blogService.createBlog(username, blogDto);
    }
    async getAllBlogs() {
        return this.blogService.getAllBlogs();
    }
    getBlogsOfUser(username) { }
    async getBlog(id) {
        return this.blogService.getBlogById(+id);
    }
    deleteBlog(id) {
        this.blogService.deleteBlogById(+id);
    }
    updateBlog(id, blog) {
        this.blogService.updateBlogById(id, blog);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blog_dto_1.BlogDto, Object]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "createBlog", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getAllBlogs", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':username/blogs'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "getBlogsOfUser", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getBlog", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "deleteBlog", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateBlog_dto_1.UpdateBlogDto]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "updateBlog", null);
BlogController = __decorate([
    (0, common_1.Controller)('blog'),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogController);
exports.BlogController = BlogController;
//# sourceMappingURL=blog.controller.js.map