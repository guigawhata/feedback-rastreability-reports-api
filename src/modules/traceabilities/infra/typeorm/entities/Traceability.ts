import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export default class Traceability {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  exit_guide_id: number;

  @Column()
  guide_id: number;

  @Column()
  lot_id: number;

  @Column()
  location_lot_id: number;

  @Column()
  image: string;

  @Column()
  warehouse: string;

  @Column()
  producer_name: string;

  @Column()
  cpf_cnpj: string;

  @Column()
  exit_guide_number: string;

  @Column()
  exit_guide_date: string;

  @Column()
  shipment_date: string;

  @Column()
  origin_residence: string;

  @Column()
  destiny_residence: string;

  @Column()
  lot: string;

  @Column()
  item_type: string;

  @Column()
  coffe_sieve: string;

  @Column()
  coffe_standard: string;

  @Column()
  coffe_drink: string;

  @Column()
  fiscal_type: string;

  @Column()
  culture: string;

  @Column()
  qtd_start_lot: number;

  @Column()
  vol_start_lot: number;

  @Column()
  weight_start_lot: number;

  @Column()
  invoice_lot: string;

  @Column()
  exit_qtd: number;

  @Column()
  exit_volume: number;

  @Column()
  exit_weight: number;

  @Column()
  classification_lot: string;

  @Column()
  certification_lot: string;

  @Column()
  lat: string;

  @Column()
  long: string;

  @Column()
  producer_history: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  updated_at?: Date;
}
