import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { InspiraComponent } from "./cards/inspira/inspira.component";
import { ReportCampaignComponent } from "./cards/report-campaign/report-campaign.component";
import { SalesSeComponent } from "./cards/sales/sales-se/sales-se.component";
import { SalesGzComponent } from "./cards/sales/sales-gz/sales-gz.component";
import { ProfileUserComponent } from "./profile/profile-user/profile-user.component";
import { ProfileCampaignComponent } from "./profile/profile-campaign/profile-campaign.component";
import { MenubarModule } from "primeng/menubar";
import { SidebarModule } from "primeng/sidebar";
import { UITextModule } from "@portal/components/text";
import { UITitleModule } from "@portal/components/title";
import { UICardModule, UICardHeaderModule } from "@portal/components/card";
import { UIIconModule } from "@portal/components/icon";
import { UIInfoModule } from "@portal/components/info";
import { UIProgressBarModule } from "@portal/components/progress-bar";
import { TableModule } from "primeng/table";
import { RoadBrightComponent } from "./cards/road-bright/road-bright.component";
import { RetentionSeComponent } from "./cards/retention/retention-se/retention-se.component";
import { RetentionGzComponent } from "./cards/retention/retention-gz/retention-gz.component";
import { GainGzComponent } from "./cards/gain/gain-gz/gain-gz.component";
import { GainSeComponent } from "./cards/gain/gain-se/gain-se.component";
import { ProfileService } from "../../../auth/core/graphql/profile.service";
import { MessageService } from "primeng/api";
import { EventService } from "projects/core/src/lib/services/event.service";
import { ProfileSectionComponent } from "./profile/profile-section/profile-section.component";
import { UIProgressCompleteModule } from "projects/components/src/lib/molecules/progress-complete/progress-complete.module";
import { FormsModule } from "@angular/forms";
import { UneteGzComponent } from "./cards/unete/unete-gz/unete-gz.component";
import { UneteSeComponent } from "./cards/unete/unete-se/unete-se.component";

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  GainGzComponent,
  GainSeComponent,
  InspiraComponent,
  ReportCampaignComponent,
  RetentionSeComponent,
  RetentionGzComponent,
  SalesSeComponent,
  SalesGzComponent,
  RoadBrightComponent,
  ProfileCampaignComponent,
  ProfileUserComponent,
  ProfileSectionComponent,
  UneteGzComponent,
  UneteSeComponent
];

@NgModule({
  declarations: COMPONENTS,
  providers: [ProfileService, MessageService, EventService],
  imports: [
    CommonModule,
    MenubarModule,
    SidebarModule,
    TableModule,
    UIProgressBarModule,
    UIProgressCompleteModule,
    UITextModule,
    UITitleModule,
    UICardModule,
    UICardHeaderModule,
    UIIconModule,
    UIInfoModule,
    FormsModule
  ],
  exports: COMPONENTS
})
export class ComponentsModule {}
