import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared/models/blog';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  constructor(private http: HttpClient) {}
  user: User;
  blogs: Blog[];
  ngOnInit(): void {
    this.http
      .get('http://localhost:3000/user/' + localStorage.getItem('username'), {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer ' + localStorage.getItem('access_token')
        ),
      })
      .subscribe({
        next: (value: any) => {
          this.user = value;
          console.warn(value);
        },
      });
  }
}
