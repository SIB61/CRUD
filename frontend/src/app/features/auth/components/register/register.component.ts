import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  constructor(
    private router: Router,
    private service: RegisterService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar
  ) {
    this.regForm = fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  register(value: User) {
    this.service.register(value).subscribe({
      next: () => {
        this.snackbar.open('sign up successfully', 'ok');
        this.router.navigateByUrl('/login');
      },
    });
  }

  ngOnInit(): void {}
}
