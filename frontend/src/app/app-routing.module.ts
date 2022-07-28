import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { CreateBlogPageComponent } from './features/pages/create-blog-page/create-blog-page.component';
import { HomeComponent } from './features/pages/home/home.component';
import { LoginPageComponent } from './features/pages/login-page/login-page.component';
import { MainPageComponent } from './features/pages/main-page/main-page.component';
import { ProfilePageComponent } from './features/pages/profile-page/profile-page.component';
import { RegisterPageComponent } from './features/pages/register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:
      localStorage.getItem('access_token') == null ? 'signin' : 'home',
  },
  {
    path: 'signin',
    component: LoginPageComponent,
  },
  {
    path: 'signup',
    component: RegisterPageComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: MainPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
      },
      {
        path: 'create-blog',
        component: CreateBlogPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
