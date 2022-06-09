import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RippleModule } from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MenubarModule} from 'primeng/menubar';
import { MenubarComponent } from './shared/menubar/menubar.component';
import {ButtonModule} from 'primeng/button';
import {DockModule} from 'primeng/dock';
import {PrimeIcons} from 'primeng/api';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RippleModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MenubarModule,
    ButtonModule,
    DockModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
