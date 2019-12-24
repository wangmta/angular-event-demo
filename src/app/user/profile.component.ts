import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common';

@Component({
  templateUrl: './profile.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error {
        background-color: #e3c3c5;
      }
      .error::-webkit-input-placeholder {
        color: #999;
      }
      .error::-moz-placeholder {
        color: #999;
      }
      .error:-moz-input-placeholder {
        color: #999;
      }
      .error:-ms-input-placeholder {
        color: #999;
      }
    `
  ]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*')
    ]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues) {
    this.authService.updateCurrentuser(formValues.firstName, formValues.lastName).subscribe(() => {
      this.toastr.success('profile saved');
      this.router.navigate(['events']);
    });
    // setTimeout(() => {
    //   this.router.navigate(['events']);
    // }, 2000);
  }

  cancel() {
    this.router.navigate(['events']);
  }

  validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }
  validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
  }
}
