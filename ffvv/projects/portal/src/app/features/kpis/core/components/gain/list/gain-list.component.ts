import {Component, OnInit, ViewChild} from '@angular/core';
import {ConsultantService, OrdersAmountService} from '@portal/core/graphql';
import {IConsultantRequest} from '../../../../models/request/consultant-request.interface';
import {BusinessService, SessionService} from '@portal/core/services';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Paginator} from 'primeng/paginator';
import {IOrdersAmountRequest, IProfile} from '@portal/core/models';
import {IConsultantUI} from '../../../../models/ui/consultant-ui.interface';
import {capitalizeWords} from '@portal/core/utils';

@Component({
  selector: 'app-gain-list',
  templateUrl: './gain-list.component.html',
  styleUrls: ['./gain-list.component.scss']
})
export class GainListComponent implements OnInit {
  @ViewChild('p', { static: false }) paginator: Paginator;
  rows: number;
  totalRecords: number;
  pageLinkSize: number;
  filteredConsultants: IConsultantUI[];
  segmentsData = [];
  filterForm: FormGroup;
  currentPage: number;
  totalPages: number;
  private consultantData: IConsultantUI[];
  private readonly userProfile: IProfile;
  currency: string;

  constructor(
    private sessionService: SessionService,
    private consultantService: ConsultantService,
    private ordersAmountService: OrdersAmountService,
    private businessService: BusinessService,
    private formBuilder: FormBuilder
  ) {
    this.filterForm = this.formBuilder.group({
      segments: new FormArray([]),
      nameSearch: ''
    });
    this.currentPage = 0;
    this.totalPages = 0;
    this.userProfile = this.sessionService.getProfile();
    const configuration = this.sessionService.getConfiguration();
    this.currency = configuration.currency_symbol;
  }

  get isSale() {
    return this.businessService.isSale;
  }

  get segments(): FormArray {
    return this.filterForm.get('segments') as FormArray;
  }

  ngOnInit() {
    this.rows = 15;
    this.totalRecords = 0;
    this.pageLinkSize = 5;
    this.getConsultants();
  }
  private getConsultants() {
    const request: IConsultantRequest = {
      country: this.userProfile.cod_country,
      region: this.userProfile.cod_region,
      zone: this.userProfile.cod_zone,
      section: this.userProfile.section
      // country: 'CO',
      // region: '22',
      // zone: '2227',
      // section: ''
    };
    this.consultantService.getConsultants(request).subscribe(
      res => {
        console.log(res);
        if (res.Consultants.length > 0) {
          this.consultantData = res.Consultants.map<IConsultantUI>(x => {
            return {
              id: x.id,
              name: capitalizeWords(x.name),
              code: x.code,
              phone: x.phone,
              code_segment_short: x.code_segment_short,
              segment_description: x.segment_description,
              pending_debt: x.pending_debt,
              sale_period: x.pending_debt,
              constancy: x.constancy,
              orderAmount: 0
            };
          });
          this.filteredConsultants = this.consultantData.slice(0, this.rows);
          this.totalRecords = res.Consultants.length;
          this.currentPage = this.totalRecords > 0 ? 1 : 0;
          this.totalPages = 1;
          if (this.totalRecords > this.rows) {
            const quotient = this.totalRecords / this.rows;
            const remainder = this.totalRecords % this.rows;
            this.totalPages = Math.floor(quotient) + (remainder > 0 ? 1 : 0);
          }
          this.getSegments(this.consultantData);
          this.addCheckboxes();
          this.getOrdersAmount();
        }
      }
    );
  }
  private getSegments(data: IConsultantUI[]) {
    this.segmentsData = Array.from(new Set(data.map(x => parseInt(x.code_segment_short, 10))))
      .map(id => {
        return {
          id,
          name: data.find(x => parseInt(x.code_segment_short, 10) === id).segment_description,
          count: data.filter(x => parseInt(x.code_segment_short, 10) === id).length
        };
      })
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
  }
  private addCheckboxes() {
    this.segmentsData.forEach((o, i) => {
      const control = new FormControl(false);
      (this.filterForm.controls.segments as FormArray).push(control);
    });
  }
  private clearCheckboxes() {
    (this.filterForm.controls.segments as FormArray) = new FormArray([]);
  }
  private getOrdersAmount() {
    const userCampaign = this.sessionService.getCampaign();
    const request: IOrdersAmountRequest = {
      country: this.userProfile.cod_country,
      campaign: userCampaign.previous_campaign,
      region: this.userProfile.cod_region,
      zone: this.userProfile.cod_zone,
      section: this.userProfile.section
    };
    this.ordersAmountService.getOrdersAmount(request).subscribe(res => {
      console.log(res.OrdersAmount);
      const ordersAmount = res.OrdersAmount;
      this.consultantData.forEach((item: IConsultantUI) => {
        const consultantOrder = ordersAmount.find(o => o.consultantId === item.id);
        item.orderAmount = consultantOrder ? consultantOrder.amount : 0;
      });
    });
  }
  private search(): IConsultantUI[] {
    const nameSearch = (this.filterForm.value.nameSearch).toUpperCase();
    const selectedIds = this.filterForm.controls.segments.value // this.filterForm.value.segments
      .map((v, i) => v ? this.segmentsData[i].id : null)
      .filter(v => v !== null);
    let filtered = this.consultantData;
    if (selectedIds.length > 0) {
      filtered = filtered.filter(x => selectedIds.includes(parseInt(x.code_segment_short, 10)));
    }
    if (nameSearch) {
      filtered = filtered.filter(x => x.name.toUpperCase().includes(nameSearch));
    }
    return filtered;
  }
  filter(event, option: number) {
    const filtered = this.search();
    if (filtered && filtered.length > 0) {
      this.filteredConsultants = filtered.slice(0, this.rows);
      this.totalRecords = filtered.length;
      this.currentPage = this.totalRecords > 0 ? 1 : 0;
      this.totalPages = 1;
      if (this.totalRecords > this.rows) {
        const quotient = this.totalRecords / this.rows;
        const remainder = this.totalRecords % this.rows;
        this.totalPages =  Math.floor(quotient) + (remainder > 0 ? 1 : 0);
      }
      if (this.paginator) { this.paginator.changePageToFirst(event); }
      if (option === 2) {
        this.getSegments(filtered);
        this.clearCheckboxes();
        this.addCheckboxes();
      }
    } else {
      this.filteredConsultants = [];
      this.totalRecords = 0;
      this.currentPage = 0;
      this.totalPages = 0;
      this.clearCheckboxes();
    }
  }
  paginate(event) {
    const filtered = this.search();
    this.filteredConsultants = filtered.slice(event.first, (event.first + event.rows));
    this.totalRecords = filtered.length;
    this.currentPage = event.page + 1;
    this.totalPages = event.pageCount;
  }
}
