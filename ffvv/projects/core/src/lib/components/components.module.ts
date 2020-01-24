import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionListComponent } from './section-list/section-list.component';


const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SectionListComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule
  ],
  exports: COMPONENTS
})
export class PortalComponentsModule { }
