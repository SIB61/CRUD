import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  ObjectID,
  Repository,
  ReturningStatementNotSupportedError,
} from 'typeorm';
import { BlogDto } from './dto/blog.dto';
import { UpdateBlogDto } from './dto/updateBlog.dto';
import { BlogEntity } from './entities/blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(BlogEntity)
    private blogRepo: Repository<BlogEntity>,
  ) {}

  async createBlog(username: string, blogDto: BlogDto) {
    let blogEntity: BlogEntity = new BlogEntity();
    blogEntity.title = blogDto.title;
    blogEntity.content = blogDto.content;
    let userEntity: UserEntity = new UserEntity();
    userEntity.username = username;
    blogEntity.createdBy = userEntity;
    return this.blogRepo.save(blogEntity);
  }
  async getAllBlogs() {
    return this.blogRepo
      .find({ relations: ['createdBy'] })
      .then((blogs: BlogEntity[]) => {
        blogs.map((blog: BlogEntity) => {
          const { passwordHash, registeredAt, updatedAt, email, ...result } =
            blog.createdBy;
          blog.createdBy = result as UserEntity;
          return blog;
        });
        return blogs;
      });
  }
  async getBlogById(id: number) {
    return this.blogRepo
      .findOne(id, {
        relations: ['createdBy'],
      })
      .then((blog: BlogEntity) => {
        const { passwordHash, email, registeredAt, updatedAt, ...result } =
          blog.createdBy;
        blog.createdBy = result as UserEntity;
        return blog;
      });
  }
  async deleteBlogById(id: number) {
    return this.blogRepo.delete(id);
  }
  async updateBlogById(id: number, blogDto: UpdateBlogDto) {
    return this.blogRepo.update(id, blogDto);
  }
  async getBlogsByUser(username: string) {
    return this.blogRepo.find({ where: { createdBy: username } });
  }
}
