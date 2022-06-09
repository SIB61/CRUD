import { BlogService } from './blog.service';
import { BlogDto } from './dto/blog.dto';
import { UpdateBlogDto } from './dto/updateBlog.dto';
import { BlogEntity } from './entities/blog.entity';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    createBlog(blogDto: BlogDto, req: any): Promise<BlogEntity>;
    getAllBlogs(): Promise<BlogEntity[]>;
    getBlogsOfUser(username: string): Promise<BlogEntity[]>;
    getBlog(id: string): Promise<BlogEntity>;
    deleteBlog(id: string, req: any): Promise<import("typeorm").DeleteResult>;
    updateBlog(id: number, blog: UpdateBlogDto, req: any): Promise<any>;
}
