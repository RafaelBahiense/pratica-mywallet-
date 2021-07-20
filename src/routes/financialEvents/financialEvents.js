import { Router } from "express";

import { financialEventsController } from "../../controllers/financialEvents";

const router = Router();

router.post("/financial-events", financialEventsController.add);

router.get("/financial-events", financialEventsController.get);

router.get("/financial-events/sum", financialEventsController.sum);

export const FinancialEvents = router;
