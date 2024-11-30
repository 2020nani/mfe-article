import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { UrlFormatterPipe } from '../components/url-formatter.pipe';

@NgModule({
  declarations: [AppComponent, UrlFormatterPipe],
  imports: [CommonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
