import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { WorkshopsComponent } from './views/workshops/workshops.component';
import { InstructorsComponent } from './views/instructors/instructors.component';
import { AdminComponent } from './admin.component';
import {AdminCommonsModule} from './commons/commons.module';
import {WkmgCommonsModule} from '@wkmg/commons';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    DashboardComponent,
    WorkshopsComponent,
    InstructorsComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCommonsModule,
    WkmgCommonsModule,
    TranslateModule.forChild()
  ]
})
export class AdminModule { }
