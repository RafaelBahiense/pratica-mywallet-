import { Router } from "express";

import { SignUp } from "./auth/signUp.js";
import { SignIn } from "./auth/signIn.js";
import { FinancialEvents } from "./financialEvents/financialEvents.js";

const router = Router();

router.use("/", SignUp);
router.use("/", SignIn);
router.use("/", FinancialEvents);

export const MainRouter = router;
