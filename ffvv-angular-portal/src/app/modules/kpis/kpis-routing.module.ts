import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages';
// import { CollectAndProfitCard, CycleOfNewsCard, JoinUpCard,
//   ReportCampaignCard, SalesAndOrdersCard } from './components/cards';

const routes: Routes = [
  {path: '',component: HomePage },
  // {path: 'collectandprofitcard', component: CollectAndProfitCard },
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
