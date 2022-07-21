import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent implements OnInit {
  constructor() {}
  hidden: boolean = localStorage.getItem('access_token') != null;
  ngOnInit(): void {}
}
