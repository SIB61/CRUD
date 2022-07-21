import { Component, OnInit,Input } from '@angular/core';
import { BlogsService } from './blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  constructor(private blogsService: BlogsService) {}
  blogs: any;
  @Input() user: string;
  ngOnInit(): void {
    this.initBlogs();
  }
  async initBlogs() {
    this.blogsService.loadAllBlogs(this.user).subscribe((value) => {
      this.blogs = value;
    });
  }
}
