export interface IConfiguration {
  currency_symbol: string;
  phone_code: string;
  flag_pdv: boolean;
  zonePdV: IZonePdV[];
  level_code: ILevelPdV[];
}

export interface IZonePdV {
  code_region: string;
  code_zone: string;
  flag_pdv: boolean;
  flag_datareport: boolean;
}

export interface ILevelPdV {
  level_code: string;
  description: string;
  active: boolean;
}
