import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RippleModule } from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenubarModule } from 'primeng/menubar';
import { MenubarComponent } from './shared/menubar/menubar.component';
import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';
import { PrimeIcons } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { LandingComponent } from './landing/landing.component';
import { AddComponent } from './add/add.component';
import { SpeedDialModule } from 'primeng/speeddial';
import { ModalComponent } from './shared/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LandingComponent,
    AddComponent,
    ModalComponent
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
    SpeedDialModule,
    MatDialogModule,
    DividerModule,
    InputTextModule,
    FormsModule,
    ToastModule,
  ],
  providers: [
    ModalComponent,
    MessageService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
