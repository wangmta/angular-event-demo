import { Injectable } from '@angular/core';
import * as toastr from 'toastr';

@Injectable()
export class ToastrService {
  success(message: string, titile?: string){
    toastr.success(message, titile);
  }
  info(message: string, titile?: string){
    toastr.info(message, titile);
  }
  warning(message: string, titile?: string){
    toastr.warning(message, titile);
  }
  error(message: string, titile?: string){
    toastr.error(message, titile);
  }

}
