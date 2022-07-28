import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-create-blogs',
  templateUrl: './create-blogs.component.html',
  styleUrls: ['./create-blogs.component.scss'],
})
export class CreateBlogsComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(private fb: FormBuilder, private service: BlogsService) {
    this.formGroup = fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }
  createBlog(value: any) {
    this.service.createBlogs(value.title, value.content).subscribe({
      next: (val: any) => {
        alert('blog created');
      },
    });
  }

  ngOnInit(): void {}
}
