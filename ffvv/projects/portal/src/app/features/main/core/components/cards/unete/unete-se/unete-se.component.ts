import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { IUnete } from "../../../../../models/response/unete-response.interface";
import { environment } from "projects/portal/src/environments/environment";
import { ICampaign } from "@portal/core/models";
import { SessionService } from "@portal/core/services";
import { UneteRequest } from "../../../../../models/request/unete-request.interface";
import { UneteTokenService } from "./../unete.service";
import { UneteService } from "../../../../graphql/unete.service";
import { removeCharacter } from "@portal/core/utils";

@Component({
  selector: "app-unete-se",
  templateUrl: "./unete-se.component.html",
  styleUrls: ["./unete-se.component.scss"]
})
export class UneteSeComponent implements OnInit, OnChanges {
  @Input() sectionCode: string;
  size: string;
  title: string;
  color: string;
  sale: boolean;
  cars: any[];
  data: boolean;
  dataUnete: IUnete;
  campaignUser: ICampaign;
  campaignCurr: string;
  campaignPrev: string;

  constructor(
    private sessionService: SessionService,
    private uneteService: UneteService,
    private uneteTokenService: UneteTokenService
  ) {
    this.data = false;
    this.cars = ["uno"];
  }

  ngOnInit() {
    this.title = "Únete";
    this.size = "xmd";
    this.color = "#000000";
    this.getData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.sectionCode.previousValue) {
      this.getData();
    }
  }

  getData() {
    const campaign = this.sessionService.getCampaign();
    this.campaignCurr = removeCharacter(campaign.current_campaign_short, "-");
    this.campaignPrev = removeCharacter(campaign.previous_campaign_short, "-");
    const requestModel = new UneteRequest();
    const profile = this.sessionService.getProfile();
    profile.section = this.sectionCode;
    const request = requestModel.getUneteRequest(profile, true);
    this.uneteService.getKpiUnete(request).subscribe(res => {
      this.dataUnete = res.KpiUnete.filter(
        x => x.section === this.sectionCode
      )[0];
      if (this.dataUnete) {
        this.data = true;
      }
    });
  }

  redirectUnete() {
    const profile = this.sessionService.getProfile();
    profile.cod_consultant =
      profile.cod_consultant === "" ? profile.cod_user : profile.cod_consultant;
    this.uneteTokenService.getToken(profile).subscribe(token => {
      window.location.href =
        environment.ENDPOINTS.UNETE_URL_EXTERNAL + token.accessToken;
    });
  }
}
