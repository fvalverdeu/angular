import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages';
// import { CardComponent, CardHeaderComponent, CardContentComponent,
//   CardContentInfoComponent, CardContentBodyComponent } from '../../shared/components';

const routes: Routes = [
  { path: '',component: HomePage },

  // {path: 'cycleofnewscard', component: CycleOfNewsCard },
  // {path: 'joinupcard', component: JoinUpCard },
  // {path: 'reportcampaigncard', component: ReportCampaignCard },
  // {path: 'salesAndorderscard', component: SalesAndOrdersCard },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KpisRoutingModule {

}
