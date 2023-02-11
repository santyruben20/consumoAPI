import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    FooterComponent,
  ],

})
export class SharedModule { }
