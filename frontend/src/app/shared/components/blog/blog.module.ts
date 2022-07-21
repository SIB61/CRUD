import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [BlogComponent],
  imports: [MatCardModule, MatButtonModule],
  exports: [BlogComponent],
})
export class BlogModule {}
