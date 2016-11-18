import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';

import { AppComponent } from './app.component';
import { routes, ROUTES_PROVIDERS } from './app.routes';
import { PARTIES_DECLARATIONS } from './parties';
@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AccountsModule
  ],
  providers:[
    ...ROUTES_PROVIDERS
  ],
  declarations:[
    AppComponent,
    ...PARTIES_DECLARATIONS
  ],
  bootstrap:[
    AppComponent
  ]
  
})
export class AppModule{}
