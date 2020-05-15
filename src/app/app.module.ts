import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { NavBarComponent } from '../nav/navbar.component';
import { TOASTR_TOKEN, JQ_TOKEN, SimpleModalComponent, ModalTriggerDirective } from '../common';
import { Error404Component } from '../components/errors/404.component';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventRouteActivator,
  EventListResolver,
  VoterService,
  EventResolver
} from '../pages/events-list';
import { LocationValidator } from '../directive';
import { AuthService } from '../services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// this is global toastr object
import * as toastr from 'toastr';
import * as jQuery from 'jquery';
import {
  CustomTooltipDirective,
  CustomTooltipComponent
} from '../directive/custom-tooltip.directive';

// alternative way of using global var
// let toastr: Toastr = window['toastr'];
// let jQuery = window['$'];

import { LoaderComponent } from '../components/loader/loader.component';
import { LoaderInterceptorService } from '../components/loader/loader-interceptor.service';

//  create AwesomeTooltipComponent dynamically in the runtime, use entryComponents instead of declarations

// import { AdBannerComponent } from './components/ad-banner/ad-container.component';
// import {
//   HeroJobAdComponent,
//   HeroProfileComponent
// } from './components/ad-banner/ad-content.component';
// alternative: use an NgModule to wrap AD Banner components
// import { AdService } from './components/ad-banner/ad.service';
import { AdBannerModule } from '../components/ad-banner/ad-banner.module';

@NgModule({
  // eagerly loaded components
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    Error404Component,
    SimpleModalComponent,
    ModalTriggerDirective,
    LocationValidator,
    CustomTooltipDirective,
    CustomTooltipComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    OverlayModule,
    AdBannerModule
  ],
  // providers declared here is share accross the app
  providers: [
    EventService,
    // ToastrService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivator,
    EventListResolver,
    AuthService,
    VoterService,
    EventResolver,
    // { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }
    // AdService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CustomTooltipComponent
    // HeroJobAdComponent,
    // HeroProfileComponent
  ]
})
export class AppModule { }

// export function checkDirtyState(component: CreateEventComponent) {
//   if (component.isDirty) {
//     return window.confirm('You have not saved this event, do you really want to cancel?');
//   }
//   return true;
// }
