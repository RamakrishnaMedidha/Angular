import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {DataTableModule} from 'angular2-datatable';

import { AppComponent } from './app.component';
import {OneComponent} from './one.component';
import {twoComponent} from './two.component';
import {RedirectComponent} from './externalLink.component';
import {FollowersComponet} from './followers.component';

@NgModule({
  declarations: [
    AppComponent,OneComponent,twoComponent,RedirectComponent,FollowersComponet
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,DataTableModule,
    RouterModule.forRoot([  
      {path:'One',component:OneComponent},
      {path:'two',component:twoComponent},
      {path:'g',component:RedirectComponent},
      {path:'Repos',component:OneComponent},
      {path:'followers',component:FollowersComponet}
      
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }