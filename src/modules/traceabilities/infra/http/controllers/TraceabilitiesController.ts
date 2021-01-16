import { Request, Response } from 'express';

import { container } from 'tsyringe';

import uploadConfig from '@config/upload';

import CreateTraceabilityService from '../../../services/CreateTraceabilityService';

export default class TraceabilitiesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
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
    } = request.body;

    const filename = await uploadConfig.bytesToImage(image);

    const createTraceability = container.resolve(CreateTraceabilityService);

    const traceability = await createTraceability.execute({
      exit_guide_id,
      guide_id,
      lot_id,
      location_lot_id,
      image: filename,
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

    return response.json(traceability);
  }
}
