import { Repository } from 'typeorm';
import { BlogDto } from './dto/blog.dto';
import { UpdateBlogDto } from './dto/updateBlog.dto';
import { BlogEntity } from './entities/blog.entity';
export declare class BlogService {
    private blogRepo;
    constructor(blogRepo: Repository<BlogEntity>);
    createBlog(username: string, blogDto: BlogDto): Promise<BlogEntity>;
    getAllBlogs(): Promise<BlogEntity[]>;
    getBlogById(id: number): Promise<BlogEntity>;
    deleteBlogById(id: number): Promise<import("typeorm").DeleteResult>;
    updateBlogById(id: number, blogDto: UpdateBlogDto): Promise<import("typeorm").UpdateResult>;
    getBlogsByUser(username: string): Promise<BlogEntity[]>;
}
