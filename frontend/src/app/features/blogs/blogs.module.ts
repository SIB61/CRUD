import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { BlogModule } from 'src/app/shared/components/blog/blog.module';

@NgModule({
  declarations: [BlogsComponent],
  imports: [CommonModule, BlogModule],
  exports: [BlogsComponent],
})
export class BlogsModule {}
