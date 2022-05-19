import {
  Body,
  Controller,
  Delete,
  Get,
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

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createBlog(@Body() blogDto: BlogDto, @Request() req: any) {
    const jwtPayload = req.user;
    const username = jwtPayload.username;
    return this.blogService.createBlog(username, blogDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllBlogs() {
    return this.blogService.getAllBlogs();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':username/blogs')
  getBlogsOfUser(@Param('username') username: string) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getBlog(@Param('id') id: string) {
    return this.blogService.getBlogById(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteBlog(@Param('id') id: string) {
    this.blogService.deleteBlogById(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateBlog(
    @Param('id', ParseIntPipe) id: number,
    @Body() blog: UpdateBlogDto,
  ) {
    this.blogService.updateBlogById(id, blog);
  }
}
