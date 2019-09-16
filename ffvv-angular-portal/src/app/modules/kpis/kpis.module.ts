import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KpisRoutingModule } from './kpis-routing.module';
import { HomePage } from './pages';
import { CollectAndProfitCard, CycleOfNewsCard, JoinUpCard,
  ReportCampaignCard, SalesAndOrdersCard } from './components/kpi';

import { CardComponent, CardHeaderComponent, CardContentComponent,
  CardContentInfoComponent, CardContentBodyComponent} from '../../shared/components';

//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { OrderListModule } from 'primeng/orderlist';
import {CardModule} from 'primeng/card';

@NgModule({
  imports: [KpisRoutingModule, CommonModule, FormsModule, AccordionModule, OrderListModule, CardModule],
  declarations: [HomePage, CollectAndProfitCard, CycleOfNewsCard, JoinUpCard,
    ReportCampaignCard, SalesAndOrdersCard],
  providers: []
})
export class KpisModule {
}
