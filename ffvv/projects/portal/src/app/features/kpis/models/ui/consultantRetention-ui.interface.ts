export interface IConsultantRetentionUI {
  id: number;
  name: string;
  code: string;
  phone: string;
  code_segment_short: string;
  segment_description: string;
  pending_debt: number;
  sale_period: number;
  constancy: string;
  orderAmount: number;
  possibles_constancy: string;
  has_billed_order: boolean;
}
