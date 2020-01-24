export interface IRetention {
  campaign: string;
  profile: string;
  region: string;
  zone: string;
  section: string;
  i1d1: string;
  i2d2: string;
  i3d3: string;
  i4d4: string;
  i5d5: string;
  i6d6: string;
}

export interface IRetentionResponse {
  KpisRetention: IRetention[];
}
