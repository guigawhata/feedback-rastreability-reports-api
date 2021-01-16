import { getMongoRepository, MongoRepository, ObjectID } from 'typeorm';

import ITraceabilitiesRepository from '../../../repositories/ITraceabilitiesRepository';
import ICreateTraceabilityDTO from '../../../dtos/ICreateTraceabilityDTO';

import Traceability from '../entities/Traceability';

class TraceabilitiesRepository implements ITraceabilitiesRepository {
  private ormRepository: MongoRepository<Traceability>;

  constructor() {
    this.ormRepository = getMongoRepository(Traceability);
  }

  public async find(): Promise<Traceability[]> {
    const users = this.ormRepository.find();

    return users;
  }

  public async findById(id: string): Promise<Traceability | undefined> {
    const traceability = await this.ormRepository.findOne({
      id: new ObjectID(id),
    });

    return traceability;
  }

  public async findByGuideId(
    guide_id: number,
  ): Promise<Traceability | undefined> {
    const traceability = await this.ormRepository.findOne({
      where: {
        guide_id: { $eq: guide_id },
      },
    });

    return traceability;
  }

  public async create(data: ICreateTraceabilityDTO): Promise<Traceability> {
    const traceability = this.ormRepository.create(data);

    await this.ormRepository.save(traceability);

    return traceability;
  }

  public async save(traceability: Traceability): Promise<Traceability> {
    return this.ormRepository.save(traceability);
  }
}

export default TraceabilitiesRepository;
