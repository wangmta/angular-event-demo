// import { Injectable } from '@angular/core';
// import * as toastr from 'toastr';

// @Injectable()
// export class ToastrService {
//   success(message: string, titile?: string){
//     toastr.success(message, titile);
//   }
//   info(message: string, titile?: string){
//     toastr.info(message, titile);
//   }
//   warning(message: string, titile?: string){
//     toastr.warning(message, titile);
//   }
//   error(message: string, titile?: string){
//     toastr.error(message, titile);
//   }

// }

// to avoid the issue caused by global variables
import { InjectionToken } from '@angular/core';

// this is JS object, so two objects can't be equal to each other, since they have different reference
export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');

export interface Toastr {
  success(message: string, titile?: string): void;
  info(message: string, titile?: string): void;
  warning(message: string, titile?: string): void;
  error(message: string, titile?: string): void;
}
