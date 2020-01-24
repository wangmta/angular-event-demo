import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LoaderState {
  show: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject$ = new BehaviorSubject<LoaderState>({ show: false });

  loaderState$ = this.loaderSubject$.asObservable();

  constructor() {}

  show() {
    this.loaderSubject$.next(<LoaderState>{ show: true });
  }

  hide() {
    this.loaderSubject$.next(<LoaderState>{ show: false });
  }
}
