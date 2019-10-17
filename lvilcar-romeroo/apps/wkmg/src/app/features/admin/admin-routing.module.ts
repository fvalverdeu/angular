import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {WorkshopsComponent} from './views/workshops/workshops.component';
import {InstructorsComponent} from './views/instructors/instructors.component';
import {AdminComponent} from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'workshops', component: WorkshopsComponent },
      { path: 'instructors', component: InstructorsComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
