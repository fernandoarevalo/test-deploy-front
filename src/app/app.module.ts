import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PolizaComponent } from './polizas/poliza.component';

import { ConfigService } from "./config/config.service";
import { HttpErrorHandler } from "./http-error-handler.service";
import { MessageService } from "./message.service";

@NgModule({
  declarations: [
    AppComponent,
    PolizaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    NoopAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    ConfigService,
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
