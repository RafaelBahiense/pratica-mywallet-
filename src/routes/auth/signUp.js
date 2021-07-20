import { Router } from "express";

import { signUp } from "../../controllers/auth/signUp";

const router = Router();

router.post("/sign-up", signUp);

export const SignUp = router;
