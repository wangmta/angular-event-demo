import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent, LoginComponent } from './index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const userRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(userRoutes)],
  declarations: [ProfileComponent, LoginComponent],
  providers: []
})
export class UserModule {}
