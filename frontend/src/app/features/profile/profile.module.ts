import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateProfileModule } from 'src/app/shared/components/update-profile/update-profile.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    MatDialogModule,
    UpdateProfileModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [ProfileComponent],
})
export class ProfileModule {}
