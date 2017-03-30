import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { ButtonComponent } from './go-button/src/app/go-button/component/button.component';
import { ButtonDocument } from './go-button/src/app/go-button/doc/button.document';
import { CustomCheckDirective, CustomDisabledDirective, CustomMaxlengthDirective, CustomReadonlyDirective } from './go-directive/src/app/go-directive/component/index';

const appRoutes: Routes = [
  {path: '', component: ButtonDocument}
]

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule. forRoot(appRoutes, {useHash: true}),
  ],
  declarations: [ 
    AppComponent,
    ButtonComponent,
    ButtonDocument,
    CustomCheckDirective, CustomDisabledDirective, CustomMaxlengthDirective, CustomReadonlyDirective,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
