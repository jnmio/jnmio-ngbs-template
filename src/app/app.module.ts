import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { ExtrasModule } from './extras/extras.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IntroComponent } from './extras/intro.component';
import { ModalpopupComponent } from './extras/modalpopup.component';
import { InfiniteScrollComponent } from './extras/infinite-scroll.component';
import { LandingCoverComponent } from './extras/landing-cover.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ModalpopupComponent,
    InfiniteScrollComponent,
    LandingCoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    SharedModule.forRoot(),
    ExtrasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
