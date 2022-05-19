import { PartialType } from '@nestjs/mapped-types';
import { BlogDto } from './blog.dto';

export class UpdateBlogDto extends PartialType(BlogDto) {}
