export interface IUnete {
  current_campaign: string;
  zone: string;
  section: string;
  name: string;
  in_evaluation: number;
  preapproved: number;
  approved: number;
  rejected: number;
  conversion: number;
  days_on_hold: number;
  anticipated_income: number;
  pre_registered: number;
}

export interface IUneteResponse {
  KpiUnete: IUnete[];
}
