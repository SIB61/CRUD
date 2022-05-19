"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlogDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const blog_dto_1 = require("./blog.dto");
class UpdateBlogDto extends (0, mapped_types_1.PartialType)(blog_dto_1.BlogDto) {
}
exports.UpdateBlogDto = UpdateBlogDto;
//# sourceMappingURL=updateBlog.dto.js.map