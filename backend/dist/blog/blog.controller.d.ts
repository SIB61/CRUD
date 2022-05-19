import { BlogService } from './blog.service';
import { BlogDto } from './dto/blog.dto';
import { UpdateBlogDto } from './dto/updateBlog.dto';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    createBlog(blogDto: BlogDto, req: any): Promise<import("./entities/blog.entity").BlogEntity>;
    getAllBlogs(): Promise<import("./entities/blog.entity").BlogEntity[]>;
    getBlogsOfUser(username: string): void;
    getBlog(id: string): Promise<import("./entities/blog.entity").BlogEntity>;
    deleteBlog(id: string): void;
    updateBlog(id: number, blog: UpdateBlogDto): void;
}
