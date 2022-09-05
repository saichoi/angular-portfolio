import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './layout/title-bar/title-bar.component';
import { BottomBarComponent } from './layout/bottom-bar/bottom-bar.component';
import { LayoutMainComponent } from './layout/layout-main/layout-main.component';
import { SideBarComponent } from './layout/layout-main/side-bar/side-bar.component';
import { ExplorerComponent } from './layout/layout-main/explorer/explorer.component';
import { LayoutContentComponent } from './layout/layout-main/layout-content/layout-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    BottomBarComponent,
    LayoutMainComponent,
    SideBarComponent,
    ExplorerComponent,
    LayoutContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
