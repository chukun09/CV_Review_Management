import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WebViewRoutingModule} from './web-view-routing.module'
import { WebViewComponent } from './web-view.component';

@NgModule({
  declarations: [
    WebViewComponent
  ],
  imports: [
    WebViewRoutingModule
  ],
  providers: [],
  bootstrap: [WebViewComponent]
})
export class WebViewComponentModule { }
