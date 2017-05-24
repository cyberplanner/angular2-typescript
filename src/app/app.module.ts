import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WelcomeComponent } from './welcome/welcome.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [//All the angular libraries used in the application
    AppComponent,
    WelcomeComponent
  ],
  imports: [// All the components, directives and pipes
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Root component when initialising the application
})
export class AppModule { } // Exported module to be used in other files
