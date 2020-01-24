import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges
} from "@angular/core";
import { ICampaign, CampaignModel, IProfile } from "@portal/core/models";
import { RetentionService } from "projects/portal/src/app/features/main/core/graphql/retention.service";
import { RetentionRequest } from "projects/portal/src/app/features/main/models/request/retention-request.interface";
import { IRetention } from "projects/portal/src/app/features/main/models/response/retention-response.interface";
import { SessionService, BusinessService } from "@portal/core/services";
import {
  RetentionUI,
  IRetentionSaleUI,
  IRetentionBillingUI
} from "../../../../../models/ui/retention-ui.interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-retention-se",
  templateUrl: "./retention-se.component.html",
  styleUrls: ["./retention-se.component.scss"]
})
export class RetentionSeComponent implements OnInit, OnChanges {
  @Input() sectionCode: string;
  thirdPerson: boolean;
  // profile: IProfile;
  data: IRetention;
  dataUISale: IRetentionSaleUI;
  dataUIBilling: IRetentionBillingUI;
  // arrayCampaign: Array<string>;
  size: string;
  title: string;
  color: string;
  sale: boolean;
  cars: any[];

  constructor(
    private retentionService: RetentionService,
    private sessionService: SessionService,
    // private campaignService: CampaignService,
    private businessService: BusinessService,
    private router: Router
  ) {
    this.thirdPerson = false;
    this.cars = ["uno"];
    this.dataUISale = {
      shortCampaign: "",
      posibles6d6: "0",
      maxRetention5d5: "0",
      maxRetention4d4: "0",
      maxRetention3d3: "0",
      maxRetention2d2: "0",
      maxRetention1d1: "0"
    };
    this.dataUIBilling = {
      previous5d5: "0",
      reached6d6: "0",
      reached5d5: "0",
      reached4d4: "0",
      reached3d3: "0",
      reached2d2: "0",
      reached1d1: "0",
      hold5d5: "0",
      hold4d4: "0",
      hold3d3: "0",
      hold2d2: "0",
      hold1d1: "0"
    };
  }

  get isSale() {
    return this.businessService.isSale;
  }

  ngOnInit() {
    this.title = "Ciclo de Nuevas";
    this.size = "xmd";
    this.color = "#000000";
    if (this.sectionCode) {
      this.thirdPerson = true;
    }
    this.getData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.sectionCode.previousValue) {
      this.thirdPerson = true;
      this.getData();
    }
  }

  getData() {
    const campaign = this.sessionService.getCampaign();
    const campaignModel = new CampaignModel(campaign);
    if (this.isSale) {
      const previous = campaignModel.previous_campaign;
      this.getDataSale(previous);
    } else {
      const current = campaignModel.current_campaign;
      const previous = campaignModel.previous_campaign;
      this.getDataBilling(current, previous);
    }
  }

  getDataSale(previous: string) {
    const requestModel = new RetentionRequest();
    const profile = this.sessionService.getProfile();
    profile.section = this.sectionCode ? this.sectionCode : profile.section;
    const array = [previous];
    const request = requestModel.getRetentionSERequest(
      profile,
      array,
      false,
      false,
      false
    );
    this.retentionService.getKpiRetention(request).subscribe(res => {
      if (res.KpisRetention.length > 0) {
        this.data = res.KpisRetention[0];
        this.getDataUISale(this.data);
      } else {
        const campaign = this.sessionService.getCampaign();
        this.dataUISale.shortCampaign = this.setFormatCx(
          campaign.current_campaign_short
        );
      }
    });
  }

  getDataBilling(currentCampaign: string, previousCampaign: string) {
    const requestModel = new RetentionRequest();
    const profile = this.sessionService.getProfile();
    profile.section = this.sectionCode ? this.sectionCode : profile.section;
    const array = [currentCampaign, previousCampaign];
    let dataCurrent: IRetention;
    let dataPrevious: IRetention;
    const request = requestModel.getRetentionSERequest(
      profile,
      array,
      false,
      false,
      false
    );
    this.retentionService.getKpiRetention(request).subscribe(res => {
      if (res.KpisRetention.length > 0) {
        dataCurrent = res.KpisRetention.filter(
          x => x.campaign === currentCampaign
        )[0];
        dataPrevious = res.KpisRetention.filter(
          x => x.campaign === previousCampaign
        )[0];
        this.getDataUIBilling(dataCurrent, dataPrevious);
      }
    });
  }

  getDataUISale(data: IRetention) {
    const campaign = this.sessionService.getCampaign();
    const retentionUISale = new RetentionUI(data);
    this.dataUISale = retentionUISale.getRetentionKpiSale(campaign);
  }

  getDataUIBilling(dataCurrent: IRetention, dataPrevious: IRetention) {
    const retentionUIBilling = new RetentionUI(dataCurrent);
    this.dataUIBilling = retentionUIBilling.getRetentionKpiBilling(
      dataPrevious
    );
  }

  redirectDetail() {
    if (this.sectionCode) {
      //this.router.navigateByUrl('/kpis/retention-gz');
    } else {
      this.router.navigateByUrl("/kpis/retention-se");
    }
  }

  setFormatCx(campaign: string) {
    return (campaign = campaign.replace("-", ""));
  }
}
