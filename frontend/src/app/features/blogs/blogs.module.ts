import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { BlogModule } from 'src/app/shared/components/blog/blog.module';
import { CreateBlogsComponent } from './create-blogs/create-blogs.component';
import { MatInput, MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BlogsComponent, CreateBlogsComponent],
  imports: [
    CommonModule,
    BlogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  exports: [BlogsComponent, CreateBlogsComponent],
})
export class BlogsModule {}
