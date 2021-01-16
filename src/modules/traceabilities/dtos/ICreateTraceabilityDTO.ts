export default interface ICreateTraceabilityDTO {
  exit_guide_id: number;
  guide_id: number;
  lot_id: number;
  location_lot_id: number;
  image: string;
  warehouse: string;
  producer_name: string;
  cpf_cnpj: string;
  exit_guide_number: string;
  exit_guide_date: string;
  shipment_date: string;
  origin_residence: string;
  destiny_residence: string;
  lot: string;
  item_type: string;
  coffe_sieve: string;
  coffe_standard: string;
  coffe_drink: string;
  fiscal_type: string;
  culture: string;
  qtd_start_lot: number;
  vol_start_lot: number;
  weight_start_lot: number;
  invoice_lot: string;
  exit_qtd: number;
  exit_volume: number;
  exit_weight: number;
  classification_lot: string;
  certification_lot: string;
  lat: string;
  long: string;
  producer_history: string;
}
