import { IsString, MinLength } from 'class-validator';

export class BlogDto {
  @IsString()
  @MinLength(4)
  title: string;

  @IsString()
  content: string;
}
