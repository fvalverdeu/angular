import { Component, OnInit } from "@angular/core";
import { IUnete } from "../../../../../models/response/unete-response.interface";
import { ICampaign } from "@portal/core/models";
import { SessionService } from "@portal/core/services";
import { UneteRequest } from "../../../../../models/request/unete-request.interface";
import { EventService } from "projects/core/src/lib/services/event.service";
import { UneteService } from "../../../../graphql/unete.service";
import { removeCharacter } from "@portal/core/utils";

@Component({
  selector: "app-unete-gz",
  templateUrl: "./unete-gz.component.html",
  styleUrls: ["./unete-gz.component.scss"]
})
export class UneteGzComponent implements OnInit {
  isGZ: boolean;
  sectionSel: string;
  data: boolean;
  dataUnete: IUnete;
  size: string;
  title: string;
  color: string;
  campaignUser: ICampaign;
  campaignCurr: string;
  campaignPrev: string;
  cars: any[];

  constructor(
    private sessionService: SessionService,
    private uneteService: UneteService,
    private eventService: EventService
  ) {
    this.data = false;
    this.isGZ = true;
    this.cars = ["uno"];
  }

  ngOnInit() {
    this.title = "Únete";
    this.size = "xmd";
    this.color = "#000000";
    this.getData("");
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

  getData(section: string) {
    const campaign = this.sessionService.getCampaign();
    this.campaignCurr = removeCharacter(campaign.current_campaign_short, "-");
    this.campaignPrev = removeCharacter(campaign.previous_campaign_short, "-");
    const requestModel = new UneteRequest();
    const profile = this.sessionService.getProfile();
    const request = requestModel.getUneteRequest(profile, false);
    this.uneteService.getKpiUnete(request).subscribe(res => {
      this.dataUnete = res.KpiUnete[0];
      if (this.dataUnete) {
        this.data = true;
      }
    });
  }
}
