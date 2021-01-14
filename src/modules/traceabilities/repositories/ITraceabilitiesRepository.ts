import Traceability from '../infra/typeorm/entities/Traceability';

import ICreateUserDTO from '../dtos/ICreateTraceabilityDTO';

export default interface IRastreabilitiesRepository {
  find(): Promise<Traceability[]>;
  findByLot(lot: string): Promise<Traceability | undefined>;
  findById(id: string): Promise<Traceability | undefined>;
  create(data: ICreateUserDTO): Promise<Traceability>;
  save(traceability: Traceability): Promise<Traceability>;
}
