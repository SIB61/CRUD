import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private service: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {}
  login(value: { username: string; password: string }) {
    this.service.login(value.username, value.password).subscribe({
      next: (value: any) => {
        localStorage.setItem('access_token', value.access_token);
        localStorage.setItem('username', value.username);
        this.snackbar.open('login successful', 'ok');
        this.router.navigateByUrl('');
      },
      error: (error: HttpErrorResponse) => {
        console.warn(error);
        this.snackbar.open('login failed', 'ok');
      },
    });
  }
}
