export interface ICountry {
  id: number;
  country_code: string;
  name: string;
  currency_symbol: string;
  language_code: string;
  contact: string;
  closing_time: string;
  label_code: string;
  phone_code: string;
}

export interface IRegion {
  region_id: number;
  region_code: string;
  region_description: string;
  region_manager: string;
  manager_email: string;
}

export interface IZone {
  zone_id: number;
  zone_code: string;
  zone_name: string;
  zone_manager: string;
  manager_email: string;
}

export interface ISection {
  section_id: number;
  section_code: string;
  section_description: string;
  is_suitable: boolean;
  is_covered: boolean;
  consultant_id: string;
  section_type: string;
}

export interface IAdmUnit {

}
