export interface MenuFooter {
  description: string
  creation_date: string
  update_date: string
  option_type: string
  role: string
  active: string
  sub_option: [SubOption]
}

export interface SubOption {
  description: string
  application: string
  role: string
}
