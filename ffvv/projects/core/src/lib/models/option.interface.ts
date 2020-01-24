export interface IOption {
  description: string;
  creation_date: string;
  update_date: string;
  option_type: string;
  role: string;
  option_code: string;
  url: string;
  active: boolean;
  sub_option: IOption[];
}

export interface ISubOption {
  description: string;
  application: string;
  role: string;
  url: string;
}
