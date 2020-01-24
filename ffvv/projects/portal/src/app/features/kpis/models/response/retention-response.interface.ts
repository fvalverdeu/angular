export interface IRetentionResponse {
  KpisRetention: IRetention[];
}
export interface IRetention {
  campaign: string;
  profile: string;
  region: string;
  zone: string;
  section: string;
  i1d1: number;
  i2d2: number;
  i3d3: number;
  i4d4: number;
  i5d5: number;
  i6d6: number;
}
