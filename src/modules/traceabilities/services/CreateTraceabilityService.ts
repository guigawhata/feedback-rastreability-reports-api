import { injectable, inject } from 'tsyringe';

// import AppError from '@shared/errors/AppError';
import Traceability from '../infra/typeorm/entities/Traceability';

import ITraceabilitiesRepository from '../repositories/ITraceabilitiesRepository';

interface IRequest {
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

@injectable()
class CreateTraceabilityService {
  constructor(
    @inject('TraceabilitiesRepository')
    private traceabilitiesRepository: ITraceabilitiesRepository,
  ) {}

  public async execute({
    exit_guide_id,
    guide_id,
    lot_id,
    location_lot_id,
    image,
    warehouse,
    producer_name,
    cpf_cnpj,
    exit_guide_number,
    exit_guide_date,
    shipment_date,
    origin_residence,
    destiny_residence,
    lot,
    item_type,
    coffe_sieve,
    coffe_standard,
    coffe_drink,
    fiscal_type,
    culture,
    qtd_start_lot,
    vol_start_lot,
    weight_start_lot,
    invoice_lot,
    exit_qtd,
    exit_volume,
    exit_weight,
    classification_lot,
    certification_lot,
    lat,
    long,
    producer_history,
  }: IRequest): Promise<Traceability> {
    // const traceabilityFilePath = path.join(uploadConfig.tmpFolder, filename);

    // const traceabilityFileExists = await fs.promises.stat(traceabilityFilePath);
    const traceability = await this.traceabilitiesRepository.create({
      exit_guide_id,
      guide_id,
      lot_id,
      location_lot_id,
      image,
      warehouse,
      producer_name,
      cpf_cnpj,
      exit_guide_number,
      exit_guide_date,
      shipment_date,
      origin_residence,
      destiny_residence,
      lot,
      item_type,
      coffe_sieve,
      coffe_standard,
      coffe_drink,
      fiscal_type,
      culture,
      qtd_start_lot,
      vol_start_lot,
      weight_start_lot,
      invoice_lot,
      exit_qtd,
      exit_volume,
      exit_weight,
      classification_lot,
      certification_lot,
      lat,
      long,
      producer_history,
    });

    return traceability;
  }
}

export default CreateTraceabilityService;
