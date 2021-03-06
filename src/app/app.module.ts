import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { CollapsibleWrapperComponent } from './collapsible-wrapper/collapsible-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    TreeViewComponent,
    CollapsibleComponent,
    CollapsibleWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
