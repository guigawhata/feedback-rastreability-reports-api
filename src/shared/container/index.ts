import { container } from 'tsyringe';

import './providers';

import ITraceabilitiesRepository from '@modules/traceabilities/repositories/ITraceabilitiesRepository';
import TraceabilitiesRepository from '@modules/traceabilities/infra/typeorm/repositories/TraceabilitiesRepository';

container.registerSingleton<ITraceabilitiesRepository>(
  'TraceabilitiesRepository',
  TraceabilitiesRepository,
);
