import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwtAuth.guard';
import { BlogService } from './blog.service';
import { BlogDto } from './dto/blog.dto';
import { UpdateBlogDto } from './dto/updateBlog.dto';
import { BlogEntity } from './entities/blog.entity';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createBlog(@Body() blogDto: BlogDto, @Request() req: any) {
    const jwtPayload = req.user;
    const username = jwtPayload.username;
    return this.blogService.createBlog(username, blogDto);
  }

  @Get()
  async getAllBlogs() {
    return this.blogService.getAllBlogs();
  }

  @Get(':username/blogs')
  async getBlogsByUser(@Param('username') username: string) {
    return this.blogService.getBlogsByUser(username);
  }

  @Get(':id')
  async getBlog(@Param('id') id: string) {
    return this.blogService.getBlogById(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteBlog(@Param('id') id: string, @Request() req: any) {
    return this.blogService.getBlogById(+id).then(
      (blog: BlogEntity) => {
        if (blog && blog.createdBy.username == req.user.username) {
          return this.blogService.deleteBlogById(+id);
        } else {
          throw new HttpException(
            'Do Not have permission',
            HttpStatus.BAD_REQUEST,
          );
        }
      },
      (_) => {
        throw new HttpException(
          'Server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      },
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateBlog(
    @Param('id', ParseIntPipe) id: number,
    @Body() blog: UpdateBlogDto,
    @Request() req: any,
  ) {
    let username = req.user.username;
    return this.blogService.getBlogById(id).then(
      (blogEntity: BlogEntity) => {
        if (blogEntity && blogEntity.createdBy.username == username)
          return this.blogService.updateBlogById(id, blog);
        else
          throw new HttpException(
            'Do not have permission',
            HttpStatus.BAD_REQUEST,
          );
      },
      (_) => {
        throw new HttpException(
          'Server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      },
    );
  }
}
