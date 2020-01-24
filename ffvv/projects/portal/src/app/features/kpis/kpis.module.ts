import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpisRoutingModule } from './kpis-routing.module';
import { SalesSeComponent } from './pages/sales/sales-se/sales-se.component';
import { KpisCoreModule } from './core/core.module';
import { RetentionSeComponent } from './pages/retention/retention-se/retention-se.component';
import { GainSeComponent } from './pages/gain/gain-se/gain-se.component';
import { KpisComponent } from './kpis.component';
import {PortalComponentsModule} from '@portal/core/components';
import { RetentionService } from './core/graphql/retention.service';
import { GainGzComponent } from './pages/gain/gain-gz/gain-gz.component';
import { SalesGzComponent } from './pages/sales/sales-gz/sales-gz.component';
import { RetentionGzComponent } from './pages/retention/retention-gz/retention-gz.component';

@NgModule({
  declarations: [SalesSeComponent, RetentionSeComponent, GainSeComponent, KpisComponent, GainGzComponent, SalesGzComponent, RetentionGzComponent],
  imports: [
    // CommonModule,
    KpisRoutingModule,
    KpisCoreModule,
    PortalComponentsModule
    // PortalInterceptorsModule
  ],
  providers: [RetentionService]
})
export class KpisModule { }
