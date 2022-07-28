import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private http: HttpClient) {}
  loadAllBlogs(user: string) {
    if (user == 'all') return this.http.get('http://localhost:3000/blog');
    else
      return this.http.get('http://localhost:3000/blog/' + user + '/blogs', {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer ' + localStorage.getItem('access_token')
        ),
      });
  }
  createBlogs(title: string, content: string) {
    return this.http.post(
      'http://localhost:3000/blog/',
      { title, content },
      {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer ' + localStorage.getItem('access_token')
        ),
      }
    );
  }
}
