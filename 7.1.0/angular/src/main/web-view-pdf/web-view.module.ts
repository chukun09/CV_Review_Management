import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WebViewRoutingModule} from './web-view-routing.module'
import { WebViewComponent } from './web-view.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    WebViewComponent
  ],
  exports: [WebViewComponent],
  imports: [
    WebViewRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [WebViewComponent]
})
export class WebViewComponentModule { }
