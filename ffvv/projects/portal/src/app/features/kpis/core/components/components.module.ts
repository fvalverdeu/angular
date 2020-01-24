import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesFilterComponent } from './sales/filter/sales-filter.component';
import { SalesCatalogComponent } from './sales/header-se/catalog/sales-catalog.component';
import { SalesPegComponent } from './sales/header-se/peg/sales-peg.component';
import { SalesCapitalizationComponent } from './sales/header-se/capitalization/sales-capitalization.component';
import { SalesHeaderSEComponent } from './sales/header-se/sales-header-se.component';
import { SalesFindComponent } from './sales/find/sales-find.component';
import { SalesListComponent } from './sales/list/sales-list.component';
import { UICardModule } from '@portal/components/card';
import { UIFilterModule } from '@portal/components/filter';
import { UIPaginationModule } from '@portal/components/pagination';
import { UICheckboxModule } from '@portal/components/checkbox';
import { UITextModule } from '@portal/components/text';
import { UITitleModule } from '@portal/components/title';
import { UIItemDescriptionModule } from '@portal/components/item-description';
import { UIItemTitleModule } from '@portal/components/item-title';
import { UIFindModule } from '@portal/components/find';
import { SalesTitleComponent } from './sales/title/sales-title.component';
import { SalesGoalComponent } from './sales/header-se/goal/sales-goal.component';
import { SalesActivityComponent } from './sales/header-se/activity/sales-activity.component';
import { RetentionFilterComponent } from './retention/filter/retention-filter.component';
import { RetentionFindComponent } from './retention/find/retention-find.component';
import { RetentionListComponent } from './retention/list/retention-list.component';
import { RetentionTitleComponent } from './retention/title/retention-title.component';
import { RetentionHeaderComponent } from './retention/header/retention-header.component';
import { GainFilterComponent } from './gain/filter/gain-filter.component';
import { GainFindComponent } from './gain/find/gain-find.component';
import { GainListComponent } from './gain/list/gain-list.component';
import { GainTitleComponent } from './gain/title/gain-title.component';
import { GainHeaderComponent } from './gain/header/gain-header.component';
import { UIInfoModule } from '@portal/components/info';
import {ReactiveFormsModule} from '@angular/forms';
import {PaginatorModule} from 'primeng/paginator';
import { InputSwitchModule } from 'primeng/inputswitch';
import { UIItemModule } from '@portal/components/item';
import { GainRecoveryComponent } from './gain/header/recovery/gain-recovery.component';
import { GainConsolidatedComponent } from './gain/header/consolidated/gain-consolidated.component';
import { TableModule } from 'primeng/table';
import { SalesHeaderGzComponent } from './sales/header-gz/sales-header-gz.component';
import { SalesCardComponent } from './sales/header-gz/sales-card/sales-card.component';
import { SalesTableComponent } from './sales/header-gz/sales-table/sales-table.component';

const COMPONENTS = [
  SalesTitleComponent,
  SalesHeaderSEComponent,
  SalesGoalComponent,
  SalesActivityComponent,
  SalesCatalogComponent,
  SalesPegComponent,
  SalesCapitalizationComponent,
  SalesFilterComponent,
  SalesFindComponent,
  SalesListComponent,
  RetentionFilterComponent,
  RetentionFindComponent,
  RetentionListComponent,
  RetentionTitleComponent,
  RetentionHeaderComponent,
  GainFilterComponent,
  GainFindComponent,
  GainListComponent,
  GainTitleComponent,
  GainHeaderComponent,
  GainRecoveryComponent,
  GainConsolidatedComponent,
  SalesCardComponent,
  SalesTableComponent,
  SalesHeaderGzComponent
];

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [
    CommonModule,
    UIFilterModule,
    UICardModule,
    UIFilterModule,
    UIPaginationModule,
    UICheckboxModule,
    UIItemModule,
    UITextModule,
    UITitleModule,
    UIItemDescriptionModule,
    UIItemTitleModule,
    UIFindModule,
    UIInfoModule,
    ReactiveFormsModule,
    PaginatorModule,
    InputSwitchModule,
    TableModule
  ],
  exports: [COMPONENTS]
})
export class ComponentsModule {}
