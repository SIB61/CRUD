import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private api: HttpClient) {}
  login(username: string, password: string) {
    return this.api.post('http://localhost:3000/auth/login', {
      username,
      password,
    });
  }
}
