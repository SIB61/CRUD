import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthModule } from '../auth/auth.module';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogsModule } from '../blogs/blogs.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileModule } from '../profile/profile.module';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CreateBlogPageComponent } from './create-blog-page/create-blog-page.component';
@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    HomeComponent,
    ProfilePageComponent,
    MainPageComponent,
    CreateBlogPageComponent,
  ],
  imports: [
    ProfileModule,
    RouterModule,
    CommonModule,
    AuthModule,
    HttpClientModule,
    BlogsModule,
  ],
  exports: [],
})
export class PagesModule {}
