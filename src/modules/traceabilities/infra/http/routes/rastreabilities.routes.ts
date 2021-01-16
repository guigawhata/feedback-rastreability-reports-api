import { Router } from 'express';

import TraceabilitiesController from '../controllers/TraceabilitiesController';

const traceabilitiesRouter = Router();

const traceabilitiesController = new TraceabilitiesController();
traceabilitiesRouter.post('/', traceabilitiesController.create);

export default traceabilitiesRouter;
