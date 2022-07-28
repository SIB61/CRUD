import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProfileComponent } from 'src/app/shared/components/update-profile/update-profile.component';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() user: User = {} as User;
  constructor(private dialog: MatDialog, private http: HttpClient) {}

  ngOnInit(): void {}
  edit() {
    this.dialog
      .open(UpdateProfileComponent, {
        data: this.user,
      })
      .afterClosed()
      .subscribe((value) => {
        this.http.patch(
          'http://localhost:3000/user/' + this.user.username,
          value,
          {
            headers: new HttpHeaders().set(
              'Authorization',
              'Bearer ' + localStorage.getItem('access_token')
            ),
          }
        );
      });
  }
}
