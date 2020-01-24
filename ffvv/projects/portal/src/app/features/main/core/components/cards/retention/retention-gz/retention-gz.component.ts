import { Component, OnInit } from "@angular/core";
import { IRetention } from "../../../../../models/response/retention-response.interface";
import {
  RetentionUI,
  IRetentionSaleUI,
  IRetentionBillingUI
} from "../../../../../models/ui/retention-ui.interface";
import { CampaignModel, ICampaign } from "@portal/core/models";
import { RetentionService } from "../../../../graphql/retention.service";
import { SessionService, BusinessService } from "@portal/core/services";
import { RetentionRequest } from "../../../../../models/request/retention-request.interface";
import { EventService } from "projects/core/src/lib/services/event.service";
import { UserRolEnum } from "@portal/core/constants";
import { Router } from "@angular/router";

@Component({
  selector: "app-retention-gz",
  templateUrl: "./retention-gz.component.html",
  styleUrls: ["./retention-gz.component.scss"]
})
export class RetentionGzComponent implements OnInit {
  isGZ: boolean;
  sectionSel: string;
  data: IRetention;
  dataUISale: IRetentionSaleUI;
  dataUIBilling: IRetentionBillingUI;
  arrayCampaign: Array<string>;
  campaignUser: ICampaign;
  size: string;
  title: string;
  color: string;

  role: string;
  sale: boolean;
  roadBright: boolean;
  dop: boolean;
  others: boolean;
  cars: any[];

  constructor(
    private retentionService: RetentionService,
    private sessionService: SessionService,
    private eventService: EventService,
    private businessService: BusinessService,
    private router: Router
  ) {
    this.cars = ["uno"];
    this.isGZ = true;
  }

  ngOnInit() {
    this.campaignUser = this.sessionService.getCampaign();
    const campania = new CampaignModel(this.campaignUser);
    this.sale = this.isSale;
    this.title = "Ciclo de Nuevas";
    this.size = "xmd";
    this.color = "#000000";
    this.getData();
    this.eventService.changeSection.subscribe((sectionCode: string) => {
      console.log("sección seleccionada ", sectionCode);
      if (sectionCode) {
        this.isGZ = false;
        this.sectionSel = sectionCode;
      } else {
        this.isGZ = true;
        this.sectionSel = "";
      }
    });
  }

  get isSale() {
    return this.businessService.isSale;
  }

  getData() {
    const campaign = this.sessionService.getCampaign();
    const campaignModel = new CampaignModel(campaign);
    if (this.sale) {
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
    const array = [previous];
    const request = requestModel.getRetentionSERequest(
      profile,
      array,
      false,
      false,
      false
    );
    this.retentionService.getKpiRetention(request).subscribe(res => {
      this.data = res.KpisRetention[0];
      this.getDataUISale(this.data);
    });
  }

  getDataBilling(currentCampaign: string, previousCampaign: string) {
    const requestModel = new RetentionRequest();
    const profile = this.sessionService.getProfile();
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
      dataCurrent = res.KpisRetention.filter(
        x => x.campaign === currentCampaign
      )[0];
      dataPrevious = res.KpisRetention.filter(
        x => x.campaign === previousCampaign
      )[0];
      this.getDataUIBilling(dataCurrent, dataPrevious);
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
    this.router.navigateByUrl("/kpis/retention-gz");
  }
}
