import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @Input() blog: Blog;
  @Output() ondelete: EventEmitter<void> = new EventEmitter();
  @Output() onupdate: EventEmitter<void> = new EventEmitter();

  enabled: boolean = false;
  constructor() {
    console.warn(this.blog);
  }

  ngOnInit(): void {
    console.log(this.blog);
  }
  update() {
    this.onupdate.emit();
  }
  delete() {
    this.onupdate.emit();
  }
}
