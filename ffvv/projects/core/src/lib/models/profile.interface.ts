import { formatTextData } from '../utils/helpers';

export interface IProfile {
  cod_user: string;
  cod_consultant: string;
  fullname: string;
  names: string;
  firstName: string;
  lastName: string;
  cod_country: string;
  country_name: string;
  cod_region: string;
  cod_zone: string;
  section: string;
  cod_role: string;
  role: string;
  identification_document: string;
  level: string;
  level_code: string;
  cub: string;
  landline: string;
  cellphoneNumber: string;
  email: string;
  latitude: string;
  longitude: string;
  cod_level: string;
  id_level: string;
  cod_territory: string;
}
export class ProfileModel implements IProfile {
  cod_user: string;
  cod_consultant: string;
  fullname: string;
  names: string;
  firstName: string;
  lastName: string;
  cod_country: string;
  country_name: string;
  cod_region: string;
  cod_zone: string;
  section: string;
  cod_role: string;
  role: string;
  identification_document: string;
  level: string;
  level_code: string;
  cub: string;
  landline: string;
  cellphoneNumber: string;
  email: string;
  latitude: string;
  longitude: string;
  cod_level: string;
  id_level: string;
  cod_territory: string;
  constructor(profile: IProfile) {
    this.names = formatTextData(profile.names);
    this.role = formatTextData(profile.role);
    this.level = formatTextData(profile.level);
    this.level_code = profile.level_code;
    this.cod_user = profile.cod_user;
    this.cod_consultant = profile.cod_consultant;
    this.fullname = profile.fullname;
    this.firstName = profile.firstName;
    this.lastName = profile.lastName;
    this.cod_country = profile.cod_country;
    this.country_name = profile.country_name;
    this.cod_region = profile.cod_region;
    this.cod_zone = profile.cod_zone;
    this.section = profile.section;
    this.cod_role = profile.cod_role;
    this.identification_document = profile.identification_document;
    this.cub = profile.cub;
    this.landline = profile.landline;
    this.cellphoneNumber = profile.cellphoneNumber;
    this.email = profile.email;
    this.latitude = profile.latitude;
    this.longitude = profile.longitude;
    this.cod_level = profile.cod_level;
    this.id_level = profile.id_level;
    this.cod_territory = profile.cod_territory;
  }
}

export interface IProfileUAResponse {
  ProfileByUA: IProfile;
}
