import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @Input() blog: Blog = {} as Blog;
  @Output() ondelete: EventEmitter = new EventEmitter();
  @Output() onupdate: EventEmitter = new EventEmitter();

  enabled: boolean =
    localStorage.getItem('username') == this.blog.createdBy.username;
  constructor() {}

  ngOnInit(): void {
    console.log(this.blog);
  }
  update() {
    this.onupdate.emit('delete');
  }
  delete() {
    this.onupdate.emit('delete');
  }
}
